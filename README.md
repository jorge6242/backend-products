# Backend CRUD básico con Express y PostgreSQL

## Descripción
Este proyecto implementa una API RESTful con Node.js y Express, conectada a una base de datos PostgreSQL, para manejar productos.

## Estructura
- 3 capas: `controllers`, `services`, `repositories`
- Conexión vía `pg` a PostgreSQL
- Variables de entorno configurables

## Endpoints disponibles

- `GET /productos` — Listar productos
- `GET /productos/:id` — Obtener uno
- `POST /productos` — Crear nuevo
- `PUT /productos/:id` — Actualizar
- `DELETE /productos/:id` — Eliminar

## Cómo ejecutar

1. Clonar repo
2. Instalar dependencias
3. Configurar `.env`
        `
        PORT=8000
        DB_HOST=localhost
        DB_PORT=5432
        DB_USER=postgres
        DB_PASSWORD=1234
        DB_NAME=store
        `
4. Crear tabla en PostgreSQL
5. Ejecutar con: `node src/app.js`
