from core.user.serializers import UserSerializer, FiledataSerializer
from core.user.models import User, Filedata
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters


from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['updated']
    ordering = ['-updated']


    def get_queryset(self):

        # if self.request.user.is_superuser:
        return User.objects.all()

    def get_object(self):
        lookup_field_value = self.kwargs[self.lookup_field]

        obj = User.objects.get(lookup_field_value)
        self.check_object_permissions(self.request, obj)

        return obj


@api_view(['GET', 'POST'])
def datafile_viewsets(request):
    print(dict(request.POST.items()))
    
    if request.method == 'GET':
        filedata = Filedata.objects.all()
        serializer = FiledataSerializer(filedata, many=True)
        return Response(serializer.data)


    if request.method == 'POST':
        serializer = FiledataSerializer(data=request.data)
        print('hi', serializer._kwargs['data']['name'])
        obj = Filedata(name=serializer._kwargs['data']['name'], description=serializer._kwargs['data']['description'])
        obj.save()
    
        return HttpResponse(Filedata.objects.all(), content_type="text/plain", status=200)

