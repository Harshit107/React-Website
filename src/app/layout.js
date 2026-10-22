import Sidebar from "../component/Sidebar/Sidebar";
import ThemeChanger from "../component/ThemeManager/ThemeChanger";
import "./globals.css";
import DOMAINS from "../config/domain";

export const metadata = {
  title: "Harshit Keshari (Harshit107) - Portfolio & Resume",
  description: "Portfolio of Harshit Keshari, known as Harshit107. Explore my projects, skills, education, and experience.",
  keywords: ["Harshit", "Harshit107", "Harshit Keshari", "Portfolio", "React Developer", "Software Engineer", "Web Development", "AI", "Frontend Developer"],
  authors: [{ name: "Harshit Keshari", url: DOMAINS.PORTFOLIO.UI }],
  creator: "Harshit Keshari",
  publisher: "Harshit Keshari",
  openGraph: {
    type: "website",
    url: DOMAINS.PORTFOLIO.UI,
    title: "Harshit Keshari (Harshit107) - Portfolio",
    description: "Portfolio of Harshit Keshari, known as Harshit107.",
    siteName: "Harshit Keshari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Keshari (Harshit107) - Portfolio",
    description: "Portfolio of Harshit Keshari, known as Harshit107.",
  },
  icons: {
    icon: "/harshit-logo-fav.ico",
    apple: "/harshit-logo-fav.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body className="dark-mode color-green">
        <div id="root" className="homepage__container">
           <Sidebar className="homepage__sidebar" />
           <ThemeChanger className="homepage__themechange" />
           <div className={`app__container app__container_main-page`}>
             {children}
           </div>
        </div>
      </body>
    </html>
  );
}
