// Centralized Business Data for Happy Homes Interiors
// Source verified from official records & https://happyhomesinteriors.com/

export const company = {
  name: "Happy Homes Interiors",
  legalName: "Happy Homes Interiors",
  tagline: "Bespoke Interior Architecture & Turnkey Fit-Outs",
  shortDesc: "Leading interior design studio in Coimbatore specializing in bespoke modular kitchens, custom wardrobes, living spaces, sacred pooja units, and complete turnkey home interiors.",
  establishedYear: 2014,
  phonePrimary: "+91 999 431 1447",
  phonePrimaryTel: "+919994311447",
  phoneSecondary: "+91 944 399 5447",
  phoneSecondaryTel: "+919443995447",
  emailPrimary: "happyhomesinteriorscbe@gmail.com",
  emailSecondary: "happy2interiors@gmail.com",
  address: {
    line1: "63/53, Maruthakutti Gounder Thottam",
    line2: "6th Street Extension, Kuppakonam Pudur Post",
    city: "Coimbatore",
    state: "Tamil Nadu",
    postalCode: "641038",
    country: "India",
    formatted: "63/53, Maruthakutti Gounder Thottam, 6th Street Extension, Kuppakonam Pudur Post, Coimbatore, Tamil Nadu – 641038"
  },
  hours: "Monday – Saturday: 8:00 AM – 10:00 PM (Sunday: By Appointment)",
  serviceAreas: [
    "RS Puram",
    "Peelamedu",
    "Race Course",
    "Ramanathapuram",
    "Saibaba Colony",
    "Gandhipuram",
    "Ukkadam",
    "Sulur",
    "Saravanampatti",
    "Tirupur",
    "Coimbatore District",
    "Tamil Nadu"
  ],
  whatsappUrl: "https://api.whatsapp.com/send/?phone=919994311447&text=Hello%20Happy%20Homes%20Interiors%2C%20I%20would%20like%20to%20enquire%20about%20interior%20design%20services%20for%20my%20home.",
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250646.96827152415!2d76.82714837490758!3d11.01167749112608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1601365892939!5m2!1sen!2sin",
  socials: {
    facebook: "https://m.facebook.com/happyhomesinteriors",
    instagram: "https://www.instagram.com/happyhomes_interiors/",
    youtube: "https://www.youtube.com/channel/UCzy_N8Nt2d2d9oXkQ1LSg_w",
    twitter: "https://twitter.com/HappyhomesI?s=09"
  },
  stats: [
    { label: "Years of Craftsmanship", value: "10+" },
    { label: "Turnkey Projects Delivered", value: "450+" },
    { label: "Happy Homeowners", value: "600+" },
    { label: "Material Warranty", value: "10 Years" }
  ]
};

