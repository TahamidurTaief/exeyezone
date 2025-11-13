import os
import django
import random
from datetime import datetime, timedelta
from decimal import Decimal

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import (
    ProductCategory, ServiceCategory, CourseCategory, Tag,
    Product, Course, Service, ServiceImage, ServicePackage,
    TeamMember, Blog
)

def clear_data():
    """Clear existing data"""
    print("Clearing existing data...")
    Product.objects.all().delete()
    Course.objects.all().delete()
    Service.objects.all().delete()
    ServiceImage.objects.all().delete()
    ServicePackage.objects.all().delete()
    TeamMember.objects.all().delete()
    Blog.objects.all().delete()
    ProductCategory.objects.all().delete()
    ServiceCategory.objects.all().delete()
    CourseCategory.objects.all().delete()
    Tag.objects.all().delete()
    print("Data cleared successfully!")


def create_categories():
    """Create categories for products, services, and courses"""
    print("\nCreating categories...")
    
    # Product Categories (Digital Products)
    product_categories = [
        'Web Templates',
        'Mobile App Templates',
        'UI/UX Kits',
        'WordPress Themes',
        'E-commerce Solutions',
        'Admin Dashboards',
        'Landing Pages',
    ]
    
    for cat_name in product_categories:
        ProductCategory.objects.create(name=cat_name)
    
    # Service Categories (IT Services)
    service_categories = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'Cloud Solutions',
        'DevOps Services',
        'Data Analytics',
        'Digital Marketing',
        'Cybersecurity',
        'AI & Machine Learning',
        'Blockchain Development',
    ]
    
    for cat_name in service_categories:
        ServiceCategory.objects.create(name=cat_name)
    
    # Course Categories (CSE Education)
    course_categories_data = [
        {'name': 'Web Development', 'total_courses': 15, 'total_students': 1250, 'total_instructors': 8, 'total_reviews': 450, 'total_rating': 4.6},
        {'name': 'Data Science', 'total_courses': 12, 'total_students': 980, 'total_instructors': 6, 'total_reviews': 320, 'total_rating': 4.7},
        {'name': 'Mobile Development', 'total_courses': 10, 'total_students': 850, 'total_instructors': 5, 'total_reviews': 280, 'total_rating': 4.5},
        {'name': 'Machine Learning', 'total_courses': 8, 'total_students': 720, 'total_instructors': 4, 'total_reviews': 250, 'total_rating': 4.8},
        {'name': 'Cybersecurity', 'total_courses': 9, 'total_students': 680, 'total_instructors': 5, 'total_reviews': 240, 'total_rating': 4.6},
        {'name': 'Cloud Computing', 'total_courses': 11, 'total_students': 920, 'total_instructors': 6, 'total_reviews': 310, 'total_rating': 4.7},
        {'name': 'DevOps', 'total_courses': 7, 'total_students': 560, 'total_instructors': 4, 'total_reviews': 200, 'total_rating': 4.5},
        {'name': 'Blockchain', 'total_courses': 6, 'total_students': 450, 'total_instructors': 3, 'total_reviews': 150, 'total_rating': 4.4},
    ]
    
    for cat_data in course_categories_data:
        CourseCategory.objects.create(**cat_data)
    
    print(f"Created {len(product_categories)} product categories")
    print(f"Created {len(service_categories)} service categories")
    print(f"Created {len(course_categories_data)} course categories")


def create_tags():
    """Create tags for products and courses"""
    print("\nCreating tags...")
    
    tags = [
        'React', 'Vue.js', 'Angular', 'Next.js', 'Node.js',
        'Python', 'Django', 'Flask', 'FastAPI',
        'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind',
        'Bootstrap', 'Material UI', 'Responsive', 'Modern',
        'Machine Learning', 'Deep Learning', 'Neural Networks',
        'TensorFlow', 'PyTorch', 'Scikit-learn',
        'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes',
        'MongoDB', 'PostgreSQL', 'MySQL', 'Redis',
        'GraphQL', 'REST API', 'Microservices',
        'Flutter', 'React Native', 'iOS', 'Android',
        'Blockchain', 'Ethereum', 'Smart Contracts',
        'Cybersecurity', 'Penetration Testing', 'Ethical Hacking',
    ]
    
    for tag_name in tags:
        Tag.objects.create(name=tag_name)
    
    print(f"Created {len(tags)} tags")


