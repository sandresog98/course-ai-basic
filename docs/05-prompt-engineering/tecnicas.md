# F5 — Técnicas de Prompt Engineering

> Material de apoyo del bloque. Cada técnica viene con un ejemplo **malo** y uno
> **bueno**, listos para usar en la demo o en las diapositivas.

---

## La receta base: R-T-C-F-E

| Paso | Pregunta que responde | Ejemplo |
|---|---|---|
| **R**ol | ¿Quién debe ser la IA? | "Actúa como un asesor financiero con experiencia" |
| **T**area | ¿Qué debe hacer? | "escríbeme un correo" |
| **C**ontexto | ¿Para quién y por qué? | "para asociados nuevos que acaban de entrar" |
| **F**ormato | ¿Cómo lo quiero? | "en 3 párrafos, tono cálido, sin tecnicismos" |
| **E**jemplo | ¿Cómo sería un buen resultado? | "parecido a este: …" |

> **Ejemplo completo:**
> *"Actúa como un asesor financiero con experiencia (rol). Escríbeme un correo
> (tarea) para asociados nuevos de la cooperativa que acaban de entrar (contexto),
> en 3 párrafos cortos, tono cálido y sin tecnicismos (formato). Guíate de este
> estilo: '¡Bienvenido a la familia…' (ejemplo)."*

---

## Las 6 técnicas que más sirven

### 1) Sé específico
La IA responde a lo que pides, no a lo que piensas.

| ❌ | ✅ |
|---|---|
| "Háblame de ahorro" | "Explícame en 5 puntos por qué ahorrar sirve, para alguien que nunca ha ahorrado" |

### 2) Da contexto
Mientras más sepa la IA de tu situación, mejor responde.

| ❌ | ✅ |
|---|---|
| "Escribe una circular" | "Escribe una circular para asociados de una cooperativa sobre el nuevo horario de atención, tono cordial y breve" |

### 3) Define el formato de salida
Tabla, lista, párrafo, correo, guion… tú decides.

| ❌ | ✅ |
|---|---|
| "Comparemos estos planes" | "Compárame estos dos planes en una tabla con columnas: beneficio, costo y para quién sirve" |

### 4) Pide paso a paso
Para problemas complejos, que razone antes de concluir.

| ❌ | ✅ |
|---|---|
| "¿Cuál crédito me conviene?" | "Analiza paso a paso: 1) qué necesito, 2) qué opciones hay, 3) cuál recomiendas y por qué" |

### 5) Da un ejemplo (few-shot)
Muéstrale un modelo y la IA imita el estilo.

| ❌ | ✅ |
|---|---|
| "Responde las quejas" | "Responde quejas con este estilo: 'Entendemos tu caso y ya lo estamos revisando'. Ahora responde esta: …" |

### 6) Itera y conversa
El primer resultado rara vez es el final. Pídele cambios.

| ❌ | ✅ |
|---|---|
| "No me gustó" (y cierro) | "Hazlo más corto", "cambia el tono a más formal", "elimina lo técnico", "dame 3 versiones distintas" |

---

## Errores comunes (y cómo evitarlos)

| Error | Solución |
|---|---|
| Pedir algo muy vago | Aplica la receta R-T-C-F-E |
| Asumir que la IA "ya sabe" mi contexto | Dáselo explícitamente |
| Aceptar la primera respuesta | Itera: "hazlo mejor", "más corto", "más claro" |
| Creerle todo sin verificar | **Siempre revisa** datos, cifras y nombres |
| Subir información confidencial | Nunca subir datos de asociados a herramientas públicas |

---

## Comandos de conversación que puedes usar

- "Explícamelo como si tuviera 12 años."
- "Ahora hazlo en una tabla."
- "Dame 3 versiones con tonos distintos."
- "¿Qué información te falta para responder mejor?"
- "Resume en una sola frase."
- "Revisa si hay errores y corrígelos."

---

## Frase para recordar

> **"Si la IA te responde mal, probablemente le pediste mal.
> No es magia: es una conversación."**
