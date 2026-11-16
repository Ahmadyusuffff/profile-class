/* ===== KONFIGURASI ===== */
const INSTAGRAM_USERNAME = "evolutionary.class26";            
const INSTAGRAM_URL = "https://instagram.com/evolutionary.class26?dlrf=eDgwdmdkcjRjcmc4";                 


/* Foto profil:*/
const laki = [
  { name: "RIZKI FAUZI", kalimat: "wakeam dan pj matkul kitab kuning", foto: "1E/anggota/fauzie.png" },
  { name: "MUHAMMAD FAREL AMRULLAH", kalimat: "anggota", foto: "1E/anggota/farel.jpg" },
  { name: "MUHAMAD ABDUL HALIM", kalimat: "anggota", foto: "1E/anggota/halim.jpg" },
  { name: "EVAN AKMAL MUSTHAFA", kalimat: "waksek dan pj matkul ilmu tauhid", foto: "1E/anggota/evan.jpg" },
  { name: "MUHAMMAD GILANG RAMADAN", kalimat: "cosma", foto: "1E/anggota/gilang.jpg" },
  { name: "MUHAMMAD NABIYA MAULFI", kalimat: "anggota", foto: "1E/anggota/biya.png" },
  { name: "MUHAMAD RIZIK ROMADON", kalimat: "keamanan dan pj matkul bahasa arab", foto: "1E/anggota/rizik.jpg" },
  { name: "MUHAMAD ILHAM", kalimat: "anggota", foto: "1E/anggota/ilham.jpg" },
  { name: "NIZAR IKHWAN ABYASA", kalimat: "anggota", foto: "1E/anggota/nijar.jpg" },
  { name: "RIFQI MOCH SURYADI", kalimat: "pj matkul ilmu tauhid", foto: "1E/anggota/rifqi.jpg" },
  { name: "AHMAD MAULANA YUSUF", kalimat: "anggota", foto: "1E/anggota/ahmad-maulana.jpg" },
  { name: "NUR KHOLIS", kalimat: "pj matkul bahasa arab", foto: "1E/anggota/kholis.jpg" },
  { name: "MUHAMMAD REVAN NURDIANSYAH", kalimat: "pj matkul kitab kuning", foto: "1E/anggota/revan.jpg" }
];
const perempuan = [
  { name: "RIKA JULIA", kalimat: "anggota", foto: "1E/anggota/rika.jpg" },
  { name: "MELA SAFIRA", kalimat: "pj matkul cyber culture", foto: "1E/anggota/mela.jpg" },
  { name: "DESI RATNA ANJANI", kalimat: "pj matkul pptq", foto: "1E/anggota/desi.jpg" },
  { name: "ROZIQOH", kalimat: "pj mk spik", foto: "1E/anggota/roziqoh.jpg" },
  { name: "ELSA EVILIA", kalimat: "pj matkul bahasa indonesia", foto: "1E/anggota/elsa.jpg" },
  { name: "ZAHRA FAUZIAH", kalimat: "pj matkul tahsin dan tahfidz", foto: "1E/anggota/zahra.jpg" },
  { name: "NAELUN NAJWA", kalimat: "anggota", foto: "1E/anggota/nailun.jpg" },
  { name: "NURUL AZKIYAH", kalimat: "anggota", foto: "1E/anggota/kia.jpg" },
  { name: "SHUFI NASYEETHA CHALEEZA", kalimat: "sekretaris", foto: "1E/anggota/sufi.jpg" },
  { name: "DIVA NUR AFIANI", kalimat: "bendahara dan matkul al-quran dan hadist", foto: "1E/anggota/diva.jpg" },
  { name: "RENI MARDIYAH", kalimat: "pj matkul cyber culture", foto: "1E/anggota/reni.jpg" },
  { name: "MUTOHAROH NOVIYANI", kalimat: "wakben dan matkul al-quran dan hadist", foto: "1E/anggota/novi.jpg" },
  { name: "MAIDINA HUSNATUN NISA", kalimat: "wakosma dan pj matkul spik", foto: "1E/anggota/mai.jpg" },
  { name: "SILVYANA NURDIN", kalimat: "pj matkul cirebon studies", foto: "1E/anggota/silvyana.jpg" },
  { name: "ZILAN QISMATUL AWALIYAH", kalimat: "pj matkul cirebon studies", foto: "1E/anggota/zilan.jpg" },
  { name: "SELLY NURMALASARI", kalimat: "pj matkul pendidikan kewarganegaraan", foto: "1E/anggota/selly.jpg" },
  { name: "NINDA HALIMATUSSA'ADAH", kalimat: "pj matkul pptq", foto: "1E/anggota/ninda.jpg" },
  { name: "ZAHROTUSYITA", kalimat: "anggota", foto: "1E/anggota/sita.jpg" },
  { name: "BILQIS ZAHRATUSYIFA", kalimat: "pj matkul pendidikan kewarganegaraan", foto: "1E/anggota/bilqis.jpg" },
  { name: "ISTI KHOIRUNNISA", kalimat: "pj matkul bahasa indonesia", foto: "1E/anggota/isti.jpg" },
  { name: "ITA NURAENI", kalimat: "pj matkul tahsin dan tahfidz", foto: "1E/anggota/itaa.jpg" },
  { name: "ZAZKIYAH NISHFA ASTILA", kalimat: "anggota", foto: "1E/anggota/nis.jpg" }
];
const members = [
  ...laki.map(m => ({ ...m, gender: "L" })),
  ...perempuan.map(m => ({ ...m, gender: "P" }))
];

