from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("uploadCss", views.UploadFileCss.as_view(), name = "upload_css"),
    path('saveWebsite/<int:id>', views.SaveWebsite.as_view(), name = "save_website"),
    path("saveWebPreview", views.SaveWebsitePreview.as_view(), name ="save_web_preview"),
    path("getAllWebsite", views.GetAllWebsite.as_view(), name = "get_all_websites")
]
