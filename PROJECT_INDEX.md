# EXEYEZONE Project Index & Documentation

## Project Overview
**EyeZone** is a full-stack web application for an IT services company that offers:
- Digital products (templates, UI kits, etc.)
- Educational courses (CSE/IT courses)
- IT services (web development, mobile apps, cloud solutions, etc.)

---

## Technology Stack

### Backend (Django REST Framework)
- **Framework**: Django 5.2.8
- **API**: Django REST Framework 3.16.1
- **Database**: SQLite3
- **Additional Libraries**:
  - django-cors-headers (CORS support)
  - django-filter (API filtering)
  - django-ckeditor (Rich text editor)
  - Pillow (Image processing)
  - django-unfold (Modern admin interface)

### Frontend (Next.js)
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Components**: Shadcn/ui components

---

## Backend Architecture

### Models Structure

#### 1. **Category Models**
- **ProductCategory**: Categories for digital products
  - Fields: `name`
  
- **ServiceCategory**: Categories for IT services
  - Fields: `name`
  
- **CourseCategory**: Categories for educational courses
  - Fields: `name`, `total_courses`, `total_students`, `total_instructors`, `total_reviews`, `total_rating`

#### 2. **Tag Model**
- Shared tags for products and courses
- Many-to-many relationship with Product and Course models

#### 3. **Product Model** (Digital Products)
- **Fields**:
  - `product_img`: Product image
  - `title`: Product name
  - `description`: Product description
  - `category`: ForeignKey to ProductCategory
  - `tags`: ManyToMany to Tag
  - `price`: Product price (Decimal)
  - `sales_count`: Number of sales
  - `rating`: Product rating (1-5)
  - `demo`: Demo URL
  - `created_at`, `updated_at`: Timestamps

#### 4. **Course Model** (Educational Courses)
- **Fields**:
  - `img`: Course image
  - `title`: Course name
  - `description`: Course description
  - `category`: ForeignKey to CourseCategory
  - `tags`: ManyToMany to Tag
  - `course_type`: Choice field ('Live' or 'Recorded')
  - `deadline`: Course deadline date
  - `price`: Course price
  - `created_at`: Timestamp

#### 5. **Service Model** (IT Services)
- **Fields**:
  - `title`: Service name
  - `description`: Rich text description (CKEditor)
  - `category`: ForeignKey to ServiceCategory
  - `rating`: Service rating
  - `purchase_number`: Number of purchases
  - `delivery_title`: Delivery description
- **Related Models**:
  - `ServiceImage`: Multiple images per service
  - `ServicePackage`: Three pricing tiers (Basic/Standard/Premium)

#### 6. **ServiceImage Model**
- Multiple images per service (one-to-many relationship)
- Fields: `image`, `service` (ForeignKey)

#### 7. **ServicePackage Model**
- Three-tier pricing for each service
- **Fields**:
  - `service`: ForeignKey to Service
  - `package_type`: Choice ('Basic', 'Standard', 'Premium')
  - `description`: Package description
  - `price`: Package price
  - `delivery_time`: Delivery time in days
  - `revision_count`: Number of revisions included
- **Unique Constraint**: (service, package_type)

#### 8. **TeamMember Model**
- **Fields**:
  - `profile_img`: Profile image
  - `name`: Member name
  - `position`: Job position
  - `description`: Bio
  - `facebook`, `linkedin`, `github`, `personal_website`: Social links

#### 9. **Blog Model**
- **Fields**:
  - `title`, `slug`, `image`, `author`, `content`
  - `created_at`, `updated_at`: Timestamps

#### 10. **Order/Request Models**

**ServiceOrder**: Orders for services
- Fields: `full_name`, `email`, `contact_number`, `message`, `service_title`, `package_type`, `status`
- Status choices: pending, in_progress, completed, cancelled

**QuoteRequest**: Custom quote requests
- Fields: `name`, `email`, `contact_number`, `description`, `status`
- Status choices: pending, reviewed, quoted, rejected

**HireRequest**: Hiring requests with service/package selection
- Fields: `service` (FK), `package` (FK), `name`, `email`, `contact_number`, `description`, `status`
- Status choices: pending, in_progress, completed, rejected

---

### API Endpoints (REST Framework ViewSets)

All endpoints use ModelViewSet providing full CRUD operations:

