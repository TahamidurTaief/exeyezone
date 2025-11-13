"""
Populate missing slugs for existing Product records.
Run: uv run python backend/scripts/populate_slugs.py
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import Product
from django.utils.text import slugify


def populate_slugs():
    print('Populating slugs for products without a slug...')
    count = 0
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
            count += 1
            print(f"Set slug for {p.title} -> {p.slug}")
    print(f"Done. {count} products updated.")


if __name__ == '__main__':
    populate_slugs()
