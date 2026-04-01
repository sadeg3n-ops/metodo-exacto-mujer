# CAMBIOS_DE_SEGURIDAD

## Resumen honesto
Este proyecto es principalmente una landing/front-end. En el código actual **no se han detectado** protecciones avanzadas de backend como Turnstile, rate limiting, cuarentena, cookies HttpOnly para formularios o validación server-side propia.

Lo que sí se ha reforzado con esta copia de seguridad es la **seguridad operativa**:
- exclusión de secretos y artefactos locales en `.gitignore`;
- documentación explícita de variables y secretos;
- script de backup offline sin secretos;
- rama/tag de copia estable;
- manuales de recuperación y control de cambios.

## Qué había antes
Antes de este trabajo no había un manual único y claro para:
- recuperar la web desde cero;
- exportar una copia offline limpia;
- saber qué secretos hacen falta;
- distinguir entre seguridad real implementada y supuestos.

## Qué se implementó ahora
- Documentación de backup y recuperación.
- Documentación de secretos y variables.
- Inventario de seguridad real, sin inventar protecciones.
- Script `scripts/create-backup.sh` para exportar una copia portable.
- Endurecimiento de `.gitignore` para evitar subir secretos o basura regenerable.
- Estrategia de copia estable con rama + tag.

## Inventario de medidas solicitadas

| Medida | Estado actual | Archivo | Qué hace / cómo verificar |
|---|---|---|---|
| Turnstile | No implementado en este repo | N/A | No hay integración detectada. Si se añade, revisar claves, widget y validación server-side. |
| Validación server-side | No implementada | N/A | El flujo actual no pasa por backend propio. |
| Token firmado de formulario | No implementado | N/A | No existe emisión ni verificación de tokens firmados. |
| Cookie HttpOnly + SameSite=Strict | No implementada para captación | N/A | No hay cookie de seguridad de formulario. |
| Tiempo mínimo de envío | No implementado | N/A | No hay control temporal anti-bot en backend. |
| Honeypot | No implementado | N/A | No hay campo trampa detectado. |
| Filtro anti insultos / spam / abuse | No implementado | N/A | No hay pipeline de moderación en backend. |
| Allow / review / drop | No implementado | N/A | No hay clasificación de entradas. |
| Cuarentena | No implementada | N/A | No existe almacenamiento en revisión. |
| Protección replay / duplicados | No implementada | N/A | No hay control de nonce ni huella. |
| Rate limiting | No implementado | N/A | No hay API propia con límites detectados. |
| Origin allowlist | No implementado | N/A | No hay endpoint backend al que aplicarlo. |
| JSON-only | No implementado | N/A | No hay API JSON propia detectada. |
| Límites de tamaño | No implementados | N/A | No hay request body server-side propio. |
| Errores públicos genéricos | No implementados en backend | N/A | No existe backend de formulario en este repo. |
| Seguridad del email | No implementada | N/A | No hay envío server-side de email detectado. |
| Headers de seguridad custom | No detectados en código del repo | N/A | Verificar manualmente respuesta HTTP si se añaden en el futuro. |
| Integración Cloudflare | No detectada en el repo | N/A | Hoy la publicación depende de Vercel. |
| Integración Vercel | Sí, a nivel de despliegue | `.vercel/project.json` local, scripts y producción | Mantiene HTTPS y despliegue gestionado; el archivo local `.vercel` no se versiona. |
| Exclusión de secretos en git | Sí | `.gitignore` | Verificar con `git status --ignored` y revisar que `.env*` y `.vercel/` no entren en staging. |
| Flujo de captación sin backend propio | Sí | `app/page.tsx`, `components/landing/cta-modal.tsx`, bloques WhatsApp/Calendly | El formulario/modal actual es de front-end; la captación real depende de Calendly/WhatsApp o del modal visual. |

## Archivos tocados por esta mejora operacional
- `.gitignore`
- `README_BACKUP.md`
- `RECUPERACION_TOTAL.md`
- `CAMBIOS_DE_SEGURIDAD.md`
- `MANUAL_PARA_CODEX.md`
- `BACKUP_PENDRIVE.md`
- `VARIABLES_Y_SECRETOS.md`
- `scripts/create-backup.sh`

## Qué sigue pendiente u opcional
- Faltan protecciones server-side si el modal se convierte en formulario real.
- Sustituir datos de contacto placeholder antes de tráfico real.
- Mantener revisados OG/meta si cambia el dominio.

## Cómo comprobar que esta protección operativa sigue viva
1. `git status --ignored` no debe incluir secretos listos para commit.
2. `.env.local`, `.env.production`, `.vercel/` y `backup-export/generated/` deben seguir fuera de git.
3. `./scripts/create-backup.sh` debe generar `.tar.gz` + `.bundle` + `SHA256SUMS.txt`.
4. Deben existir la rama `backup/copia-de-seguridad-completa-2026-04-01` y el tag `copia-seguridad-2026-04-01`.
