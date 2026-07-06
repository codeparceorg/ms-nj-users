
# Probar API con cURL

Todos los endpoints corren en `http://localhost:8081` (configurable via `MS_PORT` en `.env`).

## Health Check

```bash
curl http://localhost:8081/users/health
```

## Root

```bash
curl http://localhost:8081/
```

## Users

### POST - Crear usuario

```bash
curl -X POST http://localhost:8081/users/save \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Juan Perez",
    "email": "juan@email.com",
    "phone": "1234567890",
    "address": "Av. Principal 123",
    "city": "Lima",
    "avatar_url": "https://example.com/avatar.jpg"
  }'
```

### GET - Obtener todos

```bash
curl http://localhost:8081/users
```

### GET - Obtener por ID

```bash
curl http://localhost:8081/users/123e4567-e89b-12d3-a456-426614174000
```

### PUT - Actualizar usuario

```bash
curl -X PUT http://localhost:8081/users/123e4567-e89b-12d3-a456-426614174000 \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Juan Actualizado",
    "email": "juan.nuevo@email.com",
    "phone": "9876543210",
    "address": "Av. Nueva 456",
    "city": "Arequipa"
  }'
```

### DELETE - Eliminar usuario

```bash
curl -X DELETE http://localhost:8081/users/123e4567-e89b-12d3-a456-426614174000
```
