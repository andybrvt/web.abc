from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("grabUrlInfo", views.GrabURLInfo.as_view(), name = "grab_url_info")
]
