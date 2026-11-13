/* =========================================================
   ENHANCE.JS — carrusel, fondo geométrico, orbe 3D, mosaicos
   ========================================================= */
(function () {
    "use strict";
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = () => innerWidth < 760;

    /* ---------- 1. Carruseles automáticos (proyectos + recorrido visual) ---------- */
const RESUME_MS = 15000;           // tras mover el usuario, espera 15 s y retoma
function makeCarousel(scroller, { item, interval = 3800, host, onUpdate, gap = 20 }) {
    const items = () => [...scroller.querySelectorAll(item)];
    const padL = () => parseFloat(getComputedStyle(scroller).paddingLeft) || 0;
    let paused = false, timer, visible = false, raf;

    host.insertAdjacentHTML("beforeend", `
        <button class="carousel-btn side prev" type="button" aria-label="Previous">←</button>
        <button class="carousel-btn side next" type="button" aria-label="Next">→</button>`);
    const prev = host.querySelector(".side.prev"), next = host.querySelector(".side.next");

    function state() {
        const list = items();
        if (!list.length) return null;
        const max = scroller.scrollWidth - scroller.clientWidth;
        const origin = scroller.scrollLeft + padL();
        let best = 0, dist = Infinity;
        list.forEach((c, i) => { const d = Math.abs(c.offsetLeft - origin); if (d < dist) { dist = d; best = i; } });
        if (max > 0 && scroller.scrollLeft >= max - 4) best = list.length - 1;
        return { list, max, best };
    }
    function update() {
        const s = state(); if (!s) return;
        prev.disabled = scroller.scrollLeft <= 4 && false;   // siempre activo: da la vuelta
        onUpdate && onUpdate(s);
    }
    function step(dir) {
        const s = state(); if (!s) return;
        const w = s.list[0].getBoundingClientRect().width + (parseFloat(getComputedStyle(scroller).columnGap) || gap);
        const atEnd = scroller.scrollLeft >= s.max - 4, atStart = scroller.scrollLeft <= 4;
        const behavior = reduce ? "auto" : "smooth";
        if (dir > 0 && atEnd) scroller.scrollTo({ left: 0, behavior });
        else if (dir < 0 && atStart) scroller.scrollTo({ left: s.max, behavior });
        else scroller.scrollBy({ left: dir * w, behavior });
    }
    function pause(ms = RESUME_MS) { paused = true; clearTimeout(timer); timer = setTimeout(() => paused = false, ms); }

    prev.addEventListener("click", () => { step(-1); pause(); });
    next.addEventListener("click", () => { step(1); pause(); });
    scroller.addEventListener("scroll", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); }, { passive: true });
    ["touchstart", "wheel", "keydown"].forEach(ev => scroller.addEventListener(ev, () => pause(), { passive: true }));
    scroller.addEventListener("focusin", e => { if (e.target.matches("video")) pause(); });
    scroller.addEventListener("play", () => pause(60000), true);          // vídeo reproduciéndose: no mover
    scroller.addEventListener("pause", () => pause(), true);
    addEventListener("resize", update);

    /* arrastre con mouse */
    let down = false, sx = 0, sl = 0, moved = 0;
    scroller.addEventListener("pointerdown", e => {
        if (e.pointerType !== "mouse" || e.target.closest("video")) return;
        down = true; moved = 0; sx = e.clientX; sl = scroller.scrollLeft; pause();
    });
    addEventListener("pointermove", e => {
        if (!down) return;
        const dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx));
        if (moved > 5) { scroller.classList.add("dragging"); scroller.scrollLeft = sl - dx; }
    });
    addEventListener("pointerup", () => {
        if (!down) return; down = false; scroller.classList.remove("dragging");
        const list = items(); if (!list.length) return;
        const o = scroller.scrollLeft + padL();
        const t = list.reduce((a, c) => Math.abs(c.offsetLeft - o) < Math.abs(a.offsetLeft - o) ? c : a);
        scroller.scrollTo({ left: t.offsetLeft - padL(), behavior: "smooth" });
        pause();
    });
    scroller.addEventListener("click", e => { if (moved > 5) { e.stopPropagation(); e.preventDefault(); moved = 0; } }, true);

    /* autoplay */
    new IntersectionObserver(([en]) => visible = en.isIntersecting, { threshold: 0.35 }).observe(host);
    if (!reduce) setInterval(() => {
        if (paused || !visible || document.hidden) return;
        if (host.closest("dialog") === null && document.querySelector("dialog[open]")) return;
        step(1);
    }, interval);

    update();
    return { update, step, pause };
}

