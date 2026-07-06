import { Helmet } from "react-helmet-async";

export default function Meta() {
  return (
    <Helmet
  htmlAttributes={{
    lang: "en",
  }}
>
      {/* ========================================================= */}
      {/* Basic */}
      {/* ========================================================= */}

      <meta charSet="UTF-8" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      <meta
        name="theme-color"
        content="#C9A66B"
      />

      <meta
        name="application-name"
        content="Arch Assist"
      />

      <meta
        name="author"
        content="Arch Assist"
      />

      <meta
        name="generator"
        content="React + Vite"
      />

      <meta
        name="referrer"
        content="strict-origin-when-cross-origin"
      />

      <meta
        name="color-scheme"
        content="light"
      />

      <meta
        name="format-detection"
        content="telephone=no,email=no,address=no"
      />

      {/* ========================================================= */}
      {/* Language */}
      {/* ========================================================= */}

      <html lang="en" />

      <meta
        httpEquiv="content-language"
        content="en-IN"
      />

      {/* ========================================================= */}
      {/* Progressive Web App */}
      {/* ========================================================= */}

      <link
        rel="manifest"
        href="/manifest.json"
      />

      <meta
        name="mobile-web-app-capable"
        content="yes"
      />

      <meta
        name="apple-mobile-web-app-capable"
        content="yes"
      />

      <meta
        name="apple-mobile-web-app-title"
        content="Arch Assist"
      />

      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="default"
      />

      {/* ========================================================= */}
      {/* Icons */}
      {/* ========================================================= */}

      <link
        rel="icon"
        type="image/jpeg"
        href="/assets/logo/logo.jpeg"
      />

      <link
        rel="shortcut icon"
        href="/assets/logo/logo.jpeg"
      />

      <link
        rel="apple-touch-icon"
        href="/assets/logo/logo.jpeg"
      />

      {/* ========================================================= */}
      {/* Performance */}
      {/* ========================================================= */}

      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />

      <link
        rel="dns-prefetch"
        href="//fonts.googleapis.com"
      />

      <link
        rel="dns-prefetch"
        href="//fonts.gstatic.com"
      />

      {/* ========================================================= */}
      {/* Windows */}
      {/* ========================================================= */}

      <meta
        name="msapplication-TileColor"
        content="#C9A66B"
      />

      <meta
        name="msapplication-config"
        content="/browserconfig.xml"
      />
       
             {/* ========================================================= */}
      {/* Search Engine Verification (Replace after deployment) */}
      {/* ========================================================= */}

      <meta
        name="google-site-verification"
        content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE"
      />

      <meta
        name="msvalidate.01"
        content="YOUR_BING_VERIFICATION_CODE"
      />

      <meta
        name="p:domain_verify"
        content="YOUR_PINTEREST_VERIFICATION_CODE"
      />

      <meta
        name="facebook-domain-verification"
        content="YOUR_FACEBOOK_VERIFICATION_CODE"
      />

      {/* ========================================================= */}
      {/* Default Open Graph (Fallback) */}
      {/* ========================================================= */}

      <meta
        property="og:locale"
        content="en_IN"
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="Arch Assist"
      />

      <meta
        property="og:image"
        content="/assets/logo/logo.jpeg"
      />

      <meta
        property="og:image:secure_url"
        content="/assets/logo/logo.jpeg"
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

      {/* ========================================================= */}
      {/* Twitter / X */}
      {/* ========================================================= */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:image"
        content="/assets/logo/logo.jpeg"
      />

      {/* ========================================================= */}
      {/* Social Preview */}
      {/* ========================================================= */}

      <meta
        property="og:image:alt"
        content="Arch Assist - Architecture Mentorship & Design Services"
      />

      <meta
        name="twitter:image:alt"
        content="Arch Assist Architecture Services"
      />

      {/* ========================================================= */}
      {/* Copyright */}
      {/* ========================================================= */}

      <meta
        name="copyright"
        content="© Arch Assist. All Rights Reserved."
      />

      {/* ========================================================= */}
      {/* Distribution */}
      {/* ========================================================= */}

      <meta
        name="distribution"
        content="global"
      />

      <meta
        name="rating"
        content="general"
      />

      <meta
        name="revisit-after"
        content="7 days"
      />

    </Helmet>
  );
}