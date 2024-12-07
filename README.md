# Shopping Cart App

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Firebase](https://img.shields.io/badge/Firebase-Deployed-yellow)

Una aplicación web de carrito de compras simple creada con **React** y desplegada en **Firebase**.  

🌐 **[Demo en Vivo](https://react-app-shop-816f2.web.app/)**  
📂 **[Repositorio en GitHub](https://github.com/Kenkyoo/react-app-shop)**

---

## Características

- **Catálogo de productos:** Consume datos de la API de [FakeStore](https://fakestoreapi.com/).
- **Gestión de carrito:** Agrega y elimina productos del carrito.
- **Cálculo dinámico:** Actualiza el monto total automáticamente.
- **Interfaz moderna:** Construida con Material-UI para un diseño limpio y responsive.
- **Alertas:** Feedback visual cuando se agrega o elimina un producto.
- **Fácil navegación:** Alterna entre productos y carrito.

---

## Tecnologías Utilizadas

- **Frontend:**
  - React 18.3.1
  - TypeScript
  - Material-UI (MUI)
  - Axios
- **Herramientas de desarrollo:**
  - Vite
  - ESLint
  - TypeScript ESLint
- **Hosting:**
  - Firebase Hosting

---

## Instalación Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Kenkyoo/react-app-shop.git
   cd react-app-shop

    Instala las dependencias:

npm install

Ejecuta el servidor de desarrollo:

    npm run dev

    Accede a la app en http://localhost:3000.

Scripts Disponibles

    npm run dev – Inicia el entorno de desarrollo con Vite.
    npm run build – Genera una build de producción.
    npm run preview – Previsualiza la build generada.
    npm run lint – Analiza el código con ESLint.

Estructura del Proyecto

src/
├── components/        # Componentes reutilizables (productos, navbar, alertas, etc.)
├── App.tsx            # Componente principal
├── index.css          # Estilos globales
├── main.tsx           # Punto de entrada de la app
└── services/          # (Opcional) Lógica para interactuar con la API

Deploy

La app está desplegada en Firebase Hosting. Para realizar un deploy:

    Construye el proyecto:

npm run build

Inicia sesión en Firebase:

firebase login

Despliega el proyecto:

    firebase deploy

Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o un pull request en el repositorio.
Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.
