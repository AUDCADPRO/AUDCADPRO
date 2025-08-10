# AUDCAD PRO — Landing (Next.js + Tailwind + Framer Motion)

## Requisitos
- Node.js LTS (descarga desde https://nodejs.org)

## Instalación
1. Abre una terminal dentro de esta carpeta.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre http://localhost:3000 en tu navegador.

## Personalización
- Cambia `VT_LINK` en `app/page.tsx` por tu enlace real de copy en VT Markets.
- Inserta tu widget (Myfxbook/FXBlue/MQL5) en la sección de métricas.
- Edita textos legales (privacidad, cookies, aviso) antes de publicar.

## Despliegue en Vercel
1. Crea una cuenta en https://vercel.com (gratis).
2. Instala Vercel CLI (opcional) y despliega:
   ```bash
   npm i -g vercel
   vercel
   ```
   o sube este proyecto a GitHub y usa **Import Project** en Vercel.
3. En Vercel, ve a **Settings → Domains** y añade `audcadpro.es`.
4. En tu proveedor de dominio, apunta los DNS a Vercel (te dirá los registros).

¡Listo!
