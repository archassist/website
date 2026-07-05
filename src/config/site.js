// ============================================================================
//  ARCH ASSIST — central site configuration
//  Edit WhatsApp number, contact details, services and FAQs here.
// ============================================================================

// >>> CHANGE THIS to your real WhatsApp number (international format, digits only).
//     Example: India +91 98765 43210  ->  "919876543210"
export const WHATSAPP_NUMBER = "919344701251"; // +91 93447 01251

const DEFAULT_MESSAGE =
  "Hello ARCH ASSIST! I'm an architecture student and I'd like guidance on my project.";

// Build a wa.me deep link with an optional prefilled message.
export function whatsappLink(message = DEFAULT_MESSAGE) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const CONTACT = {
  studio: "ARCH ASSIST",
  tagline: "Architecture Mentorship Platform",
  email: "thearchassist@gmail.com",
  phoneDisplay: "+91 93447 01251",
  location: "Available worldwide · Online mentorship studio",
  hours: "Mon – Sat · 10:00 — 20:00 IST",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQs", href: "#faqs" },
];

import site from "../assets/service/site.jpeg";
import concept from "../assets/service/concept.jpeg";
import bim from "../assets/service/bim.jpeg";
import drawing2d from "../assets/service/2DDrawing.jpeg";
import modelling3d from "../assets/service/3DModelling.jpeg";
import render from "../assets/service/render.jpeg";
import sheet from "../assets/service/sheet.jpeg";
import working from "../assets/service/working_drawings.jpeg";
import thesis from "../assets/service/thesis.jpeg";
import walkthrough from "../assets/service/walkthrough.jpeg";

import siteVideo from "../assets/service_video/site.mp4";
import conceptVideo from "../assets/service_video/concept.mp4";
import bimVideo from "../assets/service_video/bim.mp4";
import drawingVideo from "../assets/service_video/2d.mp4";
import modellingVideo from "../assets/service_video/3DModelling.mp4";
import renderVideo from "../assets/service_video/render.mp4";
import sheetVideo from "../assets/service_video/sheet.mp4";
import workingVideo from "../assets/service_video/Working.mp4";
import thesisVideo from "../assets/service_video/Thesis.mp4";
import walkthroughVideo from "../assets/service_video/Arch.mp4";

// Each service maps to a Higgsfield-generated visual in /public/assets/services.
// Drop the rendered file at `image` and it appears automatically.
export const SERVICES = [
  {
    id: "01",
    title: "Site Analysis",
    tag: "Context • Climate • Circulation",
    image: site,
    video: siteVideo,
    accent: "#C9A66B",
    blurb:
      "We read the land before a single line is drawn. Topography, contours, climate overlays, circulation studies and contextual massing become the foundation of every successful project.",
    points: [
      "Topography & contour studies",
      "Climate analysis",
      "Circulation & context studies",
    ],
    price: "₹299",
  },

  {
    id: "02",
    title: "Concept Development",
    tag: "Ideas • Form • Narrative",
    image: concept,
    video: conceptVideo,
    accent: "#D8B67D",
    blurb:
      "Transform abstract ideas into compelling architectural concepts using design thinking, diagrams and spatial narratives.",
    points: [
      "Concept diagrams",
      "Bubble & zoning diagrams",
      "Form exploration",
    ],
    price: "₹299",
  },

  {
    id: "03",
    title: "2D Drawing",
    tag: "Plans • Sections • Elevations",
    image: drawing2d,
    video: drawingVideo,
    accent: "#D8B67D",
    blurb:
      "Create highly accurate architectural drawings that follow university and professional drafting standards.",
    points: [
      "Floor Plans",
      "Sections",
      "Elevations",
    ],
    price: "₹499",
  },

  {
    id: "04",
    title: "Working Drawings",
    tag: "Construction • Details",
    image: working,
    video: workingVideo,
    accent: "#D8B67D",
    blurb:
      "Prepare complete working drawing packages with construction details, schedules and technical accuracy.",
    points: [
      "Construction Details",
      "Door & Window Schedules",
      "Technical Documentation",
    ],
    price: "₹499",
  },

  {
    id: "05",
    title: "3D Modelling",
    tag: "SketchUp • Revit • Massing",
    image: modelling3d,
    video: modellingVideo,
    accent: "#C9A66B",
    blurb:
      "Develop detailed architectural 3D models for visualization, presentations and design refinement.",
    points: [
      "SketchUp Models",
      "Rhino Modelling",
      "Detailed Geometry",
    ],
    price: "₹999",
  },

  {
    id: "06",
    title: "BIM Modelling",
    tag: "Revit • BIM • Coordination",
    image: bim,
    video: bimVideo,
    accent: "#C9A66B",
    blurb:
      "Professional BIM modelling for academic and real-world architectural workflows using Autodesk Revit.",
    points: [
      "Revit Architecture",
      "BIM Documentation",
      "Model Coordination",
    ],
    price: "₹1299",
  },

  {
    id: "07",
    title: "Rendering",
    tag: "Lumion • D5 • Enscape",
    image: render,
    video: renderVideo,
    accent: "#D8B67D",
    blurb:
      "Produce cinematic photorealistic renders with realistic lighting, materials and environmental effects.",
    points: [
      "Exterior Renders",
      "Interior Visualizations",
      "Atmospheric Lighting",
    ],
    price: "₹199",
  },

  {
    id: "08",
    title: "Architectural Walkthrough",
    tag: "Animation • Film • Motion",
    image: walkthrough,
    video: walkthroughVideo,
    accent: "#D8B67D",
    blurb:
      "Create cinematic walkthrough animations that showcase architecture with immersive storytelling.",
    points: [
      "Camera Animation",
      "Lighting & Effects",
      "Video Post Production",
    ],
    price: "₹999",
  },

  {
    id: "09",
    title: "Presentation Sheets",
    tag: "Layout • Graphics • Portfolio",
    image: sheet,
    video: sheetVideo,
    accent: "#C9A66B",
    blurb:
      "Design premium presentation sheets that communicate architectural ideas with clarity and elegance.",
    points: [
      "Jury Sheets",
      "Competition Boards",
      "Portfolio Layouts",
    ],
    price: "₹699",
  },


  {
    id: "10",
    title: "Thesis Guidance",
    tag: "Research • Design • Jury",
    image: thesis,
    video: thesisVideo,
    accent: "#C9A66B",
    blurb:
      "Comprehensive mentorship throughout your architectural thesis journey—from research to final jury.",
    points: [
      "Research Assistance",
      "Design Development",
      "Jury Preparation",
    ],
    price: "₹1499",
  },


];


