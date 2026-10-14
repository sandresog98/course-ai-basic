# Guía de capturas para las demos (carrusel)

> Cómo tomar las capturas de pantalla de las demos del curso. Estas capturas se
> mostrarán en la web dentro de un **modal con carrusel** (botón "▶ Ver demo").

---

## Reglas generales

- **Formato:** PNG · **16:9** (~1600×900) o el tamaño de tu ventana maximizada.
- **Zoom:** navegador/editor a **125–150%** para que el texto sea legible.
- **Ventana:** maximizada, sin barras personales ni pestañas innecesarias.
- **Sin datos reales** de asociados (usa nombres/temas ficticios).
- **Cursor visible** cuando apliques (ayuda a seguir el paso).
- **Consistencia:** mismo tema y zoom en todas las capturas de una demo.
- **Dónde guardar:** `curso/assets/demos/<demo>/NN-nombre.png`
  (ej. `curso/assets/demos/prompt/01-prompt-flojo.png`).

---

## Demo 1 — Prompt Engineering ("pedir bien")

**Objetivo:** mostrar en vivo cómo el mismo pedido, bien formulado, da mejores resultados.
**Herramienta:** un chat de IA (ChatGPT / Gemini / Claude).

| # | Archivo sugerido | Qué debe mostrar | Texto (descripción del slide) |
|---|---|---|---|
| 1 | `prompt/01-prompt-flojo.png` | El prompt **"Háblame de la cooperativa."** y su respuesta **genérica**. | **Un prompt vago da una respuesta vaga.** |
| 2 | `prompt/02-prompt-bueno.png` | El prompt con **rol + tarea + contexto + formato** y su respuesta mejor. | **Con rol, tarea, contexto y formato, la respuesta mejora.** |
| 3 | `prompt/03-iteracion.png` | La frase *"Ahora hazlo más corto y más emotivo"* y el nuevo resultado. | **Iterar es parte del proceso: corriges y afinas.** |
| 4 | `prompt/04-formato.png` | *"Convierte esto en una tabla"* y la tabla resultante. | **Puedes pedir el formato: tabla, lista, correo…** |

**Prompt bueno de referencia (para la captura 2):**
> "Actúa como comunicador de una cooperativa financiera. Escríbeme un mensaje de bienvenida para asociados nuevos, máximo 4 líneas, tono cálido y sencillo, sin tecnicismos. Dame 2 versiones."

---

## Demo 2 — OpenCode ("la IA que organiza tus archivos")

**Objetivo:** mostrar que la IA puede **organizar carpetas** y **generar un informe** a partir de archivos desordenados.
**Herramienta:** OpenCode (escritorio o terminal).

**Escenario:** una carpeta **"Estudio"** de un universitario, con archivos y subcarpetas desordenados (apuntes, talleres, fotos de pizarra, PDFs con nombres sueltos).

**Carpeta de ejemplo (antes):**
```
Estudio/
  Calculo_taller3_final (1).pdf
  apuntes fisica final.docx
  foto pizarra.jpeg
  PROG proyecto.zip
  quimica_parcial.pdf
  estadistica_clase.xlsx
  sin_titulo.txt
```

**Instrucción de referencia:**
> "Organiza la carpeta Estudio en subcarpetas por materia (Cálculo, Física, Programación, Química, Estadística), renombra los archivos de forma consistente y crea un informe.md con el listado de lo que hiciste y qué hay en cada carpeta."

| # | Archivo sugerido | Qué debe mostrar | Texto (descripción del slide) |
|---|---|---|---|
| 1 | `opencode/01-carpeta-desordenada.png` | La carpeta **"Estudio"** con archivos sueltos y desordenados. | **Tengo una carpeta de estudio con archivos sueltos y desordenados.** |
| 2 | `opencode/02-instruccion.png` | La **instrucción** escrita en OpenCode. | **Le pido que la organice por materia y me haga un informe.** |
| 3 | `opencode/03-organizando.png` | OpenCode **moviendo/creando** archivos y carpetas. | **OpenCode trabaja sobre tus archivos.** |
| 4 | `opencode/04-carpetas-ordenadas.png` | La carpeta ya **organizada por materia**. | **Carpetas ordenadas por materia, con nombres consistentes.** |
| 5 | `opencode/05-informe.png` | El archivo **`informe.md`** con el resumen generado. | **Y un informe con el resumen de lo que hay en cada carpeta.** |

---

## Demo 3 — Prompt de imagen (flojo vs bueno)

**Objetivo:** mostrar que un prompt de imagen bien detallado cambia el resultado.
**Herramienta:** un generador de imágenes (SiliconFlow, Leonardo, etc.).

| # | Archivo sugerido | Qué debe mostrar | Texto (descripción del slide) |
|---|---|---|---|
| 1 | `imagen/01-prompt-flojo.png` | El prompt **"Hazme una imagen sobre inteligencia artificial."** y su resultado **genérico**. | **Un prompt de imagen vago da resultados genéricos.** |
| 2 | `imagen/02-prompt-bueno.png` | El prompt detallado (qué, estilo, luz, formato) y su resultado. | **Con detalle (qué, estilo, luz y formato) cambia todo.** |

**Prompt bueno de referencia:**
> "Ilustración 2.5D moderna y amigable de una persona usando IA en un escritorio, con paneles holográficos y gráficas de datos, paleta azul y turquesa, iluminación suave, mucho detalle, sin texto, formato 16:9."

---

## Demos futuras (opcionales)

Si quieres, luego agregamos:
- **Modelos:** comparar 2 modelos respondiendo lo mismo.
- **Imágenes:** generar una imagen paso a paso.
- **Datos:** subir una tabla y pedir un análisis.

---

## Entrega por etapa

1. Tomas las capturas de **una demo** y las guardas en su carpeta.
2. Me avisas; yo las conecto al carrusel con sus textos.
3. Validamos (que se vean bien, ordenadas y legibles) y pasamos a la siguiente demo.
