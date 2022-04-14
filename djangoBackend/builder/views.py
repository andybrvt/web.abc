from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
import json
from . import models
from . import serializers
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect

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


"""
    Save the preview of the website in the form of its
    HTML, CSS, and JS. Since, the website is already created
    you will just get the website using the id,

    DELETE LATER
    but then you have
    to figure out if the webpage is already created, and you update it
    or if you made a new page so you have to add it in or if they deleted
    one, so you take it out.

    Use the ordering to figure out the page number that you have to update for

    1. Figure out how to update with just the same number of pages
    2. Figure out how to update with one added
    3. Figure out how to update with one deleted
    4. Figure out when they change pages or delete alot or even all


"""
@authentication_classes([])
@permission_classes([])
class SaveWebsitePreview(APIView):
    # When you are saving a website preview, the website is already created
    # so you don't have to do get or create
    def post(self, request, webId, *args, **kwargs):
        print(webId)
        print(request.data['owner'])
        print(request.data['numPages'])

        numPages = int(request.data["numPages"])
        webname = request.data['name']
        ownerKey, created = models.OwnerWalletKey.objects.get_or_create(
            publicKey = request.data['owner']
        )
        website = models.Website.objects.get(
            id = webId
        )

        # at this point all pages exist becuase everytime you add or delete a
        # page, it will already be saved, so you just need to get the id of the pages
        # to update them


        pages = []
        for i in range(numPages):
            pageDict = json.loads(request.data[f"{i}"])

            print(pageDict['pageId'].isdigit())

            # If true use normal id, if false, use secondaryId
            if pageDict['pageId'].isdigit():
                page, created = models.WebsitePage.objects.get_or_create(
                    id = pageDict['pageId']
                )
            else:
                page, created = models.WebsitePage.objects.get_or_create(
                    secondaryId = pageDict['pageId']
                )

            print(page)

            page.name = pageDict['name']
            page.html = pageDict['html']
            page.css = pageDict['css']
            page.js = pageDict['js']
            page.save()


        return Response("stuff here")

class SaveWebsiteOfficial(APIView):

    def post(self, request, webId, *args, **kwargs):

        numPages = int(request.data["numPages"])
        webname = request.data['name']
        ownerKey, created = models.OwnerWalletKey.objects.get_or_create(
            publicKey = request.data['owner']
        )
        website = models.Website.objects.get(
            id = webId
        )
        pages = []
        for i in range(numPages):
            pageDict = json.loads(request.data[f"{i}"])

            print(pageDict['pageId'].isdigit())

            if pageDict['pageId'].isdigit():
                page, created = models.OfficialWebsitePage.objects.get_or_create(
                    id = pageDict['pageId']
                )
            else:
                page, created = models.OfficialWebsitePage.objects.get_or_create(
                    secondaryId = pageDict['pageId']
                )

            page.name = pageDict['name']
            page.html = pageDict['html']
            page.css = pageDict['css']
            page.js = pageDict['js']
            page.save()

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
            curWebsite.update(
                newlyCreated = False,
                websiteAssets = json.dumps(request.data))
        return Response("stuff here")

class CreateWebsite(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data['owner'])

        print(request.data['type'])
        address, created = models.OwnerWalletKey.objects.get_or_create(
            publicKey = request.data['owner']
        )
        website = models.Website.objects.create(
            owner = address,
            name = request.data['name'],
            type = request.data['type'],
            websiteUserName = request.data['websiteUserName'],
            profilePic = request.data['profilePic'],
        )
        websiteId = website.id
        return Response(websiteId)

@authentication_classes([])
@permission_classes([])
class LoadWebsite(APIView):
    def get(self, request, id, *args, **kwargs):
        print('load website')
        curWebsite = models.Website.objects.filter(id = id)
        try:
            assets = curWebsite[0].websiteAssets
            return Response(json.loads(assets))
        except:
            return Response({})


"""
    Used to get all the pages of a given website
"""
@authentication_classes([])
@permission_classes([])
class GetWebsitePages(APIView):

    def get(self, request, webId, *args, **kwargs):

        curWebsite = get_object_or_404(models.Website, id = webId )
        curWebsiteSerializer= serializers.WebSiteSerializer(curWebsite, many = False).data
        pages = curWebsiteSerializer['pages']
        return Response(pages)


"""
    Create and adds a new website page to a website
"""
@authentication_classes([])
@permission_classes([])
class AddWebsitePage(APIView):
    def post(self, request, webId, *args, **kwargs):

        # first and formost, get the website
        curWebsite = get_object_or_404(models.Website, id = webId )
        page = models.WebsitePage.objects.create(
            name = request.data['name']
        )
        curWebsite.pages.add(page)
        curWebsite.save()

        curWebsiteSerializer = serializers.WebSiteSerializer(curWebsite, many = False).data
        content = {
            "pageId": page.id,
            "pages": curWebsiteSerializer['pages']
        }
        return Response(content)


