"""Quick script to verify blog data"""
from blog.models import BlogPost, BlogCategory, BlogSubCategory

print("=" * 50)
print("BLOG DATA VERIFICATION")
print("=" * 50)
print(f"Total Categories: {BlogCategory.objects.count()}")
print(f"Total SubCategories: {BlogSubCategory.objects.count()}")
print(f"Total Blog Posts: {BlogPost.objects.count()}")
print(f"Published Posts: {BlogPost.objects.filter(status='published').count()}")
print(f"Featured Posts: {BlogPost.objects.filter(is_featured=True).count()}")
print(f"Draft Posts: {BlogPost.objects.filter(status='draft').count()}")
print("=" * 50)

print("\nSample Posts:")
for post in BlogPost.objects.all()[:5]:
    print(f"  • {post.title[:60]}... ({post.category.name if post.category else 'No category'})")
    print(f"    Status: {post.status} | Featured: {post.is_featured} | Views: {post.views_count}")
    print(f"    Has Image: {bool(post.featured_image)} | Display Image Available: {bool(post.display_image)}")
    print()
