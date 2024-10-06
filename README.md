## Instrucciones para ejecutar la aplicación

### 1. Clonar el repositorio
```bash
git clone https://github.com/marcosprosperi/brain-todo-back
cd brain-todo-back
```

### 2. Configuración del entorno de desarrollo

Si deseas ejecutar la aplicación localmente sin Docker:

#### 2.1 Instalar dependencias
Asegúrate de tener **Node.js** instalado en tu sistema. Luego, ejecuta:

```bash
npm install
```

#### 2.2 Ejecutar la aplicación en modo de desarrollo
Para iniciar el servidor de desarrollo de Vite, usa:

```bash
npm run dev
```

### 3. Ejecutar la aplicación con Docker

Si prefieres usar **Docker**, la aplicación tiene un `Dockerfile` para simplificar el proceso. Sigue estos pasos:

#### 3.1 Construir la imagen de Docker
Desde el directorio raíz del proyecto, ejecuta el siguiente comando para construir la imagen de Docker:

```bash
docker build . -t "todo-list-back" .
```

#### 3.2 Ejecutar el contenedor de Docker
Una vez que la imagen esté construida, puedes ejecutar la aplicación en un contenedor con el siguiente comando:

```bash
docker run -p 9000:9000 todo-list-back
```

Esto ejecutará la aplicación en el puerto **9000**. Puedes acceder a la aplicación desde tu navegador en `http://localhost:9000`.

### 4. Configuración adicional
Si necesitas ajustar el puerto o cualquier otra configuración, puedes modificar el archivo `Dockerfile` o los scripts de inicio en el proyecto según tus necesidades.

## Dockerfile

El `Dockerfile` incluido en el proyecto se encarga de construir y ejecutar la aplicación dentro de un contenedor Docker. Aquí un resumen de lo que hace:

1. Utiliza una imagen base de **Node.js**.
2. Copia el código de la aplicación en el contenedor.
3. Instala las dependencias usando `npm install`.
4. Construye la aplicación para producción con `npm run build`.
5. Expone el puerto **9000** para servir la aplicación.