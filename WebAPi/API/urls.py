
from django.urls import include, re_path
from django.contrib import admin
from django.urls import path

from django.conf.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^', include('EmployeeApp.urls'))
]


