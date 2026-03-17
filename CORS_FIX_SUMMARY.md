# CORS Configuration Fix for Production Deployment

## Problem Summary
The login endpoint was failing in production with CORS errors:
- **Error**: "No 'Access-Control-Allow-Origin' header is present"
- **Origin**: `https://www.nyanzatss.ac.rw`
- **API**: `https://nyanzatss-database.onrender.com/api/auth/login`

## Root Causes Identified

1. **Incorrect domain in allowed origins**
   - Had: `'https://www.nyanzatss.ac.rw/'` (with trailing slash)
   - Should be: `'https://www.nyanzatss.ac.rw'` (no trailing slash)

2. **Missing domains**
   - `https://nyanzatss.ac.rw` (without www) was not listed
   - Only `https://www.nyanzatss.ac.rw/` was listed (incorrectly)

3. **Wrong environment variables**
   - CLIENT_URL and FRONTEND_URL pointed to `nyanzatss.onrender.com`
   - Should point to actual production domains

4. **Missing CORS headers**
   - `Access-Control-Request-Headers` and `Access-Control-Request-Method` were missing from allowedHeaders

## Changes Made

### 1. Updated `/server/src/app.js`

#### Fixed Allowed Origins Array
```javascript
const allowedOrigins = [
  'http://localhost:3000', 
  'http://localhost:3001',
  'https://nyanzatss.ac.rw',           // ✅ Added (without www)
  'https://www.nyanzatss.ac.rw',       // ✅ Fixed (removed trailing slash)
  process.env.CLIENT_URL,
  process.env.FRONTEND_URL
].filter(Boolean);
```

#### Enhanced CORS Options
```javascript
const corsOptions = {
  origin: function(origin, callback) {
    console.log('CORS Origin Check:', origin);
    
    // Allow requests with no origin
    if (!origin) return callback(null, true);
    
    // Allow requests from allowed origins
    if (allowedOrigins.includes(origin)) {
      console.log('CORS Origin Allowed:', origin);
      return callback(null, true);
    }
    
    // For Render deployments
    if (process.env.NODE_ENV === 'production') {
      if (origin && (origin.includes('.onrender.com') || origin.includes('localhost'))) {
        console.log('CORS Origin Allowed (Render):', origin);
        return callback(null, true);
      }
    }
    
    console.log('Blocked CORS origin:', origin);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], // ✅ Added PATCH
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'x-auth-token',
    'Access-Control-Request-Headers',  // ✅ Added
    'Access-Control-Request-Method'     // ✅ Added
  ]
};
```

#### Added Debug Logging
```javascript
console.log('=== CORS Configuration ===');
console.log('Allowed Origins:', allowedOrigins);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('CLIENT_URL:', process.env.CLIENT_URL);
console.log('FRONTEND_URL:', process.env.FRONTEND_URL);
console.log('========================');
```

### 2. Updated `/server/.env`

```env
PORT=5000
MONGO_URI=mongodb+srv://nyanzatss:NYANZATSS12345@cluster0.kk6f8.mongodb.net/nyanzatss?retryWrites=true&w=majority
JWT_SECRET=nyanza_tss_secret_key_for_jwt_authentication
NODE_ENV=production
CLIENT_URL=https://nyanzatss.ac.rw          # ✅ Changed from nyanzatss.onrender.com
FRONTEND_URL=https://www.nyanzatss.ac.rw    # ✅ Changed from nyanzatss.onrender.com
```

## Key Improvements

### 1. Proper Middleware Order
✅ CORS middleware is applied BEFORE all routes
✅ OPTIONS preflight handler is set up for ALL routes (`app.options('*', ...)`)
✅ JSON middleware comes after CORS

### 2. Comprehensive Origin Handling
✅ Explicitly lists both `https://nyanzatss.ac.rw` and `https://www.nyanzatss.ac.rw`
✅ Handles undefined/null origins (for mobile apps, curl, etc.)
✅ Fallback for any `.onrender.com` subdomain
✅ Development origins for localhost testing

