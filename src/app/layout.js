import { Inter } from "next/font/google";
import { Blinker } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const blinker = Blinker({
  weight: ['100', '200', '300', '400', '600', '700'],
  subsets: ["latin"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${blinker.className}`}>{children}</body>
    </html>
  );
}
