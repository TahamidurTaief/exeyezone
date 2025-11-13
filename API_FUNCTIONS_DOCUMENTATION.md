# API Functions & Views Documentation

## Backend API Views (api/views.py)

### ViewSet Classes
All ViewSets inherit from `rest_framework.viewsets.ModelViewSet` providing standard CRUD operations:
- `list()` - GET list of objects
- `create()` - POST new object
- `retrieve()` - GET single object by ID
- `update()` - PUT/PATCH update object
- `destroy()` - DELETE object

---

## 1. ProductViewSet

**Purpose**: Manage digital products (templates, UI kits, dashboards)

**Queryset Optimization**:
```python
queryset = Product.objects.all().select_related('category').prefetch_related('tags')
```
- Uses `select_related` for ForeignKey (category) - reduces DB queries
- Uses `prefetch_related` for ManyToMany (tags) - efficient tag loading

**Filtering & Search**:
- **Filter by**: `category` (exact match)
- **Search in**: `title`, `description`, `category__name`, `tags__name`
- Example: `/api/products/?category=1&search=react`

**Serializer**: `ProductSerializer`

**HTTP Methods**:
- `GET /api/products/` - List all products (supports filtering/search)
- `POST /api/products/` - Create new product (admin only)
- `GET /api/products/{id}/` - Get product details
- `PUT/PATCH /api/products/{id}/` - Update product
- `DELETE /api/products/{id}/` - Delete product

---

## 2. ProductCategoryViewSet

**Purpose**: Manage product categories

**Queryset**: All ProductCategory objects

**Serializer**: `ProductCategorySerializer`

**HTTP Methods**:
- `GET /api/productcategories/` - List all product categories
- `POST /api/productcategories/` - Create category
- `GET /api/productcategories/{id}/` - Get category details
- `PUT/PATCH /api/productcategories/{id}/` - Update category
- `DELETE /api/productcategories/{id}/` - Delete category

---

## 3. CourseCategoryViewSet

**Purpose**: Manage course categories with statistics

**Queryset**: All CourseCategory objects

**Serializer**: `CourseCategorySerializer`

**Fields Returned**:
- Basic: `id`, `name`
- Statistics: `total_courses`, `total_students`, `total_instructors`, `total_reviews`, `total_rating`

**HTTP Methods**:
- `GET /api/categories/` - List all course categories
- `POST /api/categories/` - Create category
- `GET /api/categories/{id}/` - Get category with stats
- `PUT/PATCH /api/categories/{id}/` - Update category
- `DELETE /api/categories/{id}/` - Delete category

---

## 4. CourseViewSet

**Purpose**: Manage educational courses

**Queryset**: All Course objects

**Filtering**:
- **Filter by**: `category` (exact match)
- Example: `/api/courses/?category=1`

**Serializer**: `CourseSerializer`

**HTTP Methods**:
- `GET /api/courses/` - List all courses (supports category filtering)
- `POST /api/courses/` - Create new course
- `GET /api/courses/{id}/` - Get course details
- `PUT/PATCH /api/courses/{id}/` - Update course
- `DELETE /api/courses/{id}/` - Delete course

**Response Includes**:
- Nested category details
- All associated tags
- Course type (Live/Recorded)
- Deadline and pricing

---

## 5. TagViewSet

**Purpose**: Manage tags for products and courses

**Queryset**: All Tag objects

**Serializer**: `TagSerializer`

**HTTP Methods**:
- `GET /api/tags/` - List all tags
- `POST /api/tags/` - Create new tag
- `GET /api/tags/{id}/` - Get tag details
- `PUT/PATCH /api/tags/{id}/` - Update tag
- `DELETE /api/tags/{id}/` - Delete tag

---

## 6. ServiceViewSet

**Purpose**: Manage IT services with packages and images

**Queryset**: All Service objects

**Serializer**: `ServiceSerializer`

**Response Structure**:
```json
{
  "id": 1,
  "title": "Service Name",
  "category": "Web Development",
  "description": "<html content>",
  "rating": 4.9,
  "purchase_number": 156,
  "delivery_title": "Delivery description",
  "service_images": [
    {"id": 1, "image": "/media/services/img1.jpg"}
  ],
  "service_packages": [
    {
      "package_type": "Basic",
      "description": "Package description",
      "price": "899.99",
      "delivery_time": 14,
      "revision_count": 2
    }
  ]
}
```

**HTTP Methods**:
- `GET /api/services/` - List all services (includes images & packages)
- `POST /api/services/` - Create new service
- `GET /api/services/{id}/` - Get service details
- `PUT/PATCH /api/services/{id}/` - Update service
- `DELETE /api/services/{id}/` - Delete service

