// Central content for Chef Balpreet Singh Chadha's portfolio.
// Content sourced from the chef's official Website Brief (July 2026, v1.0).
// Edit strings below to update the site copy.

export const chef = {
  name: "Balpreet Singh Chadha",
  firstName: "Balpreet",
  title: "Chef",
  tagline: "Global Culinary Artist · F&B Consultant",
  hero_tagline: "Celebrating 3,500 years of Indian cuisine — one plate at a time.",
  intro:
    "From Delhi's classical kitchens to Michelin-recognized rooms in Spain — and now to Texas, where he leads Sanjh, Nirvana Lounge and The Mango Yard. Twenty years telling India's story through food, and helping restaurants open, grow and turn around.",
  short_intro:
    "20+ years across 8 countries. Michelin opening chef. Pre-opening, SOP & turnaround specialist.",
  location: "Dallas–Fort Worth · Consulting worldwide",
  philosophy:
    "Indian food isn't north and south — it's countless regions, each with its own voice. My job is to let every one speak.",
  quote:
    "The menu is an ode to my home country — a celebration of all Indian cuisines.",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    email: "hello@chefbalpreet.com",
  },
};

export const stats = [
  { value: "20+", label: "Years in the Kitchen" },
  { value: "8", label: "Countries Cooked In" },
  { value: "12+", label: "Restaurants Opened" },
  { value: "1996", label: "A Restaurant Family Since" },
];

export const cuisines = [
  "Indian",
  "Italian",
  "French",
  "Spanish",
  "Pan-Asian",
  "Pakistani",
  "Middle Eastern",
];

export const accolades = [
  "Condé Nast Traveller India · 40 Under 40 · 2023",
  "Best Young Chef · India International Hospitality Expo · 2019",
  "Michelin Guide — Benares, Madrid (opening chef, 2015)",
  "AnnaMaya, Andaz Delhi — #20 Condé Nast Top Restaurants India, 2018",
  "#1 in the Raw & Fine category, Condé Nast India · 2018",
  "Hyatt Culinary Challenge — Hyderabad & Abu Dhabi, 2018",
  "Banquet Chef, ICC Cricket World Cup 2011",
  "Featured — Good Morning Texas · WFAA (ABC)",
  "Featured — Texas Today · NBC 5 DFW",
  "Cooked for Prime Ministers, Presidents & Gulf Royalty",
];

export const guests = [
  "PM Narendra Modi",
  "PM Manmohan Singh",
  "President Pranab Mukherjee",
  "Hillary Clinton",
  "Sheikh Khalifa Bin Zayed Al Nahyan",
  "Sheikh Mohammed Bin Rashid Al Maktoum",
];

export const dishes = [
  {
    id: "fish-roast",
    name: "Coastal Fish Roast",
    origin: "Coastal South · WFAA Dallas",
    tall: true,
    image: "/img/dish-fish-roast.jpg",
    note: "Banana-leaf wrapped. Curry-leaf tempered. Cooked live on air.",
  },
  {
    id: "tandoori-chicken",
    name: "Smoked Tandoori Chicken",
    origin: "Punjab · the pit",
    tall: false,
    image: "/img/dish-tandoori.jpg",
    note: "Yoghurt-marinated, mustard-oil basted, charcoal-blistered.",
  },
  {
    id: "kerala-duck",
    name: "Kerala Spiced Duck",
    origin: "Hyatt Culinary Challenge",
    tall: false,
    image: "/img/dish-kerala-duck.jpg",
    note: "Duck, cèpes, roast kohlrabi, lamb-tongue crisps.",
  },
  {
    id: "lamb-chops",
    name: "Rose-Petal Lamb Chops",
    origin: "Modern Indian · tasting menu",
    tall: true,
    image: "/img/dish-lamb-chops.jpg",
    note: "Clove-smoked rack, rose-petal glaze, roast root pickle.",
  },
  {
    id: "prawn-spaghetti",
    name: "Prawn Aglio Spaghetti",
    origin: "Indo-Italian · global menu",
    tall: false,
    image: "/img/dish-prawn-spaghetti.jpg",
    note: "Wok-kissed tigers, Kashmiri chilli, black raisins, parmesan.",
  },
  {
    id: "scallops",
    name: "Seared Scallops & Burnt Butter",
    origin: "Modern coastal",
    tall: true,
    image: "/img/dish-scallops.jpg",
    note: "Bay scallops, burnt butter, cured yolk, cauliflower cream.",
  },
  {
    id: "octopus",
    name: "Octopus & Horseradish Foam",
    origin: "Mediterranean · tasting",
    tall: false,
    image: "/img/dish-octopus.jpg",
    note: "Charcoal-grilled octopus, horseradish foam, pickled radish.",
  },
  {
    id: "dessert",
    name: "Rose, Berry & Shortbread",
    origin: "Pastry · final course",
    tall: false,
    image: "/img/dish-dessert.jpg",
    note: "Rose-cream, forest berries, cardamom shortbread crumb.",
  },
];