/* ===== FOTO GALERI =====
   */
const gallery = [
  { src: "foto/IMG-20261008-WA0169.jpg", caption: "Fotbar" },     
  { src: "foto/IMG-20261008-WA0120.jpg", caption: "Fotbar" },
  { src: "foto/IMG-20261008-WA0125.jpg", caption: "Fotbar" },       
  { src: "foto/IMG-20261008-WA0118.jpg", caption: "Fotbar" },
  { src: "foto/IMG-20261008-WA0197.jpg", caption: "Fotbar" },
  { src: "foto/IMG-20261008-WA0129.jpg", caption: "Fotbar" }, 
  { src: "foto/IMG-20261008-WA0143.jpg", caption: "Fotbar" },
  { src: "foto/IMG-20261008-WA0114.jpg", caption: "Fotbar" },         
  { src: "foto/IMG-20261008-WA0202.jpg", caption: "Fotbar" },
  { src: "foto/IMG-20260924-WA0104.jpg", caption: "Fotbar" }
];

/* ===== STRUKTUR KELAS ===== */
const struktur = [
  [{ role: "Cosma", name: "MUHAMMAD GILANG RAMADAN", c: "#1f6fd0" }, { role: "Wacosma", name: "MAIDINA HUSNATUN NISA", c: "#5eb4f5" }],
  [{ role: "Sekre", name: "SHUFI NASYEETHA CHALEEZA", c: "#17a2a0" }, { role: "Waksek", name: "EVAN AKMAL MUSTHAFA", c: "#4cc9c0" }],
  [{ role: "Bendahara", name: "DIVA NUR AFIANI", c: "#d4a437" }, { role: "Wakben", name: "MUTOHAROH NOVIYANI", c: "#eac566" }],
  [{ role: "Keamanan", name: "MUHAMAD RIZIK ROMADON", c: "#5b6ee1" }, { role: "Wakeamanan", name: "RIZKI FAUZI", c: "#8ea0f0" }]
];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const fotoOf = nm => (members.find(m => m.name === nm) || {}).foto;
$("#org").innerHTML = `<div class="lvl root"><div class="rootlg"><svg><use href="#logo"/></svg>Struktur Kelas 1E</div></div>` + struktur.map(row =>
  `<div class="lvl ${row.length > 1 ? "multi" : ""}">` +
  row.map(n => `<div class="nd" tabindex="0" role="button" data-name="${n.name}" data-role="${n.role}" aria-label="${n.role}: ${n.name}" style="--c:${n.c}"><b class="ico">${n.role[0]}</b><div class="oav">${fotoOf(n.name) ? `<img src="${fotoOf(n.name)}" alt="${n.name}" loading="lazy" onerror="this.replaceWith(avIcon())">` : `<svg><use href="#usr"/></svg>`}</div><small>${n.role}</small><span>${n.name || '<i class="ph">[Nama]</i>'}</span></div>`).join("") +
  `</div>`).join("");