**Note**: Service description uses CKEditor (rich text HTML)

---

## 7. TeamMemberViewSet

**Purpose**: Manage team member profiles

**Queryset**: All TeamMember objects

**Serializer**: `TeamMemberSerializer`

**Fields**:
- Profile information: name, position, description, profile image
- Social links: facebook, linkedin, github, personal_website

**HTTP Methods**:
- `GET /api/teams/` - List all team members
- `POST /api/teams/` - Add team member
- `GET /api/teams/{id}/` - Get member details
- `PUT/PATCH /api/teams/{id}/` - Update member
- `DELETE /api/teams/{id}/` - Delete member

---

## 8. BlogViewSet

**Purpose**: Manage blog posts

**Queryset**: All Blog objects

**Serializer**: `BlogSerializer`

**Fields**: title, slug, image, author, content, created_at, updated_at

**HTTP Methods**:
- `GET /api/blogs/` - List all blog posts
- `POST /api/blogs/` - Create blog post
- `GET /api/blogs/{id}/` - Get blog details
- `PUT/PATCH /api/blogs/{id}/` - Update blog
- `DELETE /api/blogs/{id}/` - Delete blog

---

## 9. ServiceOrderViewSet

**Purpose**: Handle service order submissions from customers

**Queryset**: All ServiceOrder objects

**Serializer**: `ServiceOrderSerializer`

**Fields**:
- Customer info: `full_name`, `email`, `contact_number`, `message`
- Order info: `service_title`, `package_type`
- Status: `status` (pending/in_progress/completed/cancelled)
- Timestamps: `created_at`, `updated_at`

**Custom create() Method**:
```python
def create(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    self.perform_create(serializer)
    headers = self.get_success_headers(serializer.data)
    return Response(
        {"status": "success", "data": serializer.data},
        status=status.HTTP_201_CREATED,
        headers=headers
    )
```

**Response Format**:
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "full_name": "John Doe",
    "email": "john@example.com",
    "service_title": "Web Development",
    "package_type": "Standard",
    "status": "pending",
    "created_at": "2024-11-12T10:00:00Z"
  }
}
```

**HTTP Methods**:
- `POST /api/service-orders/` - Submit service order
- `GET /api/service-orders/` - List all orders (admin)
- `GET /api/service-orders/{id}/` - Get order details
- `PATCH /api/service-orders/{id}/` - Update status (admin)

**Read-Only Fields**: `status`, `created_at`, `updated_at`

---

## 10. QuoteRequestViewSet

**Purpose**: Handle custom quote requests from potential customers

**Queryset**: All QuoteRequest objects

**Serializer**: `QuoteRequestSerializer`

**Fields**:
- Customer info: `name`, `email`, `contact_number`
- Request details: `description`
- Status: `status` (pending/reviewed/quoted/rejected)
- Timestamps: `created_at`, `updated_at`

**Custom create() Method**: Same pattern as ServiceOrderViewSet

**Response Format**:
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "contact_number": "+1234567890",
    "description": "Need custom solution for...",
    "status": "pending",
    "created_at": "2024-11-12T10:00:00Z"
  }
}
```

**HTTP Methods**:
- `POST /api/quote-requests/` - Submit quote request
- `GET /api/quote-requests/` - List all requests (admin)
- `GET /api/quote-requests/{id}/` - Get request details
- `PATCH /api/quote-requests/{id}/` - Update status (admin)

**Read-Only Fields**: `status`, `created_at`, `updated_at`

---

## 11. HireRequestViewSet

**Purpose**: Handle hiring requests linked to specific services and packages

**Queryset**: All HireRequest objects

**Serializer**: `HireRequestSerializer`

**Fields**:
- References: `service` (FK), `package` (FK)
- Customer info: `name`, `email`, `contact_number`
- Details: `description`
- Status: `status` (pending/in_progress/completed/rejected)
- Timestamps: `created_at`, `updated_at`

**Custom create() Method**:
```python
def create(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    self.perform_create(serializer)
    headers = self.get_success_headers(serializer.data)
    return Response(
        {
            "status": "success",
            "message": "Hire request submitted successfully",
            "data": serializer.data
        },
        status=status.HTTP_201_CREATED,
        headers=headers
    )
```

**Response Format**:
```json
{
  "status": "success",
  "message": "Hire request submitted successfully",
  "data": {
    "id": 1,
    "service": 1,
    "package": 1,
    "service_title": "Custom Web Application Development",
    "package_details": {
      "package_type": "Standard",
      "price": "2499.99",
      "delivery_time": 30,
      "revision_count": 4
    },
    "name": "Alex Johnson",
    "email": "alex@example.com",
    "contact_number": "+1234567890",
    "description": "I need a custom web app...",
    "status": "pending",
    "created_at": "2024-11-12T10:00:00Z"
  }
}
```

