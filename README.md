# Curso "Inteligencia Artificial sin misterios" — Coomultiunion

Entregable consolidado del curso: la **presentación web interactiva** y sus recursos.

---

## Cómo abrirlo

Con Apache (XAMPP) corriendo:
```
http://localhost/projects/cursos/curso/index.html
```

O con un servidor local dentro de esta carpeta:
```bash
python -m http.server 8000
# abrir http://localhost:8000
```

---

## Contenido

```
curso/
├── index.html          Presentación web (scroll narrativo)
├── css/  ·  js/        Estilos y comportamiento
├── assets/
│   ├── imagenes/       Las 28 imágenes del curso (estilo 2.5D)
│   ├── logos/          Logo de Coomultiunion, ícono de MULTI
│   └── demos/          Capturas de las demos (para el carrusel)
└── docs/               Guiones y materiales del curso
```

---

## Interacción

- **Scroll narrativo** con animaciones, **barra de progreso** y **menú de puntos** (derecha).
- **Clic en una imagen** → se abre en grande (lightbox).
- **Navegación por teclado**: `↓/→/Espacio`, `↑/←`, `Inicio/Fin`, `Esc`.
- Los **guiones del presentador** y materiales están en `docs/`.

---

## Regenerar imágenes

La herramienta está en `../imggen` (fuera de este entregable) y escribe en
`curso/assets/imagenes`. Guía de la herramienta: `../imggen/README.md`.

---

## Notas

- El resto de materiales del proyecto (plan, diapositivas, backups v1, guías de
  imagen) están en `../_archivo/`.
