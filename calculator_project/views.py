from django.shortcuts import render
from calculator_project import views

# Create your views here.

def calcu(request) :
    return render(request, 'cacl.html')