/* Proyectos */
const grid = document.querySelector("#projects-grid");
if (grid) {
    const wrap = document.createElement("div");
    wrap.className = "projects-carousel";
    grid.parentNode.insertBefore(wrap, grid);
    wrap.appendChild(grid);
    const foot = document.createElement("div");
    foot.className = "carousel-controls";
    foot.innerHTML = `<div class="carousel-progress" aria-hidden="true"><i></i></div><span class="carousel-count" aria-live="off">01 / 01</span>`;
    wrap.appendChild(foot);
    const bar = foot.querySelector("i"), count = foot.querySelector(".carousel-count");
    const pad2 = n => String(n).padStart(2, "0");

    const car = makeCarousel(grid, {
        item: ".project-card", host: wrap, interval: 3600,
        onUpdate({ list, max, best }) {
            bar.style.transform = `scaleX(${Math.max(0.06, max > 0 ? grid.scrollLeft / max : 1)})`;
            list.forEach((c, i) => {
                c.classList.toggle("is-active", i === best);
                c.classList.toggle("is-before", i < best);
                c.classList.toggle("is-after", i > best);
            });
            count.textContent = `${pad2(best + 1)} / ${pad2(list.length)}`;
        }
    });
    new MutationObserver(() => { grid.scrollLeft = 0; car.update(); }).observe(grid, { childList: true });
}

/* Recorrido visual dentro de la ficha del proyecto */
const dlgContent = document.querySelector("#project-dialog-content");
if (dlgContent) {
    const setup = () => {
        const g = dlgContent.querySelector(".project-gallery[data-gallery]:not([data-auto])");
        if (!g) return;
        g.dataset.auto = "1";
        const host = document.createElement("div");
        host.className = "gallery-carousel";
        g.parentNode.insertBefore(host, g); host.appendChild(g);
        makeCarousel(g, {
            item: ":scope > *", host, interval: 3200, gap: 18,
            onUpdate({ list, best }) {
                list.forEach((c, i) => {
                    c.classList.toggle("is-active", i === best);
                    c.classList.toggle("is-before", i < best);
                    c.classList.toggle("is-after", i > best);
                });
            }
        });
    };
    new MutationObserver(setup).observe(dlgContent, { childList: true, subtree: true });
}

