from django.db import models
from ckeditor.fields import RichTextField
from django.utils.text import slugify



class ProductCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class ServiceCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class CourseCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    total_courses = models.IntegerField(default=0)
    total_students = models.IntegerField(default=0)
    total_instructors = models.IntegerField(default=0)
    total_reviews = models.IntegerField(default=0)
    total_rating = models.FloatField(default=0)


    def __str__(self):
        return self.name
    

    
class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name
    
    

class Product(models.Model):
    product_img = models.ImageField(upload_to='products/')
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    description = models.TextField(null=True, blank=True)
    short_description = models.TextField(max_length=500, null=True, blank=True)
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    sales_count = models.PositiveIntegerField(default=0)
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0)
    demo = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

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
    product = models.ForeignKey(Product, related_name='featured_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products/featured/')
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Featured Image {self.order} for {self.product.title}"


class ProductFeature(models.Model):
    product = models.ForeignKey(Product, related_name='features', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=100, blank=True, null=True)  # Icon class or name
    order = models.PositiveIntegerField(default=0)

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
    image = models.ImageField(upload_to='products/screenshots/')
    title = models.CharField(max_length=200, blank=True, null=True, help_text="Screenshot title/description")
    screen_type = models.CharField(max_length=10, choices=SCREEN_TYPE_CHOICES)
    link = models.URLField(blank=True, null=True, help_text="Optional link when screenshot is clicked")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        title_text = f" - {self.title}" if self.title else ""
        return f"{self.screen_type} Screenshot {self.order}{title_text} for {self.product.title}"


class ProductTechnology(models.Model):
    product = models.ForeignKey(Product, related_name='technologies', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=100, blank=True, null=True)  # Icon class or name
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.name} - {self.product.title}"
    



class Course(models.Model):
    COURSE_TYPE_CHOICES = [
        ('Live', 'Live'),
        ('Recorded', 'Recorded'),
    ]
    img = models.ImageField(upload_to='courses/')
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(CourseCategory, on_delete=models.SET_NULL, null=True, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)
    course_type = models.CharField(max_length=20, choices=COURSE_TYPE_CHOICES)
    deadline = models.DateField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title



class Service(models.Model):
    title = models.CharField(max_length=200)
    description = RichTextField(blank=True, default="")
    category = models.ForeignKey(ServiceCategory, on_delete=models.SET_NULL, null=True, blank=True)
    rating = models.FloatField(default=0)
    purchase_number = models.PositiveIntegerField(default=0)
    delivery_title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class ServiceImage(models.Model):
    image = models.ImageField(upload_to='services/')
    service = models.ForeignKey(Service, related_name='service_images', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"Image for {self.service.title}"


class ServicePackage(models.Model):
    PACKAGE_CHOICES = [
        ('Basic', 'Basic'),
        ('Standard', 'Standard'),
        ('Premium', 'Premium'),
    ]

    service = models.ForeignKey(Service, related_name='service_packages', on_delete=models.CASCADE, null=True, blank=True)
    package_type = models.CharField(max_length=10, choices=PACKAGE_CHOICES, default='Basic', blank=True, null=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_time = models.IntegerField(help_text="Delivery time in days")
    revision_count = models.IntegerField()

    class Meta:
        unique_together = ('service', 'package_type')

    def __str__(self):
        return f"{self.package_type} package for {self.service.title}"
    
    

class TeamMember(models.Model):
    profile_img = models.ImageField(upload_to='team/')
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    description = models.TextField()
    facebook = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)
    personal_website = models.URLField(blank=True)

    def __str__(self):
        return self.name
    



class Blog(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to='blogs/')
    author = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title





class ServiceOrder(models.Model):
    SERVICE_STATUS = [
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)
    message = models.TextField(blank=True, null=True)
    service_title = models.CharField(max_length=200)
    package_type = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=SERVICE_STATUS, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order #{self.id} - {self.service_title} ({self.package_type})"



class QuoteRequest(models.Model):
    QUOTE_STATUS = [
        ('pending', 'Pending'),
        ('reviewed', 'Reviewed'),
        ('quoted', 'Quoted'),
        ('rejected', 'Rejected'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)
    description = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, blank=True, related_name='quote_requests')
    status = models.CharField(max_length=20, choices=QUOTE_STATUS, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

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

    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True)
    package = models.ForeignKey(ServicePackage, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Hire Request #{self.id} - {self.name}"