export const gallery = [
  { src: "/img/bts-serving.jpg", caption: "Service — at the guest's table", tilt: -1.2 },
  { src: "/img/award-good-taste-2018.jpg", caption: "The Good Taste Series · 2018", tilt: 1.5 },
  { src: "/img/bts-station.jpg", caption: "Mise en place, pre-service", tilt: -0.8 },
  { src: "/img/bts-chefs-boxes.jpg", caption: "Brigade day one", tilt: 1.1 },
  { src: "/img/bts-collab.jpg", caption: "Writing the menu", tilt: -1.6 },
  { src: "/img/bts-panel.jpg", caption: "Indian Restaurant Congress · 2019", tilt: 0.9 },
  { src: "/img/award-receiving.jpg", caption: "On the podium", tilt: -1.3 },
  { src: "/img/bts-reviewing.jpg", caption: "Trials — iteration eleven", tilt: 1.4 },
  { src: "/img/award-delicious-2018.jpg", caption: "Delicious Food Awards · 2018", tilt: -0.9 },
  { src: "/img/bts-stage.jpg", caption: "Chef's talk, after service", tilt: 1.6 },
  { src: "/img/award-chefs-smiling.jpg", caption: "With the team", tilt: -1.1 },
  { src: "/img/bts-chef-smiling.jpg", caption: "Service done", tilt: 1.0 },
];

export const services = [
  {
    key: "pre-opening",
    title: "Pre-Opening & SOPs",
    body:
      "End-to-end launch — concept, menu, brigade, trials, opening night. Full Standard Operating Procedures across kitchen, service and banqueting.",
  },
  {
    key: "turnaround",
    title: "Turnaround & Revival",
    body:
      "Diagnostic + practical plan for menu, food cost, workflow and team. Hands-on until the numbers move.",
  },
  {
    key: "kitchen-design",
    title: "Kitchen Design & Setup",
    body:
      "Layout, workflow, equipment specs, tandoor & live-fire stations, hygiene and staffing — built for the menu.",
  },
  {
    key: "central-kitchen",
    title: "Central Kitchen & Commissary",
    body:
      "Commissary rollout for multi-outlet and cloud kitchens — production planning, cold-chain, QC and scale.",
  },
  {
    key: "bar-program",
    title: "Bar Program & Beverage",
    body:
      "Bar planning, beverage menu, costing and training — built to match the kitchen's ambition.",
  },
  {
    key: "global-cuisines",
    title: "Global Cuisines, Bakery & Pastry",
    body:
      "Menu creation across Indian, Italian, French, Spanish, pan-Asian, Pakistani & Middle Eastern — plus dedicated pastry programs.",
  },
  {
    key: "catering",
    title: "Catering & Bespoke Events",
    body:
      "Bespoke menus for weddings and marquee events — intimate to large-scale, with celebrity-chef collaborations on request.",
  },
];

