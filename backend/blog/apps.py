from django.apps import AppConfig


class BlogConfig(AppConfig):
    """
    Configuration for the Blog application.
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blog'
    verbose_name = 'Blog Management'
    
    def ready(self):
        """
        Import signals when app is ready.
        Can be used for future signal implementations.
        """
        pass