// Portfolio Development is offered as part of mentorship — surfaced in copy.
export const FAQS = [
  {
    q: "What exactly does your platform help architecture students with?",
    a: "Everything from the first idea to the final jury: site analysis, concept development, 2D and working drawings, 3D and BIM modelling, renders, sheet presentation, walkthrough videos, portfolio development and full thesis mentorship.",
  },
  
  {
    q: "How do I know my project is in safe hands?",
    a: "You work directly with experienced architects who mentor rather than ghost-produce. We share progress at every stage, explain decisions, and keep you in control of your design voice.",
  },
  {
    q: "Can you help if my submission deadline is very close?",
    a: "Yes. Tell us the deadline up front and we will scope a realistic plan, prioritise the highest-impact deliverables, and keep you updated so there are no surprises.",
  },
  {
    q: "Do you help with thesis projects?",
    a: "Thesis mentorship is a specialty — research walls, concept boards, design development, case studies and final jury preparation, guided end to end.",
  },
  {
    q: "Will my project remain confidential?",
    a: "Always. Your work, files and ideas stay strictly confidential and are never shared or reused without your explicit permission.",
  },
  {
    q: "Can I request revisions?",
    a: "Yes. Revisions are built into the process — we refine together until the deliverable meets your standard and your jury's expectations.",
  },
  {
    q: "Do you only work on complete projects?",
    a: "No. You can engage us for a single stage — just a render, a set of sheets, a site analysis — or for the full journey. It's entirely flexible.",
  },
  {
    q: "What file formats will I receive?",
    a: "Editable and final formats as needed: DWG, RVT, SKP, 3DM, PDF, JPG/PNG, MP4 for walkthroughs, and layered files where relevant.",
  },
  {
    q: "Can beginners use your services?",
    a: "Yes — we love working with beginners. We explain each step so you learn the craft while your project improves.",
  },
  {
    q: "What makes your platform different from others?",
    a: "We treat your project as an architectural experience, not a transaction. Expert mentorship, museum-quality visuals and genuine teaching set us apart from generic coaching services.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the scope, stage and deadline of your project. Message us on WhatsApp with your brief and we'll send a clear, fair quote.",
  },
];

export const POLICIES = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/the_archassist?igsh=MXRwa3RuMXdzdjJvYQ==" },  
  { label: "WhatsApp", href: whatsappLink() },
];
