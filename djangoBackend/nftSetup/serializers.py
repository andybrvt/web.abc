from . import models
from rest_framework import serializers
import base64
from django.conf import settings



class ProjectSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = ("__all__")


class MiniProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model= models.Project
        fields= (
            "baseURI",
            "contract",
            'testWebsite'
        )


class GeneratedOutSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.GeneratedOut
        fields = ("nftImage", "project",)
    def to_representation(self, instance):
        data = super().to_representation(instance)
        with open(settings.MEDIA_ROOT+"/"+data['nftImage'].lstrip('/media'), "rb") as image_file:
            data['base64Img'] = base64.b64encode(image_file.read())
        return data

class GeneratedOutMetadataSerializers(serializers.ModelSerializer):

    class Meta:
        model = models.GeneratedOut
        fields = ('id', 'metaData')
