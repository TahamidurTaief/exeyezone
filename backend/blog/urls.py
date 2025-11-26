from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogCategoryViewSet, BlogSubCategoryViewSet, BlogPostViewSet

# App namespace
app_name = 'blog'

# Create router for ViewSets
router = DefaultRouter()
router.register(r'categories', BlogCategoryViewSet, basename='category')
router.register(r'subcategories', BlogSubCategoryViewSet, basename='subcategory')
router.register(r'posts', BlogPostViewSet, basename='post')

urlpatterns = [
    # Include all router URLs
    path('', include(router.urls)),
]

"""
API Endpoints Overview:

Blog Categories:
- GET    /api/blog/categories/                  - List all categories
- GET    /api/blog/categories/{slug}/           - Get category details
- GET    /api/blog/categories/{slug}/posts/     - Get posts in category

Blog SubCategories:
- GET    /api/blog/subcategories/               - List all subcategories
- GET    /api/blog/subcategories/{slug}/        - Get subcategory details
- GET    /api/blog/subcategories/{slug}/posts/  - Get posts in subcategory

Blog Posts:
- GET    /api/blog/posts/                       - List all published posts (with filtering)
- GET    /api/blog/posts/{slug}/                - Get single post details
- POST   /api/blog/posts/                       - Create new post (admin)
- PUT    /api/blog/posts/{slug}/                - Update post (admin)
- PATCH  /api/blog/posts/{slug}/                - Partial update (admin)
- DELETE /api/blog/posts/{slug}/                - Delete post (admin)

Blog Posts - Custom Actions:
- GET    /api/blog/posts/featured/              - Get featured posts
- GET    /api/blog/posts/recent/                - Get recent posts
- GET    /api/blog/posts/popular/               - Get popular posts (by views)
- GET    /api/blog/posts/search/?q=query        - Search posts
- GET    /api/blog/posts/by_category/?category=slug  - Filter by category
- GET    /api/blog/posts/sitemap/               - Get sitemap data

Query Parameters for /api/blog/posts/:
- search={text}          - Search in title, excerpt, content
- category={slug}        - Filter by category slug
- subcategory={slug}     - Filter by subcategory slug
- is_featured={true|false} - Filter featured posts
- date_from={datetime}   - Filter from date
- date_to={datetime}     - Filter to date
- ordering={field}       - Sort by field (publish_date, views_count, title, etc.)
- page={number}          - Page number
- page_size={number}     - Items per page (default: 12, max: 100)

Examples:
- /api/blog/posts/?search=django&ordering=-publish_date
- /api/blog/posts/?category=technology&page=2
- /api/blog/posts/?is_featured=true
- /api/blog/posts/recent/?limit=5
- /api/blog/posts/search/?q=SEO+optimization
"""