def create_products():
    """Create digital products"""
    print("\nCreating products...")
    
    products_data = [
        {
            'title': 'Modern React Dashboard Template',
            'description': 'A fully responsive admin dashboard built with React, Tailwind CSS, and Chart.js. Includes dark mode, authentication pages, and 50+ components.',
            'category': 'Admin Dashboards',
            'price': Decimal('49.99'),
            'sales_count': 234,
            'rating': Decimal('4.8'),
            'tags': ['React', 'Tailwind', 'Responsive', 'Modern'],
        },
        {
            'title': 'E-commerce Website Template',
            'description': 'Complete e-commerce solution with shopping cart, payment integration, product catalog, and admin panel. Built with Next.js and Stripe.',
            'category': 'E-commerce Solutions',
            'price': Decimal('79.99'),
            'sales_count': 187,
            'rating': Decimal('4.9'),
            'tags': ['Next.js', 'E-commerce', 'Stripe', 'React'],
        },
        {
            'title': 'Mobile App UI Kit - Flutter',
            'description': 'Premium mobile app UI kit with 100+ screens for e-commerce, social media, and business apps. Fully customizable Flutter widgets.',
            'category': 'Mobile App Templates',
            'price': Decimal('39.99'),
            'sales_count': 312,
            'rating': Decimal('4.7'),
            'tags': ['Flutter', 'Mobile', 'UI/UX', 'Android', 'iOS'],
        },
        {
            'title': 'SaaS Landing Page Template',
            'description': 'Convert visitors into customers with this modern SaaS landing page. Includes pricing tables, testimonials, and CTA sections.',
            'category': 'Landing Pages',
            'price': Decimal('29.99'),
            'sales_count': 456,
            'rating': Decimal('4.6'),
            'tags': ['HTML5', 'CSS3', 'Bootstrap', 'Responsive'],
        },
        {
            'title': 'React Native Food Delivery App',
            'description': 'Complete food delivery app template with restaurant listings, cart management, order tracking, and payment integration.',
            'category': 'Mobile App Templates',
            'price': Decimal('89.99'),
            'sales_count': 145,
            'rating': Decimal('4.8'),
            'tags': ['React Native', 'Mobile', 'E-commerce'],
        },
        {
            'title': 'AI Dashboard - Machine Learning Analytics',
            'description': 'Advanced analytics dashboard for ML model monitoring, data visualization, and performance metrics. Built with Python and React.',
            'category': 'Admin Dashboards',
            'price': Decimal('99.99'),
            'sales_count': 98,
            'rating': Decimal('4.9'),
            'tags': ['React', 'Python', 'Machine Learning', 'Analytics'],
        },
        {
            'title': 'WordPress Blog Theme - Minimalist',
            'description': 'Clean and fast WordPress theme for bloggers and content creators. SEO optimized with multiple layout options.',
            'category': 'WordPress Themes',
            'price': Decimal('34.99'),
            'sales_count': 267,
            'rating': Decimal('4.5'),
            'tags': ['WordPress', 'Blog', 'SEO', 'Responsive'],
        },
        {
            'title': 'Crypto Trading Platform UI',
            'description': 'Professional cryptocurrency trading platform interface with real-time charts, order books, and wallet management.',
            'category': 'Web Templates',
            'price': Decimal('69.99'),
            'sales_count': 176,
            'rating': Decimal('4.7'),
            'tags': ['React', 'Blockchain', 'Crypto', 'Trading'],
        },
    ]
    
    for product_data in products_data:
        category = ProductCategory.objects.get(name=product_data['category'])
        tags = Tag.objects.filter(name__in=product_data['tags'])
        
        product = Product.objects.create(
            product_img='products/placeholder.jpg',
            title=product_data['title'],
            description=product_data['description'],
            category=category,
            price=product_data['price'],
            sales_count=product_data['sales_count'],
            rating=product_data['rating'],
            demo=f'https://demo.exeyezone.com/{product_data["title"].lower().replace(" ", "-")}',
        )
        product.tags.set(tags)
    
    print(f"Created {len(products_data)} products")


