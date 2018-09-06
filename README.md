# vuejs-working-with-timezone
Ejemplo en un proyecto en Vue, utilizando las zonas horarias con la libreria MomentJS 

En un proyecto de frontend debemos tomar en cuenta las distintas zonas horarias, nuestra página podría ser utilizado desde distintas partes del mundo, con distintas zonas horarias.

* La primera consideración que debemos de tener, es el mantener las fechas de la base de datos en formato UTC
* Una vez que nuestro backend nos retorna las fechas en este formato, nos apoyamos de la libreria MomentJS para ajustar la fecha y hora a la zona horaria del cliente


  En este proyecto hecho en Vue JS y webpack, he creado un filtro que convierte la fecha y hora a la zona horaria del navegador del cliente

# Instalacion
```console
$ git clone https://github.com/experttyce/vuejs-working-with-timezone.git
$ cd vuejs-working-with-timezone
$ npm install
$ npm run dev
```
