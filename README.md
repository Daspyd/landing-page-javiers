# Landing Page - Página de Presentación

Una landing page moderna y profesional creada con HTML, CSS y JavaScript vanilla.

## 🚀 Características

- **Diseño Responsive**: Se adapta perfectamente a móviles, tablets y escritorio
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Navegación Fixed**: Menú que permanece visible al hacer scroll
- **Secciones Incluidas**:
  - Hero con llamada a la acción
  - Acerca de con estadísticas animadas
  - Servicios con tarjetas interactivas
  - Formulario de contacto
  - Footer completo

## 📁 Estructura del Proyecto

```
landing-page/
├── index.html       # Estructura HTML
├── styles.css       # Estilos CSS
├── script.js        # JavaScript
└── README.md        # Este archivo
```

## 🎨 Personalización

### Colores
Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #6366f1;    /* Color principal */
    --secondary-color: #8b5cf6;  /* Color secundario */
    --dark-color: #1e293b;       /* Color oscuro */
    --light-color: #f8fafc;      /* Color claro */
}
```

### Contenido
1. **Textos**: Edita directamente en `index.html`
2. **Logo**: Cambia "TuMarca" por tu nombre de marca
3. **Servicios**: Modifica las tarjetas en la sección `#services`
4. **Estadísticas**: Actualiza los números en `.stat-number`
5. **Contacto**: Cambia email, teléfono y ubicación

### Imágenes
- Reemplaza el SVG placeholder con tus propias imágenes
- Añade un directorio `images/` y actualiza las rutas

## 🌐 Cómo Usar

### Opción 1: Abrir Localmente
1. Abre `index.html` directamente en tu navegador
2. Listo, no necesitas servidor

### Opción 2: Con Servidor Local
```bash
# Python 3
python -m http.server 8000

# Node.js (con http-server)
npx http-server

# PHP
php -S localhost:8000
```

Luego abre: `http://localhost:8000`

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## ✨ Funcionalidades JavaScript

- Menú hamburguesa para móviles
- Smooth scroll en navegación
- Animaciones al hacer scroll
- Contador animado en estadísticas
- Validación de formulario
- Efectos hover interactivos

## 🎯 Próximos Pasos

1. **Conectar el formulario** a un backend o servicio como:
   - Formspree
   - EmailJS
   - Google Forms
   - Tu propio servidor

2. **Añadir Google Analytics** para tracking

3. **Optimizar para SEO**:
   - Meta tags
   - Open Graph
   - Schema.org

4. **Deploy a producción**:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

## 📦 Deploy Rápido

### Netlify (Gratis)
1. Arrastra la carpeta a netlify.com/drop
2. Listo

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [tu-repo]
git push -u origin main
```
Activa GitHub Pages en Settings → Pages

## 📄 Licencia

Este proyecto es de código abierto. Úsalo libremente.

## 💡 Tips

- Cambia los colores según tu marca
- Añade más secciones según necesites
- Incluye testimonios de clientes
- Agrega un blog o galería
- Integra con redes sociales

---

**¡Personaliza y haz tuya esta landing page!** 🎉
