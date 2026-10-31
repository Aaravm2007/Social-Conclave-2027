// Source: Social Conclave 2027 Information Booklet.
// Anything in [brackets] is still a placeholder.

export const EVENT = {
  name: "Social Conclave",
  edition: "2027",
  tagline: "A space for ideas that move our world forward.",
  dates: "25–28 February 2027",
  location: "Vile Parle West, Mumbai",
  format: "Four-day conclave",
  organiser:
    "Mukesh Patel School of Technology Management & Engineering (MPSTME), NMIMS",
  backedBy: "The United Nations",
  registerUrl: "https://tally.so/r/pbjA1V", // paste the registration form link here
  website: "www.socialconclave.in",
  websiteUrl: "https://www.socialconclave.in",
  handle: "@social.conclave",
};

export const REGISTER_HREF = EVENT.registerUrl || "#register";

export const NAV = [
  { id: "about", label: "About" },
  { id: "agenda", label: "Agenda" },
  { id: "schedule", label: "Schedule" },
  { id: "why", label: "Why us" },
  { id: "dignitaries", label: "Dignitaries" },
  { id: "guides", label: "Guides" },
  { id: "partners", label: "Partners" },
  { id: "submission", label: "Submit" },
];

export const ABOUT_SECTIONS = [
  {
    title: "About NMIMS",
    paragraphs: [
      "NMIMS is a deemed-to-be University, founded in 1934, providing its students the best facilities and education. It has reached great heights over the years and received numerous and prestigious yearly allocations.",
      "It is currently ranked 4th in India among the best private B schools. Under the UGC-sponsored NAAC accreditation, NMIMS was awarded ‘Grade A++’ with a 5-star rating.",
      "NMIMS believes in inculcating basic values and promoting extra-curricular activities. MPSTME was established to offer Indian students a world-class experience.",
    ],
  },
  {
    title: "About MPSTME",
    paragraphs: [
      "Mukesh Patel School of Technology Management and Engineering (MPSTME), a top engineering college in Mumbai, was established to create an innovative and integrated space for technology education, interspersed with sound management practices that converge with changing industry as well as societal needs.",
      "MPSTME offers B.Tech., M.Tech., MCA and PhD courses, and the one-of-its-kind MBA (Tech.) course. It lays emphasis on practical work, research activities and extracurricular activities.",
    ],
  },
  {
    title: "What is Social Conclave?",
    paragraphs: [
      "Social Conclave is MPSTME’s social initiative, where delegates from across the country gather to discuss pressing socio-economic issues affecting vulnerable communities and develop sustainable solutions.",
      "With a vision to create meaningful impact, Social Conclave strives to foster social sensitivity among youth, encouraging them to turn awareness into action through dialogue and collaboration.",
      "Over the years, Social Conclave has welcomed over 600 delegates nationwide. With an expanding international outlook, we aim to bring together diverse global perspectives and foster cross-border collaboration, empowering young changemakers to drive lasting change.",
    ],
  },
  {
    title: "Our goals & future plans",
    paragraphs: [
      "Social Conclave was initiated with the aim of doing our bit for society by starting a chain reaction of developing social sensitivity amongst youth, and taking it upon ourselves to find solutions to various contentious issues. A conference of this kind, in collaboration with the UN, was held for the very first time in India last year. The unique feature of Social Conclave is that the solutions obtained during the conference are implemented at the ground level.",
      "The youth are the future of this country, and we believe youth mobilisation can take the country forward by leaps and bounds. Our plan is to make Social Conclave a yearly event, and we are all set to host it yet again this year, grander.",
    ],
  },
  {
    title: "Global collaboration",
    paragraphs: [
      "Social Conclave 2027 takes a significant step towards international engagement through its collaboration with the Balipara Foundation, renowned for its work in biodiversity conservation, ecological restoration and sustainable livelihoods, alongside other distinguished international foundations.",
      "This collaboration aims to bring international speakers and delegates from beyond India to the Conclave, fostering cross-cultural exchange, diverse perspectives and meaningful discussions on pressing social and environmental challenges. By bringing together expertise from across borders, Social Conclave aspires to inspire young changemakers to develop innovative solutions with lasting global impact.",
    ],
  },
];

