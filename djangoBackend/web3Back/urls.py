from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("grabUrlInfo", views.GrabURLInfo.as_view(), name = "grab_url_info"),
    path('onWaitListAdd', views.WaitListEmailsView.as_view(), name = 'add_user_wait_list'),
]
