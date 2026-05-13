from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    # return HttpResponse("Hello, welcome to the blog!")
    return render(request, 'index.html')