export const AGENDAS = [
  {
    num: "01",
    title: "The Concrete Jungle",
    tagline:
      "Building our future cities shouldn’t mean burying the natural environment.",
    details: [
      "This agenda examines the environmental consequences of urban infrastructure development and redevelopment. As cities expand through roads, bridges, buildings, transport systems and other infrastructure, construction and operation can generate multiple forms of pollution and environmental stress. The agenda looks beyond construction waste to examine air, water, noise, light, soil and thermal pollution, along with habitat disruption, resource consumption and the long-term ecological cost of infrastructure-led urbanisation.",
      "How can cities build the infrastructure they need without creating new forms of pollution and long-term ecological damage? This central question guides discussions on tackling construction air and water runoff, managing demolition waste, mitigating urban heat-island effects, and planning sustainable infrastructure to safeguard natural ecosystems.",
    ],
    guide: "",
    report: "",
    presentation: "",
  },
  {
    num: "02",
    title: "The Carbon Trade Off",
    tagline:
      "The imperative of balancing a sustainable environment with scalable growth and sufficient livelihoods.",
    details: [
      "Reaching net zero requires more than reducing emissions. Carbon sequestration and carbon removal can capture and store carbon through forests, mangroves, soils, biochar and technological methods. However, these approaches raise questions about permanence, scale, verification, land use, and whether carbon removal is being used to complement genuine emissions reduction or to offset continued emissions. The agenda explores the balance between reducing what we emit and removing what has already entered the atmosphere.",
      "Can carbon sequestration meaningfully complement emissions reduction on the path to net zero? Delegates will weigh emissions reduction against carbon removal, evaluate nature-based solutions and carbon capture, utilisation and storage (CCUS), and address the risks of greenwashing and faulty carbon offsets.",
    ],
    guide: "",
    report: "",
    presentation: "",
  },
  {
    num: "03",
    title: "Behind Closed Kitchens",
    tagline:
      "Fast food’s flashing convenience shouldn’t cost our future’s footprint.",
    details: [
      "Food delivery has moved much of food preparation away from visible restaurants into cloud and centralised kitchens. The convenience seen by consumers can hide large-scale resource use and waste generation. These kitchens depend on water, energy, packaging and food inputs, while also needing systems for hygiene, waste handling and operational accountability. This agenda looks behind the delivery app to examine the environmental footprint and sustainability challenges of modern food-production systems.",
      "How can the rapidly growing cloud-kitchen industry reduce its hidden environmental footprint without compromising affordability and convenience? Participants will explore surplus food management, single-use delivery packaging, resource-efficient kitchen design, and enhanced traceability across sustainable food-delivery systems.",
    ],
    guide: "",
    report: "",
    presentation: "",
  },
  {
    num: "04",
    title: "Wildlife at Our Doorstep",
    tagline:
      "When urban structures claim geographic domains, our voiceless neighbors bear the pain.",
    details: [
      "This agenda explores the increasingly complex relationship between humans and wildlife as urbanisation, infrastructure and commercial activity encroach on natural ecosystems. It focuses primarily on human-animal conflict, examining how habitat loss, changing food sources, artificial environments and human behaviour force animals to adapt, relocate or enter human spaces. The agenda also examines less visible and emerging threats to wildlife, including exotic animal trafficking and trade, artificial light, noise and other forms of human-induced environmental disturbance.",
      "How can humans and wildlife coexist when expanding settlements, infrastructure and human activity increasingly disrupt natural habitats and animal behaviour? Discussions will centre on wildlife corridors, managing livestock loss and crop damage, mitigating light and noise pollution, and combating the illegal wildlife trade.",
    ],
    guide: "",
    report: "",
    presentation: "",
  },
  {
    num: "05",
    title: "From Waste to Worth",
    tagline:
      "While today mountains of trash rise and grow land pressure, we look forward to making tomorrow’s treasure.",
    details: [
      "Waste management is moving beyond simply collecting garbage and sending it to landfills. Governments are increasingly adopting newer approaches such as landfill mining and biomining, waste-to-energy, material recovery facilities, source segregation, circular-economy systems and resource recovery to reduce the amount of waste ultimately sent to landfills. This agenda examines whether these emerging practices can fundamentally change how societies deal with waste, while addressing the environmental, economic and social challenges involved in implementing them at scale.",
      "Can new waste-management practices transform garbage from a disposal problem into a recoverable resource? Delegates will assess the scalability of material recovery facilities (MRFs), circular economy models, difficult waste streams such as plastics and e-waste, and the critical role of waste workers in decentralised processing.",
    ],
    guide: "",
    report: "",
    presentation: "",
  },
];

