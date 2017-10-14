from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'webapp/home.html')

def contact(request):
    return render(request, 'webapp/basic.html',{'content':['If you would like to contact us, please visit our Github repository page with the buttons below.']})
