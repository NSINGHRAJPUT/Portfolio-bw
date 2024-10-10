import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neeraj Singh Rajput | Web Developer and Designer",
  description:
    "Welcome to the personal portfolio of Neeraj Singh Rajput, showcasing projects and skills in web development and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Neeraj Singh Rajput, Web Developer, Designer, Portfolio"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nsrgfx.in" />
        <meta
          property="og:image"
          content="https://www.nsrgfx.in/images/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://www.nsrgfx.in/images/twitter-image.jpg"
        />

        <link rel="canonical" href="https://www.nsrgfx.in" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Neeraj Singh Rajput",
            url: "https://www.nsrgfx.in",
            sameAs: [
              "https://www.linkedin.com/in/neeraj-singh-rajput/",
              "https://github.com/neerajsinghrajput",
              "https://twitter.com/neeraj_singh_rajput",
            ],
            jobTitle: "Web Developer and Designer",
            description: metadata.description,
            image: "https://www.nsrgfx.in/images/profile.jpg",
          })}
        </script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
