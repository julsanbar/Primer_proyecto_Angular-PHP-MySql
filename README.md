# Primer_proyecto_Angular-PHP-MySql

-Requisitos:
	
Es necesario tener instalado en nuestro equipo, xampp. El cual debemos de tener los puertos por defecto 
	para apache (80) y para phpmyadmin (3306).

- Paso 1:

En nuestra terminal si estamos usando una distro linux, ejecutamos el siguiente comando.

sudo /opt/lampp/lampp start

El cual iniciará los servicios lampp de nuestro xampp

(Nota, si queremos para nuestro lampp seria con este comando sudo /opt/lampp/lampp stop)

- Paso 2:

Nos dirigimos a nuestro phpmyadmin (localhost/phpmyadmin), e importamos o copias y ejecutamos las sentencias del archivo sql
	'2.dbcreacion_BDUsuarios.sql' y después realizamos la misma operación con el archivo sql '1.dbuser_creacion .sql'

- Paso 3:

Ejecutamos en domoSmart el siguiente comando ng build --prod, nos generara todos los archivos necesarios para desplegar nuestro proyecto Angular

en la carpeta dist. Copiamos esos archivos y los pegamos en /opt/lampp/htdocs

(Nota quizas nos avise de que si queremos reemplazar el archivo favicon.ico, le damos a Reemplazar)

- Paso 4:

Nos situamos en /opt/lampp/htdocs , y creamos un archivo cuyo nombre es .htaccess
	y el contenido sera:

<IfModule mod_rewrite.c>	
	RewriteEngine On
	RewriteBase /
	RewriteRule ^index\.html$ - [L]
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule . index.html [L]
</IfModule>

- Paso 5:

Cogemos la carpeta backendAngular, y la movemos a /opt/lampp/htdocs

- Paso 6:

Nos dirigimos al navegador y ponemos localhost. 

Y listo y podemos disfrutar de la app domoSmart
