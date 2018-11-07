from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from englishsong.models import Students
import json

def home(request):
    return render(request, 'index.html')

def apply (request):
    name = request.POST['name']
    sex = request.POST['sex']
    stu_id = request.POST['stu_id']
    academy = request.POST['academy']
    tel = request.POST['tel']
    try:
        stu = Students.objects.filter(name = name, stu_id = stu_id)
        if len(stu) > 0:
            data = {
                'success': 2,
                'name': name
            }
        else:
            Students.objects.create(name = name,
                                    stu_id = stu_id,
                                    sex = sex,
                                    academy = academy,
                                    tel = tel)
            data = {
                'success': 1,
                'name': name
            }
        
    except Exception as e:
        data = {
            'success': 0,
            'name': name
        }
    return HttpResponse(json.dumps(data),content_type="application/json")