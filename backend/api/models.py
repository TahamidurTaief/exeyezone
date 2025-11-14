from django.db import models
from ckeditor.fields import RichTextField
from django.utils.text import slugify



class ProductCategory(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name="Product category name",
        help_text="Unique name for this product category",
        error_messages={
            'unique': 'A product category with this name already exists.',
            'blank': 'Please provide a category name.'
        }
    )

    def __str__(self):
        return self.name


class ServiceCategory(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name="Service category name",
        help_text="Unique name for this service category",
        error_messages={
            'unique': 'A service category with this name already exists.',
            'blank': 'Please provide a category name.'
        }
    )

    def __str__(self):
        return self.name


class CourseCategory(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name="Course category name",
        help_text="Unique name for this course category",
        error_messages={
            'unique': 'A course category with this name already exists.',
            'blank': 'Please provide a category name.'
        }
    )
    total_courses = models.IntegerField(
        default=0,
        verbose_name="Total courses",
        help_text="Number of courses under this category",
        error_messages={'invalid': 'Enter a valid integer.'}
    )
    total_students = models.IntegerField(
        default=0,
        verbose_name="Total students",
        help_text="Total enrolled students for this category",
        error_messages={'invalid': 'Enter a valid integer.'}
    )
    total_instructors = models.IntegerField(
        default=0,
        verbose_name="Total instructors",
        help_text="Number of instructors for this category",
        error_messages={'invalid': 'Enter a valid integer.'}
    )
    total_reviews = models.IntegerField(
        default=0,
        verbose_name="Total reviews",
        help_text="Number of reviews collected for this category",
        error_messages={'invalid': 'Enter a valid integer.'}
    )
    total_rating = models.FloatField(
        default=0,
        verbose_name="Total rating",
        help_text="Aggregated rating for this category",
        error_messages={'invalid': 'Enter a valid number.'}
    )


    def __str__(self):
        return self.name
    

    
class Tag(models.Model):
    name = models.CharField(
        max_length=50,
        unique=True,
        verbose_name="Tag name",
        help_text="Unique tag used to label products and courses",
        error_messages={
            'unique': 'A tag with this name already exists.',
            'blank': 'Please provide a tag name.'
        }
    )

    def __str__(self):
        return self.name
    
    

class Product(models.Model):
    product_img = models.ImageField(
        upload_to='products/',
        default='img/no_image.jpg',
        verbose_name='Product image',
        help_text='Main image for the product. Defaults to a placeholder if not provided.',
        error_messages={'invalid': 'Upload a valid image file.'}
    )
    title = models.CharField(
        max_length=200,
        verbose_name='Product title',
        help_text='Short, descriptive title for the product',
        error_messages={'blank': 'Please provide a product title.'}
    )
    slug = models.SlugField(
        max_length=255,
        unique=True,
        blank=True,
        verbose_name='Product slug',
        help_text='URL-friendly unique identifier (auto-generated from title if blank)'
    )
    description = models.TextField(
        null=True,
        blank=True,
        verbose_name='Product description',
        help_text='Full product description (HTML allowed)'
    )
    short_description = models.TextField(
        max_length=500,
        null=True,
        blank=True,
        verbose_name='Short description',
        help_text='Short summary shown on listings'
    )
    category = models.ForeignKey(
        ProductCategory,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name='Product category',
        help_text='Category for this product'
    )
    tags = models.ManyToManyField(Tag, blank=True, verbose_name='Tags', help_text='Associated tags')
    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
        verbose_name='Price',
        help_text='Product price in the configured currency',
        error_messages={'invalid': 'Enter a valid price.'}
    )
    sales_count = models.PositiveIntegerField(
        default=0,
        verbose_name='Sales count',
        help_text='Number of completed sales',
        error_messages={'invalid': 'Enter a valid integer.'}
    )
    rating = models.DecimalField(
        max_digits=3,
        decimal_places=1,
        default=0,
        verbose_name='Rating',
        help_text='Average rating (0-5)',
        error_messages={'invalid': 'Enter a valid rating.'}
    )
    demo = models.URLField(blank=True, null=True, verbose_name='Demo URL', help_text='Optional demo URL')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        # Auto-generate a unique slug from title when not provided
        if not self.slug:
            base = slugify(self.title)[:200]
            slug = base
            i = 1
            while Product.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            self.slug = slug
        super().save(*args, **kwargs)


