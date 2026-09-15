export const IMG = {
  heroInterior:
    "https://images.pexels.com/photos/19456977/pexels-photo-19456977.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=760&w=1200",
  heroDish:
    "https://images.pexels.com/photos/8112891/pexels-photo-8112891.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=560",
  candlelit:
    "https://images.pexels.com/photos/30420679/pexels-photo-30420679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100",
  bar: "https://images.pexels.com/photos/19689233/pexels-photo-19689233.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100",
  cozy: "https://images.pexels.com/photos/36353801/pexels-photo-36353801.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100",
  wine: "https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100",
  inn: "https://images.pexels.com/photos/32859023/pexels-photo-32859023.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100",
  terrace:
    "https://images.pexels.com/photos/6130040/pexels-photo-6130040.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1100",
  dishes: [
    "https://images.pexels.com/photos/24289213/pexels-photo-24289213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=420",
    "https://images.pexels.com/photos/31235409/pexels-photo-31235409.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=420",
    "https://images.pexels.com/photos/24186303/pexels-photo-24186303.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=420",
    "https://images.pexels.com/photos/18229217/pexels-photo-18229217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=420",
    "https://images.pexels.com/photos/24245839/pexels-photo-24245839.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=420",
    "https://images.pexels.com/photos/9271569/pexels-photo-9271569.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=420&w=420",
  ],
};

