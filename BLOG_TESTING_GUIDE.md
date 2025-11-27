# Blog System Testing & Integration Guide

## Quick Start

### 1. Start Backend Server
```powershell
cd backend
python manage.py runserver
```

### 2. Start Frontend Server
```powershell
cd frontend
npm run dev
```

### 3. Access Blog
- Frontend: http://localhost:3000/blog
- Backend Admin: http://localhost:8000/admin/blog/

## Pre-Flight Checklist

### Backend Verification
- [ ] Django server running on port 8000
- [ ] Blog app migrations applied
- [ ] At least 5 sample blog posts created
- [ ] At least 2 categories created
- [ ] CORS headers configured for localhost:3000
- [ ] Media files serving correctly

### Frontend Verification
- [ ] Next.js dev server running on port 3000
- [ ] Environment variables configured (.env.local)
- [ ] Dependencies installed (npm install)
- [ ] API_URL pointing to backend

## Step-by-Step Testing

### Test 1: Blog Listing Page

**URL**: http://localhost:3000/blog

**Expected Behavior**:
1. Page loads with SSR (check view source for meta tags)
2. Featured posts section appears if featured posts exist
3. Post grid displays with images
4. Category filter buttons show all categories
5. Search input is functional
6. Pagination controls visible if more than 12 posts

**Manual Test**:
```powershell
# Open browser and navigate
start http://localhost:3000/blog

# View page source (Ctrl+U) and verify:
# - <meta name="description" content="...">
# - <meta property="og:title" content="...">
# - Blog posts rendered in HTML (not client-side only)
```

**Expected Meta Tags**:
```html
<title>Our Blog | ExeyeZone</title>
<meta name="description" content="Explore our latest articles...">
<meta property="og:title" content="Our Blog | ExeyeZone">
<link rel="canonical" href="https://exeyezone.com/blog">
```

### Test 2: Category Filtering

**Actions**:
1. Click a category button
2. URL should update: `/blog?category=technology`
3. Posts should filter to category
4. Active category highlighted
5. "Clear Filters" button appears

**Test Script**:
```javascript
// In browser console
const categoryBtn = document.querySelector('.blog-filter-category[href*="category="]');
categoryBtn.click();

// Verify URL changed
console.log(window.location.search); // Should contain ?category=

// Verify filtered posts
console.log(document.querySelectorAll('.blog-card').length);
```

### Test 3: Search Functionality

**Actions**:
1. Type search query in input
2. Press Enter or click Search
3. URL updates: `/blog?search=python`
4. Results filtered by search term
5. Search term preserved in input

**Test Data**:
- Search: "python" (should find Python-related posts)
- Search: "django" (should find Django posts)
- Search: "xyz123" (should show no results message)

### Test 4: Pagination

**Actions**:
1. Navigate to page 2: `/blog?page=2`
2. Previous/Next buttons work
3. Page numbers highlight current page
4. Filters persist across pages
5. Scroll to top on page change

**Test with Filters**:
```
/blog?category=technology&page=2
/blog?search=python&page=3
```

### Test 5: Blog Detail Page

**URL**: http://localhost:3000/blog/[any-post-slug]

**Expected Elements**:
- [ ] Post title displays
- [ ] Featured image shows
- [ ] Breadcrumb navigation works
- [ ] Category link navigates to filtered list
- [ ] Author info with avatar
- [ ] Publish date formatted correctly
- [ ] Reading time displayed
- [ ] View count shown
- [ ] Full content renders (HTML from CKEditor)
- [ ] Social share buttons functional
- [ ] Tags displayed
- [ ] Related posts section (if applicable)

**SEO Verification**:
```powershell
# View page source
start http://localhost:3000/blog/sample-post-slug

# Check for:
# - Dynamic title from post
# - Meta description from post
# - JSON-LD structured data
# - Open Graph image
```

**Expected Structured Data**:
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "datePublished": "2024-01-15",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  }
}
```

### Test 6: Responsive Design

**Breakpoints to Test**:
- 375px (Mobile)
- 768px (Tablet)
- 1024px (Desktop)
- 1440px (Large Desktop)

**Test Elements**:
- [ ] Blog grid columns adjust
- [ ] Navigation menu responsive
- [ ] Images scale properly
- [ ] Typography readable
- [ ] Buttons touch-friendly
- [ ] No horizontal scroll

**Test Script**:
```powershell
# Use browser DevTools (F12)
# Toggle device toolbar (Ctrl+Shift+M)
# Test viewports: 375px, 768px, 1024px
```

### Test 7: Performance

**Lighthouse Audit**:
```powershell
# Open Chrome DevTools (F12)
# Go to Lighthouse tab
# Run audit for:
# - Performance
# - Accessibility
# - Best Practices
# - SEO
```

**Target Scores**:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: 100

**Key Metrics**:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

### Test 8: SEO Validation

#### Google Rich Results Test
```
https://search.google.com/test/rich-results
```
Enter: `http://localhost:3000/blog/sample-post`

