import { Inter } from "next/font/google";
import { Blinker } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const blinker = Blinker({
  weight: ["100", "200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Tafaling",
  description: "Share the madness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${inter.className} ${blinker.className}`}>
        {children}
      </body>
    </html>
  );
}
