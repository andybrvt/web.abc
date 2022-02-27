from . import models
from rest_framework import serializers


class WebSiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Website
        fields = ('__all__')

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.WebsitePage
        fields = ("__all__")
