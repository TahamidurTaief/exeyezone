from django.db import migrations, models


def generate_slugs(apps, schema_editor):
    Product = apps.get_model('api', 'Product')
    from django.utils.text import slugify

    for p in Product.objects.all():
        if not p.slug:
            base = slugify(p.title)[:200]
            slug = base
            i = 1
            while Product.objects.filter(slug=slug).exclude(pk=p.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            p.slug = slug
            p.save()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_product_slug'),
    ]

    operations = [
        migrations.RunPython(generate_slugs, reverse_code=migrations.RunPython.noop),
        migrations.AlterField(
            model_name='product',
            name='slug',
            field=models.SlugField(blank=False, null=False, max_length=255, unique=True),
        ),
    ]
