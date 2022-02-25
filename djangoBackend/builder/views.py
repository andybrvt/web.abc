from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
import json

# Create your views here.
@authentication_classes([])
@permission_classes([])
class UploadFileCss(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data['css'])
        css = request.data['css']
        js = request.data['js']

        with open("../frontend/src/components/BuildFolder/Editor/PreviewPage.css", 'w') as f:
            print(css, file=f)
        with open("../frontend/src/components/BuildFolder/Editor/PreviewPageJs.js", 'w') as f:
            print(js, file=f)



        return Response("stuff here")


@authentication_classes([])
@permission_classes([])
class SaveWebsitePreview(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data['numPages'])
        numPages = int(request.data["numPages"])

        for i in range(numPages):
            # load up page info dict

            page = json.loads(request.data[f"{i}"])
            print(page['name'])

        return Response("stuff here")