class ProductFeaturedImage(models.Model):
    product = models.ForeignKey(Product, related_name='featured_images', on_delete=models.CASCADE, verbose_name='Product')
    image = models.ImageField(
        upload_to='products/featured/',
        default='img/no_image.jpg',
        verbose_name='Featured image',
        help_text='Additional featured image for product',
        error_messages={'invalid': 'Upload a valid image file.'}
    )
    order = models.PositiveIntegerField(
        default=0,
        verbose_name='Display order',
        help_text='Ordering index for this featured image'
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Featured Image {self.order} for {self.product.title}"


class ProductFeature(models.Model):
    product = models.ForeignKey(Product, related_name='features', on_delete=models.CASCADE, verbose_name='Product')
    name = models.CharField(
        max_length=100,
        verbose_name='Feature name',
        help_text='Short title of the product feature',
        error_messages={'blank': 'Feature name cannot be blank.'}
    )
    icon = models.CharField(max_length=100, blank=True, null=True, verbose_name='Icon', help_text='Icon class or name')
    order = models.PositiveIntegerField(default=0, verbose_name='Display order')

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.name} - {self.product.title}"


class ProductScreenshot(models.Model):
    SCREEN_TYPE_CHOICES = [
        ('mobile', 'Mobile Screen'),
        ('desktop', 'Desktop Screen'),
    ]
    
    product = models.ForeignKey(Product, related_name='screenshots', on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to='products/screenshots/',
        default='img/no_image.jpg',
        verbose_name='Screenshot',
        help_text='Screenshot image for product',
        error_messages={'invalid': 'Upload a valid image file.'}
    )
    title = models.CharField(
        max_length=200,
        blank=True,
        null=True,
        help_text="Screenshot title/description",
        verbose_name='Screenshot title'
    )
    screen_type = models.CharField(max_length=10, choices=SCREEN_TYPE_CHOICES, verbose_name='Screen type')
    link = models.URLField(blank=True, null=True, help_text="Optional link when screenshot is clicked", verbose_name='Optional link')
    order = models.PositiveIntegerField(default=0, verbose_name='Display order')

    class Meta:
        ordering = ['order']

    def __str__(self):
        title_text = f" - {self.title}" if self.title else ""
        return f"{self.screen_type} Screenshot {self.order}{title_text} for {self.product.title}"


class ProductTechnology(models.Model):
    product = models.ForeignKey(Product, related_name='technologies', on_delete=models.CASCADE, verbose_name='Product')
    name = models.CharField(max_length=100, verbose_name='Technology name', help_text='Name of technology used')
    icon = models.CharField(max_length=100, blank=True, null=True, verbose_name='Icon', help_text='Icon class or name')
    order = models.PositiveIntegerField(default=0, verbose_name='Display order')

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.name} - {self.product.title}"
    



class Course(models.Model):
    COURSE_TYPE_CHOICES = [
        ('Live', 'Live'),
        ('Recorded', 'Recorded'),
    ]
    LANGUAGE_CHOICES = [
        ('English', 'English'),
        ('Bengali', 'Bengali'),
        ('Hindi', 'Hindi'),
    ]
    
    # Basic Info
    img = models.ImageField(
        upload_to='courses/',
        default='img/no_image.jpg',
        verbose_name='Course image',
        help_text='Main image for the course',
        error_messages={'invalid': 'Upload a valid image file.'}
    )
    title = models.CharField(max_length=200, verbose_name='Course title', help_text='Course title')
    slug = models.SlugField(max_length=255, unique=True, blank=True, verbose_name='Course slug', help_text='Auto-generated from title if blank')
    short_description = models.TextField(max_length=500, blank=True, null=True, verbose_name='Short description')
    description = RichTextField(blank=True, null=True, verbose_name='Full description', help_text='Rich HTML description')
    
    # Course Details
    category = models.ForeignKey(CourseCategory, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Course category')
    tags = models.ManyToManyField(Tag, blank=True, verbose_name='Tags', help_text='Tags for this course')
    course_type = models.CharField(max_length=20, choices=COURSE_TYPE_CHOICES, verbose_name='Course type')
    instructor = models.CharField(max_length=100, default='Instructor', verbose_name='Instructor')
    language = models.CharField(max_length=50, choices=LANGUAGE_CHOICES, default='English', verbose_name='Language')
    
    # Pricing
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Price', help_text='Course price')
    original_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True, verbose_name='Original price')
    
    # Stats
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0, verbose_name='Rating')
    students_count = models.PositiveIntegerField(default=0, verbose_name='Students count')
    
    # Media
    video_url = models.URLField(blank=True, null=True, help_text="YouTube video ID for preview", verbose_name='Video URL')
    
    # Dates
    deadline = models.DateField(null=True, blank=True, verbose_name='Enrollment deadline')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        # Auto-generate slug from title
        if not self.slug:
            base = slugify(self.title)[:200]
            slug = base
            i = 1
            while Course.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            self.slug = slug
        super().save(*args, **kwargs)


