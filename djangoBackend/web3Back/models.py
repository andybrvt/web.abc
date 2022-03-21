from django.db import models

# Create your models here.
class WaitListEmails(models.Model):
    email = models.EmailField(max_length = 254)

    def __str__(self):
        return str(self.email)
