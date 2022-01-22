from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes

# Create your views here.

@authentication_classes([])
@permission_classes([])
class GrabURLInfo(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data['url'])
        return Response("Hello")