export const SCHEDULE = [
  {
    day: "Day 1",
    date: "25 February 2027",
    venue: "NMIMS · Vile Parle West",
    items: [
      { time: "10:00 AM", title: "Inauguration" },
      { time: "01:00 PM", title: "Lunch" },
      { time: "03:00 PM", title: "Inter-agenda discussion" },
      { time: "05:00 PM", title: "High tea" },
    ],
  },
  {
    day: "Day 2",
    date: "26 February 2027",
    venue: "Field visit · lunch included",
    items: [{ time: "08:00 AM – 04:00 PM", title: "Field visit" }],
  },
  {
    day: "Day 3",
    date: "27 February 2027",
    venue: "MPSTME · Vile Parle West",
    items: [
      { time: "10:00 AM", title: "Speaker session" },
      { time: "11:00 AM", title: "Panel discussion" },
      { time: "01:00 PM", title: "Lunch" },
      { time: "03:00 PM", title: "Mock panchayat" },
      { time: "05:00 PM", title: "High tea" },
    ],
  },
  {
    day: "Day 4",
    date: "28 February 2027",
    venue: "MPSTME · Vile Parle West",
    items: [
      { time: "10:00 AM", title: "Report & project submission" },
      { time: "01:00 PM", title: "Lunch" },
      { time: "03:00 PM", title: "Closing ceremony" },
    ],
  },
];

export const LOCATIONS = [
  {
    label: "Day 1",
    venue:
      "NMIMS Jyoti Dalal School of Liberal Arts, V. L. Mehta Road, Vile Parle West, Mumbai, Maharashtra 400056.",
  },
  {
    label: "Days 2, 3 & 4",
    venue:
      "Mukesh Patel School of Technology Management and Engineering, Bhakti Vedant Swami Marg, Near Cooper Hospital, JVPD Scheme, Vile Parle West, Mumbai, Maharashtra 400056.",
  },
];

export const WHY_POINTS = [
  {
    title: "Win from a ₹2.5 Lakh prize pool",
    text: "Attendees stand a chance to win from a ₹2.5 Lakh prize pool, along with an exclusive delegate kit.",
  },
  {
    title: "UN certificate",
    text: "All attendees receive certificates from the United Nations for joining us at Social Conclave 2027.",
  },
  {
    title: "Comedy night & social mixer",
    text: "An evening of humour and relaxation at the comedy night, with buffet meals served across all four days and a vibrant social mixer to celebrate the journey.",
  },
  {
    title: "Mock panchayat & field visits",
    text: "Engage in a dynamic mock panchayat simulation and gain practical insights through field visits.",
  },
  {
    title: "Learn from NGOs & experts",
    text: "Connect directly with leading NGO representatives and take part in panel discussions featuring distinguished industry experts.",
  },
  {
    title: "International outlook",
    text: "Through our collaboration with the Balipara Foundation, delegates and speakers from beyond India join the conversation.",
  },
];

export const DIGNITARIES = [
  {
    name: "Shri. Shripad Yesso Naik",
    role: "Minister of State for New and Renewable Energy of India",
  },
  { name: "Smt. Smriti Irani", role: "Former Minister of Education of India" },
  { name: "Dr. Kiran Bedi", role: "Former Lieutenant Governor" },
  { name: "Nikhil Vyas", role: "General Secretary BJP, North Mumbai" },
  { name: "Sucheta Dalal", role: "Journalist and Author" },
  { name: "Anuv Jain", role: "Singer" },
  { name: "Kenneth Sebastian", role: "Comedian" },
  { name: "Abhishek Upamanyu", role: "Comedian" },
  { name: "Vivek Oberoi", role: "Actor" },
];

export const PARTNERS = [
  { name: "UN Academic Impact", note: "Backed by The United Nations" },
  { name: "Social Impact", note: "Partner" },
  {
    name: "Balipara Foundation",
    note: "International collaboration · Assam, India",
  },
];

export const FEES = {
  label: "Early bird fee",
  amount: "₹1600",
  gst: "Inclusive of GST",
  intro:
    "The priority participation fee for Social Conclave 2027 is ₹1600. This contribution covers your complete four-day experience, from engaging discussions and immersive activities to cultural evenings and curated delegate amenities.",
  inclusions: [
    "An exclusive delegate kit",
    "Meals and refreshments provided throughout the event",
    "An invitation to the Social Mixer and Comedy Night",
    "An official UN Certificate of Participation acknowledging your contribution to the conference",
  ],
  closing:
    "Your registration helps us build an impactful, large-scale platform that amplifies youth voices and brings social change to life.",
};

export const CONTACT_EMAIL = "contact@socialconclave.org";