#### Public API Endpoints
```
GET/POST    /api/products/              - List/Create products
GET/PUT     /api/products/{id}/         - Retrieve/Update/Delete product
GET         /api/productcategories/     - List product categories
GET         /api/categories/            - List course categories
GET/POST    /api/courses/               - List/Create courses
GET         /api/courses/{id}/          - Retrieve course details
GET         /api/tags/                  - List tags
GET/POST    /api/services/              - List/Create services
GET         /api/services/{id}/         - Retrieve service details
GET         /api/teams/                 - List team members
GET         /api/blogs/                 - List blog posts
POST        /api/service-orders/        - Create service order
POST        /api/quote-requests/        - Submit quote request
POST        /api/hire-requests/         - Submit hire request
```

#### View Features

**ProductViewSet**:
- Filtering by category
- Search by title, description, category name, tags
- Optimized with select_related and prefetch_related

**CourseViewSet**:
- Filtering by category

**ServiceViewSet**:
- Returns service with images and packages

**ServiceOrderViewSet, QuoteRequestViewSet, HireRequestViewSet**:
- Custom create() method returning success responses
- Auto-set status to 'pending' on creation

---

### Serializers

Each model has a corresponding serializer:
- **TagSerializer**: Basic tag info
- **CourseCategorySerializer**: Category with stats
- **ProductCategorySerializer**: Category name
- **ProductSerializer**: Includes nested tags and category
- **CourseSerializer**: Includes nested tags and category
- **ServiceImageSerializer**: Service image
- **ServicePackageSerializer**: Package details
- **ServiceSerializer**: Includes images, packages, and category name
- **TeamMemberSerializer**: Full team member data
- **BlogSerializer**: Full blog data
- **ServiceOrderSerializer**: Order data (status read-only)
- **QuoteRequestSerializer**: Quote data (status read-only)
- **HireRequestSerializer**: Hire request with service/package details

---

## Frontend Architecture

### Page Structure
```
/app
  ├── page.js                 - Home page
  ├── about/page.js           - About page
  ├── contact/page.js         - Contact page
  ├── courses/page.js         - Courses listing
  ├── products/page.js        - Products listing
  ├── services/page.js        - Services listing
  ├── services/[id]/page.js   - Single service page
  ├── getquote/page.js        - Quote request form
  ├── hireus/page.js          - Hire request form
  └── Components/             - React components
```

### API Integration

**Axios Configuration** (`utils/axios.js`):
- Base URL from environment variable: `NEXT_PUBLIC_API_URL`

**API Functions**:

`utils/api/course.js`:
- `fetchCategories()` - Get course categories
- `fetchCourses(categoryId)` - Get courses with optional filtering

`utils/api/product.js`:
- `fetchProductCategories()` - Get product categories
- `fetchProducts(categoryId, searchQuery)` - Get products with filtering

---

## Data Population

### Fake Data Script: `populate_data.py`

The script populates the database with realistic CSE and IT services data:

#### Categories Created:
**Product Categories** (7):
- Web Templates, Mobile App Templates, UI/UX Kits, WordPress Themes, E-commerce Solutions, Admin Dashboards, Landing Pages

**Service Categories** (10):
- Web Development, Mobile App Development, UI/UX Design, Cloud Solutions, DevOps Services, Data Analytics, Digital Marketing, Cybersecurity, AI & Machine Learning, Blockchain Development

**Course Categories** (8):
- Web Development, Data Science, Mobile Development, Machine Learning, Cybersecurity, Cloud Computing, DevOps, Blockchain

#### Data Statistics:
- **Products**: 8 digital products (templates, UI kits, dashboards)
- **Courses**: 10 CSE courses (bootcamps, certifications)
- **Services**: 10 IT services with 3 packages each (30 total packages)
- **Team Members**: 5 team profiles
- **Blog Posts**: 4 tech articles
- **Tags**: 46 technology tags

#### Sample Services:
1. Custom Web Application Development
2. Mobile App Development (iOS & Android)
3. UI/UX Design Services
4. Cloud Migration & Infrastructure Setup
5. DevOps & CI/CD Implementation
6. Data Analytics & Business Intelligence
7. Cybersecurity Audit & Implementation
8. AI & Machine Learning Solutions
9. E-commerce Development & Integration
10. SEO & Digital Marketing Services

