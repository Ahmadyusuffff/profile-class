/* ===== KONFIGURASI ===== */
const INSTAGRAM_USERNAME = "evolutionary.class26";            
const INSTAGRAM_URL = "https://instagram.com/evolutionary.class26?dlrf=eDgwdmdkcjRjcmc4";                 


const laki = [
  { name: "RIZKI FAUZI", kalimat: "wakeam dan pj matkul kitab kuning" },
  { name: "MUHAMMAD FAREL AMRULLAH", kalimat: "anggota" },
  { name: "MUHAMAD ABDUL HALIM", kalimat: "anggota" },
  { name: "EVAN AKMAL MUSTHAFA", kalimat: "waksek dan pj matkul ilmu tauhid" },
  { name: "MUHAMMAD GILANG RAMADAN", kalimat: "cosma" },
  { name: "MUHAMMAD NABIYA MAULFI", kalimat: "anggota" },
  { name: "MUHAMAD RIZIK ROMADON", kalimat: "keamanan dan pj matkul bahasa arab" },
  { name: "MUHAMAD ILHAM", kalimat: "anggota" },
  { name: "NIZAR IKHWAN ABYASA", kalimat: "anggota" },
  { name: "RIFQI MOCH SURYADI", kalimat: "pj matkul ilmu tauhid" },
  { name: "AHMAD MAULANA YUSUF", kalimat: "anggota" },
  { name: "NUR KHOLIS", kalimat: "pj matkul bahasa arab" },
  { name: "MUHAMMAD REVAN NURDIANSYAH", kalimat: "pj matkul kitab kuning" }
];
const perempuan = [
  { name: "RIKA JULIA", kalimat: "anggota" },
  { name: "MELA SAFIRA", kalimat: "pj matkul pptq" },
  { name: "DESI RATNA ANJANI", kalimat: "pj matkul pptq" },
  { name: "ROZIQOH", kalimat: "anggota" },
  { name: "ELSA EVILIA", kalimat: "pj matkul bahasa indonesia" },
  { name: "ZAHRA FAUZIAH", kalimat: "pj matkul tahsin dan tahfidz" },
  { name: "NAELUN NAJWA", kalimat: "anggota" },
  { name: "NURUL AZKIYAH", kalimat: "anggota" },
  { name: "SHUFI NASYEETHA CHALEEZA", kalimat: "sekretaris dan pj spik" },
  { name: "DIVA NUR AFIANI", kalimat: "bendahara dan matkul al-quran dan hadist" },
  { name: "RENI MARDIYAH", kalimat: "pj matkul cyber culture" },
  { name: "MUTOHAROH NOVIYANI", kalimat: "wakben dan matkul al-quran dan hadist" },
  { name: "MAIDINA HUSNATUN NISA", kalimat: "wakosma dan pj matkul spik" },
  { name: "SILVYANA NURDIN", kalimat: "pj matkul cirebon studies" },
  { name: "ZILAN QISMATUL AWALIYAH", kalimat: "pj matkul cirebon studies" },
  { name: "SELLY NURMALASARI", kalimat: "pj matkul pendidikan kewarganegaraan" },
  { name: "NINDA HALIMATUSSA'ADAH", kalimat: "pj matkul cyber culture" },
  { name: "ZAHROTUSYITA", kalimat: "anggota" },
  { name: "BILQIS ZAHRATUSYIFA", kalimat: "pj matkul pendidikan kewarganegaraan" },
  { name: "ISTI KHOIRUNNISA", kalimat: "pj matkul bahasa indonesia" },
  { name: "ITA NURAENI", kalimat: "pj matkul tahsin dan tahfidz" },
  { name: "ZAZKIYAH NISHFA ASTILA", kalimat: "anggota" }
];
const members = [
  ...laki.map(m => ({ ...m, gender: "L" })),
  ...perempuan.map(m => ({ ...m, gender: "P" }))
];

/* ===== FOTO GALERI =====
   */