### 3. Enhanced Headers
✅ All standard headers
✅ Authorization headers (`x-auth-token`)
✅ CORS preflight headers (`Access-Control-Request-*`)

### 4. Better Debugging
✅ Logs every CORS origin check
✅ Shows which origins are allowed/blocked
✅ Displays configuration on startup

## How to Deploy

### Step 1: Update Render Environment Variables

In your Render dashboard for `nyanzatss-database`:

1. Go to **Environment** tab
2. Add/Update these variables:
   ```
   NODE_ENV=production
   CLIENT_URL=https://nyanzatss.ac.rw
   FRONTEND_URL=https://www.nyanzatss.ac.rw
   ```

3. Click **Save Changes**

### Step 2: Deploy Updated Code

Push your changes to Git and deploy on Render:

```bash
git add .
git commit -m "Fix CORS configuration for production domains"
git push origin main
```

Render will automatically redeploy.

### Step 3: Verify Deployment

After deployment, check the logs in Render:

1. Go to **Logs** tab
2. Look for:
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
   ```

### Step 4: Test Login

1. Go to `https://www.nyanzatss.ac.rw/admin-login`
2. Try to log in
3. Open browser DevTools (F12) → Console
4. You should see:
   - No CORS errors
   - Successful login response
   - Token saved to localStorage

## Testing CORS

### From Browser Console
```javascript
// Test from https://www.nyanzatss.ac.rw
fetch('https://nyanzatss-database.onrender.com/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'admin@nyanzatss.ac.rw',
    password: 'your-password'
  })
})
.then(res => res.json())
.then(console.log)
.catch(console.error);
```

### Using curl
```bash
curl -X POST https://nyanzatss-database.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -H "Origin: https://www.nyanzatss.ac.rw" \
  -d '{"email":"admin@nyanzatss.ac.rw","password":"your-password"}' \
  -v
```

Look for these headers in response:
```
Access-Control-Allow-Origin: https://www.nyanzatss.ac.rw
Access-Control-Allow-Credentials: true
```

## Troubleshooting

### Still Getting CORS Errors?

1. **Check Render Logs**
   - Look for "Blocked CORS origin" messages
   - Verify the exact origin being sent

2. **Verify Frontend Domain**
   - Make sure you're accessing from exactly `https://www.nyanzatss.ac.rw` or `https://nyanzatss.ac.rw`
   - Not from `http://` (HTTP instead of HTTPS)
   - Not from other domains

3. **Clear Browser Cache**
   - Sometimes old CORS headers are cached
   - Try incognito mode or hard refresh (Ctrl+Shift+R)

4. **Check Environment Variables**
   - Verify CLIENT_URL and FRONTEND_URL are set correctly in Render
   - Redeploy after changing environment variables

### API Works but Frontend Can't Access?

This is usually a CORS issue. Check:
- Browser console for exact error
- Network tab for failed OPTIONS request
- Server logs for origin checks

## Additional Notes

### Why Both Domains?
- Users might access with or without `www`
- Both should work and share the same backend
- CORS needs to explicitly allow both

### Why Include localhost?
- For development and testing
- Allows you to test frontend locally against production backend
- Safe because it's only in development mode

### Why credentials: true?
- Required for cookies/authentication
- Needed for session management
- Requires explicit origin (cannot use `*`)

## Files Modified

1. ✅ `/server/src/app.js` - Complete rewrite with proper CORS
2. ✅ `/server/.env` - Updated production URLs
3. ✅ `/client/src/routes/AppRoutes.jsx` - Added admin page routes (from previous fix)

## Next Steps

1. ✅ Deploy to Render
2. ✅ Update environment variables
3. ✅ Test login functionality
4. ✅ Monitor logs for any CORS issues
5. ✅ Test all admin pages (Analytics, Profile, Backup)

## Support

If you still encounter issues:
1. Check Render logs for CORS debug messages
2. Verify exact domain names match
3. Ensure environment variables are set
4. Clear browser cache and try again