**Serializer Methods**:
- `service_title` - Returns service name from related service
- `package_details` - Returns full package information (type, price, delivery, revisions)

**HTTP Methods**:
- `POST /api/hire-requests/` - Submit hire request
- `GET /api/hire-requests/` - List all requests (admin)
- `GET /api/hire-requests/{id}/` - Get request details
- `PATCH /api/hire-requests/{id}/` - Update status (admin)

**Read-Only Fields**: `status`, `created_at`, `updated_at`, `service_title`, `package_details`

---

## Frontend API Functions

### utils/api/course.js

#### fetchCategories()
```javascript
export const fetchCategories = async () => {
  try {
    const response = await api.get('/categories/');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
```
**Purpose**: Fetch all course categories with statistics

**Returns**: Array of category objects with stats

**Used in**: Course listing page for filtering

---

#### fetchCourses(categoryId)
```javascript
export const fetchCourses = async (categoryId = null) => {
  try {
    const params = categoryId ? { category: categoryId } : {};
    const response = await api.get('/courses/', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};
```
**Purpose**: Fetch courses with optional category filtering

**Parameters**:
- `categoryId` (optional): Filter courses by category

**Returns**: Array of course objects

**Used in**: Course listing page

---

### utils/api/product.js

#### fetchProductCategories()
```javascript
export const fetchProductCategories = async () => {
  try {
    const response = await api.get('/categories/');
    return response.data;
  } catch (error) {
    console.error('Error fetching product categories:', error);
    return [];
  }
};
```
**Purpose**: Fetch all product categories

**Returns**: Array of category objects

**Used in**: Product listing page for filtering

---

#### fetchProducts(categoryId, searchQuery)
```javascript
export const fetchProducts = async (categoryId = null, searchQuery = '') => {
  try {
    const params = {};
    if (categoryId) params.category = categoryId;
    if (searchQuery) params.search = searchQuery;
    
    const response = await api.get('/products/', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
```
**Purpose**: Fetch products with optional filtering and search

**Parameters**:
- `categoryId` (optional): Filter by category
- `searchQuery` (optional): Search in title, description, tags

**Returns**: Array of product objects

**Used in**: Product listing page

---

## Common Patterns

### Error Handling
All frontend API functions use try-catch and return empty arrays on error:
```javascript
try {
  const response = await api.get('/endpoint/');
  return response.data;
} catch (error) {
  console.error('Error:', error);
  return [];
}
```

### Query Parameters
Backend filtering uses Django Filter Backend:
```python
# In views.py
filter_backends = [DjangoFilterBackend, filters.SearchFilter]
filterset_fields = {'category': ['exact']}
search_fields = ['title', 'description']
```

### Custom Response Format
Order/Request ViewSets wrap responses in success object:
```json
{
  "status": "success",
  "message": "Optional message",
  "data": { /* actual data */ }
}
```

---

## Database Query Optimization

### select_related() vs prefetch_related()

**ProductViewSet** example:
```python
queryset = Product.objects.all().select_related('category').prefetch_related('tags')
```

**select_related('category')**:
- For ForeignKey relationships (one-to-one, many-to-one)
- Uses SQL JOIN - fetches related data in single query
- Reduces queries from N+1 to 1

**prefetch_related('tags')**:
- For ManyToMany and reverse ForeignKey relationships
- Uses separate query + Python joins
- More efficient than lazy loading each tag

**Result**: List of 100 products without optimization = 201 queries (1 products + 100 categories + 100 tags). With optimization = 3 queries (1 products + 1 categories + 1 tags).

---

## API Authentication & Permissions

**Current Setup**: No authentication (public API)

**To Add Authentication** (example):
```python
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    # GET requests: anyone
    # POST/PUT/DELETE: authenticated users only
```

---

## Status Flow

### ServiceOrder Status Flow:
1. **pending** → Initial state (auto-set on creation)
2. **in_progress** → Admin starts working on order
3. **completed** → Order fulfilled
4. **cancelled** → Order cancelled

### QuoteRequest Status Flow:
1. **pending** → Initial state
2. **reviewed** → Admin reviewed the request
3. **quoted** → Quote sent to customer
4. **rejected** → Request declined

### HireRequest Status Flow:
1. **pending** → Initial state
2. **in_progress** → Work started
3. **completed** → Project completed
4. **rejected** → Request declined

**Note**: Status changes are admin-only operations via Django admin or API PATCH requests.

---

**Last Updated**: November 12, 2024
