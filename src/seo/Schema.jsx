import { Helmet } from "react-helmet-async";

export default function Schema() {

  const schema = [

    /* ===========================================================
       ORGANIZATION
    =========================================================== */

    {
      "@context": "https://schema.org",

      "@type": "Organization",

      "@id": "https://archassist.in/#organization",

      "name": "Arch Assist",

      "url": "https://archassist.in",

      "logo": {
        "@type": "ImageObject",
        "url": "https://archassist.in/assets/logo/logo.jpeg"
      },

      "image": "https://archassist.in/assets/logo/logo.jpeg",

      "description":
        "Arch Assist is an architecture mentorship and architectural services platform helping students, architects and professionals through BIM Modelling, Architectural Design, Portfolio Guidance, Thesis Mentorship, Working Drawings, Site Analysis, Rendering, Walkthroughs and Concept Development.",

      "email": "contact@archassist.in",

      "telephone": "+91XXXXXXXXXX",

      "areaServed": {
        "@type": "Country",
        "name": "India"
      },

      "knowsAbout": [

        "Architecture",

        "Architectural Design",

        "Architecture Mentorship",

        "Portfolio Guidance",

        "BIM Modelling",

        "Architectural Visualization",

        "Working Drawings",

        "2D Drafting",

        "3D Modelling",

        "Site Analysis",

        "Concept Development",

        "Rendering",

        "Walkthrough Animation",

        "Architecture Thesis",

        "Construction Drawings"

      ],

      "sameAs": [

        "https://www.instagram.com/archassist",

        "https://www.linkedin.com/company/archassist"

      ]

    },



    /* ===========================================================
       WEBSITE
    =========================================================== */

    {

      "@context":"https://schema.org",

      "@type":"WebSite",

      "@id":"https://archassist.in/#website",

      "url":"https://archassist.in",

      "name":"Arch Assist",

      "publisher":{
        "@id":"https://archassist.in/#organization"
      },

      "description":
      "Architecture Mentorship and Professional Architectural Services.",

      "inLanguage":"en-IN"

    },



    /* ===========================================================
       WEBPAGE
    =========================================================== */

    {

      "@context":"https://schema.org",

      "@type":"WebPage",

      "@id":"https://archassist.in/#webpage",

      "url":"https://archassist.in",

      "name":"Arch Assist",

      "isPartOf":{
        "@id":"https://archassist.in/#website"
      },

      "about":{
        "@id":"https://archassist.in/#organization"
      },

      "primaryImageOfPage":{

        "@type":"ImageObject",

        "url":
        "https://archassist.in/assets/logo/logo.jpeg"

      },

      "datePublished":"2026-07-05",

      "dateModified":"2026-07-05",

      "description":

      "Architecture Mentorship, BIM Modelling, Portfolio Guidance, Architectural Design, Site Analysis, Rendering, Walkthroughs, Thesis Guidance and Professional Architectural Services."

    },

        /* ===========================================================
       PROFESSIONAL SERVICE
    =========================================================== */

    {

      "@context":"https://schema.org",

      "@type":"ProfessionalService",

      "@id":"https://archassist.in/#service",

      "name":"Arch Assist",

      "url":"https://archassist.in",

      "image":"https://archassist.in/assets/logo/logo.jpeg",

      "logo":"https://archassist.in/assets/logo/logo.jpeg",

      "description":

      "Arch Assist provides architecture mentorship, BIM Modelling, portfolio guidance, architectural visualization, concept development, working drawings, rendering, walkthroughs and professional architectural consultation.",

      "provider":{
        "@id":"https://archassist.in/#organization"
      },

      "areaServed":{
        "@type":"Country",
        "name":"India"
      },

      "serviceType":[

        "Architecture Mentorship",

        "Portfolio Guidance",

        "Architectural Design",

        "BIM Modelling",

        "2D Drawings",

        "3D Modelling",

        "Architectural Rendering",

        "Walkthrough Animation",

        "Concept Development",

        "Working Drawings",

        "Site Analysis",

        "Architecture Thesis Guidance",

        "Architectural Visualization"

      ],

      "hasOfferCatalog":{

        "@type":"OfferCatalog",

        "name":"Architecture Services",

        "itemListElement":[

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"Architecture Mentorship",

              "description":"One-to-one mentorship for architecture students, design guidance and project reviews."

            }
          },

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"Portfolio Guidance",

              "description":"Professional architecture portfolio review and improvement."

            }
          },

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"BIM Modelling",

              "description":"Professional BIM modelling using industry-standard workflows."

            }
          },

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"Architectural Design",

              "description":"Residential, commercial and institutional architectural design."

            }
          },

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"2D Drawings",

              "description":"Floor plans, elevations, sections and construction drawings."

            }
          },

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"3D Modelling",

              "description":"High quality architectural 3D models for presentations."

            }
          },

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"Rendering",

              "description":"Photorealistic architectural rendering for interior and exterior projects."

            }
          },

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"Walkthrough Animation",

              "description":"Architectural walkthrough videos and visualization."

            }
          },

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"Site Analysis",

              "description":"Professional site analysis including climate, zoning and contextual studies."

            }
          },

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"Working Drawings",

              "description":"Construction-ready working drawings and detailing."

            }
          },

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"Concept Development",

              "description":"Architectural concept development from initial ideas to presentation."

            }
          },

          {
            "@type":"Offer",

            "itemOffered":{

              "@type":"Service",

              "name":"Architecture Thesis Guidance",

              "description":"Complete thesis mentoring, design reviews and presentation support."

            }
          }

        ]

      }

    },

        /* ===========================================================
       LOCAL BUSINESS
    =========================================================== */

    {

      "@context":"https://schema.org",

      "@type":"LocalBusiness",

      "@id":"https://archassist.in/#localbusiness",

      "name":"Arch Assist",

      "url":"https://archassist.in",

      "image":"https://archassist.in/assets/home/final-house.jpg",

      "logo":"https://archassist.in/assets/logo/logo.jpeg",

      "priceRange":"₹₹",

      "description":

      "Professional architecture mentorship and architectural design services including BIM Modelling, Portfolio Guidance, Architectural Visualization, Working Drawings, Site Analysis, Rendering and Walkthroughs.",

      "telephone":"+91XXXXXXXXXX",

      "email":"contact@archassist.in",

      "address":{

        "@type":"PostalAddress",

        "addressCountry":"IN",

        "addressRegion":"Tamil Nadu",

        "addressLocality":"Chennai"

      },

      "geo":{

        "@type":"GeoCoordinates",

        "latitude":"13.0827",

        "longitude":"80.2707"

      },

      "areaServed":[

        {
          "@type":"Country",
          "name":"India"
        },

        {
          "@type":"AdministrativeArea",
          "name":"Tamil Nadu"
        }

      ],

      "currenciesAccepted":"INR",

      "paymentAccepted":[

        "UPI",

        "Credit Card",

        "Debit Card",

        "Bank Transfer"

      ]

    },



    /* ===========================================================
       CONTACT POINT
    =========================================================== */

    {

      "@context":"https://schema.org",

      "@type":"ContactPoint",

      "@id":"https://archassist.in/#contact",

      "contactType":"Customer Support",

      "telephone":"+91XXXXXXXXXX",

      "email":"contact@archassist.in",

      "availableLanguage":[

        "English",

        "Tamil"

      ],

      "areaServed":"IN"

    },



    /* ===========================================================
       IMAGE OBJECT
    =========================================================== */

    {

      "@context":"https://schema.org",

      "@type":"ImageObject",

      "@id":"https://archassist.in/#heroimage",

      "contentUrl":

      "https://archassist.in/assets/logo/logo.jpeg",

      "caption":

      "Arch Assist Architecture Mentorship and Professional Design Services"

    },



    /* ===========================================================
       LOGO IMAGE
    =========================================================== */

    {

      "@context":"https://schema.org",

      "@type":"ImageObject",

      "@id":"https://archassist.in/#logo",

      "contentUrl":

      "https://archassist.in/assets/logo/logo.jpeg",

      "caption":"Arch Assist Logo"

    },



    /* ===========================================================
       SOCIAL PROFILES
    =========================================================== */

    {

      "@context":"https://schema.org",

      "@type":"ProfilePage",

      "@id":"https://archassist.in/#social",

      "mainEntity":{

        "@type":"Organization",

        "name":"Arch Assist",

        "sameAs":[

          "https://www.instagram.com/archassist",

          "https://www.linkedin.com/company/archassist"

        ]

      }

    },

    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What exactly does your platform help architecture students with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Arch Assist helps architecture students with site analysis, concept development, architectural planning, 2D drafting, 3D modelling, rendering, presentation sheets, portfolios, thesis projects and design documentation."
      }
    },
    {
      "@type": "Question",
      "name": "Who is this service designed for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our services are designed for B.Arch students, Interior Design students, Diploma Architecture students, Landscape Architecture students, thesis students and recent graduates building professional portfolios."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help if my submission deadline is very close?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We assist students working with tight academic deadlines. Share your submission date and project requirements, and we will evaluate the work and provide a realistic delivery timeline while maintaining quality."
      }
    },
    {
      "@type": "Question",
      "name": "Can you develop a concept if I don't have one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We help students develop architectural concepts based on site conditions, project requirements, sustainability goals, user needs and design objectives."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide site analysis services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide location analysis, climate studies, sun path analysis, wind analysis, SWOT analysis, accessibility studies, land-use analysis and circulation studies presented in a professional format."
      }
    },
    {
      "@type": "Question",
      "name": "Which software do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depending on the project, we use AutoCAD, SketchUp, Revit, Lumion, Enscape, V-Ray, Photoshop, Illustrator and Adobe InDesign."
      }
    },
    {
      "@type": "Question",
      "name": "Can you create high-quality 3D models and renders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We create architectural 3D models, interior and exterior renders, day and night visualizations, material studies and presentation-quality renderings."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with thesis projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We support architecture thesis projects with topic selection, literature reviews, case studies, concept development, design progression, presentation sheets and final jury preparation."
      }
    },
    {
      "@type": "Question",
      "name": "Can beginners use your services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We help first-year and second-year architecture students with software learning, design development, presentations and project guidance."
      }
    },
    {
      "@type": "Question",
      "name": "What makes your platform different from others?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Arch Assist focuses exclusively on architecture education and professional architectural support. We understand architectural workflows, jury expectations, portfolio standards and academic requirements, providing mentorship tailored specifically for architecture students."
      }
    }
  ]
}

  ];

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}