from django.db import models

# Create your models here.
class Students(models.Model):
    name = models.CharField(max_length = 20)
    stu_id = models.CharField(max_length = 20)
    sex = models.CharField(max_length = 20)
    tel = models.CharField(max_length = 20)
    academy = models.CharField(max_length = 40)
    score1 = models.FloatField(null=True)
    audition1 = models.TextField(null=True)
    score2 = models.FloatField(null=True)
    audition2 = models.TextField(null=True)
    score3 = models.FloatField(null=True)
    audition3 = models.TextField(null=True)

