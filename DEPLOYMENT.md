# Deployment Guide for meghanavusirika.ca

## 🚀 Production Build

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Test the production build locally:**
   ```bash
   npm start
   ```

## 🌐 Domain Configuration

### DNS Settings
Point your domain `meghanavusirika.ca` to your hosting provider with these records:

**A Record:**
- Name: `@`
- Value: [Your hosting provider's IP]

**CNAME Record:**
- Name: `www`
- Value: `meghanavusirika.ca`

### SSL Certificate
Ensure your hosting provider provides an SSL certificate for `meghanavusirika.ca`

## 📁 Deployment Options

### Option 1: Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set custom domain: `meghanavusirika.ca`
3. Deploy automatically on push to main branch

### Option 2: Netlify
1. Connect your GitHub repository to Netlify
2. Set custom domain: `meghanavusirika.ca`
3. Deploy automatically on push to main branch

### Option 3: Traditional Hosting
1. Upload the `out` folder (after `npm run build`)
2. Configure your web server to serve the static files
3. Set up proper redirects for SPA routing

## 🔧 Environment Variables
No environment variables needed for this portfolio site.

## 📱 Performance Optimization
- Images are optimized with Next.js Image component
- CSS is minified and optimized
- JavaScript is bundled and minified
- Static assets are cached appropriately

## 🔍 SEO Features
- Meta tags optimized for social sharing
- Open Graph tags for LinkedIn/Facebook
- Twitter Card support
- Sitemap.xml included
- Robots.txt configured
- Canonical URLs set

## 🚨 Security Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- Permissions-Policy: restricted

## 📊 Analytics (Optional)
Consider adding Google Analytics or similar tracking:
1. Create a Google Analytics account
2. Add the tracking code to your layout.tsx
3. Track page views and user interactions

## ✅ Pre-Deployment Checklist
- [ ] All images are properly sized and optimized
- [ ] All links are working correctly
- [ ] Contact form is functional (if applicable)
- [ ] Social media links are correct
- [ ] Meta descriptions are compelling
- [ ] Performance is optimized
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility verified

## 🎯 Post-Deployment
1. Test all functionality on the live site
2. Verify SSL certificate is working
3. Check Google Search Console for indexing
4. Test social media sharing
5. Monitor performance with tools like PageSpeed Insights

## 🆘 Troubleshooting
- **Images not loading**: Check file paths and permissions
- **Styling issues**: Verify CSS is being served correctly
- **Routing problems**: Ensure proper redirects are configured
- **Performance issues**: Check image optimization and caching

Your portfolio is now ready for production deployment! 🎉