/* ===== ANGGOTA ===== */
let fG = "all", sortAZ = false;
const ph = v => v ? v : `<span class="ph"></span>`;
const avIcon = () => { const n = document.createElementNS("http://www.w3.org/2000/svg", "svg"); n.innerHTML = '<use href="#usr"/>'; return n; };
const gl = g => g === "L" ? "Laki-laki" : "Perempuan";
function renderMembers() {
  const q = $("#q").value.trim().toLowerCase();
  const list = members.map((m, i) => ({ ...m, no: i + 1, core: !!m.kalimat && m.kalimat.trim().toLowerCase() !== "anggota" })).filter(m =>
    (fG === "all" || m.gender === fG || (fG === "core" && m.core)) && (!q || m.name.toLowerCase().includes(q))).sort((a, b) => sortAZ ? a.name.localeCompare(b.name) : a.no - b.no);
  $("#cards").innerHTML = list.map(m =>
    `<article tabindex="0" class="mc ${m.gender}${m.core ? " core" : ""}"><span class="no">${String(m.no).padStart(2, "0")}</span><div class="av">${m.foto ? `<img src="${m.foto}" alt="${m.name}" loading="lazy" onerror="this.replaceWith(avIcon())">` : `<svg><use href="#usr"/></svg>`}</div><h3>${ph(m.name)}</h3><p class="nim">${m.kalimat ? m.kalimat : '<span class="ph">Tulis kalimat di sini…</span>'}</p><div class="tags"><span class="tag ${m.gender}">${gl(m.gender)}</span>${m.status ? `<span class="tag st${/^pj$/i.test(m.status) ? " pj" : ""}">${m.status}</span>` : ""}</div></article>`).join("");
  $("#count").textContent = `Menampilkan ${list.length} dari ${members.length} mahasiswa`;
  $("#empty").hidden = list.length > 0;
}
$("#q").addEventListener("input", renderMembers);
$("#filter").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  fG = b.dataset.f; $$("#filter button").forEach(x => x.classList.toggle("on", x === b)); renderMembers();
});
renderMembers();

/* ===== INSTAGRAM ===== */
const igLink = INSTAGRAM_URL || (INSTAGRAM_USERNAME ? "https://instagram.com/" + INSTAGRAM_USERNAME : "https://www.instagram.com/");
if (INSTAGRAM_USERNAME) $("#igUser").textContent = "@" + INSTAGRAM_USERNAME;
$("#igBtn").href = igLink; $("#igFoot").href = igLink;

/* ===== GALERI ===== */
const grads = ["#1f6fd0,#7cc0f7", "#17a2a0,#7fe0d6", "#d4a437,#f1d27a", "#5b6ee1,#a9b6f7", "#0f4a9c,#5eb4f5"];
/* pola ukuran kotak (w = lebar 2 kolom, t = tinggi 2 baris), diulang tiap 10 foto & sudah dicek rapat tanpa lubang */
const shape = ["w", "", "t", "", "t", "", "t", "w", "", "w"];
const icons = "✦ ☪ ❖ ✧ ✺ ☽ ❂ ✦ ☪ ❖".split(" ");
const iconOf = i => icons[i % icons.length];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

$("#grid").innerHTML = gallery.map((g, i) =>
  `<figure class="ph-i rv ${shape[i % shape.length]}" tabindex="0" role="button" aria-label="Buka foto ${i + 1}: ${g.caption}" data-i="${i}" style="--d:${i % 4};--g:linear-gradient(135deg,${grads[i % 5]})">` +
  (g.src ? `<img src="${g.src}" alt="${g.caption}" loading="lazy">` : `<span>${iconOf(i)}</span>`) +
  `<i class="zm" aria-hidden="true">⤢</i><figcaption>${g.caption}</figcaption></figure>`).join("");

/* ----- Lightbox ----- */
const lb = $("#lb"), lbimg = $("#lbimg"), lbcap = $("#lbcap"), lbbg = $("#lbbg"), lbcount = $("#lbcount");
const lbthumbs = $("#lbthumbs"), playBtn = $("#lbplay"), zoomBtn = $("#lbzoom"), bar = $("#lbbar i");
const SLIDE_MS = 3500;
let cur = 0, isOpen = false, playing = false, zoomed = false;
let timer = null, closeTimer = null, lastFocus = null, lastSwipe = 0;

lbthumbs.innerHTML = gallery.map((g, i) =>
  `<button class="tb" data-i="${i}" aria-label="Foto ${i + 1}" style="--g:linear-gradient(135deg,${grads[i % 5]})">` +
  (g.src ? `<img src="${g.src}" alt="" loading="lazy" draggable="false">` : iconOf(i)) + `</button>`).join("");

const gridItem = i => $(`#grid figure[data-i="${i}"]`);

