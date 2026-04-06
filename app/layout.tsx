import type { Metadata } from "next";
import { Changa_One, Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const changaOne = Changa_One({
  weight: "400",
  variable: "--font-changa-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "msh - Portfolio",
  description: "Portfolio of Mohammad Sajjad Hosan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        josefinSans.variable,
        inter.variable,
        changaOne.variable,
      )}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </ThemeProvider>
    </html>
  );
}
