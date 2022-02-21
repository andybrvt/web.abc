from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("uploadCss", views.UploadFileCss.as_view(), name = "upload_css")
]