class CourseSection(models.Model):
    """Course curriculum sections"""
    course = models.ForeignKey(Course, related_name='sections', on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name='Section title', help_text='Title of this course section')
    order = models.PositiveIntegerField(default=0, verbose_name='Display order')
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.course.title} - {self.title}"


class CourseLesson(models.Model):
    """Individual lessons within a section"""
    section = models.ForeignKey(CourseSection, related_name='lessons', on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name='Lesson title')
    duration = models.CharField(max_length=20, help_text="e.g., 15:30", verbose_name='Duration')
    is_preview = models.BooleanField(default=False, verbose_name='Is preview')
    video_id = models.CharField(max_length=100, blank=True, null=True, help_text="YouTube video ID", verbose_name='Video ID')
    order = models.PositiveIntegerField(default=0, verbose_name='Display order')
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.title


class CourseWhatYouLearn(models.Model):
    """What students will learn from the course"""
    course = models.ForeignKey(Course, related_name='what_you_learn', on_delete=models.CASCADE)
    text = models.CharField(max_length=300, verbose_name='Learning outcome')
    order = models.PositiveIntegerField(default=0, verbose_name='Display order')
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.text[:50]


class CourseRequirement(models.Model):
    """Course requirements/prerequisites"""
    course = models.ForeignKey(Course, related_name='requirements', on_delete=models.CASCADE)
    text = models.CharField(max_length=300, verbose_name='Requirement')
    order = models.PositiveIntegerField(default=0, verbose_name='Display order')
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.text[:50]


class CourseIncludes(models.Model):
    """What's included in the course"""
    ICON_CHOICES = [
        ('video', 'Video'),
        ('document', 'Document'),
        ('download', 'Download'),
        ('infinity', 'Lifetime Access'),
        ('mobile', 'Mobile Access'),
        ('trophy', 'Certificate'),
    ]
    
    course = models.ForeignKey(Course, related_name='includes', on_delete=models.CASCADE, verbose_name='Course')
    icon = models.CharField(max_length=20, choices=ICON_CHOICES, default='video', verbose_name='Icon')
    text = models.CharField(max_length=200, verbose_name='Included item')
    order = models.PositiveIntegerField(default=0, verbose_name='Display order')
    
    class Meta:
        ordering = ['order']
        verbose_name_plural = "Course Includes"
    
    def __str__(self):
        return self.text


class CourseRegistration(models.Model):
    """Course registration/enrollment requests"""
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='registrations', verbose_name='Course')
    name = models.CharField(max_length=100, verbose_name='Registrant name')
    phone = models.CharField(max_length=20, verbose_name='Contact phone')
    email = models.EmailField(verbose_name='Email address')
    occupation = models.CharField(max_length=100, verbose_name='Occupation')
    message = models.TextField(blank=True, null=True, verbose_name='Message')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending', verbose_name='Registration status')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')
    
    def __str__(self):
        return f"{self.name} - {self.course.title}"



