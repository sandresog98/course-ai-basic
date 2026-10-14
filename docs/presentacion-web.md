# F10 — Presentación web interactiva

Versión **experiencia web** del curso *"Inteligencia Artificial sin misterios"*:
una sola página con **scroll narrativo**, animaciones de aparición, barra de
progreso, navegación por puntos y contador animado. Usa las 28 imágenes de
`../assets/imagenes/`.

> Es la versión "B" (inmersiva). La versión "A" en diapositivas está en
> `../09-presentacion-diapositivas/`.

---

## Cómo abrirla

Con Apache corriendo (XAMPP):
```
http://localhost/projects/cursos/10-presentacion-web/index.html
```

O con un servidor local:
```bash
cd 10-presentacion-web
python -m http.server 8000
# abrir http://localhost:8000
```

> Necesita internet la primera vez: la tipografía Poppins se carga desde Google Fonts.

---

## Interacción

| Acción | Resultado |
|---|---|
| Scroll | Avanza por las secciones (con parallax suave) |
| `↓` / `→` / `Espacio` | Salta a la siguiente sección |
| `↑` / `←` | Sección anterior |
| `Inicio` / `Fin` | Primera / última sección |
| Clic en los puntos (derecha) | Salta a esa sección |
| Botón **Comenzar** | Inicia el recorrido |

- **Barra de progreso** arriba y porcentaje en el pie.
- Podcast de secciones: los **puntos laterales** marcan dónde estás.
- Los elementos aparecen con animación al entrar en pantalla.
- **Textos:** los títulos entran **palabra por palabra** y los *kickers* dibujan un subrayado.
- **Números:** los números de tarjetas, pasos, secciones y el **90%** aparecen con rebote/pulso.
- **Imágenes:** tienen un **movimiento continuo sutil** (flotación y zoom lento tipo Ken Burns) para que nunca se sientan estáticas, desincronizado entre secciones.
- El número **90%** se cuenta hacia arriba y hace un rebote al llegar a la confesión.

---

## Estructura

```
10-presentacion-web/
├── index.html    # Todo el contenido, en secciones <section>
├── css/web.css   # Tema y animaciones (paleta del curso)
├── js/web.js     # Progreso, puntos, aparición, parallax, contador, teclado
└── README.md
```

---

## Cómo editar

1. **Contenido:** edita las secciones en `index.html` (cada `<section>` es un bloque).
2. **Colores/tipografía:** variables al inicio de `css/web.css`.
3. **Imágenes:** están en `../assets/imagenes/`. Al reemplazar un archivo
   **manteniendo el nombre**, la web se actualiza sola.
4. **Añadir una sección:** copia un `<section class="section split">`, cámbiale el
   contenido y, si quieres que aparezca en los puntos, añade `data-nav="Nombre"`.

### Variantes de sección

| Clase | Uso |
|---|---|
| `section split` | Texto + imagen en dos columnas |
| `section split reverse` | Imagen a la izquierda |
| `section center` | Contenido centrado |
| `divider` | Separador de sección con imagen de fondo |
| `hero` | Portada / cierre a pantalla completa |

---

## Exportar / compartir

- Es una página estática: se puede publicar en cualquier hosting (o usar la
  carpeta como material del curso).
- Para una versión imprimible, usar la presentación de diapositivas (`../09-...`),
  pensada para exportar a PDF.

---

## Cuándo cambiemos el diseño de las imágenes

No hay que tocar el HTML: reemplaza los archivos en `../assets/imagenes/` con los
mismos nombres (`fNN-mX-nombre.png`) y regenera con `imggen/` si aplica.
