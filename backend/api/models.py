from django.db import models
from ckeditor.fields import RichTextField



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
    description = models.TextField(null=True, blank=True)
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
