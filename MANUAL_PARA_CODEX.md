# MANUAL_PARA_CODEX

## Arquitectura actual
- `app/layout.tsx`: metadatos, Analytics, recursos globales y carga opcional de Calendly.
- `app/page.tsx`: compone la landing y centraliza el CTA principal.
- `components/landing/*`: bloques visibles de la página (hero, problema, proceso, testimonios, programa, FAQ, footer).
- `components/ui/*`: utilidades visuales y componentes auxiliares.
- `public/`: imágenes, iconos y previews sociales.
- `scripts/`: automatizaciones locales (`dev-antigravity.sh`, `publish.sh`, `create-backup.sh`).

## Flujo actual del formulario / captación
   - CTA principal: abre Calendly si existe `NEXT_PUBLIC_CALENDLY_URL`.
   - Fallback: modal visual en `components/landing/cta-modal.tsx`.
   - WhatsApp: enlaces directos en FAQ y footer.
   - No existe backend de leads en el repo actual.

## Variables de entorno necesarias
| Variable | Tipo | Para qué sirve | Ejemplo seguro |
|---|---|---|---|
| `NEXT_PUBLIC_CALENDLY_URL` | Pública | URL del Calendly que abre el CTA principal | `https://calendly.com/tuusuario/valoracion-15min` |
| `NEXT_PUBLIC_SITE_URL` | Pública | URL canónica usada para metadatos y preview social | `https://metodo-exacto-mujer.vercel.app` |
| `VERCEL_PROJECT_PRODUCTION_URL` | Sistema Vercel | Fallback automático de Vercel para la URL pública | `metodo-exacto-mujer.vercel.app` |

## Decisiones de seguridad importantes
- No asumir que existe backend seguro: hoy no hay endpoint propio protegido para leads dentro del repo.
- Mantener `.env*` fuera de git.
- Mantener `.vercel/` fuera de git.
- No subir exportes de backup generados.
- Si se añade backend de formulario, documentar inmediatamente validación, rate limiting, secrets y proveedor antes de desplegar.

## Qué no se debe tocar sin cuidado
- `app/layout.tsx`: puede romper metadatos, preview social o carga de Calendly.
- `app/page.tsx`: controla el CTA principal y el fallback a modal.
- `components/landing/faq-section.tsx` y `components/landing/footer-section.tsx`: contienen enlaces críticos de captación.
- `.env.example`: debe mantenerse sin secretos reales.
- `scripts/publish.sh`: es el camino corto a producción.
- `scripts/create-backup.sh`: es la salida de emergencia offline.

## Checklist antes de modificar producción
1. leer `git status`
2. revisar `VARIABLES_Y_SECRETOS.md`
3. confirmar si el CTA sigue yendo a Calendly, WhatsApp o modal
4. no tocar secretos en texto plano
5. ejecutar `npm run build`
6. revisar hero, CTA principal, CTA final, FAQ y footer

## Checklist antes de desplegar
1. `git status` limpio o cambios conocidos
2. `npm run build`
3. revisar copy, enlaces y previews sociales
4. confirmar variables de entorno vigentes en Vercel
5. ejecutar `npm run deploy:prod`
6. comprobar producción en https://metodo-exacto-mujer.vercel.app

## Notas específicas para futuro Codex
- `app/layout.tsx` construye la URL base desde `NEXT_PUBLIC_SITE_URL` o la variable de sistema de Vercel.
- Si cambia el dominio, actualizar antes metadatos y previews sociales.
