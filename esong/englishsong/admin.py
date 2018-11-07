from django.contrib import admin
from englishsong.models import Students

# Register your models here.
class StudentsAdmin(admin.ModelAdmin):
    list_display = ['name','sex','tel','stu_id','academy']
    search_fields = ['stu_id']

admin.site.register(Students,StudentsAdmin)