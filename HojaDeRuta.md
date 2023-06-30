####*instalaciones*

pip install Django
pip install djangorestframework
npx create-react-app my-app


#####*Pasos del video de react*
Link: https://www.youtube.com/watch?v=C3UCUzPKZ9g

limpieza de la plantilla done
app.js componentes <Header/><Home/><SerarchPage/>

####*Pasos del video de youtube crear entorno virtual:*
Link: https://www.youtube.com/watch?v=TNtrAvNNxTY

####*Pasos del video de youtube Rest framework api from django:*
Link: https://www.youtube.com/watch?v=Xts8NmyAc8c

#*dentro de app01:*
-modificamos en settings,py añadiendo:

REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema'
}

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'coreapi',
    'blog.apps.BlogConfig',
]

-modificamos urls.py:

from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('blog.urls')), #la api esta hece en blog
    path('docs/',include_docs_urls(title='Api Documenación'))
    ]


#*dentro de blog=api:*
-creacion de documento serializer.py
-creacion de vistas modificando views.py

-creamos el documento urls.py:

from django.urls import path, include
from rest_framework import routers
from blog import views 

router=routers.DefaultRouter()
router.register(r'User',views.UsuarioViewSet),
router.register(r'Res',views.ReservasViewSet)
router.register(r'Her',views.HerramientasViewSet)
router.register(r'Aul',views.AulaViewSet)
router.register(r'Lab',views.LaboratorioViewSet)

urlpatterns=[
    path('', include(router.urls))
]

####*Pasos del video de youtube React+Rest framework api from django:*
Link: https://www.youtube.com/watch?v=38XWpyEK8IY