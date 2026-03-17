const fs = require('fs');
const path = require('path');

// Define all routes for your website
const routes = [
  // Public Routes
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/leaders', priority: '0.7', changefreq: 'monthly' },
  { path: '/programs', priority: '0.8', changefreq: 'weekly' },
  { path: '/co-curricular', priority: '0.7', changefreq: 'monthly' },
  { path: '/news', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  
  // Admin Routes (lower priority for SEO)
  { path: '/admin-login', priority: '0.3', changefreq: 'yearly' },
  { path: '/admin-dashboard', priority: '0.2', changefreq: 'yearly' },
  { path: '/admin-programs', priority: '0.2', changefreq: 'yearly' },
  { path: '/admin-news', priority: '0.2', changefreq: 'yearly' },
  { path: '/admin-leaders', priority: '0.2', changefreq: 'yearly' },
  { path: '/admin-messages', priority: '0.2', changefreq: 'yearly' },
  { path: '/admin-profile', priority: '0.2', changefreq: 'yearly' },
  { path: '/admin-analytics', priority: '0.2', changefreq: 'yearly' },
  { path: '/admin-backup', priority: '0.2', changefreq: 'yearly' }
];

// Your domain
const domain = 'https://www.nyanzatss.ac.rw';

// Generate sitemap XML
const generateSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${domain}${route.path}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
};

// Write sitemap to public folder
const publicPath = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicPath, 'sitemap.xml');

// Ensure public directory exists
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

// Generate and write sitemap
const sitemapXml = generateSitemap();
fs.writeFileSync(sitemapPath, sitemapXml);

console.log('✅ Sitemap generated successfully!');
console.log(`📍 Location: ${sitemapPath}`);
console.log(`🌐 Accessible at: ${domain}/sitemap.xml`);
console.log(`📊 Total URLs: ${routes.length}`);
