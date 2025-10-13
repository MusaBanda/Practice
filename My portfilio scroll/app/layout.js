import { Outfit, Ovo, Roboto, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const s = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth  dark">
      <head>
        <title>Portfolio</title>
        <meta name="description" content="" />
      </head>
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden `}
      >
        <ThemeProvider attribute="class">
          {children}
         </ThemeProvider>
      </body>
    </html>
  );
}
