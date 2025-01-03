<p align="left">
    <img src="./assets/insa-logo.png" height="50" alt="Insa Logo">
</p>

# Proyecto Personal | Rate Repository App

<div align="center">

## **📌 TECNOLOGÍAS UTILIZADAS**

![JavaScript](https://img.shields.io/badge/-JavaScript-000000?style=flat-square&logo=javascript)
![HTML5](https://img.shields.io/badge/-HTML5-E46625?style=flat-square&logo=html5&logoColor=FFFFFF)
![CSS3](https://img.shields.io/badge/-CSS3-663399?style=flat-square&logo=css)
[![React Native](https://img.shields.io/badge/-React_Native-21232A?style=flat-square&logo=react&logoColor=7DD9FC&link=https://reactnative.dev/)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/-Expo-FAFAFA?style=flat-square&logo=expo&logoColor=12181C&link=https://expo.dev/)](https://expo.dev/)
[![Formik](https://img.shields.io/badge/-Formik-1B294E?style=flat-square&logo=formik&logoColor=2249CE&link=https://formik.org/)](https://formik.org/)
[![Apollo GraphQL](https://img.shields.io/badge/-Apollo_GraphQL-FCEADB?style=flat-square&logo=apollographql&logoColor=18252D&link=https://www.apollographql.com/)](https://www.apollographql.com/)
[![GraphQL](https://img.shields.io/badge/-GraphQL-E5009F?style=flat-square&logo=graphql&logoColor=FFFFFF&link=https://graphql.org/)](https://graphql.org/)

</div>

---

<div align="center">

## **📋 DESCRIPCIÓN**

</div>

Rate Repository App es una aplicación móvil desarrollada con React Native que permite a los usuarios explorar repositorios de GitHub. Los usuarios pueden navegar por una lista de repositorios y visualizar detalles. La aplicación también incluye la funcionalidad para iniciar sesión.

---

<div align="center">

## **📁 DETALLES**

</div>

**📍 LOGIN PAGE |** Una pantalla de inicio de sesión con las siguientes funcionalidades:

- Validación de formulario utilizando Formik.
- Validación estricta de los campos usando Yup.
- Manejo de errores en tiempo real en los campos del formulario.

**📍 HOME PAGE |** Una página principal responsiva que incluye:

- Lista de repositorios obtenida a través de una consulta GraphQL con Apollo Client, mostrando información clave de cada repositorio.
- Diseño responsivo que se adapta a la mayoría de dispositivos móviles.
- Lógica para manejar rutas no reconocidas, redirigiendo al usuario automáticamente a la lista de repositorios.

---

<div align="center">

## **📖 RECURSOS UTILIZADOS**

</div>

Este proyecto utiliza como backend [Rate Repository Api](https://github.com/fullstack-hy2020/rate-repository-api). Sigue las instrucciones de la documentación dicho proyecto para ejecutarlo correctamente.

---

<div align="center">

## **🔀 ESTRUCTURA DEL PROYECTO**

</div>

### ✨ root (src)

- ***theme.js***: Archivo que define colores, tamaños de fuente y otros estilos globales que se utilizan en toda la aplicación.

### ✨ assets

- Archivos en formatos de imagen

### ✨ components

- ***AppBar.jsx***: una barra de navegación horizontal que permite acceder a las diferentes páginas.
- ***Main.jsx***: Renderiza la estructura base de la aplicación, incluyendo la AppBar y las rutas principales mediante `Routes` de React Router.
- ***RepositoryItem.jsx***: Renderiza la información de un repositorio individual.
- ***RepositoryList.jsx***: Muestra una lista de repositorios utilizando `FlatList` y el hook personalizado `useRepositories`.
- ***RepositoryStats.jsx***: Un subcomponente que muestra estadísticas de un repositorio.
- ***StyledText.jsx*** y ***StyledTextInput.jsx***: Componentes reutilizables para manejar texto y entradas con estilos consistentes.

### ✨ data

- ***repositories.js***: contiene un arreglo de objetos con información estática de perfiles.

### ✨ graphql

- ***queries.js***: define las consultas GraphQL necesarias para obtener datos de los repositorios.

### ✨ hooks

- ***useRepositories.js***: utiliza `useQuery` de Apollo Client para obtener datos de repositorios desde el servidor GraphQL.

### ✨ pages

- ***login.jsx***: contiene el formulario de inicio de sesión implementado con Formik y validación de Yup.

### ✨ utils

- ***apolloClient.js***:  configuracion de apolloClient.

### ✨ validationSchemas

- ***login.js***: define las reglas de validación para el formulario de inicio de sesión. Asegura que el correo electrónico y la contraseña cumplan con los requisitos mínimos.

---

<div align="center">

## **⚙️ INSTALACIÓN Y USO**

</div>

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Insaurralde38/Rate-Repository-App.git
   cd Rate-Repository-App
   ```

2. **Instalar dependencias**:

    Asegúrate de tener **Node.js** y **npm** instalados en tu sistema. Luego, instala las dependencias de los archivos **`package.json`**.

   ```bash
   npm install
   ```

3. **Ejecutar backend**:

    Para que la información llegue a la app, deberás descargar y ejecutar el proyecto [Rate Repository Api](https://github.com/fullstack-hy2020/rate-repository-api). Sigue las instrucciones de la documentación dicho proyecto para ejecutarlo correctamente.

4. **Ejecutar proyecto**:

    Para visualizar la aplicación deberás ejecutar el comando:

   ```bash
   npx expo start
   ```

    Podrás ver el proyecto en tiempo real Ingresando a <http://localhost:8081/> desde el navegador o escaneando el código QR con la aplicación [Expo Go](https://expo.dev/go?sdkVersion=51) en su version SDK 51.

5. **[OPCIONAL] Modificar variable**:

    Sí deseas visualizar la aplicación en un telefono movil escaneando el código QR con la aplicación [Expo Go](https://expo.dev/go?sdkVersion=51), deberás modificar en el archivo **`app.json`** (que se encuentra en la carpeta raiz del proyecto) la siguiente línea:

   ```
   "GRAPHQL_HOST": "localhost"
   ```

    Reemplaza **`localhost`** con la IP de tu computadora. Esta información puedes obtenerla de la terminal cuando ejecutes el proyecto.

---

<div align="center">

## **⚠️ IMPORTANTE!**

</div>

Es necesario contar mínimamente con la última versión estable de **Node.js** y **npm**. Asegúrate de contar con ellas para poder instalar correctamente las dependencias necesarias para correr el proyecto. Actualmente las versiones necesarias son:

-  **Node.js**: 12.18.3 o mayor
-  **npm**: 6.14.16 o mayor

Para verificar que versión tienes instalada:

   ```bash
   node -v
   npm -v
   ```

---

<div align="end">

Hecho con <img src="./assets/boke-heart.png" alt="heart" height="14" width="16" style="margin: 0px 0px -2.5px 0px" > por [**DIEGO INSAURRALDE**](https://insaurralde.vercel.app/) <img src="./assets/boke-chimp.png" alt="chimp" height="21" width="21" style="margin: 0px 0px -4px 0px" >

</div>