@authentication_classes([])
@permission_classes([])
class DeleteWebsitePage(APIView):

    def post(self, request, webId, *args, **kwargs):

        try:
            models.WebsitePage.objects.get(id = webId).delete()
        except:
            print('object not found')

        return Response('delete the page here')

"""
    This will grab the html, css, and js of a website page

"""
@authentication_classes([])
@permission_classes([])
class GetPageInfo(APIView):
    def get(self, request, webId, pageId, *args, **kwargs):
        try:
            if pageId.isdigit():
                page = models.WebsitePage.objects.get(id = pageId)
            else:
                print('here here')
                page = models.WebsitePage.objects.filter(secondaryId = pageId)[0]
                print(page)
            serializedPage = serializers.PageSerializer(page, many = False).data
            css = serializedPage['css']
            # with open("../frontend/src/components/BuildFolder/Editor/PreviewPage.css", 'w') as f:
            #     print(css, file=f)
            # write in the page here
            content = {
                'html': serializedPage['html'],
                'css': serializedPage['css'],
                'js': serializedPage['js'],
            }
            print(content)
            return Response(content)
        except:
            print('page does not exist')
        return Response("what is the response here")


@authentication_classes([])
@permission_classes([])
class GetOfficialPageInfo(APIView):
    def get(self, request, webId, pageId, *args, **kwargs):
        try:
            if pageId.isdigit():
                page = models.OfficialWebsitePage.objects.get(id = pageId)
            else:
                print('here here')
                page = models.OfficialWebsitePage.objects.filter(secondaryId = pageId)[0]
                print(page)
            serializedPage = serializers.OfficialWebsitePageSerializer(page, many = False).data
            css = serializedPage['css']
            # with open("../frontend/src/components/BuildFolder/Editor/PreviewPage.css", 'w') as f:
            #     print(css, file=f)
            # write in the page here
            content = {
                'html': serializedPage['html'],
                'css': serializedPage['css'],
                'js': serializedPage['js'],
            }
            print(content)
            return Response(content)
        except:
            print('page does not exist')
        return Response("what is the response here")


@authentication_classes([])
@permission_classes([])
# check if the website is newly created
class GetNewlyCreated(APIView):
    def get(self, request, webId, *args, **kwargs):

        try:
            curWebsite = get_object_or_404(models.Website, id = webId)
            print(curWebsite.newlyCreated)
        except:
            print('cannot find website')
        return Response(curWebsite.newlyCreated)

@authentication_classes([])
@permission_classes([])
class GetUserWebsites(APIView):
    def get(self, request, userKey, *args, **kwargs):
        print(userKey)

        curUser, create = models.OwnerWalletKey.objects.get_or_create(
            publicKey = userKey
        )

        websites = models.Website.objects.filter(
            owner = curUser
        ).order_by('-lastChanged')
        serializer_website = serializers.WebSiteSerializer(websites,many = True).data


        return Response(serializer_website)


@authentication_classes([])
@permission_classes([])
# check if the website is newly created
class GetPersonalWebsiteUsername(APIView):
    def get(self, request, webId, *args, **kwargs):

        try:
            curWebsite = get_object_or_404(models.Website, id = webId)
            print(curWebsite.websiteUserName)
        except:
            print('cannot find website')
        return Response(curWebsite.websiteUserName)




@authentication_classes([])
@permission_classes([])
# check if the website is newly created
class GetPersonalWebsitePic(APIView):
    def get(self, request, webId, *args, **kwargs):

        try:
            curWebsite = get_object_or_404(models.Website, id = webId)
            print(curWebsite.newlyCreated)
        except:
            print('cannot find website')
        return Response(curWebsite.profilePic)



# class CreateWebsiteTest(viewsets.ModelViewSet):
#     def post(self, request, *args, **kwargs):
#         queryset = models.Website.objects.all()
#         serializer_class= serializers.WebSiteSerializer
#         address, created = models.OwnerWalletKey.objects.get_or_create(
#             publicKey = request.data['owner']
#         )
    
#         print(request.data)
#         website = models.Website.objects.create(
#             owner = address,
#             name = request.data['name'],
#             type = request.data['type'],
#             websiteUserName = request.data['websiteUserName'],
#             profilePic = request.data['profilePic'],
#         )
#         websiteId = website.id
#         return HttpResponse({'websiteId': websiteId}, status=200)