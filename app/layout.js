import "./globals.css";
import { SITE_URL } from "./site";

const DESCRIPTION =
  "Gilles Beugnies is an XR developer based in Belgium and a Howest graduate, building spatial experiences and AI glasses applications.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Gilles Beugnies — XR / AR Developer",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Gilles Beugnies",
    title: "Gilles Beugnies — XR / AR Developer",
    description: DESCRIPTION,
    images: [{ url: "/images/Face.png", alt: "Gilles Beugnies" }],
  },
  twitter: {
    card: "summary",
    title: "Gilles Beugnies — XR / AR Developer",
    description: DESCRIPTION,
    images: ["/images/Face.png"],
  },
};

// Structured data so search engines and AI search know who this site is about.
// Deliberately contains no email, phone number or street address.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gilles Beugnies",
  url: SITE_URL,
  image: `${SITE_URL}/images/Face.png`,
  jobTitle: "XR Developer / Software Engineer",
  description: DESCRIPTION,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Howest University of Applied Sciences",
    url: "https://www.howest.be",
  },
  homeLocation: { "@type": "Country", name: "Belgium" },
  knowsAbout: [
    "Extended reality (XR)",
    "Augmented reality",
    "AI glasses",
    "Spatial computing",
    "Unity",
    "Apple Vision Pro",
    "Software engineering",
  ],
  sameAs: [
    "https://www.linkedin.com/in/gilles-beugnies/",
    "https://github.com/GillesBeugnies",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        <meta name="google-site-verification" content="chhsC9iHVo8N36L-JViIw084TD9vOPlRiC7gie44k08" />
      </head>
      <body>{children}</body>
    </html>
  );
}
