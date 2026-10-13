import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petrović Geodezija — geodetski biro Kraljevo",
  description:
    "Licencirani geodetski biro u Kraljevu: katastarsko snimanje, parcelacija, iskolčenje. Elaborat za 48 sati i cena unapred. (DUMMY_DATA)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr-Latn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
