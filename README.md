# Proyecto de Sitio de eCommerce para Coderhouse

Este es el proyecto final para el curso de React de Coderhouse
de Arvid Romero. 

## Descripcion rápida del proyecto

Este proyecto cosiste en una página con 5 productos de entrada
con diferentes precios y categorías. Para dar una vista. Los pructos se agregan al carrito con el boton de aegrar al carriro en cada tarjeta.

Al finalizar la compra, el el carrito se puede ver el resumen de la compra y el botón de checkOut que lleva a la pagina para terminar la compra.

Incluye un botón de Inicio de Sesion y registro usando las librerias correspondientes de firebase.

### `Librerias usadas`

Para este proyecto se usaon componentes y plantillas de  material-ui y firebase como base de datos no relacional.

Material Ui se inatala asi:

    npm install @material-ui/core

Los iconos de Material-ui se instalan asi:
    
    npm install @material-ui/icons
 
### `Publicacion`

Tuve problemas para publicarlo con Vercel ,por lo que lo hice
con un sitio mas conocido como netlify (netlify.com)

Para poder hacerlo se requiere los siguientes pasos.

1- En la terminar crear la carpeta a publicar con el comando 
npm run build
2- Al terminar se genera en el proyecto una carpeta de nombre "build"
3- Acceder a netlify.con, registrarse e iniciar sesion
4- Arrastrar la carpeta en la seccion de deply manual
5- Al subirse muestra la liga del proyecto
6- De forma opcional se uede comprar un dominio o bien usar u no propio para la publicacion final

En el caso de este proyecto, la ruta es la siguiente:
https://prismatic-boba-6ab6d1.netlify.app
