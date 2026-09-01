# Eduard Crenganiș · Event Management B2B — demo de prezentare

Demo pentru pitch, nu proiect final. Astro static + Tailwind (configurat) + CSS vanilla
tokenizat pentru secțiunile cu design propriu.

Live: https://rtr-tech-solutions.github.io/eduard-crenganis/

## Rulare

```bash
npm install
npm run dev      # http://localhost:4321/eduard-crenganis/
npm run build    # dist/ static
```

Site-ul are `base: '/eduard-crenganis'` (GitHub Pages, subfolder). Toate căile interne
trec prin helperul `u()` din `src/lib/url.ts` — dacă adaugi linkuri sau imagini, folosește-l,
altfel se rup pe Pages. Pentru domeniu propriu se scoate `base` din `astro.config.mjs`.

## Direcția de design

Combinație cerută de client din două referințe:

- **ioanagamen.ro** → limbajul vizual: hero dark full-bleed cu fotografie, accent auriu,
  serif editorial, **eyebrow scris de mână deasupra titlurilor**, **portret în cerc cu inel
  de alamă**, **secțiuni alternate întuneric / hârtie**, **carduri foto cu etichetă**
  (script + majuscule) pentru servicii și portofoliu.
  *Nu* s-au preluat: carouselul, roșul vișiniu, iconițele decorative în cerc.
- **e-eveniment.ro/organizare-evenimente-b2b** → densitatea de conținut B2B: formate,
  proces pe etape, livrabile, tabel de comparație, „pentru cine”, FAQ. Vizualul lor
  (teal + gradient + butoane pill) a fost ignorat intenționat.

Peste ele, limbajul de obiect real al meseriei, ca site-ul să nu pară generat:
minutar (run-of-show) cu ore pe coloană, listă de furnizori în stil deviz cu leader-dots,
tabel de comparație scris ca într-o ofertă, capții foto numerotate `Fig. 0x`, cifre în mono.

### Două variante: alb (implicit) și negru

Corpul paginilor e pe alb, ca la referință. Hero-urile, benzile peste fotografie, cardurile
foto și footerul rămân întunecate — sunt „insule" care își redeclară local setul de tokeni,
în `global.css`, sub `[data-tema="alb"] .lp, .phero, .caz, .cta, .card, .foot`.

Comutarea se face din butonul `alb / negru` din bară (în sertar pe mobil), se ține minte în
`localStorage` și se aplică înainte de prima pictură dintr-un `<script is:inline>` din `<head>`,
ca să nu clipească. E un ajutor de demo: la proiectul real se scoate butonul și rămâne
`data-tema` fix pe varianta aleasă de client.

### Tokens

Paleta e extrasă din fotografiile de eveniment: cerneală caldă `#0b0a09`, hârtie `#ece6da`,
hârtie de secțiune deschisă `#f1ece1`, un singur accent — alama reflectorului `#c3924b`
(`#7d5e2e` pentru text mic pe fundal deschis, ca să treacă AA). Radius 2px, zero umbre.

Fonturi: Fraunces (titluri), Inter (body), IBM Plex Mono (cifre, ore, capții),
Style Script (eyebrow-urile de deasupra titlurilor).

## Structură

- `/` — hero compus în stil landing (lockup de nume cu alamă lucioasă, portretul clientului
  în cerc cu inel și arc de alamă, citat, card de hârtie care intră în secțiunea de dedesubt),
  despre, cele 3 direcții ca carduri foto, minutar, divizia de furnizori, teaser de portofoliu,
  proces în 5 etape, potrivire, FAQ, contact.
- `/servicii` — cele trei direcții în detaliu (durată, onorariu, livrabile), tabel de
  comparație „ce intră în fiecare”, FAQ despre servicii.
- `/event-management` — pagina de serviciu cu documentația densă: formate, ce include pe
  4 capitole, subcontractări, calendar pe 12 săptămâni, ce nu intră, FAQ.
- `/portofoliu` — cifre generale, 6 proiecte în grilă de carduri, două studii de caz
  (unul cu cronologie pe săptămâni), două citate de client.

## Funcțional în demo

Formularul de contact nu are backend: compune mesajul și deschide WhatsApp cu datele
precompletate (`src/pages/index.astro`, scriptul de la final).

## Deploy

Push pe `main` → GitHub Actions (`.github/workflows/deploy.yml`) buildează și publică pe
GitHub Pages. Pagina are `noindex` cât timp e demo.

## Ce lipsește intenționat (se face la proiectul real)

SEO pe keyworduri RO (inclusiv local, „organizator evenimente Bacău”), schema/JSON-LD,
sitemap, banner cookie + pagini legale, credit „made by RTR”.

## Conținut de înlocuit

Portretul din `public/img/eduard-portret.webp` e poza reală trimisă de client (upscalată).
Restul imaginilor din `public/img/` sunt generate și au rol de placeholder.

Numele, telefonul, emailul, CUI-ul, cifrele, proiectele din portofoliu, citatele și
prețurile sunt plauzibile, dar **inventate**. Se schimbă în `src/layouts/Base.astro`
(contact) și în frontmatter-ul paginilor.
