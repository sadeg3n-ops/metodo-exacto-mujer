# VARIABLES_Y_SECRETOS

## Regla principal
**No subas secretos reales a GitHub.**
Guárdalos en Vercel, en un gestor de contraseñas o en un archivo cifrado fuera del repo.

## Variables detectadas / necesarias
| Variable | Tipo | Para qué sirve | Ejemplo seguro |
|---|---|---|---|
| `NEXT_PUBLIC_CALENDLY_URL` | Pública | URL del Calendly que abre el CTA principal | `https://calendly.com/tuusuario/valoracion-15min` |
| `NEXT_PUBLIC_SITE_URL` | Pública | URL canónica usada para metadatos y preview social | `https://metodo-exacto-mujer.vercel.app` |
| `VERCEL_PROJECT_PRODUCTION_URL` | Sistema Vercel | Fallback automático de Vercel para la URL pública | `metodo-exacto-mujer.vercel.app` |

## Dónde se configuran
- Local: `.env.local`
- Producción: panel de Vercel → `Settings` → `Environment Variables`
- Nunca en archivos versionados con valores reales

## Qué es público y qué es secreto
- Las variables `NEXT_PUBLIC_*` terminan en el navegador. No deben contener secretos privados.
- Las variables sin `NEXT_PUBLIC_` pueden ser sensibles y deben vivir solo en backend/servidor.
- `VERCEL_PROJECT_PRODUCTION_URL` es una variable de sistema de Vercel, no un secreto que debas escribir a mano.

## Dónde guardar secretos
- Preferido: 1Password / Bitwarden / Dashlane
- Alternativa: archivo cifrado fuera del repo
- Nunca en GitHub, nunca en el ZIP/TAR del proyecto, nunca en capturas compartidas

## Verificación rápida
1. `git status --ignored` no debe mostrar `.env.local` listo para commit.
2. `.env.example` sí puede estar en el repo, pero solo con ejemplos seguros.
3. Vercel debe tener cargadas las variables de producción antes del deploy.
