import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import (
    Product, ProductCategory, ProductFeaturedImage, ProductFeature,
    ProductScreenshot, ProductTechnology, Tag
)

def delete_all_products():
    """Delete all products and related data"""
    print("Deleting all products and related data...")
    
    # Delete all products (this will cascade delete related data)
    Product.objects.all().delete()
    print("✓ All products deleted")


def create_sample_products():
    """Create sample products with complete data"""
    
    # Get or create categories
    web_category, _ = ProductCategory.objects.get_or_create(name="Web Development")
    mobile_category, _ = ProductCategory.objects.get_or_create(name="Mobile Development")
    ai_category, _ = ProductCategory.objects.get_or_create(name="AI & Machine Learning")
    
    # Get or create tags
    tag_react, _ = Tag.objects.get_or_create(name="React")
    tag_nextjs, _ = Tag.objects.get_or_create(name="Next.js")
    tag_ecommerce, _ = Tag.objects.get_or_create(name="E-commerce")
    tag_flutter, _ = Tag.objects.get_or_create(name="Flutter")
    tag_dashboard, _ = Tag.objects.get_or_create(name="Dashboard")
    tag_ai, _ = Tag.objects.get_or_create(name="AI")
    tag_responsive, _ = Tag.objects.get_or_create(name="Responsive")
    tag_modern, _ = Tag.objects.get_or_create(name="Modern")
    tag_mobile, _ = Tag.objects.get_or_create(name="Mobile")
    
    products_data = [
        {
            'title': 'E-commerce Website Template',
            'slug': 'e-commerce-website-template',
            'category': web_category,
            'tags': [tag_react, tag_nextjs, tag_ecommerce, tag_responsive],
            'price': 149.99,
            'sales_count': 245,
            'rating': 4.8,
            'short_description': 'A complete e-commerce solution built with Next.js and React. Perfect for launching your online store with modern features and beautiful design.',
            'description': '''
<h2>Complete E-commerce Solution</h2>
<p>Our E-commerce Website Template is a comprehensive solution for building modern online stores. Built with the latest technologies including Next.js 14, React 18, and Tailwind CSS.</p>

<h3>What's Included:</h3>
<ul>
<li>Fully functional shopping cart system</li>
<li>Product catalog with filtering and search</li>
<li>User authentication and profiles</li>
<li>Payment gateway integration (Stripe, PayPal)</li>
<li>Admin dashboard for managing products</li>
<li>Order tracking and management</li>
<li>Responsive design for all devices</li>
<li>SEO optimized</li>
</ul>

<h3>Perfect For:</h3>
<p>Entrepreneurs, startups, and businesses looking to establish an online presence quickly with a professional e-commerce platform.</p>

<h3>Support & Documentation:</h3>
<p>Includes comprehensive documentation, video tutorials, and 6 months of free support.</p>
''',
            'demo': 'https://demo.exeyezone.com/ecommerce',
            'features': [
                {'name': 'Responsive Design', 'icon': '📱', 'order': 1},
                {'name': 'Shopping Cart', 'icon': '🛒', 'order': 2},
                {'name': 'Payment Gateway', 'icon': '💳', 'order': 3},
                {'name': 'Admin Dashboard', 'icon': '📊', 'order': 4},
                {'name': 'User Authentication', 'icon': '🔐', 'order': 5},
                {'name': 'Product Search', 'icon': '🔍', 'order': 6},
                {'name': 'Order Tracking', 'icon': '📦', 'order': 7},
                {'name': 'SEO Optimized', 'icon': '🚀', 'order': 8},
            ],
            'technologies': [
                {'name': 'Next.js', 'icon': '▲', 'order': 1},
                {'name': 'React', 'icon': '⚛️', 'order': 2},
                {'name': 'Tailwind CSS', 'icon': '🎨', 'order': 3},
                {'name': 'Node.js', 'icon': '🟢', 'order': 4},
                {'name': 'PostgreSQL', 'icon': '🐘', 'order': 5},
                {'name': 'Stripe', 'icon': '💰', 'order': 6},
                {'name': 'Redux', 'icon': '🔄', 'order': 7},
                {'name': 'TypeScript', 'icon': '📘', 'order': 8},
            ],
            'featured_images': 3,
            'mobile_screenshots': 4,
            'desktop_screenshots': 3,
        },
        {
            'title': 'Modern React Dashboard Template',
            'slug': 'modern-react-dashboard-template',
            'category': web_category,
            'tags': [tag_react, tag_dashboard, tag_modern, tag_responsive],
            'price': 99.99,
            'sales_count': 189,
            'rating': 4.9,
            'short_description': 'Professional admin dashboard template with dark mode, multiple layouts, and rich chart integrations. Built with React and Material-UI.',
            'description': '''
<h2>Professional Dashboard Solution</h2>
<p>A modern, feature-rich admin dashboard template built with React and Material-UI. Perfect for building admin panels, analytics platforms, and data visualization tools.</p>

<h3>Key Features:</h3>
<ul>
<li>Multiple dashboard layouts</li>
<li>Dark and light mode support</li>
<li>Rich chart and graph library</li>
<li>Data tables with sorting and filtering</li>
<li>User management system</li>
<li>Role-based access control</li>
<li>Notification system</li>
<li>Customizable widgets</li>
</ul>

<h3>Technologies Used:</h3>
<p>Built with React 18, Material-UI v5, Chart.js, and Redux Toolkit for state management.</p>
''',
            'demo': 'https://demo.exeyezone.com/dashboard',
            'features': [
                {'name': 'Dark Mode', 'icon': '🌙', 'order': 1},
                {'name': 'Charts & Graphs', 'icon': '📈', 'order': 2},
                {'name': 'Data Tables', 'icon': '📋', 'order': 3},
                {'name': 'User Management', 'icon': '👥', 'order': 4},
                {'name': 'Real-time Updates', 'icon': '⚡', 'order': 5},
                {'name': 'Multiple Layouts', 'icon': '🎨', 'order': 6},
                {'name': 'Responsive', 'icon': '📱', 'order': 7},
                {'name': 'Customizable', 'icon': '⚙️', 'order': 8},
            ],
            'technologies': [
                {'name': 'React', 'icon': '⚛️', 'order': 1},
                {'name': 'Material-UI', 'icon': '🎨', 'order': 2},
                {'name': 'Redux Toolkit', 'icon': '🔄', 'order': 3},
                {'name': 'Chart.js', 'icon': '📊', 'order': 4},
                {'name': 'TypeScript', 'icon': '📘', 'order': 5},
                {'name': 'Axios', 'icon': '🌐', 'order': 6},
                {'name': 'React Router', 'icon': '🗺️', 'order': 7},
            ],
            'featured_images': 3,
            'mobile_screenshots': 3,
            'desktop_screenshots': 4,
        },
        {
            'title': 'Mobile App UI Kit - Flutter',
            'slug': 'mobile-app-ui-kit-flutter',
            'category': mobile_category,
            'tags': [tag_flutter, tag_mobile, tag_modern],
            'price': 79.99,
            'sales_count': 156,
            'rating': 4.7,
            'short_description': 'Comprehensive Flutter UI kit with 50+ pre-built screens and components. Perfect for rapid mobile app development.',
            'description': '''
<h2>Complete Flutter UI Kit</h2>
<p>A comprehensive UI kit with over 50 pre-designed screens and 100+ widgets for building beautiful Flutter applications quickly.</p>

<h3>What's Included:</h3>
<ul>
<li>50+ pre-built screens</li>
<li>100+ customizable widgets</li>
<li>Multiple app templates</li>
<li>Dark and light themes</li>
<li>Animation examples</li>
<li>Navigation patterns</li>
<li>Form components</li>
<li>Complete documentation</li>
</ul>

<h3>Screen Categories:</h3>
<p>Authentication, Onboarding, Dashboard, Profile, Settings, E-commerce, Social Media, Chat, and more.</p>
''',
            'demo': 'https://demo.exeyezone.com/flutter-ui',
            'features': [
                {'name': '50+ Screens', 'icon': '📱', 'order': 1},
                {'name': '100+ Widgets', 'icon': '🎨', 'order': 2},
                {'name': 'Dark Mode', 'icon': '🌙', 'order': 3},
                {'name': 'Animations', 'icon': '✨', 'order': 4},
                {'name': 'Custom Themes', 'icon': '🎭', 'order': 5},
                {'name': 'Easy Integration', 'icon': '🔧', 'order': 6},
                {'name': 'Documentation', 'icon': '📚', 'order': 7},
                {'name': 'Regular Updates', 'icon': '🔄', 'order': 8},
            ],
            'technologies': [
                {'name': 'Flutter', 'icon': '🦋', 'order': 1},
                {'name': 'Dart', 'icon': '🎯', 'order': 2},
                {'name': 'Provider', 'icon': '🔄', 'order': 3},
                {'name': 'Firebase', 'icon': '🔥', 'order': 4},
                {'name': 'REST API', 'icon': '🌐', 'order': 5},
            ],
            'featured_images': 3,
            'mobile_screenshots': 6,
            'desktop_screenshots': 0,
        },
        {
            'title': 'AI Dashboard - Machine Learning Analytics',
            'slug': 'ai-dashboard-machine-learning-analytics',
            'category': ai_category,
            'tags': [tag_ai, tag_dashboard, tag_react],
            'price': 199.99,
            'sales_count': 89,
            'rating': 4.9,
            'short_description': 'Advanced AI analytics dashboard with ML model visualization, real-time predictions, and comprehensive data analysis tools.',
            'description': '''
<h2>AI-Powered Analytics Platform</h2>
<p>A cutting-edge dashboard designed for AI and machine learning projects. Visualize models, track performance, and make data-driven decisions.</p>

<h3>Features:</h3>
<ul>
<li>ML model visualization</li>
<li>Real-time prediction interface</li>
<li>Training metrics dashboard</li>
<li>Data preprocessing tools</li>
<li>Model comparison views</li>
<li>Performance analytics</li>
<li>Export and reporting</li>
<li>API integration ready</li>
</ul>

<h3>Ideal For:</h3>
<p>Data scientists, ML engineers, and AI researchers who need a professional interface for their machine learning projects.</p>
''',
            'demo': 'https://demo.exeyezone.com/ai-dashboard',
            'features': [
                {'name': 'Model Visualization', 'icon': '🧠', 'order': 1},
                {'name': 'Real-time Predictions', 'icon': '⚡', 'order': 2},
                {'name': 'Training Metrics', 'icon': '📊', 'order': 3},
                {'name': 'Data Analysis', 'icon': '🔍', 'order': 4},
                {'name': 'API Integration', 'icon': '🔌', 'order': 5},
                {'name': 'Export Reports', 'icon': '📄', 'order': 6},
                {'name': 'Dark Mode', 'icon': '🌙', 'order': 7},
                {'name': 'Responsive', 'icon': '📱', 'order': 8},
            ],
            'technologies': [
                {'name': 'React', 'icon': '⚛️', 'order': 1},
                {'name': 'Python', 'icon': '🐍', 'order': 2},
                {'name': 'TensorFlow', 'icon': '🧮', 'order': 3},
                {'name': 'PyTorch', 'icon': '🔥', 'order': 4},
                {'name': 'D3.js', 'icon': '📈', 'order': 5},
                {'name': 'FastAPI', 'icon': '⚡', 'order': 6},
                {'name': 'PostgreSQL', 'icon': '🐘', 'order': 7},
            ],
            'featured_images': 3,
            'mobile_screenshots': 2,
            'desktop_screenshots': 5,
        },
        {
            'title': 'SaaS Landing Page Template',
            'slug': 'saas-landing-page-template',
            'category': web_category,
            'tags': [tag_nextjs, tag_responsive, tag_modern],
            'price': 59.99,
            'sales_count': 298,
            'rating': 4.8,
            'short_description': 'High-converting SaaS landing page template with modern animations, pricing tables, and lead capture forms.',
            'description': '''
<h2>Professional SaaS Landing Page</h2>
<p>A modern, high-converting landing page template designed specifically for SaaS products. Built with Next.js and optimized for conversions.</p>

<h3>Sections Included:</h3>
<ul>
<li>Hero section with CTA</li>
<li>Features showcase</li>
<li>Pricing tables</li>
<li>Testimonials slider</li>
<li>FAQ section</li>
<li>Newsletter signup</li>
<li>Contact form</li>
<li>Footer with links</li>
</ul>

<h3>Optimized For:</h3>
<p>Conversions, SEO, and fast loading times. Includes analytics integration and A/B testing ready.</p>
''',
            'demo': 'https://demo.exeyezone.com/saas-landing',
            'features': [
                {'name': 'Modern Design', 'icon': '🎨', 'order': 1},
                {'name': 'Fast Loading', 'icon': '⚡', 'order': 2},
                {'name': 'SEO Optimized', 'icon': '🚀', 'order': 3},
                {'name': 'Pricing Tables', 'icon': '💰', 'order': 4},
                {'name': 'Contact Forms', 'icon': '📧', 'order': 5},
                {'name': 'Animations', 'icon': '✨', 'order': 6},
                {'name': 'Responsive', 'icon': '📱', 'order': 7},
                {'name': 'Easy Customize', 'icon': '⚙️', 'order': 8},
            ],
            'technologies': [
                {'name': 'Next.js', 'icon': '▲', 'order': 1},
                {'name': 'React', 'icon': '⚛️', 'order': 2},
                {'name': 'Tailwind CSS', 'icon': '🎨', 'order': 3},
                {'name': 'Framer Motion', 'icon': '✨', 'order': 4},
                {'name': 'TypeScript', 'icon': '📘', 'order': 5},
            ],
            'featured_images': 3,
            'mobile_screenshots': 3,
            'desktop_screenshots': 3,
        },
    ]
    
    print("\nCreating products with complete data...")
    
    for product_data in products_data:
        # Create product
        product = Product.objects.create(
            title=product_data['title'],
            slug=product_data['slug'],
            category=product_data['category'],
            price=product_data['price'],
            sales_count=product_data['sales_count'],
            rating=product_data['rating'],
            short_description=product_data['short_description'],
            description=product_data['description'],
            demo=product_data.get('demo', ''),
        )
        
        # Add tags
        product.tags.set(product_data['tags'])
        
        # Create features
        for feature_data in product_data.get('features', []):
            ProductFeature.objects.create(
                product=product,
                name=feature_data['name'],
                icon=feature_data['icon'],
                order=feature_data['order']
            )
        
        # Create technologies
        for tech_data in product_data.get('technologies', []):
            ProductTechnology.objects.create(
                product=product,
                name=tech_data['name'],
                icon=tech_data['icon'],
                order=tech_data['order']
            )
        
        # Create placeholder featured images (you'll need to add actual images later)
        for i in range(product_data.get('featured_images', 3)):
            ProductFeaturedImage.objects.create(
                product=product,
                image=f'products/featured/placeholder_{i+1}.jpg',
                order=i+1
            )
        
        # Create placeholder mobile screenshots
        for i in range(product_data.get('mobile_screenshots', 3)):
            ProductScreenshot.objects.create(
                product=product,
                image=f'products/screenshots/mobile_{i+1}.jpg',
                screen_type='mobile',
                order=i+1
            )
        
        # Create placeholder desktop screenshots
        for i in range(product_data.get('desktop_screenshots', 3)):
            ProductScreenshot.objects.create(
                product=product,
                image=f'products/screenshots/desktop_{i+1}.jpg',
                screen_type='desktop',
                order=i+1
            )
        
        print(f"✓ Created: {product.title}")
        print(f"  - Features: {product.features.count()}")
        print(f"  - Technologies: {product.technologies.count()}")
        print(f"  - Featured Images: {product.featured_images.count()}")
        print(f"  - Screenshots: {product.screenshots.count()}")


if __name__ == '__main__':
    print("=" * 60)
    print("PRODUCT DATABASE RESET AND POPULATION")
    print("=" * 60)
    
    # Step 1: Delete all existing products
    delete_all_products()
    
    # Step 2: Create new products with complete data
    create_sample_products()
    
    print("\n" + "=" * 60)
    print("COMPLETED SUCCESSFULLY!")
    print("=" * 60)
    print("\nNOTE: Placeholder images have been used.")
    print("Please replace them with actual images in the media folder:")
    print("  - media/products/featured/")
    print("  - media/products/screenshots/")