def create_courses():
    """Create CSE courses"""
    print("\nCreating courses...")
    
    courses_data = [
        {
            'title': 'Full Stack Web Development Bootcamp',
            'description': 'Learn full stack development from scratch. Master React, Node.js, Express, MongoDB, and deploy production-ready applications. Includes real-world projects and career guidance.',
            'category': 'Web Development',
            'course_type': 'Live',
            'price': Decimal('499.99'),
            'deadline': datetime.now() + timedelta(days=30),
            'tags': ['React', 'Node.js', 'MongoDB', 'Full Stack'],
        },
        {
            'title': 'Machine Learning A-Z: Hands-On Python',
            'description': 'Complete ML course covering supervised & unsupervised learning, neural networks, and deep learning. Build real ML models with Python, TensorFlow, and Scikit-learn.',
            'category': 'Machine Learning',
            'course_type': 'Recorded',
            'price': Decimal('399.99'),
            'deadline': datetime.now() + timedelta(days=90),
            'tags': ['Python', 'Machine Learning', 'TensorFlow', 'Deep Learning'],
        },
        {
            'title': 'Flutter & Dart - Complete Mobile App Development',
            'description': 'Build beautiful native mobile apps for iOS and Android with Flutter. Learn Dart programming, state management, Firebase integration, and publish to app stores.',
            'category': 'Mobile Development',
            'course_type': 'Live',
            'price': Decimal('349.99'),
            'deadline': datetime.now() + timedelta(days=45),
            'tags': ['Flutter', 'Mobile', 'iOS', 'Android'],
        },
        {
            'title': 'AWS Certified Solutions Architect',
            'description': 'Prepare for AWS certification while learning cloud architecture, EC2, S3, Lambda, RDS, and more. Includes practice exams and hands-on labs.',
            'category': 'Cloud Computing',
            'course_type': 'Recorded',
            'price': Decimal('279.99'),
            'deadline': datetime.now() + timedelta(days=60),
            'tags': ['AWS', 'Cloud Computing', 'DevOps'],
        },
        {
            'title': 'Ethical Hacking & Cybersecurity Fundamentals',
            'description': 'Learn penetration testing, network security, vulnerability assessment, and ethical hacking techniques. Prepare for CEH certification.',
            'category': 'Cybersecurity',
            'course_type': 'Live',
            'price': Decimal('449.99'),
            'deadline': datetime.now() + timedelta(days=40),
            'tags': ['Cybersecurity', 'Ethical Hacking', 'Penetration Testing'],
        },
        {
            'title': 'Data Science with Python: Complete Course',
            'description': 'Master data analysis, visualization, and statistical modeling. Learn Pandas, NumPy, Matplotlib, and build data science projects.',
            'category': 'Data Science',
            'course_type': 'Recorded',
            'price': Decimal('329.99'),
            'deadline': datetime.now() + timedelta(days=120),
            'tags': ['Python', 'Data Science', 'Pandas', 'Analytics'],
        },
        {
            'title': 'Blockchain & Smart Contract Development',
            'description': 'Build decentralized applications (DApps) on Ethereum. Learn Solidity, Web3.js, smart contracts, and deploy your own tokens.',
            'category': 'Blockchain',
            'course_type': 'Live',
            'price': Decimal('549.99'),
            'deadline': datetime.now() + timedelta(days=35),
            'tags': ['Blockchain', 'Ethereum', 'Smart Contracts', 'Solidity'],
        },
        {
            'title': 'DevOps Engineering: Docker, Kubernetes & CI/CD',
            'description': 'Master modern DevOps practices. Learn containerization, orchestration, automation, and build complete CI/CD pipelines.',
            'category': 'DevOps',
            'course_type': 'Recorded',
            'price': Decimal('379.99'),
            'deadline': datetime.now() + timedelta(days=75),
            'tags': ['Docker', 'Kubernetes', 'DevOps', 'CI/CD'],
        },
        {
            'title': 'Advanced React & Next.js Development',
            'description': 'Take your React skills to the next level. Learn Next.js, server-side rendering, API routes, authentication, and performance optimization.',
            'category': 'Web Development',
            'course_type': 'Live',
            'price': Decimal('429.99'),
            'deadline': datetime.now() + timedelta(days=50),
            'tags': ['React', 'Next.js', 'JavaScript', 'Advanced'],
        },
        {
            'title': 'Python Django Framework Masterclass',
            'description': 'Build powerful web applications with Django. Learn MVT architecture, ORM, REST APIs, authentication, deployment, and best practices.',
            'category': 'Web Development',
            'course_type': 'Recorded',
            'price': Decimal('299.99'),
            'deadline': datetime.now() + timedelta(days=100),
            'tags': ['Python', 'Django', 'Backend', 'REST API'],
        },
    ]
    
    for course_data in courses_data:
        category = CourseCategory.objects.get(name=course_data['category'])
        tags = Tag.objects.filter(name__in=course_data['tags'])
        
        course = Course.objects.create(
            img='courses/placeholder.jpg',
            title=course_data['title'],
            description=course_data['description'],
            category=category,
            course_type=course_data['course_type'],
            deadline=course_data['deadline'],
            price=course_data['price'],
        )
        course.tags.set(tags)
    
    print(f"Created {len(courses_data)} courses")


