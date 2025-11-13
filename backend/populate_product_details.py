"""
Script to populate sample product data with detailed information
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import (
    Product, ProductCategory, Tag,
    ProductFeaturedImage, ProductFeature, 
    ProductScreenshot, ProductTechnology
)

def populate_sample_product():
    print("Creating sample product with detailed information...")
    
    # Get or create category
    category, _ = ProductCategory.objects.get_or_create(name="Web Application")
    
    # Get or create tags
    tag1, _ = Tag.objects.get_or_create(name="Django")
    tag2, _ = Tag.objects.get_or_create(name="React")
    tag3, _ = Tag.objects.get_or_create(name="Full Stack")
    
    # Create product
    product, created = Product.objects.get_or_create(
        title="E-Commerce Management System",
        defaults={
            'product_img': 'products/ecommerce.jpg',
            'short_description': 'A comprehensive e-commerce solution with modern features and responsive design.',
            'description': '''
            <h3>Complete E-Commerce Solution</h3>
            <p>Our E-Commerce Management System is a powerful and scalable solution designed to help businesses of all sizes establish and manage their online presence. Built with modern technologies, it offers a seamless shopping experience for customers while providing robust management tools for administrators.</p>
            
            <h4>Key Highlights:</h4>
            <ul>
                <li>User-friendly interface for both customers and administrators</li>
                <li>Secure payment gateway integration</li>
                <li>Real-time inventory management</li>
                <li>Advanced analytics and reporting</li>
                <li>Mobile-responsive design</li>
                <li>SEO optimized for better visibility</li>
            </ul>
            
            <h4>Perfect For:</h4>
            <p>Small to medium-sized businesses looking to expand their online presence, retailers wanting to digitize their operations, and entrepreneurs starting their e-commerce journey.</p>
            
            <h4>Support & Updates:</h4>
            <p>We provide lifetime updates and 6 months of free support. Our dedicated team is always ready to help you with any questions or customization needs.</p>
            ''',
            'category': category,
            'price': 299.99,
            'sales_count': 45,
            'rating': 4.8,
            'demo': 'https://example.com/demo',
        }
    )
    
    if created:
        product.tags.add(tag1, tag2, tag3)
        print(f"✓ Created product: {product.title}")
    else:
        print(f"✓ Product already exists: {product.title}")
    
    # Create features
    features = [
        {'name': 'Quick Installation', 'icon': '⚡', 'order': 1},
        {'name': 'Professional Support', 'icon': '🛟', 'order': 2},
        {'name': 'Online Documentation', 'icon': '📚', 'order': 3},
        {'name': 'Video Tutorials', 'icon': '🎥', 'order': 4},
        {'name': 'No Reload', 'icon': '🔄', 'order': 5},
        {'name': 'JWT Validated', 'icon': '🔐', 'order': 6},
        {'name': 'Creative Design', 'icon': '🎨', 'order': 7},
        {'name': 'Fully Responsive', 'icon': '📱', 'order': 8},
    ]
    
    for feature_data in features:
        ProductFeature.objects.get_or_create(
            product=product,
            name=feature_data['name'],
            defaults={
                'icon': feature_data['icon'],
                'order': feature_data['order']
            }
        )
    print(f"✓ Created {len(features)} features")
    
    # Create technologies
    technologies = [
        {'name': 'Python', 'icon': '🐍', 'order': 1},
        {'name': 'Django', 'icon': '🎯', 'order': 2},
        {'name': 'React', 'icon': '⚛️', 'order': 3},
        {'name': 'PostgreSQL', 'icon': '🐘', 'order': 4},
        {'name': 'Redis', 'icon': '🔴', 'order': 5},
        {'name': 'Docker', 'icon': '🐳', 'order': 6},
        {'name': 'AWS', 'icon': '☁️', 'order': 7},
        {'name': 'Stripe', 'icon': '💳', 'order': 8},
    ]
    
    for tech_data in technologies:
        ProductTechnology.objects.get_or_create(
            product=product,
            name=tech_data['name'],
            defaults={
                'icon': tech_data['icon'],
                'order': tech_data['order']
            }
        )
    print(f"✓ Created {len(technologies)} technologies")
    
    print("\n" + "="*60)
    print("Sample product data created successfully!")
    print("="*60)
    print("\nNote: You'll need to:")
    print("1. Upload featured images through the Django admin panel")
    print("2. Add product screenshots (mobile & desktop) through the admin")
    print("3. The demo data includes all the necessary structure")
    print("\nAccess Django admin at: http://localhost:8000/admin")

if __name__ == '__main__':
    populate_sample_product()
