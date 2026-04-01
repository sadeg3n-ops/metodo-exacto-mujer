# BACKUP_PENDRIVE

## Objetivo
Crear una copia offline, limpia y fácil de restaurar de **Método Exacto Mujer** para guardarla en un pendrive o disco externo.

## Qué incluir
- el archivo `.tar.gz` generado por `./scripts/create-backup.sh`;
- el archivo `.bundle` con el historial git completo;
- `SHA256SUMS.txt` y `MANIFIESTO_BACKUP.txt` generados por el script;
- opcionalmente una copia local adicional de esta documentación.

## Qué NO incluir
- `node_modules/`
- `.next/`
- `.vercel/`
- secretos reales (`.env.local`, tokens, credenciales)
- archivos temporales del sistema
- backups viejos innecesarios

## Cómo generar la copia
```bash
cd "/Users/antonio/Documents/3. Webs/metodo-exacto-mujer-local"
./scripts/create-backup.sh
```

## Dónde queda
El script deja todo en:
- `backup-export/generated/FECHA_HORA/`

Dentro encontrarás:
- `*.tar.gz` → código + documentación
- `*.bundle` → historial git completo
- `MANIFIESTO_BACKUP.txt`
- `SHA256SUMS.txt`

## Cómo guardarlo en el pendrive
1. Conecta el pendrive.
2. Crea una carpeta con nombre claro, por ejemplo: `Método Exacto Mujer-copia-seguridad-2026-04-01`.
3. Copia dentro el contenido de `backup-export/generated/ULTIMA_FECHA/`.
4. Guarda aparte los secretos en un gestor de contraseñas o en un archivo cifrado fuera del repo.

## Cómo guardar secretos de forma segura
- Recomendado: 1Password, Bitwarden o similar.
- Alternativa: archivo cifrado con contraseña fuerte fuera del repo.
- Nunca guardes secretos en GitHub ni dentro del `.tar.gz` del proyecto.

## Cómo verificar que la copia del pendrive es válida
1. Verifica checksums:
   ```bash
   cd /ruta/al/pendrive/Método Exacto Mujer-copia-seguridad-2026-04-01
   shasum -a 256 -c SHA256SUMS.txt
   ```
2. Verifica el bundle git:
   ```bash
   git bundle verify *.bundle
   ```
3. Verifica el contenido del tar:
   ```bash
   tar -tzf *.tar.gz | head
   ```
4. Comprueba que están los documentos `README_BACKUP.md`, `RECUPERACION_TOTAL.md` y `VARIABLES_Y_SECRETOS.md`.
