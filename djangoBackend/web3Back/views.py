from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
from bs4 import BeautifulSoup as bs
from django.http import JsonResponse
from urllib.parse import urljoin
# Create your views here.
import requests



def findCss(list):
    finalCss=[]
    for url in list:
        if(url.endswith(".css", len(url)-4, len(url))):
            # print(url)
            # res = requests.get(url)
            # src = res.content
            # soup = bs(src, "lxml")
            # cssText = soup.find_all(
            #     text= True
            # )

            finalCss.append(url)


    return finalCss


@authentication_classes([])
@permission_classes([])
class GrabURLInfo(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data['url'])
        url=request.data['url']
        res = requests.get(request.data['url'])
        src = res.content
        soup = bs(src, "lxml")

        whole = soup.prettify()
        featured_challenges = soup.find_all(
            "div"
        )

        session = requests.Session()
        # set the User-agent as a regular browser
        session.headers["User-Agent"] = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"

        # get the HTML content
        html = session.get(url).content

        soup = bs(html, "html.parser")
        print(soup)

        script_files = []

        for script in soup.find_all("script"):
            if script.attrs.get("src"):
                # if the tag has the attribute 'src'
                script_url = urljoin(url, script.attrs.get("src"))
                script_files.append(script_url)

        # get the CSS files
        css_files = []

        for css in soup.find_all("link"):
            if css.attrs.get("href"):
                # if the link tag has the 'href' attribute
                css_url = urljoin(url, css.attrs.get("href"))
                css_files.append(css_url)


        print("Total script files in the page:", len(script_files))
        print("Total CSS files in the page:", len(css_files))

        # with open("css_files.txt", "w") as f:
        #     for css_file in css_files:
        #         print(css_file, file=f)
        #
        # with open("html_files.txt", "w") as f:
        #     print(whole, file = f)

        cssText = findCss(css_files)



        return JsonResponse([whole,cssText], safe=False)
        # return JsonResponse([css_files], safe=False)
