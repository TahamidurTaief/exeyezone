# Blog System - Frontend Integration

## Overview

Complete Next.js frontend integration for the Django blog backend with SSR, SEO optimization, and recap.codesupply.co-inspired design.

## Architecture

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Rendering**: Server-Side Rendering (SSR)
- **Styling**: CSS Modules with design system
- **Animation**: Framer Motion
- **API Client**: Axios
- **Image Optimization**: Next.js Image component

### File Structure
```
frontend/app/
├── blog/
│   ├── layout.js                    # Blog section layout with SEO
│   ├── page.js                      # Blog listing page (SSR)
│   ├── blog.css                     # Recap-inspired styling
│   ├── sitemap.js                   # Dynamic sitemap generation
│   └── [slug]/
│       ├── page.js                  # Blog detail page (SSR)
│       └── blog-detail.css          # Detail page styling
├── Components/
│   ├── BlogCard/
│   │   └── BlogCard.js              # Reusable blog card component
│   ├── BlogFilters/
│   │   └── BlogFilters.js           # Search and category filters
│   ├── BlogPagination/
│   │   └── BlogPagination.js        # Pagination controls
│   └── StructuredData/
│       └── StructuredData.js        # JSON-LD schema markup
└── utils/api/
    └── blogApi.js                   # Blog API integration class

```

## Features

### 1. Blog Listing Page (`/blog`)

**Features**:
- Server-Side Rendering for SEO
- Featured posts section (highlighted posts)
- Category filtering
- Search functionality
- Pagination with query params
- Responsive grid layout
- Skeleton loading states

**SEO**:
- Dynamic metadata generation
- Open Graph tags
- Twitter Card support
- Canonical URLs
- Robots meta tags

**API Integration**:
```javascript
// Fetch all posts with pagination
const posts = await blogAPI.getPosts(page, 12);

// Fetch featured posts
const featured = await blogAPI.getFeaturedPosts(3);

// Filter by category
const categoryPosts = await blogAPI.getPostsByCategory(slug, page, 12);

// Search posts
const searchResults = await blogAPI.searchPosts(query, page, 12);
```

### 2. Blog Detail Page (`/blog/[slug]`)

**Features**:
- Server-Side Rendering
- Full post content with rich formatting
- Author information with avatar
- Reading time calculation
- View count display
- Category breadcrumb navigation
- Social share buttons (Twitter, Facebook, LinkedIn)
- Related posts section
- Tags/keywords display
- Structured data (JSON-LD)

**SEO**:
- Dynamic metadata from post SEO fields
- Article schema markup (BlogPosting)
- Breadcrumb schema markup
- Canonical URL from backend
- Open Graph images
- Twitter Card metadata
- Robots meta control

**Content Support**:
- Headings (H1-H6)
- Paragraphs with lead text
- Lists (ordered/unordered)
- Blockquotes
- Code blocks (inline and pre)
- Images with captions
- Tables
- Horizontal rules
- Links

### 3. Components

#### BlogCard
Reusable card component for displaying blog posts.

**Props**:
```javascript
{
  post: {
    id: string,
    slug: string,
    title: string,
    excerpt: string,
    display_image: string,
    featured_image_alt: string,
    category: { name, slug },
    author_name: string,
    publish_date: string,
    reading_time: number,
    views_count: number
  },
  variant: 'featured' | 'regular'
}
```

**Features**:
- Framer Motion animations
- Next.js Image optimization
- Hover effects
- Responsive sizing
- Featured variant with larger display

#### BlogFilters
Search and category filtering component.

**Features**:
- Search input with form submission
- Category filter buttons
- Active state indication
- Clear filters functionality
- Client-side navigation with query params

#### BlogPagination
Pagination controls with smart page display.

**Features**:
- Page number buttons
- Previous/Next navigation
- Ellipsis for large page counts
- Query param preservation (category, search)
- Disabled states for boundary pages

#### StructuredData
JSON-LD schema markup generator.

**Schemas**:
- BlogPosting (article data)
- BreadcrumbList (navigation)

## API Integration

### BlogAPI Class
Located at `frontend/utils/api/blogApi.js`

**Methods**:
```javascript
// Get paginated posts
blogAPI.getPosts(page, pageSize)

// Get single post by slug
blogAPI.getPostBySlug(slug)

// Get featured posts
blogAPI.getFeaturedPosts(limit)

// Get recent posts
blogAPI.getRecentPosts(limit)

// Get popular posts
blogAPI.getPopularPosts(limit)

// Get posts by category
blogAPI.getPostsByCategory(categorySlug, page, pageSize)

// Search posts
blogAPI.searchPosts(query, page, pageSize)

// Get all categories
blogAPI.getCategories()

// Get sitemap data
blogAPI.getSitemapData()

// Increment post views
blogAPI.incrementViews(slug)
```