def create_services():
    """Create IT services with packages"""
    print("\nCreating services...")
    
    services_data = [
        {
            'title': 'Custom Web Application Development',
            'description': '''<h3>Transform Your Business with Custom Web Solutions</h3>
            <p>We build scalable, high-performance web applications tailored to your business needs. Our team specializes in modern frameworks and technologies to deliver exceptional user experiences.</p>
            <h4>What We Offer:</h4>
            <ul>
                <li>Full-stack web application development</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>Single Page Applications (SPA)</li>
                <li>RESTful API development</li>
                <li>Database design and optimization</li>
                <li>Third-party integrations</li>
            </ul>
            <h4>Technologies:</h4>
            <p>React, Vue.js, Angular, Node.js, Python Django, Laravel, PostgreSQL, MongoDB</p>''',
            'category': 'Web Development',
            'rating': 4.9,
            'purchase_number': 156,
            'delivery_title': 'Professional Web Application',
            'packages': [
                {'package_type': 'Basic', 'description': '5-page responsive website with contact form', 'price': Decimal('899.99'), 'delivery_time': 14, 'revision_count': 2},
                {'package_type': 'Standard', 'description': 'Full-featured web app with admin panel and 3 user roles', 'price': Decimal('2499.99'), 'delivery_time': 30, 'revision_count': 4},
                {'package_type': 'Premium', 'description': 'Complex enterprise application with microservices architecture', 'price': Decimal('5999.99'), 'delivery_time': 60, 'revision_count': 8},
            ],
        },
        {
            'title': 'Mobile App Development (iOS & Android)',
            'description': '''<h3>Native and Cross-Platform Mobile Solutions</h3>
            <p>Create stunning mobile applications that engage users and drive business growth. We develop apps for both iOS and Android platforms using cutting-edge technologies.</p>
            <h4>Services Include:</h4>
            <ul>
                <li>Native iOS development (Swift)</li>
                <li>Native Android development (Kotlin)</li>
                <li>Cross-platform apps (Flutter, React Native)</li>
                <li>UI/UX design for mobile</li>
                <li>App Store and Play Store deployment</li>
                <li>Push notifications and analytics</li>
            </ul>
            <h4>Industries We Serve:</h4>
            <p>E-commerce, Healthcare, Finance, Education, Entertainment, Social Networking</p>''',
            'category': 'Mobile App Development',
            'rating': 4.8,
            'purchase_number': 98,
            'delivery_title': 'Cross-Platform Mobile App',
            'packages': [
                {'package_type': 'Basic', 'description': 'Simple mobile app with 5 screens', 'price': Decimal('1299.99'), 'delivery_time': 21, 'revision_count': 2},
                {'package_type': 'Standard', 'description': 'Full-featured app with backend integration and authentication', 'price': Decimal('3499.99'), 'delivery_time': 45, 'revision_count': 5},
                {'package_type': 'Premium', 'description': 'Complex app with real-time features, payment gateway, and analytics', 'price': Decimal('7999.99'), 'delivery_time': 75, 'revision_count': 10},
            ],
        },
        {
            'title': 'UI/UX Design Services',
            'description': '''<h3>Create Memorable User Experiences</h3>
            <p>Our design team crafts intuitive, beautiful interfaces that users love. We focus on user research, wireframing, prototyping, and visual design to deliver exceptional experiences.</p>
            <h4>Design Services:</h4>
            <ul>
                <li>User research and persona development</li>
                <li>Information architecture</li>
                <li>Wireframing and prototyping</li>
                <li>Visual design and branding</li>
                <li>Usability testing</li>
                <li>Design system creation</li>
            </ul>
            <h4>Tools We Use:</h4>
            <p>Figma, Adobe XD, Sketch, InVision, Miro, Principle</p>''',
            'category': 'UI/UX Design',
            'rating': 4.9,
            'purchase_number': 203,
            'delivery_title': 'Complete UI/UX Design Package',
            'packages': [
                {'package_type': 'Basic', 'description': 'UI design for 5 screens with basic interactions', 'price': Decimal('499.99'), 'delivery_time': 7, 'revision_count': 3},
                {'package_type': 'Standard', 'description': 'Complete UX research, wireframes, and hi-fi designs for 15 screens', 'price': Decimal('1499.99'), 'delivery_time': 14, 'revision_count': 5},
                {'package_type': 'Premium', 'description': 'Full design system, user research, prototypes, and usability testing', 'price': Decimal('3999.99'), 'delivery_time': 30, 'revision_count': 8},
            ],
        },
        {
            'title': 'Cloud Migration & Infrastructure Setup',
            'description': '''<h3>Migrate to the Cloud with Confidence</h3>
            <p>Move your applications and data to the cloud seamlessly. We provide end-to-end cloud migration services and infrastructure setup for AWS, Azure, and Google Cloud.</p>
            <h4>Cloud Services:</h4>
            <ul>
                <li>Cloud architecture design</li>
                <li>Migration planning and execution</li>
                <li>Infrastructure as Code (Terraform, CloudFormation)</li>
                <li>Auto-scaling and load balancing</li>
                <li>Disaster recovery planning</li>
                <li>Cost optimization</li>
            </ul>
            <h4>Cloud Platforms:</h4>
            <p>AWS, Microsoft Azure, Google Cloud Platform, DigitalOcean</p>''',
            'category': 'Cloud Solutions',
            'rating': 4.7,
            'purchase_number': 87,
            'delivery_title': 'Cloud Infrastructure Setup',
            'packages': [
                {'package_type': 'Basic', 'description': 'Basic cloud setup with single server and database', 'price': Decimal('799.99'), 'delivery_time': 10, 'revision_count': 2},
                {'package_type': 'Standard', 'description': 'Multi-tier architecture with load balancing and auto-scaling', 'price': Decimal('2299.99'), 'delivery_time': 21, 'revision_count': 4},
                {'package_type': 'Premium', 'description': 'Enterprise cloud migration with multi-region deployment', 'price': Decimal('5499.99'), 'delivery_time': 45, 'revision_count': 6},
            ],
        },
        {
            'title': 'DevOps & CI/CD Implementation',
            'description': '''<h3>Automate Your Software Delivery</h3>
            <p>Implement modern DevOps practices to accelerate your development cycle. We set up automated pipelines, containerization, and monitoring for reliable software delivery.</p>
            <h4>DevOps Services:</h4>
            <ul>
                <li>CI/CD pipeline setup (Jenkins, GitLab CI, GitHub Actions)</li>
                <li>Docker containerization</li>
                <li>Kubernetes orchestration</li>
                <li>Infrastructure monitoring (Prometheus, Grafana)</li>
                <li>Log management (ELK Stack)</li>
                <li>Security scanning and compliance</li>
            </ul>
            <h4>Technologies:</h4>
            <p>Docker, Kubernetes, Jenkins, GitLab, Ansible, Terraform, Prometheus</p>''',
            'category': 'DevOps Services',
            'rating': 4.8,
            'purchase_number': 72,
            'delivery_title': 'Complete DevOps Pipeline',
            'packages': [
                {'package_type': 'Basic', 'description': 'Basic CI/CD pipeline with automated testing', 'price': Decimal('999.99'), 'delivery_time': 14, 'revision_count': 2},
                {'package_type': 'Standard', 'description': 'Full pipeline with containerization and monitoring', 'price': Decimal('2799.99'), 'delivery_time': 28, 'revision_count': 4},
                {'package_type': 'Premium', 'description': 'Enterprise DevOps with Kubernetes, security scanning, and 24/7 monitoring', 'price': Decimal('6499.99'), 'delivery_time': 45, 'revision_count': 6},
            ],
        },
        {
            'title': 'Data Analytics & Business Intelligence',
            'description': '''<h3>Turn Data into Actionable Insights</h3>
            <p>Unlock the power of your data with our analytics and BI solutions. We help you visualize, analyze, and make data-driven decisions that drive business growth.</p>
            <h4>Analytics Services:</h4>
            <ul>
                <li>Data warehouse design and implementation</li>
                <li>ETL pipeline development</li>
                <li>Interactive dashboards and reports</li>
                <li>Predictive analytics and forecasting</li>
                <li>Real-time analytics</li>
                <li>Data quality and governance</li>
            </ul>
            <h4>Tools & Technologies:</h4>
            <p>Power BI, Tableau, Apache Spark, Python, R, SQL, MongoDB</p>''',
            'category': 'Data Analytics',
            'rating': 4.9,
            'purchase_number': 64,
            'delivery_title': 'Data Analytics Solution',
            'packages': [
                {'package_type': 'Basic', 'description': 'Basic dashboard with 5 key metrics', 'price': Decimal('699.99'), 'delivery_time': 10, 'revision_count': 2},
                {'package_type': 'Standard', 'description': 'Comprehensive BI solution with multiple dashboards and ETL', 'price': Decimal('2199.99'), 'delivery_time': 25, 'revision_count': 4},
                {'package_type': 'Premium', 'description': 'Enterprise data warehouse with advanced analytics and ML models', 'price': Decimal('5999.99'), 'delivery_time': 50, 'revision_count': 6},
            ],
        },
        {
            'title': 'Cybersecurity Audit & Implementation',
            'description': '''<h3>Protect Your Digital Assets</h3>
            <p>Secure your applications and infrastructure with comprehensive security audits and implementation. We identify vulnerabilities and implement robust security measures.</p>
            <h4>Security Services:</h4>
            <ul>
                <li>Security vulnerability assessment</li>
                <li>Penetration testing</li>
                <li>Security architecture review</li>
                <li>Compliance audit (GDPR, HIPAA, SOC2)</li>
                <li>Security training for teams</li>
                <li>Incident response planning</li>
            </ul>
            <h4>Security Tools:</h4>
            <p>OWASP ZAP, Burp Suite, Nmap, Metasploit, Wireshark</p>''',
            'category': 'Cybersecurity',
            'rating': 4.8,
            'purchase_number': 45,
            'delivery_title': 'Security Audit Report',
            'packages': [
                {'package_type': 'Basic', 'description': 'Basic security scan and vulnerability report', 'price': Decimal('599.99'), 'delivery_time': 7, 'revision_count': 1},
                {'package_type': 'Standard', 'description': 'Comprehensive penetration testing and remediation plan', 'price': Decimal('1899.99'), 'delivery_time': 14, 'revision_count': 2},
                {'package_type': 'Premium', 'description': 'Full security audit with compliance certification support', 'price': Decimal('4999.99'), 'delivery_time': 30, 'revision_count': 3},
            ],
        },
        {
            'title': 'AI & Machine Learning Solutions',
            'description': '''<h3>Harness the Power of Artificial Intelligence</h3>
            <p>Integrate AI and ML into your business processes. From predictive models to natural language processing, we build intelligent solutions that automate and optimize operations.</p>
            <h4>AI/ML Services:</h4>
            <ul>
                <li>Custom ML model development</li>
                <li>Computer vision applications</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Recommendation systems</li>
                <li>Chatbots and conversational AI</li>
                <li>Model deployment and monitoring</li>
            </ul>
            <h4>Frameworks:</h4>
            <p>TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face, OpenAI</p>''',
            'category': 'AI & Machine Learning',
            'rating': 4.9,
            'purchase_number': 53,
            'delivery_title': 'AI/ML Solution',
            'packages': [
                {'package_type': 'Basic', 'description': 'Simple ML model for classification or regression', 'price': Decimal('1499.99'), 'delivery_time': 14, 'revision_count': 2},
                {'package_type': 'Standard', 'description': 'Advanced ML pipeline with model optimization', 'price': Decimal('3999.99'), 'delivery_time': 30, 'revision_count': 4},
                {'package_type': 'Premium', 'description': 'Enterprise AI solution with deep learning and production deployment', 'price': Decimal('8999.99'), 'delivery_time': 60, 'revision_count': 6},
            ],
        },
        {
            'title': 'E-commerce Development & Integration',
            'description': '''<h3>Build Your Online Store</h3>
            <p>Create powerful e-commerce platforms that drive sales. We develop custom online stores with payment integration, inventory management, and marketing tools.</p>
            <h4>E-commerce Services:</h4>
            <ul>
                <li>Custom e-commerce website development</li>
                <li>Shopify, WooCommerce customization</li>
                <li>Payment gateway integration</li>
                <li>Inventory management system</li>
                <li>Multi-vendor marketplace</li>
                <li>SEO and marketing automation</li>
            </ul>
            <h4>Platforms:</h4>
            <p>Shopify, WooCommerce, Magento, Custom Solutions</p>''',
            'category': 'Web Development',
            'rating': 4.7,
            'purchase_number': 124,
            'delivery_title': 'E-commerce Platform',
            'packages': [
                {'package_type': 'Basic', 'description': 'Basic online store with 50 products', 'price': Decimal('1199.99'), 'delivery_time': 14, 'revision_count': 3},
                {'package_type': 'Standard', 'description': 'Advanced e-commerce with unlimited products and payment integration', 'price': Decimal('2999.99'), 'delivery_time': 28, 'revision_count': 5},
                {'package_type': 'Premium', 'description': 'Enterprise multi-vendor marketplace with advanced features', 'price': Decimal('7499.99'), 'delivery_time': 60, 'revision_count': 8},
            ],
        },
        {
            'title': 'SEO & Digital Marketing Services',
            'description': '''<h3>Boost Your Online Presence</h3>
            <p>Drive organic traffic and grow your business with our comprehensive SEO and digital marketing services. We help you rank higher and reach more customers.</p>
            <h4>Marketing Services:</h4>
            <ul>
                <li>SEO audit and optimization</li>
                <li>Keyword research and strategy</li>
                <li>Content marketing</li>
                <li>Link building campaigns</li>
                <li>Social media marketing</li>
                <li>Google Ads and PPC management</li>
            </ul>
            <h4>Tools:</h4>
            <p>Google Analytics, SEMrush, Ahrefs, Moz, Google Search Console</p>''',
            'category': 'Digital Marketing',
            'rating': 4.6,
            'purchase_number': 189,
            'delivery_title': 'Digital Marketing Campaign',
            'packages': [
                {'package_type': 'Basic', 'description': 'SEO audit and basic optimization for 10 pages', 'price': Decimal('399.99'), 'delivery_time': 7, 'revision_count': 2},
                {'package_type': 'Standard', 'description': 'Complete SEO package with content and link building', 'price': Decimal('1299.99'), 'delivery_time': 30, 'revision_count': 4},
                {'package_type': 'Premium', 'description': 'Full digital marketing campaign with SEO, PPC, and social media', 'price': Decimal('3499.99'), 'delivery_time': 90, 'revision_count': 6},
            ],
        },
    ]
    
    for service_data in services_data:
        category = ServiceCategory.objects.get(name=service_data['category'])
        
        # Create service
        service = Service.objects.create(
            title=service_data['title'],
            description=service_data['description'],
            category=category,
            rating=service_data['rating'],
            purchase_number=service_data['purchase_number'],
            delivery_title=service_data['delivery_title'],
        )
        
        # Create service images (placeholder)
        for i in range(3):
            ServiceImage.objects.create(
                image=f'services/placeholder_{i+1}.jpg',
                service=service,
            )
        
        # Create service packages
        for package_data in service_data['packages']:
            ServicePackage.objects.create(
                service=service,
                package_type=package_data['package_type'],
                description=package_data['description'],
                price=package_data['price'],
                delivery_time=package_data['delivery_time'],
                revision_count=package_data['revision_count'],
            )
    
    print(f"Created {len(services_data)} services with packages")


