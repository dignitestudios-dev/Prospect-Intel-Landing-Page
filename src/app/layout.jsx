import { Jost, Bebas_Neue } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Prospect Intel",
  description: "Complete Prospect Insights. Smart Recruiting Starts here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${bebas.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
