# Auditoría de dependencias y vulnerabilidades

## Resultado del escaneo

Corrí el escáner de dependencias del proyecto: **no se encontraron vulnerabilidades de severidad alta ni crítica** en las dependencias instaladas. `npm audit` directo no está disponible en este sandbox (el registry interno no soporta la operación), por lo que el escaneo se basa en la base de datos GHSA que usa Lovable.

Sin embargo, revisando `package.json` hay varios paquetes con versiones que arrastran avisos **moderados** conocidos o que están desactualizados respecto a su rama estable. Conviene actualizarlos preventivamente.

## Entorno

- **Node**: el proyecto no fija versión en `package.json` (no hay `engines`). El CI (`.github/workflows/ci.yml`) usa **Node 18**, que ya está en fin de soporte (EOL abril 2025). Recomiendo subir a Node 20 LTS o 22 LTS.
- **React 18.3.1**: estable, sin CVEs abiertos. React 19 existe pero implica migración mayor — no es necesario por seguridad.

## Paquetes a actualizar (sin breaking changes mayores)

Actualización dentro del mismo rango semver mayor, todas seguras:

| Paquete | Actual | Motivo |
|---|---|---|
| `vite` | ^5.4.1 | La rama 5.4.x tiene varios parches de seguridad posteriores (CVE-2025-30208 bypass de `server.fs.deny`, CVE-2025-31125, CVE-2025-31486, CVE-2025-32395). Subir al último 5.4.x. |
| `esbuild` (transitiva vía vite) | <0.25 | GHSA-67mh-4wv8-2f99 (dev server). Se resuelve actualizando Vite. |
| `@vitejs/plugin-react-swc` | ^3.5.0 | Última 3.x trae fixes menores. |
| `react-router-dom` | ^6.26.2 | Versiones >=6.28 corrigen avisos moderados de SSR/spoofing. |
| `@tanstack/react-query` | ^5.56.2 | Subir al último 5.x. |
| `framer-motion` | ^12.6.3 | Subir al último 12.x. |
| `zod` | ^3.23.8 | Subir al último 3.x. |
| `vitest` + `@vitest/*` | ^2.1.9 | Subir al último 2.1.x (mismo major) para parches. |
| `lucide-react` | ^0.462.0 | Versiones nuevas con fixes (no de seguridad). |
| `recharts` | ^2.12.7 | Subir al último 2.x. |
| `jsdom` | ^25.0.1 | Subir al último 25.x. |

## Actualizaciones mayores opcionales (NO automáticas)

Las dejo fuera de la aplicación automática porque requieren validación manual:

- `next-themes` 0.3 → 0.4 (cambios en API)
- `date-fns` 3 → 4 (breaking en algunas funciones)
- `cmdk` 1.0 → 1.1
- `vitest` 2 → 3
- `react` 18 → 19 (no recomendado por ahora)

## Cambios a realizar

1. Actualizar las dependencias listadas arriba a su última versión dentro del mismo major usando `bun update` selectivo.
2. Actualizar `.github/workflows/ci.yml` para usar Node 20 (LTS actual).
3. Añadir `"engines": { "node": ">=20" }` a `package.json` para fijar requisito.
4. Re-correr el escáner de dependencias para confirmar que sigue sin findings altos/críticos.

## Lo que NO voy a tocar

- No cambio React, react-dom, react-router-dom de major.
- No toco la lógica de la app ni componentes — solo `package.json`, `bun.lockb` y el workflow de CI.
- No hago migraciones mayores (next-themes, date-fns, vitest 3) sin tu OK explícito.

¿Procedo con esta actualización conservadora?