/* ---------- 2. Mosaicos de herramientas ---------- */
    const abbr = { "HTML5": "H5", "CSS3": "C3", "JavaScript": "JS", "Node.js": "No", "Express": "Ex", "MySQL": "My", "PHP": "Ph",
        "WordPress": "Wp", "Python": "Py", "PyTorch": "Pt", "C#": "C#", "Git & GitHub": "Gh", "VS Code": "VS", "Unity": "Un",
        "OpenXR": "XR", "Figma": "Fg", "Photoshop": "Ps", "Illustrator": "Ai", "Blender": "Bl", "Packet Tracer": "Pk",
        "Pro Tools": "Pt", "Audition": "Au", "Premiere Pro": "Pr", "After Effects": "Ae" };
    document.querySelectorAll(".tool-pills span").forEach(s => {
        const name = s.textContent.trim();
        s.classList.add("tile");
        s.innerHTML = `<i>${abbr[name] || name.slice(0, 2)}</i>${name}`;
    });

    /* ---------- 3. Principios (traducción) ---------- */
    const principlesES = [["Analítico", "Primero la lógica"], ["Creativo", "Ideas que se mueven"], ["Curioso", "Siempre aprendiendo"]];
    const principlesEN = [["Analytical", "Logic first"], ["Creative", "Ideas that move"], ["Curious", "Always learning"]];
    function translatePrinciples() {
        const data = document.documentElement.lang === "es" ? principlesES : principlesEN;
        document.querySelectorAll(".principle").forEach((p, i) => {
            p.querySelector("b").textContent = data[i][0];
            p.querySelector("small").textContent = data[i][1];
        });
    }
    new MutationObserver(translatePrinciples).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    translatePrinciples();

    /* ---------- 4. Fondo geométrico (grises sobre negro) ---------- */
    const bg = document.querySelector("#bg-geo");
    if (bg) {
        const c = bg.getContext("2d");
        let W, H, dpr, shapes = [];
        const kinds = ["tri", "square", "circle", "hex", "cross", "ring"];
        function build() {
            dpr = Math.min(devicePixelRatio || 1, 2);
            W = bg.width = innerWidth * dpr; H = bg.height = innerHeight * dpr;
            const n = isMobile() ? 9 : 18;
            shapes = Array.from({ length: n }, (_, i) => ({
                k: kinds[i % kinds.length],
                x: Math.random() * W, y: Math.random() * H,
                s: (22 + Math.random() * 60) * dpr,
                r: Math.random() * 6.28, vr: (Math.random() - .5) * 0.0004,
                vx: (Math.random() - .5) * 0.012 * dpr, vy: (Math.random() - .5) * 0.012 * dpr,
                a: 0.07 + Math.random() * 0.08, depth: .3 + Math.random() * .7
            }));
        }
        function poly(n, s) { c.beginPath(); for (let i = 0; i < n; i++) { const a = i / n * 6.283 - 1.5708; c.lineTo(Math.cos(a) * s, Math.sin(a) * s); } c.closePath(); }
        function draw(t, dt) {
            c.clearRect(0, 0, W, H);
            const sy = scrollY * dpr;
            shapes.forEach(o => {
                o.x += o.vx * dt; o.y += o.vy * dt; o.r += o.vr * dt;
                const m = o.s * 2;
                if (o.x < -m) o.x = W + m; if (o.x > W + m) o.x = -m;
                if (o.y < -m) o.y = H + m; if (o.y > H + m) o.y = -m;
                const py = ((o.y - sy * o.depth * 0.25) % (H + m * 2) + (H + m * 2)) % (H + m * 2) - m;
                c.save(); c.translate(o.x, py); c.rotate(o.r);
                c.strokeStyle = `rgba(178,178,178,${o.a})`; c.lineWidth = 1.2 * dpr;
                switch (o.k) {
                    case "tri": poly(3, o.s); break;
                    case "hex": poly(6, o.s); break;
                    case "square": c.beginPath(); c.rect(-o.s / 2, -o.s / 2, o.s, o.s); break;
                    case "circle": c.beginPath(); c.arc(0, 0, o.s / 2, 0, 6.283); break;
                    case "ring": c.beginPath(); c.arc(0, 0, o.s / 2, 0, 6.283); c.moveTo(o.s / 4, 0); c.arc(0, 0, o.s / 4, 0, 6.283); break;
                    case "cross": c.beginPath(); c.moveTo(-o.s / 2, 0); c.lineTo(o.s / 2, 0); c.moveTo(0, -o.s / 2); c.lineTo(0, o.s / 2); break;
                }
                c.stroke(); c.restore();
            });
        }
        let last = 0, running = true;
        function loop(t) {
            if (running) { draw(t, Math.min(t - last, 50)); }
            last = t;
            if (!reduce) requestAnimationFrame(loop);
        }
        document.addEventListener("visibilitychange", () => { running = !document.hidden; });
        addEventListener("resize", () => { build(); if (reduce) draw(0, 0); });
        build();
        reduce ? draw(0, 0) : requestAnimationFrame(loop);
    }

    /* ---------- 5. Hero: esfera de alambre + órbitas ---------- */
    const hc = document.querySelector("#hero3d");
    if (hc) {
        const x = hc.getContext("2d");
        let S = 0, d = 1, mx = 0, my = 0, tx = 0, ty = 0, heroVisible = true;
        function size() {
            d = Math.min(devicePixelRatio || 1, 2);
            const r = hc.getBoundingClientRect();
            S = Math.min(r.width, r.height);
            hc.width = r.width * d; hc.height = r.height * d;
        }
        size(); addEventListener("resize", size);
        const hero = document.querySelector(".hero-visual");
        hero.addEventListener("pointermove", e => {
            const r = hero.getBoundingClientRect();
            tx = ((e.clientX - r.left) / r.width - .5) * .8;
            ty = ((e.clientY - r.top) / r.height - .5) * .8;
        });
        hero.addEventListener("pointerleave", () => { tx = ty = 0; });
        new IntersectionObserver(([en]) => heroVisible = en.isIntersecting).observe(hero);

        function rot(p, ay, ax) {
            let [X, Y, Z] = p;
            let c1 = Math.cos(ay), s1 = Math.sin(ay);
            [X, Z] = [X * c1 + Z * s1, -X * s1 + Z * c1];
            let c2 = Math.cos(ax), s2 = Math.sin(ax);
            [Y, Z] = [Y * c2 - Z * s2, Y * s2 + Z * c2];
            return [X, Y, Z];
        }
        function line(pts, ay, ax, R, closed, color, w) {
            x.beginPath();
            pts.forEach((p, i) => {
                const [X, Y, Z] = rot(p, ay, ax), k = 1 / (1 - Z * .25);
                const px = hc.width / 2 + X * R * k, py = hc.height / 2 + Y * R * k;
                i ? x.lineTo(px, py) : x.moveTo(px, py);
            });
            if (closed) x.closePath();
            x.strokeStyle = color; x.lineWidth = w * d; x.stroke();
        }
        const circle = (f, n = 72) => Array.from({ length: n }, (_, i) => f(i / n * 6.2832));
        function frame(t) {
            requestAnimationFrame(frame);
            if (!heroVisible || document.hidden) return;
            mx += (tx - mx) * .05; my += (ty - my) * .05;
            x.clearRect(0, 0, hc.width, hc.height);
            const R = S * d * .29, ay = t / 5200 + mx, ax = .45 + my;
            // meridianos y paralelos
            for (let i = 0; i < 8; i++) {
                const a = i / 8 * Math.PI;
                line(circle(u => [Math.cos(u) * Math.cos(a), Math.sin(u), Math.cos(u) * Math.sin(a)]), ay, ax, R, true, "rgba(178,178,178,.30)", 1);
            }
            for (let i = -2; i <= 2; i++) {
                const h = i / 3, r = Math.sqrt(1 - h * h);
                line(circle(u => [Math.cos(u) * r, h, Math.sin(u) * r]), ay, ax, R, true, "rgba(178,178,178,.18)", 1);
            }
            // órbitas
            const o1 = circle(u => [Math.cos(u) * 1.45, 0, Math.sin(u) * 1.45]);
            line(o1, ay * -.6, ax + .9, R, true, "rgba(202,237,87,.55)", 1.4);
            line(circle(u => [Math.cos(u) * 1.7, 0, Math.sin(u) * 1.7]), ay * .4 + 1, ax - .5, R, true, "rgba(178,178,178,.28)", 1);
            // nodos lima viajando por las órbitas
            [[1.45, ay * -.6, ax + .9, 1.0, 5], [1.7, ay * .4 + 1, ax - .5, -.7, 3.5]].forEach(([rad, y2, x2, sp, sz]) => {
                const u = t / 1800 * sp, [X, Y, Z] = rot([Math.cos(u) * rad, 0, Math.sin(u) * rad], y2, x2), k = 1 / (1 - Z * .25);
                x.beginPath(); x.arc(hc.width / 2 + X * R * k, hc.height / 2 + Y * R * k, sz * d * k, 0, 6.2832);
                x.fillStyle = "#caed57"; x.fill();
            });
        }
        reduce ? (size(), frame(0)) : requestAnimationFrame(frame);
    }
})();
