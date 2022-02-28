from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
import json
from . import models
from . import serializers
from django.shortcuts import render, get_object_or_404


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
        # with open("../frontend/src/components/BuildFolder/Editor/PreviewPageJs.js", 'w') as f:
        #     print(js, file=f)



        return Response("stuff here")


@authentication_classes([])
@permission_classes([])
class SaveWebsitePreview(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data['numPages'])
        numPages = int(request.data["numPages"])
        webname = request.data['name']
        ownerKey = models.OwnerWalletKey.objects.create(
            publicKey = "1"
        )
        website = models.Website.objects.create(
            owner = ownerKey
        )
        pages = []
        for i in range(numPages):
            # load up page info dict

            page = json.loads(request.data[f"{i}"])
            print(page['name'])
            print(page['html'])
            print(page['css'])
            print(page['js'])

            page = models.WebsitePage.objects.create(
                name = page['name'],
                html = page['html'],
                css = page['css'],
                js = page['js']
            )
            pages.append(page)


        website.pages.set(pages)

        website.save()
        return Response("stuff here")

@authentication_classes([])
@permission_classes([])
class GetAllWebsite(APIView):
    def get(self, request, *args, **kwargs):

        websites = models.Website.objects.all()
        print(websites)
        serializer_website = serializers.WebSiteSerializer(websites,many = True).data
        print(serializer_website)
        return Response(serializer_website)

@authentication_classes([])
@permission_classes([])
# fix this later
class SaveWebsite(APIView):
    def post(self, request, id, *args, **kwargs):
        # You are gonna need the id

        curWebsite = models.Website.objects.filter(id = id )

        # curWebsite = models.Website.objects.get_or_create()
        if len(curWebsite) == 0:
            # if there is no website by that id, you make a new one
            curWebsite = models.Website.objects.create(
                websiteAssets = json.dumps(request.data)
            )
        else:
            # just update the one you have
            curWebsite.update(websiteAssets = json.dumps(request.data))
        print(type(request.data))
        print(len(curWebsite))
        return Response("stuff here")

class CreateWebsite(APIView):
    def post(self, request, *args, **kwargs):
        print('create website here')

        print(request.data)
        address, created = models.OwnerWalletKey.objects.get_or_create(
            publicKey = request.data['owner']
        )
        website = models.Website.objects.create(
            owner = address,
            name = request.data['name']
        )
        websiteId = website.id
        return Response(websiteId)

@authentication_classes([])
@permission_classes([])
class LoadWebsite(APIView):
    def get(self, request, *args, **kwargs):
        print('load website')
        curWebsite = models.Website.objects.filter(id = 2)
        assets = curWebsite[0].websiteAssets
        return Response(json.loads(assets))
