from django.urls import re_path
from EmployeeApp import views

urlpatterns = [
    re_path(r'^employee$',views.employeeView),
    re_path(r'^employee/([0-9]+)$', views.employeeView)
    ]

