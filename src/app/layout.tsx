import localFont from "@next/font/local";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "Next.js landing page",
  description: "A simple starter to build a blazing fast modern website",
};

const helveticaNue = localFont({
  variable: "--font-helvetica-nue",
  src: [
    {
      path: "./../../public/assets/fonts/HelveticaNeueBold.ttf",
      weight: "700",
    },
    {
      path: "./../../public/assets/fonts/HelveticaNeueMedium.ttf",
      weight: "500",
    },
    {
      path: "./../../public/assets/fonts/HelveticaNeueLight.ttf",
      weight: "400",
    },
    {
      path: "./../../public/assets/fonts/HelveticaNeueThin.ttf",
      weight: "300",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="lofi">
      <body className={`${helveticaNue.variable} font-sans`}>
        <Navbar />

        <div className="min-h-screen">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
