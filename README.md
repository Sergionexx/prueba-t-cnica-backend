# Backend Prueba técnica

## Requisitos
- Node 13 o superior
- npm 6 o superior


## Pasos para levantar el Backend

* Clonar o descargar este repositorio
* Instalar las dependencias de Node: Dentro de  la carpeta donde se descargó o clonó el proyecto ejecute una terminal (click derecho -> terminal) y escriba el siguiente  comando: __npm i__ 
* Levantar el Backend: En la misma __Terminal__ que uso en el paso anterior ejecute el siguiente comando __node src/app.js__     . Esto levantará el servidor en su entorno local en el puerto 3001.   
* Realizado estos pasos, puede levantar el proyecto de [Angular](https://github.com/Sergionexx/prueba-t-cnica-frontend)


##### Nota
El proyecto ya se encuentra listo para acceder a la base de datos  


# Proceso de desarrollo

* Lo primero que hice fue configurar la base de datos en mongo, creando las collecciones segund el modelo del documento de la entrevista técnica. 
![Backend](/Imgs/0b.png)

* Y generé credenciales de acceso a la base, las cúales utilizaria luego en el backend.
![Backend](/Imgs/1b.png) 

* Luego en el proyecto realicé la conexión con mongo usando las credenciales generadas previamente.
![Backend](/Imgs/2b.png)

* Estructure las carpetas del proyecto.
![Backend](/Imgs/3b.png)

* Y creé una archivo llamado "data_config.js" para controlar en que ambiente se va a levantar el servidor y tambien agregue el js de mongodb_connect que se encarga de la conexión a la base de datos.
![Backend](/Imgs/4b.png)

* La idea del data_config es separar por ambientes el servidor, pero en este caso al ser una prueba técnica queda en un solo ambiente <<localhost>>.
![Backend](/Imgs/5b.png)

* Creo los modelos de datos.
![Backend](/Imgs/7b.png)

* Y empiezo a definir los datos con los que va a trabajar cada modelo. 
![Backend](/Imgs/8b.png)

* Creo los servicios necesarios para la peticiones.
![Backend](/Imgs/9b.png)

* En las rutas estableszco la conexión con los diferentes servicios.
![Backend](/Imgs/10b.png)

* Empiezo a realizar peticiones de prueba usando Postman.
![Backend](/Imgs/11b.png)

* Luego ordeno todas las peticiones que han sido validadas. 
![Backend](/Imgs/12b.png)

##### Nota 2

Tambien agregué al proyecto las colecciones del Postman.