class Service(models.Model):
    title = models.CharField(max_length=200, verbose_name='Service title', help_text='Title of the service')
    description = RichTextField(blank=True, default="", verbose_name='Description')
    category = models.ForeignKey(ServiceCategory, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Service category')
    rating = models.FloatField(default=0, verbose_name='Rating')
    purchase_number = models.PositiveIntegerField(default=0, verbose_name='Purchase number')
    delivery_title = models.CharField(max_length=255, verbose_name='Delivery title', help_text='Short description of deliverable')

    def __str__(self):
        return self.title


class ServiceImage(models.Model):
    image = models.ImageField(
        upload_to='services/',
        default='img/no_image.jpg',
        verbose_name='Service image',
        help_text='Image for the service',
        error_messages={'invalid': 'Upload a valid image file.'}
    )
    service = models.ForeignKey(Service, related_name='service_images', on_delete=models.CASCADE, null=True, blank=True, verbose_name='Service')

    def __str__(self):
        return f"Image for {self.service.title}"


class ServicePackage(models.Model):
    PACKAGE_CHOICES = [
        ('Basic', 'Basic'),
        ('Standard', 'Standard'),
        ('Premium', 'Premium'),
    ]

    service = models.ForeignKey(Service, related_name='service_packages', on_delete=models.CASCADE, null=True, blank=True, verbose_name='Service')
    package_type = models.CharField(max_length=10, choices=PACKAGE_CHOICES, default='Basic', blank=True, null=True, verbose_name='Package type')
    description = models.TextField(verbose_name='Package description')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Price')
    delivery_time = models.IntegerField(help_text="Delivery time in days", verbose_name='Delivery time (days)')
    revision_count = models.IntegerField(verbose_name='Revision count')

    class Meta:
        unique_together = ('service', 'package_type')

    def __str__(self):
        return f"{self.package_type} package for {self.service.title}"
    
    

class TeamMember(models.Model):
    profile_img = models.ImageField(
        upload_to='team/',
        default='img/no_image.jpg',
        verbose_name='Profile image',
        help_text='Profile photo for the team member',
        error_messages={'invalid': 'Upload a valid image file.'}
    )
    name = models.CharField(max_length=100, verbose_name='Full name')
    position = models.CharField(max_length=100, verbose_name='Position')
    description = models.TextField(verbose_name='Bio/description')
    facebook = models.URLField(blank=True, verbose_name='Facebook URL')
    linkedin = models.URLField(blank=True, verbose_name='LinkedIn URL')
    github = models.URLField(blank=True, verbose_name='GitHub URL')
    personal_website = models.URLField(blank=True, verbose_name='Personal website')

    def __str__(self):
        return self.name
    



class Blog(models.Model):
    title = models.CharField(max_length=255, verbose_name='Blog title')
    slug = models.SlugField(unique=True, verbose_name='Blog slug')
    image = models.ImageField(upload_to='blogs/', default='img/no_image.jpg', verbose_name='Blog image', help_text='Main image for the blog')
    author = models.CharField(max_length=100, verbose_name='Author name')
    content = models.TextField(verbose_name='Content')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')

    def __str__(self):
        return self.title





class ServiceOrder(models.Model):
    SERVICE_STATUS = [
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    full_name = models.CharField(max_length=100, verbose_name='Full name')
    email = models.EmailField(verbose_name='Email')
    contact_number = models.CharField(max_length=20, verbose_name='Contact number')
    message = models.TextField(blank=True, null=True, verbose_name='Message')
    service_title = models.CharField(max_length=200, verbose_name='Service title')
    package_type = models.CharField(max_length=100, verbose_name='Package type')
    status = models.CharField(max_length=20, choices=SERVICE_STATUS, default='pending', verbose_name='Order status')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')

    def __str__(self):
        return f"Order #{self.id} - {self.service_title} ({self.package_type})"



class QuoteRequest(models.Model):
    QUOTE_STATUS = [
        ('pending', 'Pending'),
        ('reviewed', 'Reviewed'),
        ('quoted', 'Quoted'),
        ('rejected', 'Rejected'),
    ]

    name = models.CharField(max_length=100, verbose_name='Requester name')
    email = models.EmailField(verbose_name='Email')
    contact_number = models.CharField(max_length=20, verbose_name='Contact number')
    description = models.TextField(verbose_name='Description')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, blank=True, related_name='quote_requests', verbose_name='Related product')
    status = models.CharField(max_length=20, choices=QUOTE_STATUS, default='pending', verbose_name='Quote status')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')

    class Meta:
        verbose_name = 'Product Quote'
        verbose_name_plural = 'Product Quotes'

    def __str__(self):
        product_info = f" for {self.product.title}" if self.product else ""
        return f"Quote #{self.id} - {self.name}{product_info}"
    



class HireRequest(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('rejected', 'Rejected'),
    ]

    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True, verbose_name='Service')
    package = models.ForeignKey(ServicePackage, on_delete=models.SET_NULL, null=True, verbose_name='Package')
    name = models.CharField(max_length=100, verbose_name='Requester name')
    email = models.EmailField(verbose_name='Email')
    contact_number = models.CharField(max_length=20, verbose_name='Contact number')
    description = models.TextField(verbose_name='Description')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending', verbose_name='Request status')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')

    def __str__(self):
        return f"Hire Request #{self.id} - {self.name}"