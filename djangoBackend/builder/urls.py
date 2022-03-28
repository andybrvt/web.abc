from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("uploadCss", views.UploadFileCss.as_view(), name = "upload_css"),
    path('saveWebsite/<int:id>', views.SaveWebsite.as_view(), name = "save_website"),
    path("saveWebPreview/<int:webId>", views.SaveWebsitePreview.as_view(), name ="save_web_preview"),
    path("getAllWebsite", views.GetAllWebsite.as_view(), name = "get_all_websites"),
    path("loadWebsite/<int:id>", views.LoadWebsite.as_view(), name = "load_website"),
    path("createWebsite", views.CreateWebsite.as_view(), name = "create_website"),
    path('getWebsitePages/<int:webId>', views.GetWebsitePages.as_view(), name = "get_website_pages"),
    path('addWebsitePage/<int:webId>', views.AddWebsitePage.as_view(), name = "add_website_page"),
    path("deleteWebsitePage/<int:webId>",views.DeleteWebsitePage.as_view(), name = "delete_website_page"),
    path("getPageInfo/<int:webId>/<slug:pageId>", views.GetPageInfo.as_view(), name = "get_page_info")
]
