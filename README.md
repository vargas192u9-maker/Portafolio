# Portafolio de Gustavo Vargas

Next.js (App Router) · React · TypeScript · Tailwind CSS 4 · Motion · Lucide React

## Ejecutar
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Editar contenido
- Datos personales y textos: `src/data/profile.ts`
- Habilidades: `src/data/skills.ts`
- Proyectos (agrega un objeto y se crea su página): `src/data/projects.ts`
- Capturas reales: guárdalas en `public/projects/` y agrega sus rutas en `screenshots` del proyecto.
- CV: coloca el PDF en `public/CV_Gustavo_Vargas.pdf`. Los botones "Descargar CV" aparecen solo si el archivo existe.

## Desplegar en Vercel
1. Sube el repositorio a GitHub e impórtalo en vercel.com.
2. Define `NEXT_PUBLIC_SITE_URL` (ej. `https://tu-dominio.com`) para sitemap y metadatos.
3. Conecta tu dominio en Settings → Domains.

Nota: el formulario de contacto no se incluyó porque aún no hay un servicio de envío configurado.
