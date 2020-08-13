from django.conf.urls import url
from django.urls import path
from taller import views

urlpatterns = [
    path('templates/', views.index, name='index'),
    ]