from django.urls import path 
from .views import *

urlpatterns = [ 
    path("",BlogPostListView.as_view()),
    path("featured",BlogPostFeaturedView.as_view()),
    path("category",BlogPostCategoryView.as_view()),
    path("<slug>",BlogPostDetailedView.as_view()),
]