def create_team_members():
    """Create team member profiles"""
    print("\nCreating team members...")
    
    team_data = [
        {
            'name': 'John Anderson',
            'position': 'CEO & Full Stack Developer',
            'description': '10+ years experience in software development. Specialized in React, Node.js, and cloud architecture.',
            'facebook': 'https://facebook.com/johnanderson',
            'linkedin': 'https://linkedin.com/in/johnanderson',
            'github': 'https://github.com/johnanderson',
        },
        {
            'name': 'Sarah Mitchell',
            'position': 'Lead UI/UX Designer',
            'description': 'Award-winning designer with expertise in user research and interface design. 8 years in the industry.',
            'facebook': 'https://facebook.com/sarahmitchell',
            'linkedin': 'https://linkedin.com/in/sarahmitchell',
            'github': '',
        },
        {
            'name': 'Michael Chen',
            'position': 'Senior DevOps Engineer',
            'description': 'Expert in cloud infrastructure, CI/CD, and Kubernetes. AWS and Azure certified professional.',
            'facebook': '',
            'linkedin': 'https://linkedin.com/in/michaelchen',
            'github': 'https://github.com/michaelchen',
        },
        {
            'name': 'Emily Rodriguez',
            'position': 'Data Scientist',
            'description': 'PhD in Machine Learning. Specializes in predictive modeling and deep learning applications.',
            'facebook': '',
            'linkedin': 'https://linkedin.com/in/emilyrodriguez',
            'github': 'https://github.com/emilyrodriguez',
        },
        {
            'name': 'David Kim',
            'position': 'Mobile App Developer',
            'description': 'Expert Flutter and React Native developer. Published 20+ apps with millions of downloads.',
            'facebook': 'https://facebook.com/davidkim',
            'linkedin': 'https://linkedin.com/in/davidkim',
            'github': 'https://github.com/davidkim',
        },
    ]
    
    for member_data in team_data:
        TeamMember.objects.create(
            profile_img='team/placeholder.jpg',
            **member_data
        )
    
    print(f"Created {len(team_data)} team members")


