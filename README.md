<div align="center">

<img width="220" src="https://cdn-icons-png.flaticon.com/512/619/619153.png" />

# 🏢 Property Plus MX

### Plataforma de administración inmobiliaria y rentas 🚀

<p align="center">
  <b>Property Plus MX</b> es un sistema web moderno para la administración de propiedades, gestión de inquilinos y control de rentas, diseñado para propietarios y arrendatarios mediante una experiencia intuitiva y segura.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/RealEstate-Management-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
</p>

<p align="center">
  <a href="#-acerca-del-proyecto">Acerca</a> •
  <a href="#-características">Características</a> •
  <a href="#-tecnologías-utilizadas">Tecnologías</a> •
  <a href="#-instalación">Instalación</a> •
  <a href="#-roadmap">Roadmap</a>
</p>

</div>

---

# 🌌 Acerca del proyecto

**Property Plus MX** es una plataforma inmobiliaria enfocada en la administración de propiedades y comunicación entre propietarios e inquilinos.

La plataforma permite:

- 🏠 Publicar propiedades en renta
- 🔍 Buscar y filtrar propiedades
- 👥 Gestión de inquilinos
- 💬 Chat en tiempo real
- 📧 Comunicación vía correo electrónico
- 📄 Generación de contratos
- 💳 Registro de pagos de renta
- 🔐 Seguridad con JWT

El proyecto fue desarrollado para practicar:

- Desarrollo Full Stack
- Arquitectura MERN
- Autenticación JWT
- MongoDB
- Dockerización
- Comunicación en tiempo real

---

# ✨ Características

## 🏠 Gestión inmobiliaria

- 📋 Registro de propiedades
- 🏢 Administración de inmuebles
- 📸 Imágenes de propiedades
- 📍 Información detallada
- 🔍 Filtros avanzados

---

## 👥 Gestión de inquilinos

- 👤 Registro de usuarios
- 📄 Gestión de contratos
- 💳 Historial de pagos
- 📧 Comunicación integrada
- 🏘️ Administración de arrendamientos

---

## 💬 Comunicación integrada

- 💬 Chat en tiempo real
- 📧 Correos automáticos
- 🔔 Notificaciones
- 📲 Comunicación propietario-inquilino

---

## 🔒 Seguridad

- 🔑 JWT Authentication
- ♻️ Refresh Tokens
- 🛡️ Protección de rutas
- 🔐 Recuperación de contraseña
- 📧 Verificación de correo

---

# 🛠️ Tecnologías utilizadas

## 🌐 Frontend

<p>
  <img src="https://skillicons.dev/icons?i=react,vite,html,css,js" />
</p>

- React.js
- Vite
- HTML5
- CSS3
- JavaScript

---

## ⚙️ Backend

<p>
  <img src="https://skillicons.dev/icons?i=nodejs,express" />
</p>

- Node.js
- Express.js
- APIs REST
- JWT Authentication

---

## 🗄️ Base de datos

<p>
  <img src="https://skillicons.dev/icons?i=mongodb" />
</p>

- MongoDB
- Mongoose
- NoSQL

---

## ☁️ Servicios externos

<p>
  <img src="https://skillicons.dev/icons?i=docker" />
</p>

- Cloudinary
- Ethereal Email
- Docker
- Docker Compose

---

# 📂 Estructura del proyecto

```bash
PropertyPlusMX/
│
├── client/
│   ├── src/
│   ├── public/
│   └── .env.local
│
├── server/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   └── .env
│
├── docker/
│
├── package.json
│
└── README.md
```

---

# ⚡ Instalación

## 📋 Requisitos

- Node.js
- npm
- MongoDB
- Cloudinary
- Docker (opcional)

---

# 🚀 Configuración del proyecto

## 1️⃣ Clonar repositorio

```bash
git clone https://github.com/SonamRinzinGurung/Real-Estate-Rental-and-Tenant-Management-System.git
```

---

## 2️⃣ Instalar backend

```bash
cd server
npm install
```

---

## 3️⃣ Instalar frontend

```bash
cd client
npm install
```

---

# 🔐 Variables de entorno

## ⚙️ Backend `.env`

```env
MONGO_URI=
ACCESS_TOKEN_SECRET_OWNER=
ACCESS_TOKEN_SECRET_TENANT=
REFRESH_TOKEN_SECRET_OWNER=
REFRESH_TOKEN_SECRET_TENANT=
ACCESS_LIFETIME=15m
REFRESH_LIFETIME=7d

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RESET_PASSWORD_KEY=
EMAIL_VERIFICATION_KEY=

CLIENT_URL=http://localhost:3000

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=
EMAIL_PASS=
```

---

## 🌐 Frontend `.env.local`

```env
VITE_APP_BASE_URL=http://localhost:3000
VITE_APP_API_URL=http://localhost:5000/api
VITE_APP_API_HOST=http://localhost:5000
```

---

# ▶️ Ejecutar proyecto

## 🚀 Backend

```bash
cd server
npm run dev
```

---

## 🌐 Frontend

```bash
cd client
npm run dev
```

---

# 🐳 Docker

## ⚡ Construir contenedores

```bash
npm run dev:build
```

---

## ▶️ Ejecutar contenedores

```bash
npm run dev
```

---

# 🌍 Acceso al sistema

## Frontend

```bash
http://localhost:3000
```

---

## Backend

```bash
http://localhost:5000
```

---

# 📸 Vista previa

<div align="center">

<img width="1000" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200&auto=format&fit=crop" />

</div>

---

# 🧠 Objetivos del proyecto

## 🎯 Aprender y practicar

- MERN Stack
- MongoDB
- JWT Authentication
- Chat en tiempo real
- Gestión inmobiliaria
- Docker
- APIs REST

---

# 🚧 Roadmap

## 🔮 Próximas mejoras

- 📱 Aplicación móvil
- 🤖 Recomendaciones inteligentes
- 📊 Dashboard financiero
- ☁️ Deploy cloud
- 🔔 Notificaciones push
- 💳 Pagos en línea
- 🧾 Facturación electrónica SAT

---

# 🤝 Contribuciones

Las contribuciones son bienvenidas ❤️

## Cómo contribuir

1. Fork del proyecto

```bash
git checkout -b feature/nueva-funcionalidad
```

2. Commit

```bash
git commit -m "✨ Nueva funcionalidad"
```

3. Push

```bash
git push origin feature/nueva-funcionalidad
```

4. Pull Request 🚀

---

# 👨‍💻 Autor

<div align="center">

## Property Plus MX — Plataforma inmobiliaria moderna

Sistema desarrollado para administración de propiedades, rentas y comunicación digital entre propietarios e inquilinos 🇲🇽

</div>

---

# 🌟 Apoya el proyecto

⭐ Dale una estrella  
🍴 Haz fork  
📢 Comparte el proyecto

---

# 📜 Licencia

Proyecto educativo y open source desarrollado para prácticas de gestión inmobiliaria, arquitectura MERN y administración de rentas digitales.

---

<div align="center">

### 🏢 Property Plus MX — administración inteligente de propiedades y rentas 🚀

</div>