function restartBar() { bar.style.animation = "none"; void bar.offsetWidth; bar.style.animation = ""; }
function schedule() {
  clearTimeout(timer); restartBar();
  if (playing && !zoomed && isOpen) timer = setTimeout(() => go(1), SLIDE_MS);
}
function startPlay() {
  playing = true; lb.classList.add("playing");
  playBtn.textContent = "❚❚"; playBtn.setAttribute("aria-label", "Jeda"); playBtn.title = "Jeda (Spasi)";
  schedule();
}
function stopPlay() {
  playing = false; lb.classList.remove("playing"); clearTimeout(timer);
  playBtn.textContent = "▶"; playBtn.setAttribute("aria-label", "Putar otomatis"); playBtn.title = "Putar otomatis (Spasi)";
}
function setZoom(on) {
  zoomed = on;
  lbimg.classList.toggle("zoomed", on);
  zoomBtn.setAttribute("aria-label", on ? "Perkecil" : "Perbesar");
  const im = lbimg.querySelector("img");
  if (im && !on) im.style.transformOrigin = "";
  if (on) clearTimeout(timer); else if (isOpen) schedule();
}
function panTo(e) {
  const im = lbimg.querySelector("img"); if (!im) return;
  const r = lbimg.getBoundingClientRect();
  const x = Math.min(100, Math.max(0, (e.clientX - r.left) / r.width * 100));
  const y = Math.min(100, Math.max(0, (e.clientY - r.top) / r.height * 100));
  im.style.transformOrigin = `${x}% ${y}%`;
}

function show(i, dir = 0) {
  const n = gallery.length;
  cur = (i + n) % n;
  const g = gallery[cur];
  setZoom(false);
  lbimg.classList.toggle("noimg", !g.src);
  lbimg.style.setProperty("--g", `linear-gradient(135deg,${grads[cur % 5]})`);
  lbimg.innerHTML = g.src ? `<img src="${g.src}" alt="${g.caption}" draggable="false">` : iconOf(cur);
  lbbg.style.backgroundImage = g.src ? `url("${g.src}")` : `linear-gradient(135deg,${grads[cur % 5]})`;
  lbcap.textContent = g.caption;
  lbcount.textContent = `${cur + 1} / ${n}`;
  $$("#lbthumbs .tb").forEach((t, k) => {
    t.classList.toggle("on", k === cur);
    if (k === cur) lbthumbs.scrollTo({ left: t.offsetLeft - lbthumbs.clientWidth / 2 + t.offsetWidth / 2, behavior: reduce || !dir ? "auto" : "smooth" });
  });
  if (dir && !reduce) {
    lbimg.animate([{ opacity: 0, transform: `translateX(${dir * 80}px) scale(.92)` }, { opacity: 1, transform: "none" }], { duration: 450, easing: "cubic-bezier(.2,.8,.3,1)" });
    lbcap.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 400, delay: 150, fill: "backwards" });
  }
  [cur + 1, cur - 1].forEach(k => { const x = gallery[(k + n) % n]; if (x.src) new Image().src = x.src; });
  schedule();
}
const go = d => show(cur + d, d);

/* buka: foto "terbang" dari kotak kecil di galeri ke tengah layar */
function flyIn(i) {
  const f = gridItem(i); if (!f || reduce) return;
  const im = lbimg.querySelector("img");
  const run = () => {
    const a = f.getBoundingClientRect(), b = lbimg.getBoundingClientRect();
    if (!b.width) return;
    const dx = a.left + a.width / 2 - (b.left + b.width / 2), dy = a.top + a.height / 2 - (b.top + b.height / 2);
    const sc = Math.min(a.width / b.width, a.height / b.height) || .3;
    lbimg.animate([
      { transform: `translate(${dx}px,${dy}px) scale(${sc})`, opacity: .3, borderRadius: "36px" },
      { transform: "none", opacity: 1, borderRadius: "18px" }
    ], { duration: 560, easing: "cubic-bezier(.2,.85,.25,1)" });
    lbcap.animate([{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }], { duration: 400, delay: 350, fill: "backwards" });
  };
  if (im && !im.complete) im.addEventListener("load", run, { once: true }); else run();
}
function openLb(i) {
  clearTimeout(closeTimer);
  lastFocus = document.activeElement;
  isOpen = true; lb.hidden = false; document.body.classList.add("locked");
  show(i, 0);
  requestAnimationFrame(() => { lb.classList.add("open"); flyIn(i); });
  $("#lbx").focus({ preventScroll: true });
}
/* tutup: foto balik ke kotaknya kalau kotaknya masih kelihatan, kalau tidak ya memudar */
function closeLb() {
  if (!isOpen) return;
  isOpen = false; stopPlay(); setZoom(false);
  lb.classList.remove("open");
  const f = gridItem(cur);
  if (f && !reduce) {
    const a = f.getBoundingClientRect(), b = lbimg.getBoundingClientRect();
    if (b.width && a.bottom > 0 && a.top < innerHeight) {
      const dx = a.left + a.width / 2 - (b.left + b.width / 2), dy = a.top + a.height / 2 - (b.top + b.height / 2);
      const sc = Math.min(a.width / b.width, a.height / b.height) || .3;
      lbimg.animate([{ transform: "none", opacity: 1 }, { transform: `translate(${dx}px,${dy}px) scale(${sc})`, opacity: 0 }], { duration: 400, easing: "cubic-bezier(.5,0,.75,0)", fill: "forwards" });
    }
  }
  closeTimer = setTimeout(() => {
    lb.hidden = true; document.body.classList.remove("locked");
    lbimg.getAnimations().forEach(a => a.cancel());
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }, reduce ? 0 : 420);
}