export const services = [
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    navTitle: "Modular Kitchens",
    category: "Kitchen & Dining",
    shortDesc: "Ergonomic, modern modular kitchens crafted with German hardware, premium waterproof carcasses, and scratch-resistant acrylic or PU finishes.",
    heroImage: "/images/services_modular.jpg",
    secondaryImage: "/images/amenities_kitchen.jpg",
    overview: "At Happy Homes Interiors, we design modular kitchens that are the harmonious heart of your home. Engineered around the golden work triangle (Sink, Cooktop, and Refrigerator), our modular kitchens blend ergonomic storage efficiency with timeless aesthetic appeal. Every kitchen is factory-crafted with precision-milled joinery to resist moisture, tropical heat, and heavy daily usage.",
    designPossibilities: [
      {
        title: "L-Shaped & U-Shaped Layouts",
        desc: "Maximized corner storage solutions featuring LeMans pullouts, carousel units, and seamless continuous quartz countertops."
      },
      {
        title: "Island & Breakfast Counter Kitchens",
        desc: "Center islands providing food preparation space, integrated sink or induction hob, and casual family dining seating."
      },
      {
        title: "Parallel / Galley Kitchens",
        desc: "Ideal for compact apartments and modern villas, offering parallel work counters with segregated wet and dry zones."
      },
      {
        title: "Tall Pantry Units & Appliance Garages",
        desc: "Floor-to-ceiling pullout pantries, built-in microwave and oven housings, and concealed appliance roller shutters."
      }
    ],
    materialsFinishes: [
      { category: "Carcass Material", details: "BWP 710 Marine Grade Plywood, HDHMR (High Density High Moisture Resistance) with zero edge void." },
      { category: "Shutter Finishes", details: "High-Gloss Acrylic, Anti-Fingerprint Matte PU Lacquer, Synchronized Veneer, Ceramic Porcelain slabs." },
      { category: "Hardware & Fittings", details: "Hafele, Hettich, and Blum soft-close hinges, tandem boxes, and motorized lift-up bi-fold flap systems." },
      { category: "Countertops", details: "Engineered Nano White Quartz, Full-body Vitrified Porcelain, and Polished Italian Granite." }
    ],
    processSteps: [
      { step: "01", title: "Site Measurement & Cooking Habit Consultation", desc: "Detailed millimeter-level laser survey and understanding of your cooking workflow, spice storage, and utility layout." },
      { step: "02", title: "Photorealistic 3D Visuals & Material Curation", desc: "Interactive 3D renders with color selections, lighting accents, and finish samples examined side-by-side." },
      { step: "03", title: "Precision Factory Fabrication", desc: "Computerized edge-banding and machine-drilled hardware mortises ensuring 100% dust-free on-site assembly." },
      { step: "04", title: "Clean Installation & 10-Year Warranty Handover", desc: "Rapid 4-to-6 day installation by master carpenters followed by thorough testing of all drawer mechanisms." }
    ],
    faqs: [
      { q: "What materials do you recommend for Indian cooking styles in Coimbatore?", a: "For Coimbatore's humid climate and traditional Indian cooking, we strongly recommend BWP 710 Marine Plywood or green HDHMR for the carcass, paired with seamless acrylic or PU shutters that resist turmeric stains and oil." },
      { q: "How long does a modular kitchen project take from start to finish?", a: "From design sign-off to completion typically takes 3 to 4 weeks. Factory fabrication takes 15–20 days, while on-site assembly is completed in just 4 to 6 working days." },
      { q: "Do you supply and install built-in appliances (chimney, hob, sink)?", a: "Yes. We coordinate cutouts and ducting for all leading appliance brands including Faber, Elica, Bosch, and Franke." }
    ],
    relatedSlugs: ["kitchen-cabinets", "custom-furniture", "complete-home-interiors"]
  },
  {
    slug: "wardrobes",
    title: "Modular & Walk-In Wardrobes",
    navTitle: "Wardrobes",
    category: "Bedroom Storage",
    shortDesc: "Floor-to-ceiling sliding, hinged, and walk-in wardrobe suites designed with personalized organizers, integrated dressing niches, and internal warm LED lighting.",
    heroImage: "/images/services_wardrobe.jpg",
    secondaryImage: "/images/amenities_wardrobe.jpg",
    overview: "Your wardrobe should be an effortless extension of your daily ritual. Happy Homes Interiors crafts bespoke wardrobe systems tailored to your specific wardrobe volume, clothing types, and accessories. From sleek floor-to-ceiling sliding wardrobes with tinted lacquered glass to walk-in dressing suites with backlit vanity niches, every unit is engineered for smooth daily operation.",
    designPossibilities: [
      {
        title: "Floor-to-Ceiling Sliding Systems",
        desc: "Space-saving sliding doors with soft-closing dampeners, slim aluminium profiles, and tinted bronze mirror panels."
      },
      {
        title: "Classic & Armadio Hinged Wardrobes",
        desc: "Full-height 2.7m doors with 165-degree wide-opening hinges, fluted wooden shutters, and custom brass handles."
      },
      {
        title: "Walk-In Closets & Dressing Rooms",
        desc: "Open-concept luxury boutiques featuring dedicated bag shelves, pull-out trouser racks, and jewelry drawer inserts."
      },
      {
        title: "Integrated Vanity & Dressing Niches",
        desc: "Built-in dressing mirrors, touch sensor backlights, concealed drawers for cosmetics, and plush cushioned seating."
      }
    ],
    materialsFinishes: [
      { category: "Structure", details: "Termite-treated BWP Plywood and Calibrated HDHMR with moisture-barrier liners." },
      { category: "Exterior Shutter Options", details: "Frosted Fluted Glass, Tinted Mirror, Matte PU Paint, High-Gloss Acrylic, Natural Teak Veneer." },
      { category: "Internal Organizers", details: "Velvet jewelry trays, hydraulic pull-down wardrobe lifts, tie & belt racks, integrated sensor LED strips." },
      { category: "Hardware", details: "Hettich TopLine sliding systems, Hafele concealed soft-close hinges, aluminium profile edge handles." }
    ],
    processSteps: [
      { step: "01", title: "Wardrobe Audit & Space Assessment", desc: "Cataloging your hanging, folded, and accessory storage needs to tailor compartment dimensions." },
      { step: "02", title: "Ergonomic Layout & Internal Compartment Planning", desc: "Configuring long hanging rods, drawer banks, and overhead seasonal luggage lofts." },
      { step: "03", title: "Factory Production & Edge Seal", desc: "High-precision PUR edge-banding for waterproof longevity and silent sliding rail alignment." },
      { step: "04", title: "On-Site Fitting & Illumination Testing", desc: "Rigorous alignment of shutter lines, silent glide calibration, and sensor lighting check." }
    ],
    faqs: [
      { q: "What is better for Coimbatore bedrooms: Sliding or Hinged wardrobes?", a: "For bedrooms where floor clearance between the bed and wardrobe is less than 3 feet, sliding wardrobes save valuable walkway space. For larger master bedrooms, hinged wardrobes allow you to open all shutters simultaneously." },
      { q: "Can lofts be integrated seamlessly up to the ceiling?", a: "Yes, we construct full-height wardrobes with integrated flush lofts that eliminate dust traps on top and maximize vertical storage for suitcases and blankets." },
      { q: "Are the wardrobe interiors termite and moisture proof?", a: "All carcass boards are anti-termite treated with 100% boiling waterproof adhesives, formulated specifically for long-term Indian conditions." }
    ],
    relatedSlugs: ["bedroom-interiors", "kids-room-interiors", "custom-furniture"]
  },
  {
    slug: "living-room-interiors",
    title: "Living Room Interiors",
    navTitle: "Living Room",
    category: "Living Spaces",
    shortDesc: "Sophisticated living rooms featuring fluted wall accents, curated ambient lighting, partition panel dividers, and bespoke entertainment centers.",
    heroImage: "/images/services_living.jpg",
    secondaryImage: "/images/amenities_interior.jpg",
    overview: "The living room sets the tone for your entire home. It is where you welcome guests and unwind with family. Happy Homes Interiors creates living room spaces that balance architectural poise with warm hospitality. We curate layered lighting, feature accent walls, designer partition panels, and tailored furnishings that create an inviting sense of grandeur.",
    designPossibilities: [
      {
        title: "Accent Feature Walls",
        desc: "Italian marble slabs, fluted charcoal louvers, acoustic wooden slats, and integrated profile lighting."
      },
      {
        title: "Architectural Room Dividers",
        desc: "CNC carved brass-inlay partition screens, metal frame fluted glass dividers, and open display bookshelves separating foyer from living."
      },
      {
        title: "Layered Lighting Schemes",
        desc: "Cove ambient lighting, magnetic track spot lights, brass pendant chandeliers, and dimmable accent downlights."
      },
      {
        title: "Bespoke Foyer & Shoe Consoles",
        desc: "Welcoming entryway consoles with floating storage, seating benches, and decorative mirror backdrops."
      }
    ],
    materialsFinishes: [
      { category: "Wall Treatments", details: "Charcoal Louver Panels, Italian Travertine veneers, PU-painted MDF battens, Asian Paints Royale textures." },
      { category: "Partitions", details: "PVD-coated Stainless Steel frames, fluted toughened glass, CNC jaali wood screens." },
      { category: "Lighting Elements", details: "Warm white (3000K) concealed LED strips, Philips magnetic tracks, brass accent fixtures." }
    ],
    processSteps: [
      { step: "01", title: "Space Flow & Sightline Planning", desc: "Optimizing seating orientation, entryway visual axes, and natural sunlight ventilation." },
      { step: "02", title: "Material Palette & Moodboard Creation", desc: "Pairing warm ivory, rich walnut, and muted brass tones with tactile fabric selections." },
      { step: "03", title: "Electrical & Ceiling Framing", desc: "Pre-wiring conduits for concealed audio cables, ambient coving, and automated lighting." },
      { step: "04", title: "Finishing & Styling", desc: "Wall cladding installation, joinery fitting, and curated placement of artwork and furnishings." }
    ],
    faqs: [
      { q: "How do you make an open-plan apartment living room feel intimate?", a: "We employ architectural partition panels, strategic false ceiling drops with warm coves, and acoustic wall paneling that delineate zones without building bulky walls." },
      { q: "Can you conceal TV and audio wiring completely?", a: "Yes, every living room design includes internal conduit chases behind the TV panel so no unsightly power or HDMI cables are visible." }
    ],
    relatedSlugs: ["tv-units", "false-ceilings", "complete-home-interiors"]
  },
  {
    slug: "bedroom-interiors",
    title: "Master & Guest Bedroom Interiors",
    navTitle: "Bedroom",
    category: "Private Suites",
    shortDesc: "Serene bedroom sanctuaries crafted with acoustic headboard paneling, tailored bedside storage, warm coves, and plush textures.",
    heroImage: "/images/amenities_bedroom.png",
    secondaryImage: "/images/portfolio_portfolio-box_cot.jpg",
    overview: "Your bedroom is a personal sanctuary dedicated to rest, quiet reflection, and rejuvenation. Happy Homes Interiors designs bedrooms that evoke luxury hotel suites while offering the comfort of home. Through tactile upholstered headboards, concealed wardrobe fronts, and gentle indirect lighting, we create tranquil master and guest bedrooms.",
    designPossibilities: [
      {
        title: "Extended Upholstered Headboards",
        desc: "Wall-to-wall padded headboards with acoustic velvet, linen upholstery, brass metal inlays, and integrated bedside reading lamps."
      },
      {
        title: "Floating Bed Frames with Storage",
        desc: "Hydraulic lift-up storage beds engineered with rounded corners and warm under-bed floating LED illumination."
      },
      {
        title: "Integrated Work & Dressing Corners",
        desc: "Compact ergonomic laptop desks and backlit vanity mirrors styled seamlessly within the master suite."
      },
      {
        title: "Bedside Floating Nightstands",
        desc: "Cantilevered nightstands with concealed wireless charging surfaces and silent soft-close drawer runners."
      }
    ],
    materialsFinishes: [
      { category: "Headboard & Walls", details: "Acoustic foam backing, anti-stain velvet/linen fabrics, fluted veneer accents, warm ivory paint." },
      { category: "Bed Structure", details: "Heavy-duty commercial plywood core, solid hardwood support frames, hydraulic lift pistons." },
      { category: "Lighting", details: "Dimmable gooseneck reading spotlights, warm cove ceiling channels, motion-sensor night lights." }
    ],
    processSteps: [
      { step: "01", title: "Ergonomic Layout & Bed Orientation", desc: "Orienting the bed according to comfort, natural ventilation, and vastu guidelines if preferred." },
      { step: "02", title: "Fabric & Acoustic Material Selection", desc: "Choosing soothing color schemes, hypoallergenic textiles, and sound-absorbing textures." },
      { step: "03", title: "Joinery & Headboard Fabrication", desc: "Precision stitching of padded wall panels and custom bed fabrication." },
      { step: "04", title: "Final Dressing & Illumination Setup", desc: "Installing bedside lighting controls and seamless wardrobe integration." }
    ],
    faqs: [
      { q: "Can you incorporate Vastu Shastra principles into bedroom design?", a: "Yes, our designers in Coimbatore are well-versed in traditional Vastu orientations for bed placement (South/West), headboard directions, and mirror positioning." },
      { q: "How do you soundproof a bedroom located near a busy road?", a: "We integrate high-density acoustic paneling behind headboards, double-glazed window treatments, and soft fabric claddings that absorb street reverberation." }
    ],
    relatedSlugs: ["wardrobes", "false-ceilings", "kids-room-interiors"]
  },
  {
    slug: "pooja-units",
    title: "Pooja Units & Mandir Designs",
    navTitle: "Pooja Unit",
    category: "Sacred Spaces",
    shortDesc: "Custom-crafted prayer shrines and pooja rooms featuring traditional teak wood carvings, backlit CNC jaali panels, and brass bell details.",
    heroImage: "/images/services_pooja.jpg",
    secondaryImage: "/images/amenities_interior.jpg",
    overview: "The Pooja room is the spiritual cornerstone of a home in Tamil Nadu. Happy Homes Interiors approaches every pooja unit with deep reverence and artistic precision. Whether designing a dedicated sanctum or a compact apartment prayer alcove, we combine solid teak wood craftsmanship, intricate CNC jaali motifs, soft warm backlighting, and brass bells to create a peaceful divine sanctuary.",
    designPossibilities: [
      {
        title: "Solid Teak & Veneer Sanctums",
        desc: "Traditional wooden mandirs with carved gopuram pillars, floral brass hardware, and sacred proportions."
      },
      {
        title: "Backlit CNC Jaali & Onyx Accents",
        desc: "Laser-cut Om, Gayatri Mantra, and lotus pattern jaali screens glowing with warm rear illumination."
      },
      {
        title: "Apartment Wall-Mounted Shrines",
        desc: "Compact, space-saving prayer units with pull-out brass diya trays, storage drawers for puja essentials, and bell partitions."
      },
      {
        title: "Custom Brass & Marble Inlays",
        desc: "White Makrana marble or nano-white platforms inset with pure brass floral patterns and anti-smoke ceiling vents."
      }
    ],
    materialsFinishes: [
      { category: "Primary Timber", details: "Seasoned Burma & CP Teak Wood, Teak Veneer, moisture-resistant marine ply cores." },
      { category: "Backlit Panels", details: "Translucent Corian Solid Surface, Acrylic CNC cut sheets, backlit yellow Onyx slabs." },
      { category: "Metal Accents", details: "Solid brass hanging bells, brass drawer knobs, brass deity pedestals." }
    ],
    processSteps: [
      { step: "01", title: "Spiritual Consultation & Vastu Direction", desc: "Identifying the optimal North-East (Ishanya) corner and aligning idol orientations." },
      { step: "02", title: "Custom Motif & Pattern Crafting", desc: "Collaborating on bespoke sacred motifs, mantra scripts, and bell layouts." },
      { step: "03", title: "Hand-Carved & Laser Joinery", desc: "Artisanal hand-finishing of teak members combined with precision laser jaali cuts." },
      { step: "04", title: "Ventilation & Sacred Lighting Setup", desc: "Installing discrete smoke-escape exhaust vents and soft indirect LED lamps." }
    ],
    faqs: [
      { q: "How do you protect wooden pooja units from smoke and diya heat?", a: "We fit heat-resistant brass or quartz protector plates on the diya drawer platform, fire-safe wire conduit channels, and top ventilation louvers." },
      { q: "Can you create a pooja unit for compact 2BHK or 3BHK flats?", a: "Absolutely. We specialize in wall-hung compact mandirs with fold-out prayer trays and translucent jaali doors that occupy minimal square footage." }
    ],
    relatedSlugs: ["custom-furniture", "living-room-interiors", "complete-home-interiors"]
  },
  {
    slug: "false-ceilings",
    title: "Designer False Ceilings",
    navTitle: "False Ceilings",
    category: "Architectural Ceiling",
    shortDesc: "Architectural false ceiling concepts featuring gypsum coves, wooden rafters, magnetic track lighting, and acoustic enhancements.",
    heroImage: "/images/services_ceiling.jpg",
    secondaryImage: "/images/services_living.jpg",
    overview: "A well-designed ceiling transforms the spatial proportion of any room. Happy Homes Interiors designs false ceilings that frame your lighting, conceal air-conditioning ducts and wiring, and bring architectural drama to your ceilings. From minimalist perimeter coves that create a floating effect to rich wooden rafter grids, our ceilings are built with premium moisture-resistant gypsum boards.",
    designPossibilities: [
      {
        title: "Indirect Perimeter Cove Ceilings",
        desc: "Recessed light coves creating a soft, glare-free wash of warm ambient light across the ceiling plane."
      },
      {
        title: "Wooden Rafter & Fluted Accents",
        desc: "Teak-finish rafters and veneer panel drops defining dining areas, foyers, and master suites."
      },
      {
        title: "Magnetic Track & Architectural Downlighting",
        desc: "Flush-mounted magnetic track systems that allow flexible spotlight and linear diffuser adjustments."
      },
      {
        title: "Geometric Multi-Tier Layouts",
        desc: "Layered stepped drops designed for high-ceiling living spaces and home theater acoustics."
      }
    ],
    materialsFinishes: [
      { category: "Board Systems", details: "Saint-Gobain Gyproc / USG Boral moisture-resistant plasterboards, galvanized GI channel framing." },
      { category: "Decorative Inlays", details: "Natural wood veneer battens, CNC jaali borders, metallic brass trim profiles." },
      { category: "Coating", details: "Anti-crack jointing compound, fiberglass mesh tapes, and premium matte ceiling coatings." }
    ],
    processSteps: [
      { step: "01", title: "Laser Leveling & Height Optimization", desc: "Conducting 360-degree laser level mapping to preserve ceiling height and plan ducting." },
      { step: "02", title: "Heavy-Duty GI Grid Framework", desc: "Anchoring rust-proof galvanized steel sections with vibration dampeners." },
      { step: "03", title: "Board Fixing & Seamless Joint Taping", desc: "Attaching Gyproc boards and applying multi-coat crack-resistant joint compounds." },
      { step: "04", title: "Surface Sanding & Light Fixture Fitting", desc: "Machine sanding for an ultra-flat finish followed by installation of driver-grade LED strips." }
    ],
    faqs: [
      { q: "How much ceiling height will be lost with a false ceiling?", a: "A standard perimeter cove requires only 4 to 5 inches of drop. We optimize designs to retain maximum room height while hiding all cables and fittings." },
      { q: "Do false ceilings help keep the room cooler in Coimbatore's summer?", a: "Yes, the air gap between the concrete roof slab and the gypsum board acts as an effective thermal insulator, noticeably lowering room temperature." }
    ],
    relatedSlugs: ["living-room-interiors", "bedroom-interiors", "complete-home-interiors"]
  },
  {
    slug: "tv-units",
    title: "TV Units & Entertainment Centers",
    navTitle: "TV Units",
    category: "Media Living",
    shortDesc: "Contemporary media walls with fluted charcoal panels, Italian stone slabs, floating console drawers, and concealed wiring paths.",
    heroImage: "/images/services_tv.jpg",
    secondaryImage: "/images/portfolio_portfolio-box_tv.jpg",
    overview: "Modern living spaces revolve around the entertainment hub. Happy Homes Interiors designs bespoke TV media units that conceal cluttered cords, integrate gaming consoles and soundbars, and create a focal point in your room. We combine stone-textured claddings, fluted timber panels, bronze glass display cabinets, and ambient backlighting.",
    designPossibilities: [
      {
        title: "Floating Wall-Mounted Consoles",
        desc: "Cantilevered media cabinets with push-to-open fluted drawers, integrated power strips, and acoustic speaker fabric."
      },
      {
        title: "Marble Slab & Fluted Louver Backdrops",
        desc: "Full-height vertical fluted panels paired with large-format vitrified marble tiles and edge-lit LED glow."
      },
      {
        title: "Curated Curio & Bar Display Units",
        desc: "Integrated glass-door display towers with bronze tinted glass, warm shelf illumination, and brass hardware."
      },
      {
        title: "Swivel & 360-Degree Partition TV Mounts",
        desc: "Dual-facing TV partition units that serve both the formal living room and the dining lounge."
      }
    ],
    materialsFinishes: [
      { category: "Backing Cladding", details: "Large porcelain slabs, fluted WPC/charcoal louvers, natural teak wood veneer, matte PU paint." },
      { category: "Cabinetry", details: "HDHMR core, scratch-resistant acrylic shutters, push-to-open soft-close drawer slides." },
      { category: "Cable Management", details: "Concealed PVC wire conduit chutes with brush-grommet access panels." }
    ],
    processSteps: [
      { step: "01", title: "Screen Size & Viewing Distance Audit", desc: "Mapping TV size (55” to 85”), soundbar dimensions, and ideal eye-level viewing angles." },
      { step: "02", title: "Wall Structure & Weight Reinforcement", desc: "Installing heavy-duty wall anchors and solid plywood backer plates." },
      { step: "03", title: "Joinery Fabrication & Conduit Routing", desc: "Constructing floating console boxes and pre-installing HDMI / optical audio lines." },
      { step: "04", title: "Cladding & Peripheral Lighting Setup", desc: "Fixing decorative wall claddings and wiring dimmable rear ambient lighting." }
    ],
    faqs: [
      { q: "Can the TV console accommodate a home theater soundbar and subwoofer?", a: "Yes, we customize shelf cutouts with acoustic grill fabric to house soundbars, subwoofers, and set-top boxes without hindering remote signals." },
      { q: "What is the maximum TV size your consoles support?", a: "Our wall reinforcements and cantilevered designs support displays up to 85 inches and over 45 kilograms securely." }
    ],
    relatedSlugs: ["living-room-interiors", "custom-furniture", "false-ceilings"]
  },
  {
    slug: "custom-furniture",
    title: "Bespoke Custom Furniture",
    navTitle: "Custom Furniture",
    category: "Artisanal Craft",
    shortDesc: "Handcrafted dining suites, bespoke accent credenzas, luxury study desks, and tailored upholstery made to exact room proportions.",
    heroImage: "/images/services_furniture.jpg",
    secondaryImage: "/images/about_pic34.jpg",
    overview: "Off-the-shelf mass-produced furniture rarely matches the exact spatial dimensions or character of your residence. Happy Homes Interiors operates dedicated woodworking and finishing facilities where skilled artisans handcraft furniture pieces that fit your rooms to the exact centimeter. From 8-seater solid wood dining tables with marble tops to tailored accent armchairs, our furniture is built to last generations.",
    designPossibilities: [
      {
        title: "Bespoke Dining Tables & Chairs",
        desc: "Solid wood bases paired with Brazilian marble or quartz tops, accompanied by ergonomically curved upholstered chairs."
      },
      {
        title: "Entrance Credenzas & Foyer Consoles",
        desc: "Geometric fluted fronts, curved corner profiles, and brushed brass hairpin legs."
      },
      {
        title: "Executive Work-from-Home Desks",
        desc: "Ergonomic study desks with integrated wire drops, stationery drawers, and acoustic felt pinboard walls."
      },
      {
        title: "Accent Armchairs & Sectional Sofas",
        desc: "Custom-scaled high-resilience foam sofas upholstered in stain-resistant performance bouclé or top-grain leatherette."
      }
    ],
    materialsFinishes: [
      { category: "Solid Timbers", details: "Seasoned Indian Teak, Ash Wood, Steam Beech, and American Walnut." },
      { category: "Sheet Goods", details: "BWP Marine Ply, Zero-Emission Calibrated MDF with natural veneer pressing." },
      { category: "Finishes", details: "Italian ICA PU Clear Matte, Melamine hand-rubbed polish, PVD Titanium brass coatings." }
    ],
    processSteps: [
      { step: "01", title: "Ergonomic Sketching & Room Proportioning", desc: "Creating tailored CAD dimensional drawings for each furniture piece." },
      { step: "02", title: "Wood & Fabric Sample Approvals", desc: "Reviewing timber grain patterns, stain shades, and fabric touch-swatches." },
      { step: "03", title: "Artisanal Joinery & Hand Crafting", desc: "Traditional mortise and tenon joinery reinforced with modern CNC accuracy." },
      { step: "04", title: "Multi-Coat Italian Finishing & Delivery", desc: "Automated spray booth polyurethane lacquering for a mirror-smooth or soft matte feel." }
    ],
    faqs: [
      { q: "Can I request furniture to match specific existing heirlooms?", a: "Yes, our master polishers can custom-mix wood stains to match the tone, grain, and patina of your existing furniture." },
      { q: "What kind of foam and fabrics do you use for upholstered seating?", a: "We utilize Sleepwell 40-density high-resilience (HR) foam with bonded memory foam toppers and Scotchgard stain-protected upholstery fabrics." }
    ],
    relatedSlugs: ["modular-kitchens", "bedroom-interiors", "living-room-interiors"]
  },
  {
    slug: "complete-home-interiors",
    title: "Complete Home Interiors (Turnkey)",
    navTitle: "Complete Home Interiors",
    category: "Turnkey Architecture",
    shortDesc: "End-to-end turnkey interior design and execution for apartments, independent villas, and duplex residences across Coimbatore & Tamil Nadu.",
    heroImage: "/images/services_home.jpg",
    secondaryImage: "/images/amenities_interior.jpg",
    overview: "Embarking on a complete home interior project can be overwhelming when managing multiple separate contractors. Happy Homes Interiors offers a unified turnkey fit-out solution. From 3D space planning, civil alterations, electrical rewiring, and false ceilings to bespoke modular kitchens, custom wardrobes, and styling, our dedicated project managers oversee every milestone from concept to final key handover.",
    designPossibilities: [
      {
        title: "Luxury 3BHK & 4BHK Apartments",
        desc: "Complete interior transformations tailored to leading Coimbatore apartment communities."
      },
      {
        title: "Independent Luxury Villas & Duplexes",
        desc: "Full architectural interiors with double-height living spaces, grand staircases, and private terrace bars."
      },
      {
        title: "Heritage & Contemporary Fusion Homes",
        desc: "Blending Chettinad architectural elements with sleek modern European minimalism."
      },
      {
        title: "Smart Home Automation Integration",
        desc: "Concealed wiring for smart lighting scenes, motorized curtains, and digital locks."
      }
    ],
    materialsFinishes: [
      { category: "Comprehensive Scope", details: "Civil modifications, electrical & plumbing, false ceilings, modular joinery, furniture, lighting, and painting." },
      { category: "Quality Standard", details: "IS 710 Marine Grade Plywood, Greenply/Century club ply, Saint-Gobain glass, Asian Paints Royale Aspira." },
      { category: "Project Governance", details: "Dedicated Project Manager, weekly photo updates, milestone quality checklists." }
    ],
    processSteps: [
      { step: "01", title: "Comprehensive Lifestyle Briefing & Site Survey", desc: "Detailed 2D layout planning optimizing circulation, storage, and natural light." },
      { step: "02", title: "Complete 3D Walkthroughs & Material Locking", desc: "High-resolution 3D renders for every room with comprehensive BOQ and budget locking." },
      { step: "03", title: "Civil, Electrical & Factory Production Phase", desc: "Simultaneous on-site MEP works and precision factory manufacturing of all modular joinery." },
      { step: "04", title: "Deep Cleaning & Grand Key Handover", desc: "Professional dust-extraction cleaning, 100-point inspection, and warranty documentation handover." }
    ],
    faqs: [
      { q: "What does 'Turnkey' mean at Happy Homes Interiors?", a: "Turnkey means we handle everything: designs, material sourcing, civil works, electrical, modular cabinetry, painting, and deep cleaning. You receive the keys to a completely finished home ready to move into." },
      { q: "Do you have experience with villas on Avinashi Road and Race Course?", a: "Yes, we have delivered extensive duplex and villa projects across Coimbatore's premier neighborhoods including Race Course, Avinashi Road, and Peelamedu." },
      { q: "What is your project warranty policy?", a: "We provide an ironclad 10-year warranty on all modular cabinetry and woodwork, along with 1-year complimentary service support." }
    ],
    relatedSlugs: ["modular-kitchens", "wardrobes", "living-room-interiors", "pooja-units"]
  },
  {
    slug: "kitchen-cabinets",
    title: "Premium Kitchen Cabinets & Storage",
    navTitle: "Kitchen Cabinets",
    category: "Cabinetry Systems",
    shortDesc: "Heavy-duty waterproof kitchen cabinetry, pantry pull-outs, corner organizers, and durable overhead lift-up cabinets.",
    heroImage: "/images/services_kitchen.jpg",
    secondaryImage: "/images/portfolio_portfolio-box_kitchen.jpg",
    overview: "Kitchen cabinets must withstand moisture, daily thermal shifts, and heavy cooking utensils. Happy Homes Interiors manufactures high-performance kitchen cabinets using boiling-water-proof (BWP) plywood and anti-corrosive hardware. From heavy-duty pot drawers rated for 60kg to hydraulic overhead flaps that open with a gentle touch, our cabinets are built for durability.",
    designPossibilities: [
      {
        title: "Deep Pot & Thali Drawers",
        desc: "Heavy-duty stainless steel and glass-sided tandem boxes with adjustable pegboard dividers."
      },
      {
        title: "Blind Corner LeMans & Magic Corners",
        desc: "Smoothly swinging tray systems bringing every hidden corner pot effortlessly into reach."
      },
      {
        title: "Overhead Bi-Fold Lift-Up Systems",
        desc: "Blum Aventos lift-ups allowing unhindered movement without head bumping against open shutters."
      },
      {
        title: "Integrated Under-Sink Waste Organizers",
        desc: "Stainless steel drip trays, pull-out detergent caddies, and dual-bin waste sorting compartments."
      }
    ],
    materialsFinishes: [
      { category: "Carcass Core", details: "BWP 710 Grade Plywood with phenolic resins and anti-termite treatment." },
      { category: "Cabinet Liners", details: "0.8mm silver grey or off-white antibacterial laminates." },
      { category: "Runners & Slides", details: "Blum Antaro / Hettich InnoTech with 100,000 cycle test certification." }
    ],
    processSteps: [
      { step: "01", title: "Utensil & Storage Capacity Audit", desc: "Cataloging your vessels, pressure cookers, and daily grocery bulk storage." },
      { step: "02", title: "Custom Module Configuration", desc: "Engineering cabinet widths (300mm to 900mm) to match your workflow." },
      { step: "03", title: "Computerized Edge Banding", desc: "Hermetically sealed 2mm PVC edges to prevent water entry." },
      { step: "04", title: "Heavy Weight Load Testing", desc: "Calibrating drawer sliders under full capacity weight before handover." }
    ],
    faqs: [
      { q: "Will the cabinets swell or peel near the kitchen sink area?", a: "No. For sink and water-line modules, we use marine grade BWP plywood lined with waterproof aluminium foil drip trays to prevent water damage." },
      { q: "Can old kitchen cabinets be renovated without breaking countertops?", a: "In many cases, if your granite top is sound, we can replace outdated wooden under-counter boxes and shutters with new modular cabinetry." }
    ],
    relatedSlugs: ["modular-kitchens", "custom-furniture", "complete-home-interiors"]
  },
  {
    slug: "kids-room-interiors",
    title: "Kids Room Interiors",
    navTitle: "Kids Room",
    category: "Youth Spaces",
    shortDesc: "Inspiring children's bedrooms with study workstations, modular bunk beds, rounded child-safe edges, and vibrant storage systems.",
    heroImage: "/images/services_kids.jpg",
    secondaryImage: "/images/amenities_bedroom.png",
    overview: "Children require bedrooms that adapt as they learn, play, and grow. Happy Homes Interiors designs kids' rooms that spark imagination while prioritizing safety, ergonomics, and practical storage. Featuring rounded joinery corners, non-toxic eco paints, multi-functional study desks, and clever toy storage benches, our kids' rooms are made for joyful childhoods.",
    designPossibilities: [
      {
        title: "Modular Study & Library Workstations",
        desc: "Ergonomic study desks with adjustable shelving, pin boards, and book displays that nurture good study habits."
      },
      {
        title: "Bunk Beds with Integrated Stair Storage",
        desc: "Sturdy twin bunk beds where each step doubles as a soft-closing toy and linen drawer."
      },
      {
        title: "Creative Chalkboard & Magnetic Panels",
        desc: "Feature interactive walls where children can sketch and display artwork without damaging painted walls."
      },
      {
        title: "Wardrobes with Low Accessible Drawers",
        desc: "Self-reliant wardrobe heights that encourage children to organize their own clothes and school bags."
      }
    ],
    materialsFinishes: [
      { category: "Safety Standard", details: "Zero-VOC paints, rounded 3mm edge bands, finger-guard drawer dampeners." },
      { category: "Durability", details: "Scratch-resistant laminate surfaces that clean easily with a damp cloth." },
      { category: "Structural Strength", details: "Heavy commercial hardwood bed frames certified for active kids." }
    ],
    processSteps: [
      { step: "01", title: "Age & Growth Projection Consultation", desc: "Designing flexible furniture that transitions comfortably from childhood to teenage years." },
      { step: "02", title: "Theme & Color Palette Curation", desc: "Balancing playful colors with sophisticated neutral bases for long-term appeal." },
      { step: "03", title: "Child-Safe Manufacturing", desc: "Buffing all edges, countersinking screws, and testing safety catches." },
      { step: "04", title: "Installation & Secure Wall Anchoring", desc: "Anchoring all tall bookshelves and wardrobes securely to structural masonry." }
    ],
    faqs: [
      { q: "Are your paints and finishes safe for children with allergies?", a: "Yes, we exclusively apply zero-VOC water-based paints and lead-free finishes that release zero harmful chemical odors." },
      { q: "How do you ensure bunk beds are completely secure?", a: "Our custom bunk beds feature reinforced interlocking steel brackets, 18-inch safety guardrails, and broad staircases instead of slippery vertical ladders." }
    ],
    relatedSlugs: ["bedroom-interiors", "wardrobes", "custom-furniture"]
  },
  {
    slug: "bathroom-interiors",
    title: "Bathroom Vanity & Interiors",
    navTitle: "Bathroom",
    category: "Bath Suites",
    shortDesc: "Spa-inspired bathroom interiors featuring waterproof floating vanities, backlit LED mirrors, quartz counters, and smart niche storage.",
    heroImage: "/images/amenities_interior.jpg",
    secondaryImage: "/images/services_home.jpg",
    overview: "Bathrooms are no longer just utilitarian; they are private wellness sanctuaries. Happy Homes Interiors transforms master and guest bathrooms with custom floating vanities, sleek backlit mirrors, quartz undermount tops, and moisture-sealed cabinetry. By combining smart concealed storage for toiletries with warm indirect lighting, we create tranquil spa-like environments.",
    designPossibilities: [
      {
        title: "Floating Moisture-Sealed Vanities",
        desc: "Wall-hung vanity cabinets with push-open drawers, waterproof carcasses, and floor clearance for easy cleaning."
      },
      {
        title: "Backlit Anti-Fog Smart Mirrors",
        desc: "Touch-activated perimeter LED mirrors with built-in defogging heating pads and warm white color adjustments."
      },
      {
        title: "Recessed Shower Niches with Profile Light",
        desc: "Seamless waterproof shower wall niches for shampoos and soaps illuminated with IP67 rated LED channels."
      },
      {
        title: "Concealed Laundry & Linen Closets",
        desc: "Custom louvered cabinets that neatly hide laundry baskets and spare towels from view."
      }
    ],
    materialsFinishes: [
      { category: "Carcass Core", details: "High-density WPC (Wood Plastic Composite) and BWP Marine Ply with zero water absorption." },
      { category: "Vanity Tops", details: "Polished Quartz, Nano Crystallized Glass, and Solid Surface sinks." },
      { category: "Fittings", details: "SS 304 Grade rustproof hinges and moisture-sealed soft-close drawer slides." }
    ],
    processSteps: [
      { step: "01", title: "Plumbing Line & Moisture Mapping", desc: "Assessing water supply, drain lines, and ventilation exhaust pathways." },
      { step: "02", title: "Stone & Basin Counter Integration", desc: "Precision cutting for undermount or vessel washbasins and premium mixer taps." },
      { step: "03", title: "100% Waterproof Fabrication", desc: "Utilizing solid polymer WPC boards that never rot or harbor mold." },
      { step: "04", title: "Silicone Sealing & Fixture Fitting", desc: "Applying antifungal sanitary silicone seals around all edges and plumbing joints." }
    ],
    faqs: [
      { q: "Can wooden vanities survive daily bathroom water splashes in Coimbatore?", a: "Yes, because we fabricate vanity boxes using WPC (Wood Plastic Composite) or Marine Plywood coated with polyurethane sealant. They are completely impervious to water." },
      { q: "Do you also assist with shower partition glass and mirrors?", a: "Yes, we install 10mm toughened glass shower enclosures with matte black or brushed brass hardware, alongside custom backlit mirrors." }
    ],
    relatedSlugs: ["complete-home-interiors", "bedroom-interiors", "custom-furniture"]
  }
];

