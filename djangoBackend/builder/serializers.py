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


class OfficialWebsitePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OfficialWebsitePage
        fields = ("__all__")


class UploadImageSerializer(serializers.ModelSerializer):

    # get_socialCalItems  = serializers.StringRelatedField(many = True)


    class Meta:
        model = models.Website
        fields = ('__all__')
    def to_representation(self, instance):
        data = super().to_representation(instance)

        return data