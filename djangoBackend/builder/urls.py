from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("uploadCss", views.UploadFileCss.as_view(), name = "upload_css"),
    path("saveWebPreview", views.SaveWebsitePreview.as_view(), name ="save_web_preview")
]