export const projects = [
  {
    slug: "luxury-modular-kitchen-rs-puram",
    title: "Acrylic & Quartz Modular Kitchen",
    subtitle: "Turnkey Kitchen Fit-Out",
    category: "Modular Kitchen",
    categoryKey: "kitchen",
    location: "RS Puram, Coimbatore",
    year: "2024",
    area: "240 sq.ft",
    duration: "4 Weeks",
    heroImage: "/images/portfolio_portfolio-box_kitchen.jpg",
    gallery: [
      "/images/portfolio_portfolio-box_kitchen.jpg",
      "/images/services_kitchen.jpg",
      "/images/services_modular.jpg"
    ],
    shortDesc: "An expansive U-shaped modular kitchen in RS Puram featuring high-gloss champagne acrylic shutters, Calacatta quartz countertops, and Blum motorized lift-up cabinets.",
    clientFeedback: "Happy Homes Interiors completely transformed our dated kitchen into an absolute dream. The workflow triangle is flawless, and the soft-close drawers glide effortlessly. Their attention to detail was exceptional.",
    clientName: "Priya & Rajesh Narayanan",
    scope: [
      "Complete demolition of old masonry and civil replanning",
      "BWP 710 Marine Grade carcass fabrication with zero-void edge seals",
      "High-gloss champagne acrylic shutters with integrated J-pull handles",
      "Blum Aventos HK-S motorized lift-up overhead compartments",
      "Nano-sealed Calacatta gold engineered quartz countertop and splashback",
      "Concealed Hafele chimney ducting and Faber 4-burner brass hob integration"
    ],
    specs: [
      { label: "Layout", value: "U-Shaped with Peninsula Counter" },
      { label: "Core Board", value: "IS 710 Boiling Waterproof Plywood" },
      { label: "Finish", value: "German Acrylic & Matte Charcoal PU" },
      { label: "Hardware", value: "Blum Motion & Hafele Magic Corners" }
    ]
  },
  {
    slug: "contemporary-bedroom-wardrobes-peelamedu",
    title: "Floor-to-Ceiling Wardrobe Suite",
    subtitle: "Master Bedroom Storage",
    category: "Wardrobes",
    categoryKey: "wardrobe",
    location: "Peelamedu, Coimbatore",
    year: "2024",
    area: "380 sq.ft",
    duration: "3 Weeks",
    heroImage: "/images/portfolio_portfolio-box_wardrob.jpg",
    gallery: [
      "/images/portfolio_portfolio-box_wardrob.jpg",
      "/images/amenities_wardrobe.jpg",
      "/images/services_wardrobe.jpg"
    ],
    shortDesc: "A 10-foot floor-to-ceiling sliding wardrobe system in Peelamedu, crafted with fluted tinted glass, warm walnut veneer, and internal sensor-activated velvet organizers.",
    clientFeedback: "The sliding doors are so smooth you barely hear them move. The velvet jewelry tray and sensor lights make dressing in the morning feel like a luxury hotel experience.",
    clientName: "Ramesh Sundaram",
    scope: [
      "Custom floor-to-ceiling sliding wardrobe with Hettich TopLine runners",
      "Tinted bronze fluted glass shutter panels with slim matte-black aluminium frames",
      "Internal custom layout with separate his-and-hers hanging zones and linen lofts",
      "Integrated vanity unit with touch-sensitive dimmable LED mirror",
      "Velvet-lined pullout accessory drawers and hydraulic trouser racks"
    ],
    specs: [
      { label: "System", value: "Top-Hung Sliding 3-Track System" },
      { label: "Height", value: "2.95 Meters (Ceiling Flush)" },
      { label: "Front Finish", value: "Bronze Fluted Glass & Walnut Veneer" },
      { label: "Interior", value: "Antibacterial Fabric-Grain Laminate" }
    ]
  },
  {
    slug: "minimalist-living-tv-unit-race-course",
    title: "Fluted Media Wall & Living Lounge",
    subtitle: "Luxury Living Suite",
    category: "Living & TV Units",
    categoryKey: "living",
    location: "Race Course, Coimbatore",
    year: "2023",
    area: "460 sq.ft",
    duration: "5 Weeks",
    heroImage: "/images/portfolio_portfolio-box_tv.jpg",
    gallery: [
      "/images/portfolio_portfolio-box_tv.jpg",
      "/images/services_tv.jpg",
      "/images/services_living.jpg"
    ],
    shortDesc: "A bespoke media lounge in Race Course incorporating vertical charcoal fluted louvers, a statuario marble feature wall, and a cantilevered floating console with hidden wire chases.",
    clientFeedback: "Our living room is the first thing guests see, and the compliments haven't stopped. Happy Homes executed the marble wall and fluted wood work with unbelievable craftsmanship.",
    clientName: "Karthik Subramanian",
    scope: [
      "Full-height living room accent wall with statuario porcelain slabs",
      "Acoustic fluted charcoal louvers with integrated warm LED profile channels",
      "Cantilevered 12-foot floating TV console with push-to-open drawer fronts",
      "Concealed HDMI, power, and high-fidelity speaker cable conduits",
      "Perimeter false ceiling with indirect cove ambient illumination"
    ],
    specs: [
      { label: "Wall Width", value: "4.8 Meters Full Elevation" },
      { label: "Primary Material", value: "Statuario Porcelain & Charcoal Louvers" },
      { label: "Console", value: "Matte PU Lacquer with Soft-Close Hardware" },
      { label: "Lighting", value: "3000K High-CRI Concealed Warm Coves" }
    ]
  },
  {
    slug: "traditional-teak-pooja-unit-ramanathapuram",
    title: "Teak Wood Backlit Mandir Shrine",
    subtitle: "Sacred Pooja Sanctuary",
    category: "Pooja Units",
    categoryKey: "pooja",
    location: "Ramanathapuram, Coimbatore",
    year: "2023",
    area: "110 sq.ft",
    duration: "3 Weeks",
    heroImage: "/images/services_pooja.jpg",
    gallery: [
      "/images/services_pooja.jpg",
      "/images/amenities_interior.jpg"
    ],
    shortDesc: "A consecrated prayer mandir in Ramanathapuram crafted in authentic Burma teak wood, featuring backlit Corian CNC jaali screens and traditional brass bell fittings.",
    clientFeedback: "Designing a pooja room requires spiritual understanding and respect for traditions. The team at Happy Homes Interiors captured our vision perfectly. The brass bells and glowing jaali bring profound peace.",
    clientName: "S. Lakshmi & Family",
    scope: [
      "Strict North-East (Ishanya) vastu orientation alignment",
      "Artisanal hand-carved Burma teak gopuram pillars and cornices",
      "Backlit CNC Corian lotus and Om motifs with warm diffused glow",
      "Custom brass hanging bells and solid brass engraved handles",
      "Heat-resistant Makrana marble deity platform and pull-out diya tray"
    ],
    specs: [
      { label: "Timber", value: "A-Grade Seasoned Burma Teak" },
      { label: "Platform", value: "White Makrana Marble Inset" },
      { label: "Screen", value: "Laser-Carved Translucent Corian" },
      { label: "Vastu", value: "100% Compliant North-East Alignment" }
    ]
  },
  {
    slug: "complete-duplex-interior-avainashi-road",
    title: "Turnkey 4BHK Duplex Residence",
    subtitle: "Full Turnkey Villa Fit-Out",
    category: "Complete Home Interiors",
    categoryKey: "turnkey",
    location: "Avinashi Road, Coimbatore",
    year: "2024",
    area: "3,600 sq.ft",
    duration: "10 Weeks",
    heroImage: "/images/services_home.jpg",
    gallery: [
      "/images/services_home.jpg",
      "/images/amenities_interior.jpg",
      "/images/services_living.jpg",
      "/images/about_pic34.jpg"
    ],
    shortDesc: "End-to-end turnkey interior execution for an expansive 4BHK duplex on Avinashi Road, encompassing double-height living areas, a modular chef's kitchen, custom suites, and designer false ceilings.",
    clientFeedback: "From the initial 3D renderings to the final key handover, Happy Homes Interiors managed everything smoothly. No surprises, no cost escalations, and delivered right on time. Truly exceptional service.",
    clientName: "Dr. Anand & Dr. Meera",
    scope: [
      "Comprehensive space replanning and architectural partition designs",
      "Complete modular kitchen with parallel dry pantry and island counter",
      "Custom wardrobe suites in all four master and guest bedrooms",
      "Double-height living room acoustic paneling and false ceiling coves",
      "Turnkey civil modifications, electrical replanning, and Asian Paints Royale painting"
    ],
    specs: [
      { label: "Property Type", value: "4BHK Independent Duplex Villa" },
      { label: "Contract Type", value: "Full Turnkey Planning & Execution" },
      { label: "Woodwork Core", value: "BWP 710 Marine Grade Plywood" },
      { label: "Warranty", value: "10-Year Comprehensive Structural Warranty" }
    ]
  },
  {
    slug: "designer-kids-bedroom-saibaba-colony",
    title: "Playful Study & Storage Suite",
    subtitle: "Youth Bedroom Design",
    category: "Kids Room",
    categoryKey: "kids",
    location: "Saibaba Colony, Coimbatore",
    year: "2024",
    area: "220 sq.ft",
    duration: "3 Weeks",
    heroImage: "/images/services_kids.jpg",
    gallery: [
      "/images/services_kids.jpg",
      "/images/portfolio_portfolio-box_cot.jpg"
    ],
    shortDesc: "A multi-functional kids bedroom in Saibaba Colony featuring rounded safety joinery, an ergonomic study desk with adjustable shelving, and stair-integrated storage.",
    clientFeedback: "Our kids love their new bedroom! The desk setup makes doing homework fun, and the stair drawers swallow all the toys. Happy Homes Interiors used zero-smell paints which we appreciated.",
    clientName: "Senthil & Deepa Kumar",
    scope: [
      "Custom safety-engineered twin bed with soft rounded edge profiles",
      "Built-in study station with chalkboard panels and magnetic memo board",
      "Multi-drawer storage staircase with soft-closing dampeners",
      "Locker-style kids wardrobe with low-height hanging rods and label tags",
      "Non-toxic Asian Paints Royale zero-VOC pastel wall coatings"
    ],
    specs: [
      { label: "Design Concept", value: "Ergonomic Grow-With-Me Suite" },
      { label: "Joinery Edges", value: "Rounded 3mm Impact-Resistant PVC" },
      { label: "Paint Safety", value: "Certified Zero-VOC Lead-Free Coatings" },
      { label: "Storage", value: "Multi-Tier Integrated Toy & Book Units" }
    ]
  }
];