**Expected**:
- Article structured data detected
- Breadcrumb detected
- No errors or warnings

#### Facebook Debugger
```
https://developers.facebook.com/tools/debug/
```
Enter: `https://exeyezone.com/blog/sample-post`

**Expected**:
- og:title displays correctly
- og:description shows excerpt
- og:image loads (1200x630)
- No missing tags warnings

#### Twitter Card Validator
```
https://cards-dev.twitter.com/validator
```
Enter: `https://exeyezone.com/blog/sample-post`

**Expected**:
- Card preview displays
- Image shows correctly
- Title and description present

### Test 9: API Integration

**Test Individual Endpoints**:

```powershell
# Test getPosts
curl http://localhost:8000/api/blog/posts/

# Test getPostBySlug
curl http://localhost:8000/api/blog/posts/sample-post/

# Test getFeaturedPosts
curl http://localhost:8000/api/blog/posts/featured/

# Test getPostsByCategory
curl http://localhost:8000/api/blog/posts/by-category/technology/

# Test searchPosts
curl "http://localhost:8000/api/blog/posts/search/?q=python"

# Test getCategories
curl http://localhost:8000/api/blog/categories/

# Test getSitemapData
curl http://localhost:8000/api/blog/sitemap/
```

**Expected Response Format**:
```json
{
  "count": 25,
  "next": "http://localhost:8000/api/blog/posts/?page=2",
  "previous": null,
  "results": [
    {
      "id": "uuid",
      "title": "Post Title",
      "slug": "post-title",
      "excerpt": "Brief description...",
      "display_image": "http://localhost:8000/media/...",
      "category": {
        "id": "uuid",
        "name": "Technology",
        "slug": "technology"
      },
      "author_name": "John Doe",
      "publish_date": "2024-01-15",
      "reading_time": 5,
      "views_count": 100
    }
  ]
}
```

### Test 10: Error Handling

**404 Page**:
```
http://localhost:3000/blog/non-existent-slug
```
Expected: Next.js 404 page or custom not found

**Empty States**:
- No featured posts → Section hidden
- No search results → "No posts found" message
- No related posts → Section hidden
- Category with no posts → Empty message

**Network Errors**:
```javascript
// Simulate by stopping Django server
// Expected: Graceful error handling, not white screen
```

## Integration Checklist

### Backend Configuration

**settings.py**:
```python
INSTALLED_APPS = [
    'blog',  # ✓ Added
    'corsheaders',  # ✓ For frontend
    'rest_framework',  # ✓ For API
    'django_filters',  # ✓ For filtering
]

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',  # ✓ Frontend URL
]

MEDIA_URL = '/media/'  # ✓ For images
MEDIA_ROOT = BASE_DIR / 'media'  # ✓ Storage
```

**urls.py**:
```python
urlpatterns = [
    path('api/blog/', include('blog.urls')),  # ✓ Blog API
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, ...)  # ✓ Serve media
```

### Frontend Configuration

**next.config.mjs**:
```javascript
const nextConfig = {
  images: {
    domains: ['localhost', 'exeyezone.com'],  // ✓ API domains
  },
};
```

**.env.local**:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**utils/axios.js**:
```javascript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
```

## Common Issues & Solutions

### Issue 1: Images Not Loading

**Symptoms**: Broken image icons on cards

**Solutions**:
1. Check Django media serving:
   ```python
   # urls.py
   from django.conf.urls.static import static
   urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
   ```

2. Add domain to Next.js config:
   ```javascript
   // next.config.mjs
   images: {
     domains: ['localhost'],
   }
   ```

3. Verify image URLs from API:
   ```powershell
   curl http://localhost:8000/api/blog/posts/ | jq '.results[0].display_image'
   ```

### Issue 2: CORS Errors

**Symptoms**: Console errors about CORS policy

**Solution**:
```python
# backend/backend/settings.py
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
]

# Ensure middleware order:
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Must be before CommonMiddleware
    'django.middleware.common.CommonMiddleware',
    # ...
]
```

### Issue 3: 404 on Detail Pages

**Symptoms**: Blog detail pages return 404

**Debugging**:
```powershell
# Check if slug exists in backend
curl http://localhost:8000/api/blog/posts/your-slug/

# Verify route structure
# Should be: app/blog/[slug]/page.js
```

### Issue 4: Meta Tags Not Showing

