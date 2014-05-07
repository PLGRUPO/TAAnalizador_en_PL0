# Analizador de PL/0 usando Jison

## Descripción

El objetivo de esta práctica es añadir transformaciones al AST del parser
creado en la última práctica ([ver aquí](https://github.com/PLGRUPO/AnalisisAmbitoJison))
para que realice el plegado de las constantes (sustituir expresiones formadas
solamente con números por su resultado) y la optimización de las multiplicaciones
y divisiones por números que son potencias de 2.

La implementación se realiza en forma de aplicación web donde se pueden
cargar o escribir ficheros escritos en [PL/0](https://en.wikipedia.org/wiki/PL/0)
y se mostrará el árbol abstracto sintáctico resultante.

La aplicación web permite el almacenamiento de como máximo 10 ficheros en el
servidor, todos ellos de acceso público.

Para guardar los ficheros en el servidor debes haberte autenticado mediante
Google, Github, Twitter o Facebook previamente y haber proporcionado tu
autorización para que la aplicación acceda a tus datos públicos (nombre y
dirección de correo electrónico).

Una vez iniciada la sesión en la web, aparecerán las opciones de visualizar
los ficheros guardados por cada persona en el servidor.

## Tecnologías

Las tecnologías utilizadas en esta aplicación son las siguientes:

  - [HTML5](http://www.w3.org/html/)
  - [CSS3](http://www.w3.org/css/)
  - [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [jQuery](http://jquery.com/)
  - [MathJax](http://www.mathjax.org/)
  - [Jison](http://zaach.github.io/jison/)
  - [Metro Bootstrap](http://metroui.org.ua/)
  - [Ruby](https://www.ruby-lang.org/es/)
  - [Bundler](http://bundler.io/)
  - [Sinatra](http://www.sinatrarb.com/)
  - [DataMapper](http://datamapper.org/)
  - [SQLite](https://sqlite.org/)
  - [PostgreSQL](http://www.postgresql.org/)

Y para las pruebas:

  - [Mocha](http://visionmedia.github.io/mocha/)
  - [Chai](http://chaijs.com/)

## Despliegue

El despliegue de esta aplicación web se encuentra en
[Heroku](http://frozen-shore-6357.herokuapp.com/).

## Tests

En la página de despliegue hay un enlace a los tests, donde se muestran los
resultados de los mismos.

## Autores

Proyecto desarrollado por:

  - Sergio M. Afonso. [Ir a perfil](https://github.com/alu0100700459)
  - Juan F. González Ramos. [Ir a perfil](https://github.com/juanFGR)

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Para saber más, leer el
fichero `LICENSE`.
