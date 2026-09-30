export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  placeholder: boolean;
}

export const howItWorks = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description:
      "Share your staffing requirements — role, skills, dates, venue and any specific qualifications needed.",
  },
  {
    step: "02",
    title: "We Match Your Requirements",
    description:
      "Sora identifies suitable professionals from our carefully selected network of spa therapists.",
  },
  {
    step: "03",
    title: "Your Therapist Arrives",
    description:
      "The matched professional is supplied to your venue, briefed and ready to uphold your service standards.",
  },
  {
    step: "04",
    title: "Ongoing Sora Support",
    description:
      "We remain available throughout the placement to support both your business and the therapist.",
  },
];

export const whyChooseSora = [
  {
    title: "Carefully Selected Professionals",
    description:
      "Every therapist in our network is vetted for skill, professionalism and hospitality standards.",
  },
  {
    title: "Flexible Staffing",
    description:
      "From last-minute cover to ongoing contracts — staffing solutions tailored to your needs.",
  },
  {
    title: "Hospitality-Focused Talent",
    description:
      "Therapists experienced in luxury hotels, premium spas and high-end wellness environments.",
  },
  {
    title: "Reliable Support",
    description:
      "A dedicated agency partner available before, during and after every placement.",
  },
  {
    title: "Fast Staffing Solutions",
    description:
      "Responsive recruitment when you need qualified therapists quickly and without compromise.",
  },
  {
    title: "Quality & Professionalism",
    description:
      "We represent exceptional people who create exceptional guest experiences.",
  },
];

export const businessTestimonials: Testimonial[] = [
  {
    id: "b1",
    quote:
      "Sora understood our standards immediately. The therapists they supplied integrated seamlessly with our spa team and maintained the level of service our guests expect.",
    name: "Placeholder — Spa Manager",
    role: "Luxury Hotel Spa, London",
    placeholder: true,
  },
  {
    id: "b2",
    quote:
      "When we needed last-minute cover during peak season, Sora responded quickly with a qualified professional who was professional, skilled and perfectly suited to our environment.",
    name: "Placeholder — Operations Manager",
    role: "Boutique Hotel Group",
    placeholder: true,
  },
];

export const therapistTestimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Joining Sora opened doors to premium venues I would not have accessed on my own. The agency support made every placement smooth and professional.",
    name: "Placeholder — Massage Therapist",
    role: "Sora Collective Member",
    placeholder: true,
  },
  {
    id: "t2",
    quote:
      "The flexibility to choose assignments that fit my schedule, combined with the quality of venues, makes Sora the agency I trust for my career.",
    name: "Placeholder — Spa Therapist",
    role: "Sora Collective Member",
    placeholder: true,
  },
];

export const aboutSections = [
  {
    id: "what",
    eyebrow: "What We Do",
    title: "A premium spa staffing partner",
    image: "/images/spa/treatment-room.png",
    imageClass: "object-[center_35%]",
    content: [
      "Sora Spa Collective is a staffing and recruitment agency specialising in spa and wellness professionals for the hospitality industry.",
      "We connect exceptional therapists with hotels, spas, resorts and wellness businesses that need reliable, qualified staff — without compromising on service quality.",
    ],
  },
  {
    id: "why",
    eyebrow: "Why Sora Exists",
    title: "Exceptional people create exceptional experiences",
    image: "/images/spa/spa-bath.png",
    imageClass: "object-[center_28%]",
    content: [
      "Premium hospitality environments demand therapists who understand service excellence, discretion and the standards expected by discerning guests.",
      "Sora was founded to bridge the gap between businesses that need skilled spa staff and qualified professionals seeking meaningful opportunities in luxury wellness.",
    ],
  },
  {
    id: "approach",
    eyebrow: "Our Approach",
    title: "Selective, intentional, quality-focused",
    image: "/images/spa/our_approach.jpeg",
    imageAlt: "Spa therapist applying a facial treatment with a brush while a client rests on a treatment bed",
    imageClass: "object-[center_18%]",
    backgroundClass: "bg-sage-soft",
    lightText: true,
    content: [
      "We take a selective approach to the professionals we represent. Quality over quantity guides every decision — from vetting therapists to understanding client needs.",
      "Our team works closely with both hospitality partners and therapists to ensure every placement is the right fit.",
    ],
  },
  {
    id: "commitment",
    eyebrow: "Our Commitment",
    title: "Partners in excellence",
    image: "/images/spa/hot-stone.png",
    imageClass: "object-center",
    content: [
      "To our hospitality partners, we promise responsive, reliable staffing solutions backed by genuine care for your operation and guest experience.",
      "To our therapists, we promise access to premium opportunities, professional support and a collective that values their craft and career.",
    ],
  },
];
