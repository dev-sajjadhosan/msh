import type { Metadata } from "next";
import { Syne, Space_Mono, Inter, Outfit, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const gaming = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-gaming",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sajjad — Full-Stack Developer",
  description: "I craft performant, scalable web apps with obsessive attention to UX & code quality. Based in Bangladesh.",
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
        syne.variable,
        spaceMono.variable,
        inter.variable,
        outfit.variable,
        gaming.variable
      )}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className="bg-background text-foreground font-syne min-h-full flex flex-col transition-colors duration-500">{children}</body>
      </ThemeProvider>
    </html>
  );
}
