# Autenticación con Node.js y Express
Este proyecto contiene varios endpoints construidos con Node.js y Express, permite gestionar usuarios y restingir la creación de nuevos usuarios solo si hay un usuario autenticado mediante **JWT**.

# 🚀 Características
- Registro de usuarios con contraseñas encriptadas.

- Inicio de sesión con generación de **Token JWT**.

- Protección de rutas mediante autenticación con **Bearer Token**.

- Uso de **MySQL** como base de datos.

- Middleware de logeo con **Morgan**.

# 📦 Tecnologías utilizadas

- Node.js

- Express.js

- JWT (JsonWebToken)

- Bcrypt para hash de contraseñas

- MySQL

- Morgan para Login

- Dotenv para manejo de variables de entorno

- Nodemon para desarrollo

- Postman para llamada a los endpoints.

# 📑 Instalación

### Clonar el repositorio:

    git clone https://github.com/EstebanSahid/EndPoints-Auth-Node.js-Express.git

    cd autenticacion

### Instalar dependencias

    npm install

### Configurar variables de entorno:

Crea un archivo **.env** en la raíz del proyecto siguiento el archivo **env.example**

### Ejecutar el servidor web

    npm run dev

# 📌 Uso en Postman

Para probar los endpoints debes obtener un token válido, puedes generarlo con el este endpoint, se debe enviar en el **body** las credenciales *usuario* y *password*.

    GET /api/auth/login


En los endpoints protegidos, en la sección Authorization, debes seleccionar el tipo **Bearer Token** e ingresar el token copiado.

# 🛠 Endpoints principales

# 🔑 Autenticación

Inicia sesión y devuelve un token JWT.

    GET /api/auth/login

# 👤 Usuarios

Crear / Actualizar un usuario (solo si el usuario autenticado tiene token válido), si se envia un Id = 0, creará un nuevo usuario, caso contrario actualizará según el id enviado (Se debe enviar en el **body** al menos el nombre, usuario y password).

    POST /api/usuarios/ 

 Obtiene la lista de usuarios (requiere autenticación).

    GET /api/usuarios/

Obtiene un usuario en especifico (requiere autenticación).

    GET /api/usuarios/:id
    
Eliminar un usuario (borrado lógico, requiere autenticación).

    PUT /api/usuarios/:id

# 📜 Créditos

Este proyecto fue desarrollado siguiendo un tutorial en YouTube. Para mas informaci{on}, puedes revisar el video original en el siguiente [enlace](https://youtu.be/iwnOVYB1Sd8?si=c4kOS26M7oBKGiIl).


# 📝 Notas

- Asegúrate de tener MySQL configurado y en ejecución.

- Este proyecto no incluye interfaz gráfica, solo endpoints RESTful.

- Puedes usar Postman o cURL para probar las rutas.

Estoy muy emocionado por compartir este proyecto, espero que sea de su agrado y que puedan expandirlo según sus necesidades. ¡Gracias por echarle un vistazo! 🚀

