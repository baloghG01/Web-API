from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse


from EmployeeApp.models import Employees
from EmployeeApp.serializers import EmployeesSerializer


@csrf_exempt
def employeeView(request, id=0):
    if request.method == 'GET':
        employees = Employees.objects.all()
        employees_ser = EmployeesSerializer(employees, many = True)
        return JsonResponse(employees_ser.data, safe=False)

    elif request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employee_ser = EmployeesSerializer(data=employee_data)
        if employee_ser.is_valid():
            employee_ser.save()
            return JsonResponse("Added Succefully!!", safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method =='PUT':
        employee_data = JSONParser().parse(request)
        employee = Employees.objects.get(EmployeeId = employee_data['EmployeeId'])
        employee_ser = EmployeesSerializer(employee, data=employee_data)
        if employee_ser.is_valid():
            employee_ser.save()
            return JsonResponse("Employee data updated succesfully", safe=False)
        return JsonResponse("Faild to update employee data", safe=False)
    elif request.method == 'DELETE':
        employee = Employees.objects.get(EmployeeId = id)
        Employees.delete(employee)
        return JsonResponse("Employee deleted succesfully", safe=False)
    return JsonResponse("Failed deleting employee", safe=False)