/* ----- event ----- */
$("#grid").addEventListener("click", e => { const f = e.target.closest("figure"); if (f) openLb(+f.dataset.i); });
$("#grid").addEventListener("keydown", e => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const f = e.target.closest("figure"); if (f) { e.preventDefault(); openLb(+f.dataset.i); }
});
$("#lbx").onclick = closeLb;
$("#lbprev").onclick = () => go(-1);
$("#lbnext").onclick = () => go(1);
playBtn.onclick = () => playing ? stopPlay() : startPlay();
zoomBtn.onclick = () => setZoom(!zoomed);
lbthumbs.addEventListener("click", e => { const b = e.target.closest(".tb"); if (!b) return; const k = +b.dataset.i; if (k !== cur) show(k, k > cur ? 1 : -1); });
lb.addEventListener("click", e => { if (e.target === lb || e.target.id === "lbbg" || e.target.id === "lbstage") closeLb(); });

lbimg.addEventListener("click", e => {
  if (Date.now() - lastSwipe < 300) return;
  setZoom(!zoomed); if (zoomed) panTo(e);
});
lbimg.addEventListener("pointermove", e => { if (zoomed) panTo(e); });

/* geser kiri/kanan untuk ganti foto, tarik ke bawah untuk menutup (HP) */
let sx = 0, sy = 0, tracking = false;
lb.addEventListener("touchstart", e => {
  tracking = !zoomed && e.touches.length === 1 && !e.target.closest("#lbthumbs,button");
  if (tracking) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }
}, { passive: true });
lb.addEventListener("touchend", e => {
  if (!tracking) return; tracking = false;
  const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) { lastSwipe = Date.now(); go(dx < 0 ? 1 : -1); }
  else if (dy > 90 && dy > Math.abs(dx) * 1.3) { lastSwipe = Date.now(); closeLb(); }
}, { passive: true });

