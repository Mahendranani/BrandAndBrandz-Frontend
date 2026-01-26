import type { Metadata } from "next";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Brand and Brandz",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-0 m-0 bg-black">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
