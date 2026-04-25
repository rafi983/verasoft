import SiteGlobalStyles from "@/components/site/SiteGlobalStyles";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../css/bootstrap.css";
import "../css/font-awesome.css";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vera Software Solutions",
  description: "Software solutions website converted to a component-based Next.js App Router project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <StyledComponentsRegistry>
          <SiteGlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