document.addEventListener("keydown", e => {
  if (!isOpen) return;
  if (e.key === "Escape") closeLb();
  else if (e.key === "ArrowRight") go(1);
  else if (e.key === "ArrowLeft") go(-1);
  else if (e.key === "Home") show(0, -1);
  else if (e.key === "End") show(gallery.length - 1, 1);
  else if (e.key === " " && !e.target.closest("button")) { e.preventDefault(); playing ? stopPlay() : startPlay(); }
  else if (e.key === "Tab") {
    const f = $$("#lb button"), first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ===== NAVBAR ===== */
const menu = $("#menu"), burger = $("#burger");
burger.onclick = () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

/* ===== ANIMASI INTRO ===== */
$("#ahlan").innerHTML = [..."Ahlan wa Sahlan"].map((ch, i) =>
  `<span class="l" style="animation-delay:${0.7 + i * 0.07}s">${ch === " " ? "&nbsp;" : ch}</span>`).join("");
$("#sparks").innerHTML = Array.from({ length: 26 }, () =>
  `<b class="sp" style="left:${Math.random() * 100}%;font-size:${8 + Math.random() * 16}px;animation-duration:${6 + Math.random() * 8}s;animation-delay:${-Math.random() * 10}s">✦</b>`).join("");

/* ===== INTRO, COUNTER, REVEAL, FOOTER ===== */
function count() {
  $$("[data-n]").forEach(el => {
    const n = +el.dataset.n; let c = 0;
    const t = setInterval(() => { c++; el.textContent = c; if (c >= n) clearInterval(t); }, 1400 / n);
  });
}
$("#enter").onclick = () => {
  $("#intro").classList.add("out"); document.body.classList.remove("locked");
  setTimeout(() => $("#intro").remove(), 900); count();
};
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
$$(".rv").forEach(el => io.observe(el));
$("#yr").textContent = new Date().getFullYear();

/* ===== AKSESORIS ===== */
const accChars = ["✦", "☪", "✧", "❖", "✦", "✧", "☽", "✺", "✦"];
function addAccs(el, n, withLantern, idx) {
  const d = document.createElement("div"); d.className = "accs";
  let html = "";
  for (let i = 0; i < n; i++) {
    const left = i % 2 ? 4 + Math.random() * 10 : 86 + Math.random() * 10;
    const top = 4 + (i / n) * 90 + Math.random() * 6;
    html += `<i class="${i % 3 === 1 ? "bl" : ""}" style="left:${left}%;top:${top}%;font-size:${10 + Math.random() * 16}px;animation-delay:${-Math.random() * 4}s;animation-duration:${3 + Math.random() * 3}s">${accChars[(i + idx) % accChars.length]}</i>`;
  }
  if (withLantern) html += `<svg class="hang" style="right:6%;animation-delay:${-idx}s"><use href="#lan"/></svg><svg class="hang s" style="right:14%;animation-delay:${-idx - 1.5}s"><use href="#lan"/></svg>`;
  d.innerHTML = html;
  el.prepend(d);
}
$$(".sec").forEach((s, i) => addAccs(s, 9, true, i));
addAccs($(".hero"), 12, false, 3);
addAccs($("footer"), 8, false, 5);

/* progress bar di navbar + tombol kembali ke atas */
const prog = document.createElement("div"); prog.id = "prog"; $("#nav").appendChild(prog);
const topBtn = document.createElement("a"); topBtn.id = "top"; topBtn.href = "#home"; topBtn.setAttribute("aria-label", "Kembali ke atas"); topBtn.textContent = "☪";
document.body.appendChild(topBtn);
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  prog.style.width = (max > 0 ? scrollY / max * 100 : 0) + "%";
  topBtn.classList.toggle("show", scrollY > 500);
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();
/* ===== KARTU ANGGOTA: miring mengikuti kursor ===== */
$("#cards").addEventListener("pointermove", e => {
  if (e.pointerType !== "mouse") return;
  const c = e.target.closest(".mc"); if (!c) return;
  const r = c.getBoundingClientRect();
  c.style.setProperty("--ry", ((e.clientX - r.left) / r.width - .5) * 10 + "deg");
  c.style.setProperty("--rx", -((e.clientY - r.top) / r.height - .5) * 10 + "deg");
});
$("#cards").addEventListener("pointerout", e => { const c = e.target.closest(".mc"); if (c) { c.style.removeProperty("--rx"); c.style.removeProperty("--ry"); } });

/* ===== UPGRADE ANIMASI 2 ===== */
/* navbar: sembunyi saat scroll turun, muncul saat scroll naik */
let lastY = scrollY;
addEventListener("scroll", () => {
  const y = scrollY, nav = $("#nav");
  nav.classList.toggle("hide", y > lastY && y > 320 && !menu.classList.contains("open"));
  lastY = y;
}, { passive: true });

/* scrollspy: menu yang aktif ikut bagian yang sedang dibaca */
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  $$("#menu a").forEach(a => a.classList.toggle("act", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => spy.observe(s));

/* hero: latar bergeser halus mengikuti kursor */
const hero = $(".hero");
hero.addEventListener("pointermove", e => {
  if (reduce || e.pointerType !== "mouse") return;
  const r = hero.getBoundingClientRect();
  hero.style.setProperty("--mx", ((e.clientX - r.left) / r.width - .5).toFixed(3));
  hero.style.setProperty("--my", ((e.clientY - r.top) / r.height - .5).toFixed(3));
});

/* slogan berganti-ganti */
const slogan = $(".slogan");
const sl = [slogan.textContent, "Berlomba dalam kebaikan, saling menolong dalam ketakwaan.", "Bersama dalam ilmu, bersatu dalam ukhuwah.", "Kelas 1E: satu keluarga, satu semangat."];
let si = 0;
setInterval(() => {
  slogan.classList.add("swap");
  setTimeout(() => { si = (si + 1) % sl.length; slogan.textContent = sl[si]; slogan.classList.remove("swap"); }, 450);
}, 5200);

/* tombol "magnet" */
$$(".btn").forEach(b => {
  b.addEventListener("pointermove", e => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = b.getBoundingClientRect();
    b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .25 - 3}px)`;
  });
  b.addEventListener("pointerleave", () => b.style.transform = "");
});

/* klik di mana saja: ledakan bintang emas */
document.addEventListener("click", e => {
  if (reduce) return;
  for (let i = 0; i < 7; i++) {
    const s = document.createElement("b"), a = (i / 7) * 6.283 + Math.random() * .6, d = 30 + Math.random() * 34;
    s.className = "burst"; s.textContent = "✦";
    s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;--x:${Math.cos(a) * d}px;--y:${Math.sin(a) * d}px;font-size:${10 + Math.random() * 10}px`;
    document.body.appendChild(s); setTimeout(() => s.remove(), 750);
  }
});

/* ===== UPGRADE 3: profil anggota, urut A-Z, bagikan ===== */
$("#sort").onclick = e => { sortAZ = !sortAZ; e.currentTarget.classList.toggle("on", sortAZ); e.currentTarget.setAttribute("aria-pressed", sortAZ); renderMembers(); };

const mm = $("#mm"); let mi = 0, mLast = null;
function showMember(i, d = 0) {
  mi = (i + members.length) % members.length; const m = members[mi];
  $("#mm .mbox").style.setProperty("--c", m.gender === "L" ? "#2f7fe6" : "#ec7fa8");
  const role = m.kalimat && m.kalimat.toLowerCase() !== "anggota";
  $("#mbody").innerHTML = `<div class="mban"><b class="mno">${String(mi + 1).padStart(2, "0")}</b></div><div class="mav ${m.gender}">${m.foto ? `<img src="${m.foto}" alt="${m.name}" onerror="this.replaceWith(avIcon())">` : `<svg><use href="#usr"/></svg>`}</div><h3>${m.name}</h3><p class="mrole${role ? " core" : ""}">${m.kalimat || "Anggota"}</p><div class="tags"><span class="tag ${m.gender}">${gl(m.gender)}</span><span class="tag st">Kelas 1E · No. ${String(mi + 1).padStart(2, "0")}</span></div>`;
  if (d && !reduce) $("#mbody").animate([{ opacity: 0, transform: `translateX(${d * 40}px)` }, { opacity: 1, transform: "none" }], { duration: 350, easing: "ease-out" });
}
function openMember(i) { mLast = document.activeElement; mm.hidden = false; document.body.classList.add("locked"); showMember(i); requestAnimationFrame(() => mm.classList.add("open")); $("#mx").focus({ preventScroll: true }); }
function closeMember() { mm.classList.remove("open"); setTimeout(() => { mm.hidden = true; document.body.classList.remove("locked"); mLast && mLast.focus({ preventScroll: true }); }, reduce ? 0 : 300); }
$("#cards").addEventListener("click", e => { const c = e.target.closest(".mc"); if (c) openMember(parseInt(c.querySelector(".no").textContent, 10) - 1); });
$("#cards").addEventListener("keydown", e => { if (e.key === "Enter") { const c = e.target.closest(".mc"); if (c) openMember(parseInt(c.querySelector(".no").textContent, 10) - 1); } });
$("#mx").onclick = closeMember; $("#mp").onclick = () => showMember(mi - 1, -1); $("#mn").onclick = () => showMember(mi + 1, 1);
mm.addEventListener("click", e => { if (e.target === mm) closeMember(); });
document.addEventListener("keydown", e => {
  if (mm.hidden) return;
  if (e.key === "Escape") closeMember(); else if (e.key === "ArrowRight") showMember(mi + 1, 1); else if (e.key === "ArrowLeft") showMember(mi - 1, -1);
});

const toast = document.createElement("div"); toast.id = "toast"; document.body.appendChild(toast);
$("#share").addEventListener("click", async e => {
  e.preventDefault();
  const data = { title: document.title, text: "Profil Kelas 1E", url: location.href.split("#")[0] };
  try { if (navigator.share) { await navigator.share(data); return; } await navigator.clipboard.writeText(data.url); toast.textContent = "Link disalin ✦"; }
  catch { toast.textContent = "Salin link dari address bar ya"; }
  toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2200);
});

/* ===== STRUKTUR: popup JABATAN (beda dari popup anggota) ===== */
const roles = struktur.flat();
const roleInfo = {
  Cosma: ["Ketua Kelas", ["Memimpin dan mewakili kelas", "Menjadi penghubung dengan dosen dan pihak kampus", "Memimpin musyawarah dan mengambil keputusan bersama"]],
  Wacosma: ["Wakil Ketua Kelas", ["Membantu dan menggantikan Cosma saat berhalangan", "Mengoordinasi kegiatan dan acara kelas", "Memastikan kerja pengurus berjalan kompak"]],
  Sekre: ["Sekretaris", ["Mencatat hasil rapat dan pengumuman kelas", "Mengelola data, arsip, dan surat-menyurat", "Mendata kehadiran dan jadwal kelas"]],
  Waksek: ["Wakil Sekretaris", ["Membantu tugas administrasi sekretaris", "Menggantikan sekretaris saat berhalangan", "Ikut merapikan dokumen dan arsip kelas"]],
  Bendahara: ["Bendahara", ["Mengelola uang kas kelas", "Mencatat pemasukan dan pengeluaran", "Melaporkan keuangan kelas secara berkala"]],
  Wakben: ["Wakil Bendahara", ["Membantu penagihan dan pencatatan kas", "Menggantikan bendahara saat berhalangan", "Ikut menjaga transparansi keuangan kelas"]],
  Keamanan: ["Keamanan Kelas", ["Menjaga ketertiban dan keamanan kelas", "Mengingatkan teman soal tata tertib dan barang bawaan", "Mengoordinasi kebersihan dan kerapian ruangan"]],
  Wakeamanan: ["Wakil Keamanan", ["Membantu tugas keamanan dan ketertiban", "Menggantikan keamanan saat berhalangan", "Ikut menjaga kenyamanan ruang kelas"]]
};
const rm = $("#rm"); let ri = 0, rLast = null;
function showRole(i, d = 0) {
  ri = (i + roles.length) % roles.length; const r = roles[ri], info = roleInfo[r.role] || [r.role, []];
  const pair = (struktur.find(row => row.includes(r)) || []).find(x => x !== r);
  const f = fotoOf(r.name);
  $("#rbox").style.setProperty("--c", r.c);
  $("#rbody").innerHTML = `<div class="rban"><b class="rico">${r.role[0]}</b></div><div class="rav">${f ? `<img src="${f}" alt="${r.name}" onerror="this.replaceWith(avIcon())">` : `<svg><use href="#usr"/></svg>`}</div><p class="rkick">${r.role}</p><h3>${info[0]}</h3><p class="rname">${r.name}</p><ul class="rtask">${info[1].map(t => `<li>${t}</li>`).join("")}</ul>${pair ? `<p class="rpair">Berpasangan dengan <b>${pair.role}</b>: ${pair.name}</p>` : ""}`;
  if (d && !reduce) $("#rbody").animate([{ opacity: 0, transform: `translateY(${d * 30}px)` }, { opacity: 1, transform: "none" }], { duration: 380, easing: "ease-out" });
}
function openRole(i) { rLast = document.activeElement; rm.hidden = false; document.body.classList.add("locked"); showRole(i); requestAnimationFrame(() => rm.classList.add("open")); $("#rx").focus({ preventScroll: true }); }
function closeRole() { rm.classList.remove("open"); setTimeout(() => { rm.hidden = true; document.body.classList.remove("locked"); rLast && rLast.focus({ preventScroll: true }); }, reduce ? 0 : 300); }
const nodeIdx = n => roles.findIndex(r => r.role === n.dataset.role && r.name === n.dataset.name);
$("#org").addEventListener("click", e => { const n = e.target.closest(".nd"); if (n) openRole(nodeIdx(n)); });
$("#org").addEventListener("keydown", e => { if (e.key === "Enter") { const n = e.target.closest(".nd"); if (n) openRole(nodeIdx(n)); } });
$("#rx").onclick = closeRole; $("#rp").onclick = () => showRole(ri - 1, -1); $("#rn").onclick = () => showRole(ri + 1, 1);
rm.addEventListener("click", e => { if (e.target === rm) closeRole(); });
document.addEventListener("keydown", e => {
  if (rm.hidden) return;
  if (e.key === "Escape") closeRole(); else if (e.key === "ArrowRight") showRole(ri + 1, 1); else if (e.key === "ArrowLeft") showRole(ri - 1, -1);
});
