# core/user/serializers.py
from core.user.models import User, Filedata
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active', 'created', 'updated']
        read_only_field = ['is_active', 'created', 'updated']


class FiledataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Filedata
        fields = ['id', 'name', 'description', 'created', 'updated']  