**Symptoms**: No SEO tags in page source

**Solution**:
- Ensure using `generateMetadata` in page.js
- Check that you're viewing **page source** (Ctrl+U), not inspecting elements
- SSR must be working (not client-side only)
- Verify `export const dynamic = 'force-dynamic'`

### Issue 5: Pagination Broken

**Symptoms**: Clicking page numbers doesn't change content

**Debugging**:
```javascript
// Check URL updates
console.log(window.location.search);

// Check API call
console.log(await blogAPI.getPosts(2, 12));
```

**Common Fix**:
- Ensure `BlogPagination` uses `useRouter` from `next/navigation`
- Verify query params preserved: `buildUrl()` function

### Issue 6: Search Not Working

**Symptoms**: Search returns no results or errors

**Debugging**:
```powershell
# Test backend search directly
curl "http://localhost:8000/api/blog/posts/search/?q=test"

# Check frontend query params
# Should be: /blog?search=test
```

## Production Deployment

### Pre-Deployment Checklist

**Backend**:
- [ ] Set DEBUG = False
- [ ] Configure ALLOWED_HOSTS
- [ ] Set up production database (PostgreSQL)
- [ ] Configure static files (collectstatic)
- [ ] Set up media file storage (S3 or CDN)
- [ ] Enable HTTPS
- [ ] Configure CORS for production domain

**Frontend**:
- [ ] Update .env.production with production URLs
- [ ] Build production bundle: `npm run build`
- [ ] Test production build locally: `npm start`
- [ ] Verify all images load from production API
- [ ] Test SEO meta tags in production
- [ ] Run Lighthouse on production build

### Environment Variables (Production)

**.env.production**:
```env
NEXT_PUBLIC_API_URL=https://api.exeyezone.com
NEXT_PUBLIC_SITE_URL=https://exeyezone.com
```

### Post-Deployment Testing

1. **Sitemap Accessibility**:
   ```
   https://exeyezone.com/sitemap.xml
   ```

2. **Robots.txt**:
   ```
   https://exeyezone.com/robots.txt
   ```

3. **Blog Pages**:
   ```
   https://exeyezone.com/blog
   https://exeyezone.com/blog/sample-post
   ```

4. **Submit to Google**:
   - Add sitemap to Google Search Console
   - Request indexing for key pages

## Automated Testing (Future)

### Jest Tests (To Implement)
```javascript
// __tests__/blog.test.js
describe('Blog Listing', () => {
  it('renders posts from API', async () => {
    // Test implementation
  });
  
  it('filters by category', async () => {
    // Test implementation
  });
});
```

### Cypress E2E (To Implement)
```javascript
// cypress/e2e/blog.cy.js
describe('Blog Navigation', () => {
  it('navigates from listing to detail', () => {
    cy.visit('/blog');
    cy.get('.blog-card').first().click();
    cy.url().should('include', '/blog/');
  });
});
```

## Support & Troubleshooting

### Debug Mode

Enable verbose logging:
```javascript
// utils/api/blogApi.js
static async handleRequest(requestFn) {
  try {
    const response = await requestFn();
    console.log('API Response:', response.data);  // Add this
    return { success: true, data: response.data, error: null };
  } catch (error) {
    console.error('API Error:', error);  // Already present
    // ...
  }
}
```

### Health Check Endpoint

Test connectivity:
```powershell
curl http://localhost:8000/api/blog/posts/ -I
# Expected: HTTP/1.1 200 OK
```

### Clear Cache

If seeing stale data:
```powershell
# Clear Next.js cache
rm -rf frontend/.next

# Rebuild
npm run dev
```

## Success Criteria

✅ **All Tests Passing**:
- [ ] Blog listing loads and displays posts
- [ ] Category filtering works
- [ ] Search returns relevant results
- [ ] Pagination navigates correctly
- [ ] Detail pages load with full content
- [ ] SEO meta tags present
- [ ] Structured data validates
- [ ] Responsive design works
- [ ] Images load and optimize
- [ ] Performance scores > 90

✅ **Production Ready**:
- [ ] No console errors
- [ ] No CORS issues
- [ ] All links functional
- [ ] Forms submit correctly
- [ ] 404 pages handle gracefully
- [ ] Mobile experience smooth
- [ ] Lighthouse scores green

## Next Steps

After testing complete:
1. Create sample blog posts in Django admin
2. Add featured images to posts
3. Test all frontend pages
4. Optimize images for web
5. Run production build
6. Deploy to staging
7. Final QA testing
8. Deploy to production
9. Submit sitemap to Google
10. Monitor analytics

---

**Testing Contact**: Development Team
**Last Updated**: 2024
**Version**: 1.0.0