const gallery = [
  { src: "foto/IMG-20261008-WA0169.jpg", caption: "Foto Bersama Kelas 1E" },     
  { src: "foto/IMG-20261008-WA0120.jpg", caption: "Kebersamaan di Kelas" },
  { src: "foto/IMG-20261008-WA0125.jpg", caption: "Di Depan Gedung FITK" },       
  { src: "foto/IMG-20261008-WA0118.jpg", caption: "Santai Bareng di Kampus" },
  { src: "foto/IMG-20261008-WA0197.jpg", caption: "Mahasiswi Kelas 1E" },
  { src: "foto/IMG-20261008-WA0129.jpg", caption: "Para Mahasiswa dengan Batik" }, 
  { src: "foto/IMG-20261008-WA0143.jpg", caption: "Keseruan di Dalam Kelas" },
  { src: "foto/IMG-20261008-WA0114.jpg", caption: "Foto Bersama Dosen" },         
  { src: "foto/IMG-20261008-WA0202.jpg", caption: "Mahasiswa Kelas 1E" },
  { src: "foto/IMG-20260924-WA0104.jpg", caption: "Kompak Berbatik" }
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

$("#org").innerHTML = `<div class="lvl root"><div class="rootlg"><svg><use href="#logo"/></svg>Struktur Kelas 1E</div></div>` + struktur.map(row =>
  `<div class="lvl ${row.length > 1 ? "multi" : ""}">` +
  row.map(n => `<div class="nd" style="--c:${n.c}"><b class="ico">${n.role[0]}</b><small>${n.role}</small><span>${n.name || '<i class="ph">[Nama]</i>'}</span></div>`).join("") +
  `</div>`).join("");

/* ===== ANGGOTA ===== */
let fG = "all";
const ph = v => v ? v : `<span class="ph"></span>`;
const gl = g => g === "L" ? "Laki-laki" : "Perempuan";
function renderMembers() {
  const q = $("#q").value.trim().toLowerCase();
  const list = members.map((m, i) => ({ ...m, no: i + 1 })).filter(m =>
    (fG === "all" || m.gender === fG) && (!q || m.name.toLowerCase().includes(q)));
  $("#cards").innerHTML = list.map(m =>
    `<article class="mc ${m.gender}"><span class="no">${String(m.no).padStart(2, "0")}</span><div class="av"><svg><use href="#usr"/></svg></div><h3>${ph(m.name)}</h3><p class="nim">${m.kalimat ? m.kalimat : '<span class="ph">Tulis kalimat di sini…</span>'}</p><div class="tags"><span class="tag ${m.gender}">${gl(m.gender)}</span>${m.status ? `<span class="tag st${/^pj$/i.test(m.status) ? " pj" : ""}">${m.status}</span>` : ""}</div></article>`).join("");
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
const shape = ["w", "", "t", "", "", "t", "", "w", "", ""];
const icons = "✦ ☪ ❖ ✧ ✺ ☽ ❂ ✦ ☪ ❖".split(" ");
$("#grid").innerHTML = gallery.map((g, i) =>
  `<figure class="ph-i rv ${shape[i]}" tabindex="0" data-i="${i}" style="--g:linear-gradient(135deg,${grads[i % 5]})">` +
  (g.src ? `<img src="${g.src}" alt="${g.caption}" loading="lazy">` : `<span>${icons[i]}</span>`) +
  `<figcaption>${g.caption}</figcaption></figure>`).join("");
function openLb(i) {
  const g = gallery[i];
  $("#lbimg").style.setProperty("--g", `linear-gradient(135deg,${grads[i % 5]})`);
  $("#lbimg").innerHTML = g.src ? `<img src="${g.src}" alt="${g.caption}">` : icons[i];
  $("#lbcap").textContent = g.caption;
  $("#lb").hidden = false;
}
$("#grid").addEventListener("click", e => { const f = e.target.closest("figure"); if (f) openLb(+f.dataset.i); });
$("#grid").addEventListener("keydown", e => { if (e.key === "Enter") { const f = e.target.closest("figure"); if (f) openLb(+f.dataset.i); } });
const closeLb = () => $("#lb").hidden = true;
$("#lbx").onclick = closeLb;
$("#lb").addEventListener("click", e => { if (e.target.id === "lb") closeLb(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });

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