**Error Handling**:
All methods return a consistent response:
```javascript
{
  success: boolean,
  data: any,
  error: string | null
}
```

## Styling

### Design System
CSS variables for consistent theming:

```css
--primary: #0066ff
--primary-dark: #0052cc
--text-primary: #1a1a1a
--text-secondary: #666
--text-tertiary: #999
--background: #ffffff
--surface: #f9fafb
--border: #e5e7eb
```

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

### Typography Scale
- Hero: 2.75rem (44px)
- H1: 2.5rem (40px)
- H2: 2rem (32px)
- H3: 1.625rem (26px)
- H4: 1.375rem (22px)
- Body: 1.125rem (18px)
- Small: 0.875rem (14px)

### Animations
Framer Motion variants:
- Fade in on scroll
- Slide up on load
- Scale on hover
- Stagger children

## SEO Optimization

### Meta Tags
Each page generates:
- Title tag (dynamic)
- Meta description
- Meta keywords
- Author tag
- Canonical URL
- Robots directives

### Open Graph
- og:title
- og:description
- og:type (article)
- og:image (1200x630)
- og:published_time
- og:modified_time
- og:author

### Twitter Card
- twitter:card (summary_large_image)
- twitter:title
- twitter:description
- twitter:image

### Structured Data
- BlogPosting schema
- BreadcrumbList schema
- Author schema
- Publisher schema

### Sitemap
Dynamic generation at `/blog/sitemap.js`:
- All published posts
- Last modified dates
- Change frequency
- Priority values

## Performance

### Optimizations
1. **Image Optimization**
   - Next.js Image component
   - Lazy loading
   - WebP conversion
   - Responsive sizes

2. **Code Splitting**
   - Component-level splitting
   - Dynamic imports for heavy components

3. **Caching**
   - Revalidation (60 seconds)
   - Static generation option
   - API response caching

4. **Bundle Size**
   - Tree shaking
   - CSS purging
   - Module optimization

## Usage

### Development
```bash
cd frontend
npm run dev
```

Access blog:
- Listing: http://localhost:3000/blog
- Detail: http://localhost:3000/blog/[slug]

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://exeyezone.com/api
NEXT_PUBLIC_SITE_URL=https://exeyezone.com
```

## Testing

### Manual Testing Checklist
- [ ] SSR works (view page source)
- [ ] Meta tags present in HTML
- [ ] Images load and optimize
- [ ] Pagination works
- [ ] Filters apply correctly
- [ ] Search returns results
- [ ] Related posts display
- [ ] Social share links work
- [ ] Mobile responsive
- [ ] Animations smooth
- [ ] 404 handling
- [ ] Performance (Lighthouse)

### SEO Validation
- [ ] Check with Google Rich Results Test
- [ ] Validate structured data
- [ ] Test Open Graph with Facebook Debugger
- [ ] Verify Twitter Card preview
- [ ] Check sitemap.xml accessibility
- [ ] Validate robots.txt

## Future Enhancements

### Planned Features
1. **Comments System**
   - Integrate with backend comments API
   - Threaded discussions
   - Moderation tools

2. **Newsletter Subscription**
   - Inline subscription forms
   - Category-specific subscriptions

3. **Table of Contents**
   - Auto-generated from headings
   - Smooth scroll navigation
   - Progress indicator

4. **Reading Progress Bar**
   - Top-of-page indicator
   - Percentage display

5. **Dark Mode**
   - Theme toggle
   - System preference detection
   - Persistent storage

6. **Advanced Search**
   - Autocomplete
   - Filter by date
   - Sort options

7. **Bookmarking**
   - Save for later
   - Reading lists
   - User accounts integration

## Integration Notes

### Backend Dependencies
Requires Django blog app with endpoints:
- `GET /api/blog/posts/`
- `GET /api/blog/posts/:slug/`
- `GET /api/blog/posts/featured/`
- `GET /api/blog/posts/recent/`
- `GET /api/blog/posts/popular/`
- `GET /api/blog/posts/by-category/:slug/`
- `GET /api/blog/posts/search/`
- `GET /api/blog/categories/`
- `GET /api/blog/sitemap/`
- `POST /api/blog/posts/:slug/increment-views/`

### CORS Configuration
Ensure Django CORS headers allow:
```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://exeyezone.com",
]
```

## Support

### Common Issues

**1. Images not loading**
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Verify image paths from backend
- Add domain to `next.config.mjs` `images.domains`

**2. 404 on detail pages**
- Ensure slug matches backend
- Check dynamic route structure
- Verify API response

**3. SEO tags missing**
- Check `generateMetadata` function
- Verify SSR is working (view source)
- Ensure backend sends seo_meta

**4. Pagination not working**
- Check query params in URL
- Verify blogAPI.getPosts() pagination
- Test page count calculation

## Credits

Design inspired by: [recap.codesupply.co](https://recap.codesupply.co)

## License

Proprietary - ExeyeZone