def create_blogs():
    """Create blog posts"""
    print("\nCreating blog posts...")
    
    blogs_data = [
        {
            'title': '10 Web Development Trends to Watch in 2024',
            'slug': '10-web-development-trends-2024',
            'author': 'John Anderson',
            'content': 'Web development is constantly evolving. Here are the top trends shaping the industry in 2024: AI-powered development, serverless architecture, JAMstack, and more...',
        },
        {
            'title': 'Getting Started with Machine Learning: A Beginners Guide',
            'slug': 'getting-started-machine-learning',
            'author': 'Emily Rodriguez',
            'content': 'Machine learning can seem intimidating, but it doesnt have to be. This guide will walk you through the basics and help you build your first ML model...',
        },
        {
            'title': 'Why Your Business Needs a Mobile App in 2024',
            'slug': 'why-business-needs-mobile-app',
            'author': 'David Kim',
            'content': 'Mobile apps are no longer optional for businesses. Learn why having a mobile presence is crucial for customer engagement and business growth...',
        },
        {
            'title': 'DevOps Best Practices for Startups',
            'slug': 'devops-best-practices-startups',
            'author': 'Michael Chen',
            'content': 'Implementing DevOps from day one can save your startup time and money. Here are the essential practices every startup should follow...',
        },
    ]
    
    for blog_data in blogs_data:
        Blog.objects.create(
            image='blogs/placeholder.jpg',
            **blog_data
        )
    
    print(f"Created {len(blogs_data)} blog posts")


def main():
    """Main function to populate all data"""
    print("=" * 60)
    print("STARTING DATA POPULATION FOR EXEYEZONE")
    print("=" * 60)
    
    # Clear existing data
    clear_data()
    
    # Create all data
    create_categories()
    create_tags()
    create_products()
    create_courses()
    create_services()
    create_team_members()
    create_blogs()
    
    # Print summary
    print("\n" + "=" * 60)
    print("DATA POPULATION COMPLETED SUCCESSFULLY!")
    print("=" * 60)
    print(f"\nSummary:")
    print(f"  Products: {Product.objects.count()}")
    print(f"  Courses: {Course.objects.count()}")
    print(f"  Services: {Service.objects.count()}")
    print(f"  Service Packages: {ServicePackage.objects.count()}")
    print(f"  Team Members: {TeamMember.objects.count()}")
    print(f"  Blog Posts: {Blog.objects.count()}")
    print(f"  Product Categories: {ProductCategory.objects.count()}")
    print(f"  Service Categories: {ServiceCategory.objects.count()}")
    print(f"  Course Categories: {CourseCategory.objects.count()}")
    print(f"  Tags: {Tag.objects.count()}")
    print("\n" + "=" * 60)


if __name__ == '__main__':
    main()
