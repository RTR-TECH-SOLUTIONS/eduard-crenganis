# Eduard Crenganiș · Event Management B2B — demo de prezentare

Demo pentru pitch, nu proiect final. Astro static + Tailwind (configurat) + CSS vanilla
tokenizat pentru secțiunile cu design propriu.

## Rulare

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ static, se urcă direct pe Hostinger
```

## Direcția de design

Combinație cerută de client din două referințe:

- **ioanagamen.ro** → limbajul vizual: sidebar fix pe stânga în loc de header orizontal,
  hero dark full-bleed cu fotografie, accent auriu, serif editorial, footer închis.
  *Nu* s-au preluat: fontul script de deasupra secțiunilor, carouselul, roșul vișiniu.
- **e-eveniment.ro/organizare-evenimente-b2b** → densitatea de conținut B2B: formate,
  proces pe etape, livrabile, „pentru cine”, FAQ. Vizualul lor (teal + gradient + butoane
  pill) a fost ignorat intenționat.

Peste ele, limbajul de obiect real al meseriei, ca site-ul să nu pară generat:
minutar (run-of-show) cu ore pe coloană, listă de furnizori în stil deviz cu leader-dots,
capții foto numerotate `Fig. 0x`, cifre în mono.

### Tokens

Paleta e extrasă din fotografiile de eveniment: cerneală caldă `#0b0a09`, hârtie `#ece6da`,
un singur accent — alama reflectorului `#c3924b`, folosită doar pe linii, numere și
underline-uri, niciodată ca fundal de buton. Radius 2px, zero umbre.

Fonturi: Fraunces (titluri), Inter (body), IBM Plex Mono (cifre, ore, capții).

## Structură

- `/` — one-page: hero, poziționare, cele 3 direcții, minutar, divizia de furnizori,
  proces în 5 etape, studiu de caz, potrivire, FAQ, contact.
- `/event-management` — pagina de serviciu cu documentația densă: formate, ce include pe
  4 capitole, subcontractări, calendar pe 12 săptămâni, ce nu intră, FAQ.

## Funcțional în demo

Formularul de contact nu are backend: compune mesajul și deschide WhatsApp cu datele
precompletate (`src/pages/index.astro`, scriptul de la final).

## Ce lipsește intenționat (se face la proiectul real)

SEO pe keyworduri RO, schema/JSON-LD, sitemap, banner cookie + pagini legale,
credit „made by RTR”, imagini reale de la client (cele din `public/img/` sunt generate
și au rol de placeholder).

## Conținut de înlocuit

Nume, telefon, email, CUI, cifrele de pe hero, studiul de caz și prețurile din FAQ sunt
plauzibile, dar inventate. Datele se schimbă în `src/layouts/Base.astro` (contact) și în
frontmatter-ul celor două pagini.