const person = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200`;

export const FACES = [
  person(38366749),
  person(38366748),
  person(7244274),
  person(36513586),
  person(38860774),
];

export const NAV_LINKS = [
  { label: "What we build", href: "#features" },
  { label: "Before / After", href: "#showcase" },
  { label: "Results", href: "#benefits" },
  { label: "Packages", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const CLIENTS = [
  { name: "Casa Oliveira", type: "Trattoria · Lisboa" },
  { name: "Quinta do Vale", type: "Guesthouse · Douro" },
  { name: "Brasa & Sal", type: "Steakhouse · Porto" },
  { name: "Maré Alta", type: "Seafood · Algarve" },
  { name: "Solar dos Figos", type: "Inn · Alentejo" },
  { name: "Tasca Nova", type: "Bistro · Braga" },
  { name: "Horta & Forno", type: "Farm table · Sintra" },
  { name: "Vento Norte", type: "Wine bar · Guimarães" },
];

export const FEATURES = [
  {
    icon: "devices",
    title: "Design that works on a phone first",
    body: "7 out of 10 guests find you on a phone, often while standing on your street. Your site loads clean, thumb-friendly and beautiful on every screen before it ever looks good on a desktop.",
    meta: "Mobile-first · 100% responsive",
  },
  {
    icon: "menu",
    title: "A digital menu you can update yourself",
    body: "Change a price, mark a dish sold out, launch the winter menu — in under a minute, from your phone. No PDF nobody can read, no developer invoice for a typo.",
    meta: "Self-managed · Allergens · Photos",
  },
  {
    icon: "calendar",
    title: "Reservations & delivery, wired in",
    body: "One-tap booking with TheFork, OpenTable, Google Reserve or our own built-in system — plus direct links to Uber Eats, Glovo or your own takeaway checkout.",
    meta: "Bookings · Takeaway · Waitlist",
  },
  {
    icon: "pin",
    title: "Local SEO that puts you on the map",
    body: "Optimised Google Business Profile, schema markup for menus and opening hours, and pages built to win 'restaurant near me' for your neighbourhood.",
    meta: "Google Maps · Rich results",
  },
  {
    icon: "bolt",
    title: "Loads in under 1.5 seconds",
    body: "Every extra second of loading costs you bookings. We ship hand-built, image-optimised sites that score 95+ on Google PageSpeed — even on café Wi-Fi.",
    meta: "95+ PageSpeed · Core Web Vitals",
  },
  {
    icon: "camera",
    title: "Professional food photography included",
    body: "A photographer spends half a day with your kitchen. You get 40+ edited images of your dishes, room and team — yours to keep, for the site and social.",
    meta: "Half-day shoot · 40+ images",
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Free proposal",
    copy: "We audit your current site and Google presence, then send a mockup of your new homepage. No cost, no obligation.",
    days: "Day 1–2",
  },
  {
    step: "02",
    title: "Shoot & build",
    copy: "Photography session, menu structuring, copywriting in every language you need, then the build.",
    days: "Day 3–11",
  },
  {
    step: "03",
    title: "Launch & train",
    copy: "We migrate your domain, connect bookings, and walk your team through updating the menu themselves.",
    days: "Day 12–14",
  },
];

export const BENEFITS = [
  {
    icon: "search",
    title: "Found first on Google",
    stat: "+184%",
    statLabel: "average search impressions in 90 days",
    body: "Structured data, real page speed and locally-targeted content move you above the aggregator sites that charge you commission on every cover.",
  },
  {
    icon: "calendar",
    title: "More direct reservations",
    stat: "+42%",
    statLabel: "direct bookings, commission-free",
    body: "A booking button that's always one thumb-tap away, on every page. Guests book with you instead of a platform that takes a cut of every table.",
  },
  {
    icon: "globe",
    title: "Credibility that travels",
    stat: "4.9★",
    statLabel: "perceived quality in guest surveys",
    body: "A site that looks as considered as your plating. Tourists, food writers and corporate bookers judge you in three seconds — we make those seconds count.",
  },
  {
    icon: "languages",
    title: "Multilingual for tourists",
    stat: "6",
    statLabel: "languages available at launch",
    body: "Portuguese, English, Spanish, French, German and Italian — professionally translated, not machine-mangled. Visitors book in the language they trust.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Our old site was a PDF menu and a phone number. Mesa Dev's turned it into our best waiter — 60 to 70 reservations a week come straight through the site now, and we pay no commission on a single one.",
    name: "Helena Moreira",
    role: "Owner · Casa Oliveira, Lisboa",
    face: FACES[1],
    metric: "+68 covers / week",
  },
  {
    quote:
      "We run a guesthouse with a restaurant, which nobody ever knew how to present. They built one site that sells rooms and tables together. Room nights are up 31% and half our guests now eat with us both evenings.",
    name: "Rui Bettencourt",
    role: "Proprietor · Quinta do Vale, Douro",
    face: FACES[0],
    metric: "+31% room nights",
  },
  {
    quote:
      "The photography alone was worth it. Our dishes finally look the way they taste. Two food magazines contacted us within a month of launch using photos straight from the site.",
    name: "Tiago Ferraz",
    role: "Chef-owner · Brasa & Sal, Porto",
    face: FACES[3],
    metric: "2 press features",
  },
  {
    quote:
      "In summer, 80% of our guests are foreign. Having the menu and booking flow in six languages stopped the confusion at the door completely. Tourists arrive already knowing what they want to order.",
    name: "Sofia Nunes",
    role: "Manager · Maré Alta, Algarve",
    face: FACES[2],
    metric: "6 languages live",
  },
  {
    quote:
      "Fourteen days, exactly as promised, during our busiest month. I updated the whole winter menu from my phone between services. That's the part I still can't believe.",
    name: "André Salgado",
    role: "Owner · Tasca Nova, Braga",
    face: FACES[4],
    metric: "14-day delivery",
  },
];

export type Plan = {
  name: string;
  tagline: string;
  price: number;
  monthly: number;
  best: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Essential",
    tagline: "For the restaurant that needs to exist properly online — fast.",
    price: 890,
    monthly: 19,
    best: "Cafés, tascas, small bistros",
    features: [
      "Up to 5 pages, mobile-first design",
      "Digital menu you can edit yourself",
      "Google Maps, hours & contact block",
      "Reservation button (phone / WhatsApp)",
      "Google Business Profile optimisation",
      "1 language · Delivered in 14 days",
    ],
    cta: "Start with Essential",
  },
  {
    name: "Professional",
    tagline: "The complete sales tool: bookings, orders and search visibility.",
    price: 1690,
    monthly: 39,
    best: "Restaurants doing 100+ covers a week",
    features: [
      "Everything in Essential",
      "Half-day photo shoot · 40+ edited images",
      "Integrated reservation system (TheFork / OpenTable / Google)",
      "Delivery & takeaway integration",
      "Full local SEO package + schema markup",
      "3 languages · Dish gallery & events page",
      "90 days of post-launch support",
    ],
    cta: "Request a free proposal",
    featured: true,
  },
  {
    name: "Premium",
    tagline: "For guesthouses, inns and groups that sell rooms and tables.",
    price: 2890,
    monthly: 69,
    best: "Guesthouses, inns, multi-venue groups",
    features: [
      "Everything in Professional",
      "Rooms + restaurant booking in one journey",
      "6 languages, professionally translated",
      "Full-day photo shoot (rooms, food, property)",
      "Gift vouchers & private events booking",
      "Monthly performance report & SEO tuning",
      "Priority support, same-day changes",
    ],
    cta: "Talk to a specialist",
  },
];

export const FAQS = [
  {
    q: "How long does it take to launch?",
    a: "Essential sites go live in 14 days. Professional takes 14–21 days including the photo shoot, and Premium projects with rooms and six languages run 3–4 weeks. We agree the date at kick-off and we've never missed one — your current site stays online the whole time, so there's zero downtime.",
  },
  {
    q: "Is hosting included, and what does maintenance cost?",
    a: "Yes. Every package includes fast European hosting, SSL certificate, daily backups and security monitoring under one care plan (from €19/month). It also covers unlimited small content edits — new prices, seasonal dishes, holiday hours — done by us within 24 hours if you'd rather not touch it.",
  },
  {
    q: "Can I keep my current domain and email?",
    a: "Absolutely. We migrate your existing domain and mailboxes for free, or register a new one for you. If you'd like to move away from a provider you're unhappy with, we handle the transfer paperwork and make sure nothing drops — including your Google rankings.",
  },
  {
    q: "How many languages can the site support?",
    a: "Essential ships in one language, Professional in three, Premium in six. We can add any additional language for €290 each. Translations are done by native speakers in the hospitality field — menus especially, because a badly translated dish name costs you orders.",
  },
  {
    q: "Do I really get to edit the menu myself?",
    a: "Yes, and it's the feature owners thank us for most. You get a simple dashboard — change a price, hide a sold-out dish, publish a daily special, upload a photo. It takes under a minute from your phone, and we train your team on it before launch.",
  },
  {
    q: "What if I already have a website?",
    a: "Most of our work is redesigns. We keep what performs — your domain authority, your reviews, your best-ranking pages — and rebuild everything else. We run a free audit first so you can see exactly what's costing you bookings before you commit to anything.",
  },
  {
    q: "What happens after launch? Am I on my own?",
    a: "No. Professional includes 90 days of hands-on support, and every plan has a care plan behind it. You get a direct WhatsApp line to your project lead, not a ticket queue — most requests are answered within a couple of hours during service times.",
  },
];

export const STATS = [
  { value: 140, suffix: "+", label: "restaurant & guesthouse sites delivered" },
  { value: 14, suffix: " days", label: "average time from kick-off to launch" },
  { value: 42, suffix: "%", label: "average lift in direct reservations" },
  { value: 98, suffix: "/100", label: "median Google PageSpeed score" },
];
