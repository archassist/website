import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
}) {

  const siteName = "Arch Assist";

  const siteURL = "https://archassist.in";

  const defaultTitle =
    "Arch Assist | Architecture Mentorship | BIM Modelling | Portfolio Guidance | Architectural Design Services";

  const defaultDescription =
    "Arch Assist is a professional architecture mentorship and design platform helping architecture students, professionals and firms through BIM Modelling, Architectural Design, Concept Development, Site Analysis, Working Drawings, Portfolio Guidance, Thesis Mentoring, 2D Drafting, 3D Modelling, Rendering, Walkthrough Animation, Architectural Visualization and Professional Consultation across India.";

  const defaultKeywords =
    keywords ||
    [
      "architecture mentorship",
      "architecture mentor",

      "architecture guidance",

      "architecture portfolio",

      "architecture portfolio review",

      "architecture students",

      "architecture consultancy",

      "architecture consultant",

      "architecture design",

      "architectural design",

      "architectural services",

      "architecture company",

      "architecture studio",

      "architecture India",

      "BIM",

      "BIM modelling",

      "Revit",

      "Revit Architecture",

      "AutoCAD",

      "SketchUp",

      "Rhino",

      "Lumion",

      "Enscape",

      "2D drawings",

      "working drawings",

      "construction drawings",

      "architectural drafting",

      "3D modelling",

      "architectural modelling",

      "architectural rendering",

      "architectural visualization",

      "walkthrough animation",

      "site analysis",

      "site planning",

      "concept development",

      "master planning",

      "urban design",

      "residential architecture",

      "commercial architecture",

      "interior architecture",

      "landscape architecture",

      "building design",

      "architecture thesis",

      "architecture thesis guidance",

      "portfolio guidance",

      "architectural mentoring",

      "architecture internship guidance",

      "professional architecture services",

      "architectural consultation",

      "Arch Assist"
    ].join(", ");

  const defaultImage =
    image ||
    `${siteURL}/assets/home/final-house.jpg`;

  const canonicalURL =
    url || siteURL;

  return (
    <Helmet>

      {/* ========================================================= */}
      {/* Primary SEO */}
      {/* ========================================================= */}

      <title>{title || defaultTitle}</title>

      <meta
        name="title"
        content={title || defaultTitle}
      />

      <meta
        name="description"
        content={description || defaultDescription}
      />

      <meta
        name="keywords"
        content={defaultKeywords}
      />

      <meta
        name="author"
        content="Arch Assist"
      />

      <meta
        name="creator"
        content="Arch Assist"
      />

      <meta
        name="publisher"
        content="Arch Assist"
      />

      <meta
        name="copyright"
        content="Arch Assist"
      />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta
        name="googlebot"
        content="index, follow"
      />

      <meta
        name="bingbot"
        content="index, follow"
      />

      <meta
        name="google"
        content="notranslate"
      />

      <link
        rel="canonical"
        href={canonicalURL}
      />

            {/* ========================================================= */}
      {/* Open Graph (Facebook, LinkedIn, WhatsApp, Discord, Telegram) */}
      {/* ========================================================= */}

      <meta property="og:type" content="website" />

      <meta
        property="og:title"
        content={title || defaultTitle}
      />

      <meta
        property="og:description"
        content={description || defaultDescription}
      />

      <meta
        property="og:url"
        content={canonicalURL}
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        property="og:locale"
        content="en_IN"
      />

      <meta
        property="og:image"
        content={defaultImage}
      />

      <meta
        property="og:image:secure_url"
        content={defaultImage}
      />

      <meta
        property="og:image:type"
        content="image/jpeg"
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      <meta
        property="og:image:alt"
        content="Arch Assist - Architecture Mentorship & Professional Design Services"
      />

      {/* ========================================================= */}
      {/* Twitter / X */}
      {/* ========================================================= */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title || defaultTitle}
      />

      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />

      <meta
        name="twitter:image"
        content={defaultImage}
      />

      <meta
        name="twitter:image:alt"
        content="Arch Assist Architecture Services"
      />

      <meta
        name="twitter:site"
        content="@ArchAssist"
      />

      <meta
        name="twitter:creator"
        content="@ArchAssist"
      />

      {/* ========================================================= */}
      {/* Brand Information */}
      {/* ========================================================= */}

      <meta
        property="business:contact_data:country_name"
        content="India"
      />

      <meta
        property="business:contact_data:locality"
        content="Chennai"
      />

      <meta
        property="business:contact_data:region"
        content="Tamil Nadu"
      />

      <meta
        property="business:contact_data:website"
        content={siteURL}
      />

      {/* ========================================================= */}
      {/* Mobile Rich Preview */}
      {/* ========================================================= */}

      <meta
        name="apple-mobile-web-app-title"
        content="Arch Assist"
      />

      <meta
        name="application-name"
        content="Arch Assist"
      />

      {/* ========================================================= */}
      {/* Rich Snippets */}
      {/* ========================================================= */}

      <meta
        itemProp="name"
        content={title || defaultTitle}
      />

      <meta
        itemProp="description"
        content={description || defaultDescription}
      />

      <meta
        itemProp="image"
        content={defaultImage}
      />

      {/* ========================================================= */}
      {/* Classification */}
      {/* ========================================================= */}

      <meta
        name="classification"
        content="Architecture, Education, BIM, Design Services"
      />

      <meta
        name="subject"
        content="Architecture Mentorship & Professional Architectural Services"
      />

      <meta
        name="category"
        content="Architecture"
      />

      <meta
        name="coverage"
        content="Worldwide"
      />

      <meta
        name="target"
        content="Architecture Students, Architects, Designers, Firms"
      />

      <meta
        name="audience"
        content="Students, Professionals, Businesses"
      />

            {/* ========================================================= */}
      {/* Search Engine Hints */}
      {/* ========================================================= */}

      <meta
        name="revisit-after"
        content="7 days"
      />

      <meta
        name="distribution"
        content="global"
      />

      <meta
        name="rating"
        content="general"
      />

      <meta
        name="language"
        content="English"
      />

      <meta
        name="geo.region"
        content="IN-TN"
      />

      <meta
        name="geo.country"
        content="India"
      />

      <meta
        name="ICBM"
        content="13.0827,80.2707"
      />

      {/* ========================================================= */}
      {/* Google Discover */}
      {/* ========================================================= */}

      <meta
        name="news_keywords"
        content={defaultKeywords}
      />

      <meta
        name="thumbnail"
        content={defaultImage}
      />

      <meta
        name="image"
        content={defaultImage}
      />

      {/* ========================================================= */}
      {/* Apple Smart Banner */}
      {/* ========================================================= */}

      <meta
        name="apple-itunes-app"
        content="app-id="
      />

      {/* ========================================================= */}
      {/* Microsoft */}
      {/* ========================================================= */}

      <meta
        name="msapplication-TileColor"
        content="#C9A66B"
      />

      <meta
        name="msapplication-tooltip"
        content="Arch Assist"
      />

      <meta
        name="msapplication-starturl"
        content="/"
      />

      {/* ========================================================= */}
      {/* Security */}
      {/* ========================================================= */}

      <meta
        httpEquiv="X-Content-Type-Options"
        content="nosniff"
      />

      {/* ========================================================= */}
      {/* Performance */}
      {/* ========================================================= */}

      <link
        rel="preload"
        as="image"
        href="/assets/home/final-house.jpg"
      />

      <link
        rel="preload"
        as="image"
        href="/assets/logo/logo.jpeg"
      />

      {/* ========================================================= */}
      {/* Additional Branding */}
      {/* ========================================================= */}

      <meta
        name="brand"
        content="Arch Assist"
      />

      <meta
        name="designer"
        content="Arch Assist"
      />

      <meta
        name="owner"
        content="Arch Assist"
      />

      <meta
        name="reply-to"
        content="contact@archassist.in"
      />

      {/* ========================================================= */}
      {/* Architecture Services */}
      {/* ========================================================= */}

      <meta
        name="service"
        content="Architecture Mentorship"
      />

      <meta
        name="service"
        content="Portfolio Guidance"
      />

      <meta
        name="service"
        content="BIM Modelling"
      />

      <meta
        name="service"
        content="Architectural Design"
      />

      <meta
        name="service"
        content="Concept Development"
      />

      <meta
        name="service"
        content="Site Analysis"
      />

      <meta
        name="service"
        content="2D Drawings"
      />

      <meta
        name="service"
        content="3D Modelling"
      />

      <meta
        name="service"
        content="Rendering"
      />

      <meta
        name="service"
        content="Walkthrough Animation"
      />

      <meta
        name="service"
        content="Working Drawings"
      />

      <meta
        name="service"
        content="Thesis Guidance"
      />

      <meta
        name="service"
        content="Architectural Visualization"
      />

    </Helmet>
  );
}