from django.db import models


class Author(models.Model):
    first_name = models.CharField(max_length=63)
    last_name = models.CharField(max_length=63)
    birthday_year = models.PositiveIntegerField()
