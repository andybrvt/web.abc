from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes

# Create your views here.
@authentication_classes([])
@permission_classes([])
class UploadFileCss(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data['css'])
        css = request.data['css']

        with open("../frontend/src/components/BuildFolder/Editor/PreviewPage.css", 'w') as f:
            print(css, file=f)

        return Response("stuff here")
