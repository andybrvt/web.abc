from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path("uploadCss", views.UploadFileCss.as_view(), name = "upload_css"),
    path('saveWebsite/<int:id>', views.SaveWebsite.as_view(), name = "save_website"),
    path("saveWebPreview/<int:webId>", views.SaveWebsitePreview.as_view(), name ="save_web_preview"),
    path("saveOfficialWeb/<int:webId>", views.SaveWebsiteOfficial.as_view(), name = "save_web_official"),
    path("getAllWebsite", views.GetAllWebsite.as_view(), name = "get_all_websites"),
    path("loadWebsite/<int:id>", views.LoadWebsite.as_view(), name = "load_website"),
    path("createWebsite", views.CreateWebsite.as_view(), name = "create_website"),
    path('getWebsitePages/<int:webId>', views.GetWebsitePages.as_view(), name = "get_website_pages"),
    path('addWebsitePage/<int:webId>', views.AddWebsitePage.as_view(), name = "add_website_page"),
    path("deleteWebsitePage/<int:webId>",views.DeleteWebsitePage.as_view(), name = "delete_website_page"),
    path("getPageInfo/<int:webId>/<slug:pageId>", views.GetPageInfo.as_view(), name = "get_page_info"),
    path("getOfficialPageInfo/<int:webId>/<slug:pageId>", views.GetOfficialPageInfo.as_view(), name = "get_page_info"),
    path("isNewlyCreated/<int:webId>", views.GetNewlyCreated.as_view(), name = "get_newly_created"),
    path("getUserWebsites/<slug:userKey>", views.GetUserWebsites.as_view(), name = "get_user_websites"),
    path('getPersonalSiteUsername/<int:webId>', views.GetPersonalWebsiteUsername.as_view(), name = "invited_num"),
    path('getPersonalSiteProfilePic/<int:webId>', views.GetPersonalWebsitePic.as_view(), name = "invited_num"),
    path('checkDeployed/<int:webId>', views.CheckIfDeployedOrNot.as_view(), name = "check_deployed"),
    path('getWebsiteInfo/<int:webId>', views.GetWebsiteInfo.as_view(), name = "get_website"),
    # path('createWebsiteTest/<int:webId>', views.CreateWebsiteTest.as_view(),name = "image_test"),

]
