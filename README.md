# Backend Node API

Una API RESTful construida con Node.js, Express y MongoDB con autenticación JWT y documentación Swagger.

## 📌 1. Instalación y Configuración

### 🔹 Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:
- ✅ Node.js (v14 o superior)
- ✅ MongoDB (local o en la nube con MongoDB Atlas)
- ✅ Git (opcional, para clonar el repositorio)

### 🔹 Paso 1: Clonar el Repositorio



### 🔹 Paso 2: Instalar Dependencias


### 🔹 Paso 3: Configurar Variables de Entorno

> 📌 Si usas MongoDB Atlas, reemplaza MONGO_URI con la URL de tu base de datos en la nube.

## 📌 2. Correr el Proyecto

### 🔹 Ejecutar el Servidor

**🛠 Modo Desarrollo (con Nodemon)**
```bash
npx nodemon src/index.js
```

**🚀 Modo Producción**
```bash
node src/index.js
```

Si todo está correcto, verás en la terminal:
```bash
✅ MongoDB conectado
🔥 Servidor corriendo en http://localhost:5000
📄 Documentación en http://localhost:5000/api-docs
```

## 📌 3. Documentación con Swagger

Swagger permite probar las rutas de la API desde el navegador.

### 🔹 Abrir la Documentación
Visita: `http://localhost:5000/api-docs`

Desde ahí puedes probar todas las rutas sin necesidad de Postman.

### 🔹 Autenticación en Swagger

Para probar rutas protegidas:

1. Primero, inicia sesión (POST `/api/auth/login`) con:
```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```
2. Copia el token JWT recibido en la respuesta.
3. En Swagger, haz clic en el botón de candado 🔒 en cualquier ruta protegida.
4. Ingresa el token en formato:


Ahora puedes acceder a las rutas protegidas. 🚀

## 📌 4. Rutas Disponibles

### 🔹 Autenticación (`/api/auth`)
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/auth/login` | Iniciar sesión y obtener un token |

### 🔹 Usuarios (`/api/users`) (Requiere Token JWT)
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/users` | Obtener todos los usuarios |
| GET | `/api/users/{id}` | Obtener un usuario por ID |
| PUT | `/api/users/{id}` | Actualizar un usuario |
| DELETE | `/api/users/{id}` | Eliminar un usuario |

## 📌 5. Poblar la Base de Datos con Datos de Prueba (Seeders)

Si deseas insertar usuarios de prueba en la base de datos, ejecuta:

```bash
node src/seeders/user.seeder.js
```

Esto insertará usuarios predefinidos en la colección.

## 📌 6. Estructura del Proyecto

```
backend-node-api/
│── src/
│   ├── config/         # Configuración de BD y JWT
│   │   ├── database.js # Configuración de MongoDB
│   │   ├── jwt.js      # Funciones para generar/verificar JWT
│   │   ├── swagger.js  # Configuración de Swagger
│   ├── controllers/    # Controladores de la API
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   ├── middlewares/    # Middleware para autenticación
│   │   ├── auth.middleware.js
│   ├── models/         # Modelos de Mongoose
│   │   ├── user.model.js
│   ├── routes/         # Rutas de la API
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   ├── seeders/        # Seeders para poblar la BD
│   │   ├── user.seeder.js
│   ├── index.js        # Punto de entrada del servidor
│── .env                # Variables de entorno
│── .gitignore          # Archivos ignorados en Git
│── package.json        # Dependencias del proyecto
│── README.md           # Documentación del proyecto
```

## 📌 7. Subir el Proyecto a GitHub

Si hiciste cambios y quieres subirlos a GitHub:

```bash
git add .
git commit -m "✨ Nueva funcionalidad añadida"
git push origin main
```

## 📌 8. Solución de Problemas

### 🔹 Error de conexión a MongoDB

Si ves este error:
```
MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
```

Verifica que MongoDB esté corriendo:
```bash
mongo
```

Si no está activo, inícialo con:
```bash
net start MongoDB  # En Windows
sudo systemctl start mongod  # En Linux/Mac
```

## 📌 9. Licencia

📜 Este proyecto está bajo la Licencia MIT, lo que significa que puedes usarlo, modificarlo y compartirlo libremente.
```

Puedes copiar este contenido y guardarlo como "README.md" en tu sistema local. El archivo está listo para ser usado en tu repositorio de GitHub.
