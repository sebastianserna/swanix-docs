<p align="center">
    <img alt="GitPoint" title="GitPoint" src="https://swanix.org/assets/images/apple-touch-icon.png">
</p>
<h1 align="center"> Swanix Brand </h1>
<p align="center">
    Brand guidelines and documentation
</p>

---

## Credits

- @sebastianserna

---

## Requisitos

Antes de iniciar debes tener previamente instalados:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)

## Instalación

En una carpeta vacía de tu equipo escribe el siguiente comando en la terminal:

```
git clone https://github.com/swanix/brand.git
```

Cuando se termine de clonar el proyecto escribe el comando:

```
npm install
```
Este comando instalará las dependencias de Node.js especificadas en el archivo `package.json` (en esencia se trata de Browsersync para automatizar algunas tareas de desarrollo).

Las dependencias se instalan en la carpeta `node_modules` (creada automáticamente con el comando `npm install`) y luego de instaladas podemos utilizar el siguiente comando para ver nuestra página de inicio:

```
npm run serve
```
Este comando ejecuta un servidor estático que apunta a la carpeta `docs` este abrirá el navegador de forma automática mostrando el sitio de prueba con ejemplos de la librería.