export const testimonials = [
  {
    quote: "Happy Homes Interiors delivered our modular kitchen in RS Puram with outstanding precision. From the initial 3D visualization to on-site assembly, everything was completed within 4 weeks. The German hardware and glossy finish make cooking an absolute pleasure.",
    author: "Priya Narayanan",
    location: "RS Puram, Coimbatore",
    service: "Modular Kitchen",
    rating: 5,
    date: "March 2024"
  },
  {
    quote: "We commissioned Happy Homes for our master bedroom sliding wardrobes and living room TV unit. The silent glide of the doors and the beautiful fluted wood texture completely elevated our home. Their team in Coimbatore is polite, skilled, and dust-conscious.",
    author: "Ramesh Sundaram",
    location: "Peelamedu, Coimbatore",
    service: "Wardrobe & TV Unit",
    rating: 5,
    date: "January 2024"
  },
  {
    quote: "Our complete 4BHK duplex on Avinashi Road was managed entirely by Happy Homes Interiors on a turnkey basis. Having one accountable team handling civil work, false ceilings, lighting, and custom furniture saved us months of stress. Highly recommended!",
    author: "Dr. Anand",
    location: "Avinashi Road, Coimbatore",
    service: "Complete Turnkey Home Interiors",
    rating: 5,
    date: "November 2023"
  },
  {
    quote: "The traditional teak pooja unit crafted for our home in Ramanathapuram is a work of art. The intricate backlit jaali and authentic brass bells bring such divine tranquility to our mornings. True craftsmen.",
    author: "S. Lakshmi",
    location: "Ramanathapuram, Coimbatore",
    service: "Pooja Unit & Living Room",
    rating: 5,
    date: "August 2023"
  }
];

