import { c as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_COFieLBv.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BUd45Zdf.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const pharmacies = {"CTR. DE LORA":{"name":"Farmacia Ctra. de Lora (Lda. Ramos)","address":"Ctra. de Lora, 2","phone":"955 73 01 27","maps":"https://www.google.com/maps/search/?api=1&query=Farmacia+Ctra+Lora+2+Cantillana"},"CALLE MURILLO":{"name":"Farmacia Calle Murillo (Lda. Soriano)","address":"C. Murillo, 2","phone":"955 73 13 46","maps":"https://www.google.com/maps/search/?api=1&query=Farmacia+Calle+Murillo+2+Cantillana"},"NTRO. P. JESUS":{"name":"Farmacia Ntro. P. Jesús (Lda. Naranjo)","address":"C. Nuestro Padre Jesús, 2","phone":"955 73 00 24","maps":"https://www.google.com/maps/search/?api=1&query=Farmacia+Nuestro+Padre+Jesus+2+Cantillana"},"ADOLFO SUAREZ":{"name":"Farmacia Adolfo Suárez (Lda. Pérez)","address":"Av. Adolfo Suárez, 1","phone":"955 73 08 61","maps":"https://www.google.com/maps/search/?api=1&query=Farmacia+Adolfo+Suarez+1+Cantillana"}};
const calendar = {"days":{"1":"CTR. DE LORA","2":"CALLE MURILLO","3":"NTRO. P. JESUS","4":"NTRO. P. JESUS","5":"NTRO. P. JESUS","6":"ADOLFO SUAREZ","7":"CTR. DE LORA","8":"CALLE MURILLO","9":"NTRO. P. JESUS","10":"ADOLFO SUAREZ","11":"ADOLFO SUAREZ","12":"ADOLFO SUAREZ","13":"CTR. DE LORA","14":"CALLE MURILLO","15":"NTRO. P. JESUS","16":"ADOLFO SUAREZ","17":"CTR. DE LORA","18":"CTR. DE LORA","19":"CTR. DE LORA","20":"CALLE MURILLO","21":"NTRO. P. JESUS","22":"ADOLFO SUAREZ","23":"CTR. DE LORA","24":"CALLE MURILLO","25":"CALLE MURILLO","26":"CALLE MURILLO","27":"NTRO. P. JESUS","28":"ADOLFO SUAREZ","29":"CTR. DE LORA","30":"CALLE MURILLO"}};
const pharmData = {
  pharmacies,
  calendar,
};

const $$PharmacyStatus = createComponent(($$result, $$props, $$slots) => {
  const now = /* @__PURE__ */ new Date();
  const config = {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  };
  const formatter = new Intl.DateTimeFormat("es-ES", config);
  const parts = formatter.formatToParts(now);
  const getPart = (type) => parts.find((p) => p.type === type)?.value || "";
  let dayInt = parseInt(getPart("day"));
  let monthInt = parseInt(getPart("month"));
  let yearInt = parseInt(getPart("year"));
  const hourInt = parseInt(getPart("hour"));
  const minuteInt = parseInt(getPart("minute"));
  if (hourInt < 9 || hourInt === 9 && minuteInt < 30) {
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const yParts = formatter.formatToParts(yesterday);
    const getYPart = (type) => yParts.find((p) => p.type === type)?.value || "";
    dayInt = parseInt(getYPart("day"));
    monthInt = parseInt(getYPart("month"));
    yearInt = parseInt(getYPart("year"));
  }
  const day = dayInt.toString();
  const month = monthInt;
  const year = yearInt;
  const isApril2026 = month === 4 && year === 2026;
  const pharmacyKey = isApril2026 ? pharmData.calendar.days[day] : null;
  const activePharmacy = pharmacyKey ? pharmData.pharmacies[pharmacyKey] : null;
  const calendarEntries = Object.entries(pharmData.calendar.days).map(([d, key]) => ({
    day: d,
    name: pharmData.pharmacies[key].name,
    isToday: d === day
  }));
  return renderTemplate`${maybeRenderHead()}<div class="glass-panel p-8 bg-linear-to-br from-primary/5 to-secondary/5 border-2 border-secondary/30 relative overflow-hidden group"> <!-- Badge Decorativo --> <div class="absolute -top-4 -right-4 w-24 h-24 bg-secondary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div> <div class="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8"> <div class="flex items-center gap-3 bg-primary px-5 py-2 rounded-full text-white shadow-lg animate-pulse"> <div class="w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div> <span class="text-[0.65rem] font-black uppercase tracking-widest">En Guardia Ahora</span> </div> <span class="text-sm font-bold text-slate-500 bg-white/50 px-4 py-2 rounded-lg border border-white/40">${day} de Abril, ${year}</span> </div> ${activePharmacy ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10"> <div class="space-y-4"> <h3 class="text-3xl font-black text-primary leading-tight drop-shadow-sm">${activePharmacy.name}</h3> <div class="space-y-2 text-lg text-slate-600 font-medium"> <p class="flex items-center gap-2">📍 <span class="border-b-2 border-secondary/20 pb-0.5">${activePharmacy.address}</span></p> <p class="flex items-center gap-2">📞 <span class="text-primary font-bold">${activePharmacy.phone}</span></p> </div> </div> <div class="flex flex-col gap-3 min-w-[200px]"> <a${addAttribute(activePharmacy.maps, "href")} target="_blank" class="w-full bg-primary text-white text-center py-4 rounded-2xl font-bold shadow-xl shadow-primary/30 hover:-translate-y-1 active:scale-95 transition-all text-sm uppercase">
Ver en Google Maps
</a> <a${addAttribute(`tel:${activePharmacy.phone}`, "href")} class="w-full bg-white text-primary border-2 border-primary/20 text-center py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all text-sm uppercase">
Llamar Directo
</a> </div> </div>` : renderTemplate`<div class="text-center py-12 border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50"> <p class="text-slate-500 font-bold text-lg mb-4">No hay datos de guardia para hoy (${day}/${month}/${year}).</p> <a href="https://www.google.com/search?q=farmacias+de+guardia+cantillana" target="_blank" class="btn-primary">Buscar en Google</a> </div>`} <!-- Calendario --> <div class="mt-12 pt-8 border-t border-slate-200"> <details class="group/calendar"> <summary class="flex items-center justify-between cursor-pointer list-none text-primary font-bold hover:opacity-80 transition-opacity"> <div class="flex items-center gap-2"> <span class="text-xl">📅</span> <span>Calendario Completo de Abril</span> </div> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform group-open/calendar:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <div class="mt-8 transition-all duration-500 overflow-x-auto rounded-2xl border border-slate-200"> <table class="w-full text-left border-collapse bg-white"> <thead class="bg-slate-50 border-b border-slate-200"> <tr> <th class="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-widest">Día</th> <th class="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-widest">Farmacia</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> ${calendarEntries.map((entry) => renderTemplate`<tr${addAttribute(entry.isToday ? "bg-secondary/10 font-bold text-primary ring-2 ring-inset ring-secondary/20" : "hover:bg-slate-50/50 transition-colors", "class")}> <td class="px-6 py-4 text-sm whitespace-nowrap">${entry.day}</td> <td class="px-6 py-4 text-sm">${entry.name}</td> </tr>`)} </tbody> </table> </div> </details> </div> </div>`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/noticiasCantillana/src/components/PharmacyStatus.astro", void 0);

const prerender = false;
const $$Farmacia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Farmacias de Guardia", "description": "Consulta la farmacia de guardia hoy en Cantillana y el calendario completo de turnos actualizado." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-primary/5 pt-36 pb-16 sm:pt-44 sm:pb-24 -mt-2"> <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center"> <h1 class="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl mb-6">🏥 Farmacias de Guardia</h1> <p class="mx-auto max-w-2xl text-lg text-slate-600">Información actualizada de turnos para Cantillana. Localiza rápidamente la farmacia abierta hoy y consulta los próximos días.</p> </div> </section> <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12"> <div id="pharmacy-container" class="animate-fade"> ${renderComponent($$result2, "PharmacyStatus", $$PharmacyStatus, {})} </div> <!-- Info Box --> <div class="mt-12 bg-secondary/10 p-8 rounded-2xl border border-secondary/20 flex flex-col md:flex-row gap-8 items-center"> <div class="bg-secondary text-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg shrink-0"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h3 class="text-xl font-bold text-primary mb-2">Información Importante</h3> <p class="text-sm text-slate-600 leading-relaxed">
Los turnos de guardia comienzan a las 09:30 del día indicado y finalizan a las 09:30 del día siguiente (24 horas). Ante cualquier urgencia médica grave, contacte siempre con Emergencias (112).
</p> </div> </div> </div> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/noticiasCantillana/src/pages/farmacia.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/noticiasCantillana/src/pages/farmacia.astro";
const $$url = "/farmacia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Farmacia,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
