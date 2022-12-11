from django.db import models

# Create your models here.

class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=100)
    DepartmentName = models.CharField(max_length=100)
    DataOfJoining = models.DateField()
    PhotoFileName = models.CharField(max_length=100)
