# Production Deployment Checklist for NYANZA TSS

## ✅ CORS Fix - VERIFIED WORKING

### Test Results (Local)
```
✅ https://www.nyanzatss.ac.rw → CORS headers present
✅ https://nyanzatss.ac.rw → CORS headers present  
✅ Access-Control-Allow-Origin: Correct domain returned
✅ Access-Control-Allow-Credentials: true
✅ OPTIONS preflight: Working correctly
```

---

## 📋 Pre-Deployment Checklist

### 1. Backend (Render)

#### Environment Variables
Go to Render Dashboard → nyanzatss-database → Environment

**Required Variables:**
```bash
NODE_ENV=production
CLIENT_URL=https://nyanzatss.ac.rw
FRONTEND_URL=https://www.nyanzatss.ac.rw
PORT=5000
MONGO_URI=mongodb+srv://nyanzatss:NYANZATSS12345@cluster0.kk6f8.mongodb.net/nyanzatss?retryWrites=true&w=majority
JWT_SECRET=nyanza_tss_secret_key_for_jwt_authentication
```

**Action:** Click "Save Changes" after adding/updating

#### Start Command
```bash
npm start
```

#### Build Command
```bash
echo "No build needed for backend"
```

### 2. Frontend (Your Hosting Provider)

#### Update API Configuration
Check `/client/src/services/api.js` or `.env` files:

**.env.production** (if exists):
```env
REACT_APP_API_URL=https://nyanzatss-database.onrender.com/api
```

**Or update in code:**
Make sure the API base URL points to: `https://nyanzatss-database.onrender.com/api`

#### Build for Production
```bash
cd client
npm run build
```

This creates optimized production files in `client/build/`

#### Deploy Build
Upload the contents of `client/build/` to your hosting provider.

---

## 🚀 Deployment Steps

### Step 1: Deploy Backend to Render

1. **Push code to Git**
   ```bash
   git add .
   git commit -m "Fix CORS configuration for production"
   git push origin main
   ```

2. **In Render Dashboard:**
   - Go to your web service: `nyanzatss-database`
   - Click "Manual Deploy" or wait for auto-deploy from Git
   - Monitor the logs during deployment

3. **Verify Environment Variables:**
   - Go to "Environment" tab
   - Confirm all variables are set correctly
   - Redeploy if you made changes

4. **Check Logs After Deploy:**
   Look for these success messages:
   ```
   === CORS Configuration ===
   Allowed Origins: [
     'http://localhost:3000',
     'http://localhost:3001',
     'https://nyanzatss.ac.rw',
     'https://www.nyanzatss.ac.rw',
     'https://nyanzatss.ac.rw',
     'https://www.nyanzatss.ac.rw'
   ]
   ========================
   Server running on port 5000
   MongoDB Connected: cluster0-shard-00-02.kk6f8.mongodb.net
   ```

### Step 2: Test Backend API Directly

**Test Login Endpoint:**
```bash
curl -X POST https://nyanzatss-database.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -H "Origin: https://www.nyanzatss.ac.rw" \
  -d '{"email":"admin@nyanzatss.ac.rw","password":"your-password"}' \
  -v
```

**Expected Response Headers:**
```
Access-Control-Allow-Origin: https://www.nyanzatss.ac.rw
Access-Control-Allow-Credentials: true
```

**Expected Response Body:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Step 3: Deploy Frontend

**If using Netlify/Vercel/Similar:**

1. Connect your Git repository
2. Set build command: `cd client && npm run build`
3. Set publish directory: `client/build`
4. Add environment variable:
   ```
   REACT_APP_API_URL=https://nyanzatss-database.onrender.com/api
   ```
5. Deploy

**If using traditional hosting:**

1. Build locally:
   ```bash
   cd client
   npm run build
   ```

2. Upload `client/build/` contents to your web server
3. Configure server to serve `index.html` for all routes (SPA routing)

### Step 4: Test Complete Flow

1. **Access Frontend:**
   - Go to `https://www.nyanzatss.ac.rw`
   - Open browser DevTools (F12) → Console

2. **Test Login:**
   - Navigate to `/admin-login`
   - Enter credentials
   - Submit form
   - Check console for errors