#### Sample Courses:
1. Full Stack Web Development Bootcamp
2. Machine Learning A-Z: Hands-On Python
3. Flutter & Dart - Complete Mobile App Development
4. AWS Certified Solutions Architect
5. Ethical Hacking & Cybersecurity Fundamentals
6. Data Science with Python: Complete Course
7. Blockchain & Smart Contract Development
8. DevOps Engineering: Docker, Kubernetes & CI/CD
9. Advanced React & Next.js Development
10. Python Django Framework Masterclass

---

## Key Features

### Backend Features:
✅ RESTful API with full CRUD operations
✅ Advanced filtering and search capabilities
✅ Image upload support for products, courses, services, team
✅ Rich text editing for service descriptions
✅ Three-tier pricing system for services
✅ Order/request management with status tracking
✅ Many-to-many tagging system
✅ CORS enabled for frontend communication
✅ Modern admin interface (Unfold)

### Frontend Features:
✅ Server-side rendering with Next.js
✅ Responsive design with Tailwind CSS
✅ Dynamic data fetching with Axios
✅ Category filtering
✅ Search functionality
✅ Form submissions for orders/quotes/hiring

---

## Running the Project

### Backend Setup:
```bash
cd backend
uv sync                              # Install dependencies
uv run python manage.py migrate      # Run migrations
uv run python populate_data.py       # Populate fake data
uv run python manage.py runserver    # Start server (port 8000)
```

### Frontend Setup:
```bash
cd frontend
npm install                          # Install dependencies
npm run dev                          # Start dev server (port 3000)
```

### Environment Variables:
Create `.env.local` in frontend:
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

---

## Database Schema Relationships

```
CourseCategory (1) ----< (M) Course >----< (M) Tag
ProductCategory (1) ---< (M) Product >---< (M) Tag
ServiceCategory (1) ---< (M) Service
                              |
                              +----< (M) ServiceImage
                              +----< (M) ServicePackage
                              
Service (1) ----< (M) HireRequest
ServicePackage (1) ----< (M) HireRequest
```

---

## API Response Examples

### Service Detail Response:
```json
{
  "id": 1,
  "title": "Custom Web Application Development",
  "category": "Web Development",
  "description": "<h3>Transform Your Business...</h3>",
  "rating": 4.9,
  "purchase_number": 156,
  "delivery_title": "Professional Web Application",
  "service_images": [
    {"id": 1, "image": "/media/services/img1.jpg"},
    {"id": 2, "image": "/media/services/img2.jpg"}
  ],
  "service_packages": [
    {
      "package_type": "Basic",
      "description": "5-page responsive website",
      "price": "899.99",
      "delivery_time": 14,
      "revision_count": 2
    },
    ...
  ]
}
```

### Course List Response:
```json
[
  {
    "id": 1,
    "img": "/media/courses/course1.jpg",
    "title": "Full Stack Web Development Bootcamp",
    "description": "Learn full stack development...",
    "category": {
      "id": 1,
      "name": "Web Development",
      "total_courses": 15,
      "total_students": 1250
    },
    "tags": [
      {"id": 1, "name": "React"},
      {"id": 2, "name": "Node.js"}
    ],
    "course_type": "Live",
    "deadline": "2024-12-12",
    "price": "499.99",
    "created_at": "2024-11-12T10:00:00Z"
  }
]
```

---

## Admin Interface

Access Django admin at: `http://localhost:8000/admin/`

Create superuser:
```bash
cd backend
uv run python manage.py createsuperuser
```

The admin interface uses **Django Unfold** for a modern UI and allows managing:
- All models (Products, Courses, Services, etc.)
- Orders and requests
- Categories and tags
- Team members and blog posts

---

## Notes

- All image fields currently use placeholder paths
- Status fields in orders/requests are read-only from API
- Services use CKEditor for rich text descriptions
- Course deadlines are set 30-120 days in the future
- All prices are in USD (Decimal format)
- API supports filtering and search queries
- Frontend uses environment variables for API URL configuration

---

## Future Enhancements

Potential improvements:
- [ ] User authentication and profiles
- [ ] Payment gateway integration
- [ ] Real-time notifications
- [ ] Email notifications for orders/requests
- [ ] Course enrollment system
- [ ] Product reviews and ratings
- [ ] Service booking calendar
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Mobile app version

---

**Last Updated**: November 12, 2024
**Version**: 1.0.0
