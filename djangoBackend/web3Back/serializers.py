
from . import models
from rest_framework import serializers


class WaitListEmailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaitListEmails
        fields = ('email')