export const projects = {
  past: [
    {
      title: "Benares · Madrid",
      role: "Opening Chef",
      city: "Madrid, Spain",
      year: "2015 — 2016",
      blurb:
        "Led the opening — Michelin-recognized within a year. Stages at 2★ Santceloni & Juanito Kojua, San Sebastián.",
    },
    {
      title: "AnnaMaya · Andaz Delhi (Hyatt)",
      role: "Executive Sous Chef",
      city: "New Delhi, India",
      year: "2018 — 2020",
      blurb:
        "#20 on Condé Nast Traveller India's Top Restaurants 2018. #1 in the Raw & Fine category.",
    },
    {
      title: "Beer Garden · The Park Kolkata",
      role: "Executive Chef",
      city: "Kolkata, India",
      year: "2022",
      blurb:
        "Launched the first alfresco concept on Park Street. Featured in The Telegraph t2.",
    },
    {
      title: "De Thali & PepperMill",
      role: "Brand Chef · Tablez",
      city: "United Arab Emirates",
      year: "2013 — 2015",
      blurb:
        "Two pan-Indian brands rolled out across the UAE for Lulu Group International.",
    },
  ],
  current: [
    {
      title: "Sanjh · Elevated Indian",
      role: "Opening Corporate Chef · Tivona Group",
      city: "Las Colinas, Texas",
      year: "2024 — Now",
      blurb:
        "The flagship. Covered by Texas Monthly, D Magazine, CultureMap, Dallas Observer & DFW TV.",
    },
    {
      title: "Nirvana Lounge",
      role: "Culinary Program Lead",
      city: "Toyota Music Factory, Irving TX",
      year: "2025 — Now",
      blurb:
        "An Indo-Chinese lounge menu — Indian street-food vibrancy meets wok-fired depth.",
    },
    {
      title: "The Mango Yard",
      role: "Culinary Director",
      city: "Frisco, Texas",
      year: "2026 — Now",
      blurb:
        "New-age Indian dining and live entertainment — a live case study of the consulting practice.",
    },
    {
      title: "Delhi 6 · Indian Street Food",
      role: "Consultant Chef & Mentor",
      city: "Växjö, Sweden",
      year: "Opened June 2026",
      blurb:
        "Old Delhi's streets in central Växjö. Strong local press on opening.",
    },
  ],
  upcoming: [
    {
      title: "2026 – 27 Consulting Slate",
      role: "Pre-Opening & Turnaround",
      city: "Worldwide",
      year: "Now Booking",
      blurb:
        "Limited engagements each year — India, Middle East, Europe & North America. Enquiries open.",
    },
    {
      title: "Signature Wedding Catering",
      role: "Bespoke Menus",
      city: "USA · India · Global",
      year: "2026 Season",
      blurb:
        "Bespoke tasting menus for weddings & marquee events — celebrity-chef collaborations available.",
    },
    {
      title: "Central Kitchen Rollouts",
      role: "Commissary Design & SOPs",
      city: "US · Middle East · India",
      year: "In Development",
      blurb:
        "In scoping with two multi-brand groups for scaled commissary builds.",
    },
    {
      title: "Family Heritage · Next Chapter",
      role: "Founder's Portfolio",
      city: "India · Since 1996",
      year: "Ongoing",
      blurb:
        "Punjabi Dhaba, Icarus, My Wife's Place, K Resort, Celine's Kitchen — the family portfolio continues.",
    },
  ],
};

export const press = [
  { publication: "Texas Monthly", quote: "Paying homage to 3,500 years of cuisine." },
  { publication: "D Magazine", quote: "Rewards you for splurging on Indian fare." },
  { publication: "Condé Nast Traveller India", quote: "40 Under 40 — India's most exciting young chefs." },
  { publication: "The Week", quote: "AnnaMaya celebrates artisans — Chadha leads that conviction." },
];

export const tvFeatures = [
  {
    show: "Good Morning Texas",
    network: "WFAA · ABC Dallas",
    date: "June 2024",
    note: "Live Fish Roast demonstration and menu conversation.",
    url: "https://www.wfaa.com/video/entertainment/television/programs/good-morning-texas/sanjh-restaurant-introduces-new-menu-items/287-74d4e2bf-c259-49c5-bb64-3ce3dd08",
  },
  {
    show: "Texas Today",
    network: "NBC 5 · Dallas-Fort Worth",
    date: "July 2024",
    note: "Upscale Indian at Sanjh — innovation on tradition.",
    url: "https://www.nbcdfw.com/video/texas-today/enjoy-upscale-indian-eats-from-sanjh/3590246/",
  },
];
