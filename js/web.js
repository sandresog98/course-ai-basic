/* F10 — Experiencia web interactiva "IA sin misterios" */

(function () {
  "use strict";

  const sections = Array.from(document.querySelectorAll("main > section"));
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const dotsWrap = document.getElementById("dots");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------------------- Version de imagenes (cache-busting) -------------------- */
  // Sube IMG_VER cuando reemplaces imagenes en assets/imagenes/ o assets/logos/.
  const IMG_VER = "7";
  (function bustImageCache() {
    document.querySelectorAll('img[src*="assets/"]').forEach(img => {
      const s = img.getAttribute("src");
      if (s && !s.includes("?")) img.setAttribute("src", s + "?v=" + IMG_VER);
    });
    document.querySelectorAll(".hero-bg").forEach(el => {
      const bg = el.style.backgroundImage || "";
      const m = bg.match(/url\((['"]?)(.*?)\1\)/);
      if (m && m[2].includes("assets/") && !m[2].includes("?")) {
        el.style.backgroundImage = "url('" + m[2] + "?v=" + IMG_VER + "')";
      }
    });
  })();

  /* -------------------- Navegación por puntos -------------------- */
  const namedSections = sections.filter(s => s.dataset.nav);
  const dots = namedSections.map(sec => {
    const b = document.createElement("button");
    b.title = sec.dataset.nav;
    b.dataset.label = sec.dataset.nav;
    b.setAttribute("aria-label", sec.dataset.nav);
    b.addEventListener("click", () => sec.scrollIntoView({ behavior: "smooth" }));
    dotsWrap.appendChild(b);
    return b;
  });

  function updateActiveDot() {
    // El punto activo es el ÚLTIMO divisor con nombre que ya pasó el centro:
    // así, las secciones de contenido (sin data-nav) pertenecen a su módulo.
    const mid = window.innerHeight * 0.5;
    let active = 0;
    namedSections.forEach((sec, i) => {
      if (sec.getBoundingClientRect().top <= mid) active = i;
    });
    dots.forEach((d, i) => d.classList.toggle("active", i === active));
    markSheet();
  }

  /* -------------------- Menú inferior (móvil) -------------------- */
  const mobileSheet = document.getElementById("mobileSheet");
  const mobileNavBtn = document.getElementById("mobileNavBtn");
  const sheetItems = [];
  if (mobileSheet && mobileNavBtn) {
    namedSections.forEach((sec) => {
      const b = document.createElement("button");
      b.textContent = sec.dataset.nav;
      b.addEventListener("click", () => {
        sec.scrollIntoView({ behavior: "smooth" });
        mobileSheet.classList.remove("open");
        document.body.style.overflow = "";
      });
      mobileSheet.appendChild(b);
      sheetItems.push({ b, sec });
    });
    mobileNavBtn.addEventListener("click", () => {
      const open = mobileSheet.classList.toggle("open");
      document.body.style.overflow = open ? "hidden" : "";
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileSheet.classList.contains("open")) {
        mobileSheet.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }
  function markSheet() {
    if (!sheetItems.length) return;
    const idx = dots.findIndex((d) => d.classList.contains("active"));
    sheetItems.forEach((it, i) => it.b.classList.toggle("active", i === idx));
  }

  /* -------------------- Revelado palabra por palabra -------------------- */
  function splitWords(el) {
    const walk = (node) => {
      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 3) {
          const parts = child.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          parts.forEach(tok => {
            if (tok === "") return;
            if (/^\s+$/.test(tok)) {
              frag.appendChild(document.createTextNode(tok));
            } else {
              const w = document.createElement("span");
              w.className = "word";
              const inner = document.createElement("span");
              inner.textContent = tok;
              w.appendChild(inner);
              frag.appendChild(w);
            }
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1 && child.tagName !== "BR") {
          walk(child);
        }
      });
    };
    walk(el);
    el.querySelectorAll(".word").forEach((w, i) => w.style.setProperty("--i", i));
  }

  if (!reduceMotion) {
    const splitSelector = ".hero h1, .split-text h2, .split-text h3, " +
      ".center > h2, .divider h2, .big-quote > p:first-child";
    document.querySelectorAll(splitSelector).forEach(el => {
      el.removeAttribute("data-animate");
      splitWords(el);
      el.setAttribute("data-split", "");
    });
  }

  /* -------------------- Aparición de elementos -------------------- */
  const revealSelector = "[data-animate], [data-split]";
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        // Se activa al entrar y se reinicia al salir, para que vuelva a animarse.
        e.target.classList.toggle("is-visible", e.isIntersecting);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(revealSelector).forEach(el => io.observe(el));
  } else {
    document.querySelectorAll(revealSelector).forEach(el => el.classList.add("is-visible"));
  }

  /* -------------------- Contador (90%) -------------------- */
  const counters = document.querySelectorAll(".stat-num[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const runCount = (el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      const dur = 1400, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) runCount(e.target);
        else e.target.textContent = "0";
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  }

  /* -------------------- Progreso + parallax -------------------- */
  const parallaxEls = Array.from(document.querySelectorAll(".parallax"));
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (progressBar) progressBar.style.width = pct + "%";
      if (progressText) progressText.textContent = Math.round(pct) + "%";

      // Topbar claro cuando está sobre una sección con imagen (hero o divisor)
      let overMedia = false;
      const probeY = 26;
      for (const sec of sections) {
        const r = sec.getBoundingClientRect();
        if (r.top <= probeY && r.bottom >= probeY) {
          overMedia = sec.classList.contains("hero") || sec.classList.contains("divider");
          break;
        }
      }
      document.body.classList.toggle("over-hero", overMedia);

      if (!reduceMotion) {
        const vh = window.innerHeight;
        parallaxEls.forEach(el => {
          const host = el.closest("section") || el.parentElement;
          const r = host.getBoundingClientRect();
          const center = r.top + r.height / 2 - vh / 2;
          const factor = parseFloat(el.dataset.factor || (el.classList.contains("hero-bg") ? "0.12" : "0.05"));
          el.style.transform = `translateY(${(-center * factor).toFixed(1)}px)`;
        });
      }

      updateActiveDot();
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  /* -------------------- Navegación por teclado -------------------- */
  function currentIndex() {
    const mid = window.innerHeight / 2;
    let idx = 0;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top <= mid) idx = i; });
    return idx;
  }
  document.addEventListener("keydown", (e) => {
    // Si hay un modal abierto (demo o lightbox), que maneje solo ese modal.
    if (document.querySelector(".demo-modal.open") || document.querySelector(".lightbox.open")) return;
    const k = e.key;
    if (["ArrowDown", "ArrowRight", "PageDown", " ", "Enter"].includes(k) && !isTextInput(e)) {
      e.preventDefault();
      const i = Math.min(sections.length - 1, currentIndex() + 1);
      sections[i].scrollIntoView({ behavior: "smooth" });
    } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(k) && !isTextInput(e)) {
      e.preventDefault();
      const i = Math.max(0, currentIndex() - 1);
      sections[i].scrollIntoView({ behavior: "smooth" });
    } else if (k === "Home") {
      sections[0].scrollIntoView({ behavior: "smooth" });
    } else if (k === "End") {
      sections[sections.length - 1].scrollIntoView({ behavior: "smooth" });
    }
  });
  function isTextInput(e) {
    const t = e.target;
    return t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
  }

  /* -------------------- Desincronizar el movimiento de las imágenes -------------------- */
  if (!reduceMotion) {
    document.querySelectorAll(".split-media img:not(.app-badge)").forEach((img, i) => {
      img.style.animationDelay = (-(i % 5) * 0.9 - Math.random() * 1.6).toFixed(2) + "s";
      img.style.animationDuration = (6.5 + Math.random() * 2.5).toFixed(2) + "s";
    });
  }

  /* -------------------- Marcar imágenes cuadradas (1:1) para no agrandarlas -------------------- */
  function tagAspects() {
    document.querySelectorAll(".split-media img").forEach(img => {
      const tag = () => {
        if (!img.naturalWidth) return;
        const ratio = img.naturalWidth / img.naturalHeight;
        const fig = img.closest(".split-media");
        if (fig) fig.classList.toggle("square", Math.abs(ratio - 1) < 0.12);
      };
      if (img.complete) tag(); else img.addEventListener("load", tag);
    });
  }
  tagAspects();

  /* -------------------- Lightbox: clic en una imagen para verla grande -------------------- */
  (function initLightbox() {
    const box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = '<button class="lb-close" aria-label="Cerrar">×</button><img alt="">';
    document.body.appendChild(box);
    const bigImg = box.querySelector("img");
    function open(src) {
      bigImg.src = src;
      box.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      box.classList.remove("open");
      document.body.style.overflow = "";
      bigImg.removeAttribute("src");
    }
    box.addEventListener("click", () => close());
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
    document.querySelectorAll(".split-media img, .agenda-media img").forEach(el => {
      el.addEventListener("click", () => open(el.currentSrc || el.src));
    });
  })();

  /* -------------------- Demos (modal + carrusel) -------------------- */
  const DEMOS = {
    prompt: {
      title: "Demo · Pedir bien (Prompt Engineering)",
      slides: [
        { img: "assets/demos/prompt/01-prompt-flojo.png", caption: "Un prompt vago da una respuesta vaga." },
        { img: "assets/demos/prompt/02-prompt-bueno.png", caption: "Con rol, tarea, contexto y formato, la respuesta mejora." },
        { img: "assets/demos/prompt/03-iteracion.png", caption: "Iterar es parte del proceso: corriges y afinas." },
        { img: "assets/demos/prompt/04-formato.png", caption: "Puedes pedir el formato: tabla, lista, correo…" }
      ]
    },
    opencode: {
      title: "Demo · OpenCode (organizar una carpeta)",
      slides: [
        { img: "assets/demos/opencode/01-carpeta-desordenada.png", caption: "Tengo una carpeta de estudio con archivos sueltos y desordenados." },
        { img: "assets/demos/opencode/02-instruccion.png", caption: "Le pido que la organice por materia y me haga un informe." },
        { img: "assets/demos/opencode/03-organizando.png", caption: "OpenCode trabaja sobre tus archivos." },
        { img: "assets/demos/opencode/04-carpetas-ordenadas.png", caption: "Carpetas ordenadas por materia, con nombres consistentes." },
        { img: "assets/demos/opencode/05-informe.png", caption: "Y un informe con el resumen de lo que hay en cada carpeta." }
      ]
    },
    imagen: {
      title: "Demo · Prompt de imagen",
      slides: [
        { img: "assets/demos/imagen/01-prompt-flojo.png", caption: "Un prompt de imagen vago da resultados genéricos." },
        { img: "assets/demos/imagen/02-prompt-bueno.png", caption: "Con detalle (qué, estilo, luz y formato) cambia todo." }
      ]
    }
  };

  (function initDemos() {
    const modal = document.createElement("div");
    modal.className = "demo-modal";
    modal.innerHTML =
      '<div class="demo-box">' +
        '<div class="demo-head"><h3></h3><button class="demo-close" aria-label="Cerrar">×</button></div>' +
        '<div class="demo-stage"><button class="demo-nav prev" aria-label="Anterior">‹</button><img alt=""><button class="demo-nav next" aria-label="Siguiente">›</button></div>' +
        '<div class="demo-foot"><div class="demo-caption"></div><div class="demo-dots"></div></div>' +
      '</div>';
    document.body.appendChild(modal);
    const titleEl = modal.querySelector(".demo-head h3");
    const imgEl = modal.querySelector(".demo-stage img");
    const capEl = modal.querySelector(".demo-caption");
    const dotsEl = modal.querySelector(".demo-dots");
    let slides = [], idx = 0;

    function render() {
      const s = slides[idx];
      imgEl.src = s.img + "?v=" + IMG_VER;
      capEl.textContent = s.caption;
      Array.from(dotsEl.children).forEach((d, i) => d.classList.toggle("active", i === idx));
    }
    function go(n) { idx = (n + slides.length) % slides.length; render(); }
    function open(key) {
      const d = DEMOS[key];
      if (!d) return;
      slides = d.slides; idx = 0;
      titleEl.textContent = d.title;
      dotsEl.innerHTML = slides.map(() => "<button></button>").join("");
      Array.from(dotsEl.children).forEach((b, i) => b.addEventListener("click", () => go(i)));
      render();
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() { modal.classList.remove("open"); document.body.style.overflow = ""; }

    modal.querySelector(".demo-close").addEventListener("click", close);
    modal.querySelector(".demo-nav.prev").addEventListener("click", () => go(idx - 1));
    modal.querySelector(".demo-nav.next").addEventListener("click", () => go(idx + 1));
    modal.addEventListener("click", e => { if (e.target === modal) close(); });
    document.addEventListener("keydown", e => {
      if (!modal.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(idx + 1);
      else if (e.key === "ArrowLeft") go(idx - 1);
    });
    document.querySelectorAll(".demo-btn").forEach(btn =>
      btn.addEventListener("click", () => open(btn.dataset.demo)));

    // Deslizar (swipe) para cambiar de captura
    const stage = modal.querySelector(".demo-stage");
    let startX = null;
    stage.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", e => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) go(dx < 0 ? idx + 1 : idx - 1);
      startX = null;
    }, { passive: true });
  })();

  onScroll();
})();