3. **Expected Behavior:**
   - ✅ No CORS errors in console
   - ✅ Login successful
   - ✅ Redirected to `/admin-dashboard`
   - ✅ Token saved in localStorage

4. **Test Other Admin Pages:**
   - `/admin-analytics` - Should load with data
   - `/admin-profile` - Should show profile
   - `/admin-backup` - Should list backups

---

## 🔍 Troubleshooting

### Issue: Still Getting CORS Errors

**Solution 1: Clear Browser Cache**
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Try incognito/private mode
- Clear site data completely

**Solution 2: Check Exact Domain Match**
- Frontend must be accessed from exactly:
  - `https://www.nyanzatss.ac.rw` OR
  - `https://nyanzatss.ac.rw`
- Not `http://` (must be HTTPS)
- Not any other domain

**Solution 3: Verify Render Logs**
- Look for: `Blocked CORS origin: [domain]`
- This shows what origin is being sent
- Adjust allowed origins if needed

### Issue: Login Works But Other Pages Fail

**Possible Causes:**
1. Token not being sent with requests
2. Token expired
3. Wrong API endpoints

**Debug Steps:**
1. Open DevTools → Network tab
2. Make a request to analytics/profile/backup
3. Check request headers for: `x-auth-token`
4. If missing, check localStorage for token
5. If present but failing, check token validity

### Issue: Cannot Access Render Backend

**Check:**
1. Is the service running? (Check Render dashboard)
2. Any errors in Render logs?
3. Is MongoDB connected successfully?
4. Firewall/security group allowing HTTPS?

**Test Directly:**
```bash
curl https://nyanzatss-database.onrender.com/api
```
Should return something like: `{"msg":"API is running"}` or 404 (which is fine)

---

## 📊 Monitoring & Maintenance

### Daily Checks
- [ ] Login functionality works
- [ ] All admin pages accessible
- [ ] No errors in browser console
- [ ] Render logs show no CORS blocks

### Weekly Checks
- [ ] Review Render logs for any issues
- [ ] Check MongoDB connection stability
- [ ] Verify backup functionality works
- [ ] Test profile updates

### Monthly Checks
- [ ] Update dependencies (`npm outdated`)
- [ ] Review security logs
- [ ] Check SSL certificate validity
- [ ] Test disaster recovery (restore from backup)

---

## 🎯 Success Criteria

Your deployment is successful when:

✅ **Login Page:**
- Can access `/admin-login` without errors
- Login form submits successfully
- Receives authentication token
- Redirects to dashboard

✅ **Admin Dashboard:**
- Accessible at `/admin-dashboard`
- Shows navigation menu
- All links work

✅ **Admin Analytics:**
- Loads at `/admin-analytics`
- Displays visitor statistics
- Shows traffic sources
- Lists top pages

✅ **Admin Profile:**
- Loads at `/admin-profile`
- Shows current profile data
- Can update information
- Saves changes successfully

✅ **Admin Backup:**
- Loads at `/admin-backup`
- Lists existing backups
- Can create new backup
- Can download backups
- Can delete backups (with confirmation)

---

## 📞 Support Resources

### Render Documentation
- [CORS Issues](https://render.com/docs/cors)
- [Environment Variables](https://render.com/docs/environment-variables)
- [Logs & Monitoring](https://render.com/docs/logs)

### MongoDB Atlas
- [Connection Strings](https://www.mongodb.com/docs/atlas/driver-connection/)
- [Network Access](https://www.mongodb.com/docs/atlas/network-access-control/)

### React/CORS
- [CORS MDN Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [React Router Deployment](https://reactrouter.com/docs/en/v6/start/tutorial#deployment)

---

## 🎉 Post-Deployment Verification

Once everything is deployed, test this complete user journey:

1. Visit `https://www.nyanzatss.ac.rw`
2. Navigate to Admin Login
3. Login with credentials
4. Visit Admin Dashboard
5. Check Analytics page ✅
6. Check Profile page ✅
7. Check Backup page ✅
8. Create a backup ✅
9. Update profile information ✅
10. Logout and login again ✅

If all steps work without CORS errors, **deployment is successful!** 🎊