export const faqs = [
  {
    category: "Design Process & Planning",
    items: [
      {
        q: "How does the design and consultation process work at Happy Homes Interiors?",
        a: "Our process begins with an in-depth consultation at our Coimbatore studio or at your site, where we discuss your lifestyle, aesthetic preferences, and budget. Our designers take laser measurements and develop photorealistic 3D renders with material samples. Once designs and BOQ are finalized, fabrication begins at our factory followed by dust-free on-site installation."
      },
      {
        q: "Do you provide 3D visual designs before work begins?",
        a: "Yes. Every client receives comprehensive 3D photorealistic renderings and 2D CAD elevation drawings. This ensures you visualize colors, lighting, textures, and storage configurations with complete clarity before fabrication commences."
      },
      {
        q: "Can I customize the dimensions, finishes, and colors of my woodwork?",
        a: "Absolutely. Everything we manufacture is bespoke. You can choose from over 200+ laminate shades, acrylics, natural veneers, lacquered glass, and ceramic finishes to match your exact home theme."
      }
    ]
  },
  {
    category: "Materials & Durability",
    items: [
      {
        q: "What core materials do you use for modular kitchens and wardrobes in Coimbatore?",
        a: "For all wet and high-usage zones (kitchens, bathrooms, utility areas), we strictly use IS 710 Boiling Waterproof (BWP) Marine Grade Plywood and high-density HDHMR boards. For dry bedroom wardrobes and TV units, we use calibrated commercial ply with anti-termite treatment."
      },
      {
        q: "Which hardware and hinge brands do you integrate into your cabinetry?",
        a: "We partner with leading global hardware manufacturers including Blum (Austria), Hettich (Germany), and Hafele (Germany). All hinges and drawer runners come with soft-closing dampeners tested for 100,000 opening cycles."
      },
      {
        q: "Are Happy Homes woodwork products termite and borer resistant?",
        a: "Yes. All our raw boards undergo vacuum pressure impregnation with anti-termite and anti-borer chemicals. We provide a 10-year warranty against manufacturing defects and termite degradation."
      }
    ]
  },
  {
    category: "Timelines & Execution",
    items: [
      {
        q: "How long does a typical interior project take from start to finish?",
        a: "A standalone modular kitchen or wardrobe suite is typically installed within 3 to 4 weeks. Complete turnkey 2BHK or 3BHK home interior projects typically require 6 to 8 weeks depending on the civil and ceiling scope."
      },
      {
        q: "Is there excessive noise and wood dust inside my house during execution?",
        a: "No. Because 90% of cutting, edge-banding, and drilling is completed in our computerized factory, on-site work is primarily modular assembly and fitting. This ensures a clean, fast, and dust-free on-site experience."
      },
      {
        q: "Do you handle civil work, electrical modifications, and plumbing as well?",
        a: "Yes. For turnkey projects, our in-house team manages civil demolition, plumbing modifications, electrical rewiring, tile laying, false ceiling framing, and painting seamlessly under one roof."
      }
    ]
  },
  {
    category: "Pricing & Warranty",
    items: [
      {
        q: "How are interior project costs calculated?",
        a: "Costs are calculated transparently based on square footage, selected core material (BWP Ply / HDHMR), shutter finish (Acrylic, PU, Laminate, Veneer), and hardware accessories. We provide a detailed Itemized Bill of Quantities (BOQ) with fixed prices and zero hidden costs."
      },
      {
        q: "What is your warranty and after-sales support policy?",
        a: "We back our craftsmanship with a comprehensive 10-year warranty on all modular cabinetry structures, alongside 1 year of free on-site service support for hinges, drawer alignments, and hardware adjustments."
      },
      {
        q: "What areas outside Coimbatore do you service?",
        a: "While our central studio is located in Coimbatore, we actively undertake turnkey residential projects across Tirupur, Erode, Pollachi, Ooty, and throughout Tamil Nadu."
      }
    ]
  }
];
