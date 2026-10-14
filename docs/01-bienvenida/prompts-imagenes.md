> ⚠️ Prompts en estilo **plano** (referencia histórica). El set definitivo adoptado es **2.5D** en imggen/prompts/imagenes.md (generado por imggen/).

# F1 â€” Prompts de imÃ¡genes (SiliconFlow)

> Prompts listos para pegar en **SiliconFlow** (modelos tipo FLUX.1 / Stable Diffusion).
> Los prompts van **en inglÃ©s** porque es donde mejor responde el modelo;
> el texto que aparezca dentro de la imagen pedirÃ¡ **espaÃ±ol**.

---

## CÃ³mo usar estos prompts en SiliconFlow

1. Entra a SiliconFlow â†’ *Image Generation*.
2. Modelo recomendado: **FLUX.1-schnell** (rÃ¡pido y gratis) o **FLUX.1-dev** (mÃ¡s calidad).
3. Pega el **Prompt** y, si la interfaz lo permite, el **Negative prompt**.
4. Ajusta:
   - **Steps:** 20â€“30 (dev) Â· 4â€“8 (schnell)
   - **Guidance / CFG:** 3.5 (FLUX) Â· 7 (SDXL)
   - **Aspect ratio / TamaÃ±o:** segÃºn la fila de cada imagen
   - **Seed:** fija un nÃºmero si quieres reproducir el resultado
5. Genera 3â€“4 variaciones y elige la mejor.

**Estilo global del curso** (para mantener coherencia en todas las imÃ¡genes):
`modern, clean, friendly, flat vector illustration with soft gradients, warm and professional, cohesive color palette (deep blue, teal, warm orange accents), subtle geometric shapes, inclusive Latin American people, no clutter`

---

## Imagen 1 â€” Portada / fondo de la bienvenida

- **TamaÃ±o:** 1536 Ã— 864 (16:9) â€” sirve de fondo de diapositiva
- **Prompt:**
  > A warm, welcoming flat vector illustration of a diverse group of Latin American adults of different ages smiling and looking at glowing digital screens floating above a shared table, symbolizing a cooperative community embracing technology. Modern, clean, friendly style, soft gradients, deep blue and teal palette with warm orange accents. Subtle abstract network lines connecting the people. Bright, optimistic, professional, no clutter.
- **Negative prompt:**
  > text, words, letters, watermark, logo, distorted faces, extra fingers, extra limbs, cluttered, dark, scary robot, neon overload, low quality, blurry
- **Texto a superponer luego:** *"Inteligencia Artificial sin misterios"*

---

## Imagen 2 â€” Diapositiva de presentaciÃ³n personal

- **TamaÃ±o:** 1024 Ã— 1024 (1:1) â€” para la ficha del ponente
- **Prompt:**
  > Flat vector illustration of a friendly young Latin American male software engineer standing confidently, wearing a smart casual shirt, surrounded by soft icons of databases, charts and gears, symbolizing experience in technology and data. Clean modern corporate style, deep blue and teal palette with subtle orange highlights, plain light background, centered composition, no text.
- **Negative prompt:**
  > text, logo, watermark, realistic photo, scary, extra arms, distorted hands, cluttered background, low quality
- **Uso:** acompaÃ±ar la ficha de AndrÃ©s (`bio-andres.md`).

---

## Imagen 3 â€” Puente comunidad â†” tecnologÃ­a

- **TamaÃ±o:** 1536 Ã— 864 (16:9)
- **Prompt:**
  > Conceptual flat vector illustration of a glowing bridge connecting a friendly neighborhood community on one side and a modern digital technology landscape on the other, people walking across the bridge. Symbolizes a cooperative helping its members step into the digital world. Soft gradients, deep blue, teal and warm orange palette, hopeful and clean, no text.
- **Negative prompt:**
  > text, words, watermark, logo, gloomy, dark, distorted people, extra limbs, low quality, messy
- **Uso:** transiciÃ³n entre "la cooperativa" y los temas de IA.

---

## Imagen 4 â€” MULTI v2 (app de la cooperativa)

- **TamaÃ±o:** 1024 Ã— 1024 (1:1)
- **Prompt:**
  > Clean flat vector illustration of a smartphone showing a modern cooperative banking app interface with friendly cards for savings, credit and community services, floating gently above a hand, surrounded by soft abstract icons of money, people and connection. Deep blue and teal palette with warm orange accents, light background, modern fintech style, no readable text.
- **Negative prompt:**
  > text, letters, watermark, logo, brand names, cluttered UI, distorted phone, extra fingers, low quality, dark
- **Uso:** refuerzo visual al hablar de MULTI v2.
- **Nota:** si quieres el **logo real** o una **captura real** de MULTI, mejor usar la imagen oficial y editar el mockup a mano.

---

## Checklist de validaciÃ³n F1

- [ ] Â¿La paleta (azul profundo, turquesa, naranja) te gusta para todo el curso?
- [ ] Â¿Generas primero la Imagen 1 y validamos estilo antes de producir el resto?
- [ ] Â¿Reemplazamos la Imagen 4 por una captura real de MULTI?
