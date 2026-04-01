# RECUPERACION_TOTAL

## Objetivo
Recuperar **Método Exacto Mujer** desde cero si se pierde el ordenador, la carpeta local o el entorno completo.

## Qué necesitas antes de empezar
- Git instalado.
- Node.js LTS (recomendado: 20.x).
- npm.
- Acceso al repositorio en GitHub.
- Acceso a la cuenta/proyecto de Vercel.
- Acceso seguro a los secretos y variables de entorno.

## Recuperación total paso a paso
1. **Clonar el repo**
   ```bash
   git clone https://github.com/sadeg3n-ops/metodo-exacto-mujer.git
   cd "metodo-exacto-mujer-local"
   ```
2. **Instalar dependencias**
   ```bash
   npm install
   ```
3. **Restaurar variables de entorno**
   - Revisa [`VARIABLES_Y_SECRETOS.md`](./VARIABLES_Y_SECRETOS.md).
   - Crea un archivo `.env.local` a partir de `.env.example` si existe.
   - Nunca copies secretos reales dentro del repo versionado.
4. **Vincular o relinkar Vercel**
   ```bash
   vercel login
   vercel link
   ```
   Si quieres arrastrar variables desde Vercel:
   ```bash
   vercel env pull .env.local
   ```
5. **Verificar build local**
   ```bash
   npm run build
   ```
6. **Levantar la web en local**
   ```bash
   npm run dev
   ```
7. **Comprobar Turnstile**
   - Estado actual: **no está implementado en este repo**.
   - Acción de verificación: confirmar que sigue sin dependerse de Turnstile o, si se añade en el futuro, revisar claves y validación server-side antes de publicar.
8. **Comprobar el flujo del formulario / captación**
   - CTA principal: abre Calendly si existe `NEXT_PUBLIC_CALENDLY_URL`.
   - Fallback: modal visual en `components/landing/cta-modal.tsx`.
   - WhatsApp: enlaces directos en FAQ y footer.
   - No existe backend de leads en el repo actual.
9. **Comprobar correo**
   - Estado actual: **no hay envío de email server-side implementado dentro del repo**.
   - Si en el futuro se conecta un servicio de email, documentarlo antes de pasar a producción.
10. **Comprobar headers y seguridad**
    - Revisar HTTPS en producción.
    - Verificar que `.env.local`, `.vercel/` y archivos temporales siguen ignorados por git.
    - Confirmar que no se han añadido secretos al repo.
11. **Volver a desplegar en Vercel**
    ```bash
    npm run deploy:prod
    ```
12. **Verificación final en producción**
    - Abrir https://metodo-exacto-mujer.vercel.app
    - Probar CTA principal.
    - Probar CTA final.
    - Verificar WhatsApp/Calendly.
    - Verificar preview social y metadatos.
    - Confirmar que no hay errores en consola críticos.

## Checklist de desastre (orden exacto)
1. clonar repo
2. instalar Node
3. `npm install`
4. crear/restaurar variables de entorno
5. verificar `npm run build`
6. desplegar en Vercel
7. comprobar Turnstile (no aplica hoy; confirmar estado)
8. comprobar formulario / captación
9. comprobar correo (no aplica hoy; confirmar estado)
10. comprobar headers, HTTPS y secretos
