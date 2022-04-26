from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('GenerateNFTs', views.GenerateNFTs.as_view(), name = "testing_team_2"),
]
