from rest_framework import serializers
from EmployeeApp.models import Employees

class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId', 
                'EmployeeName',
                'DepartmentName', 
                'DataOfJoining',
                'PhotoFileName')