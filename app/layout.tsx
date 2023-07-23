import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        // strategy="beforeInteractive"
      />
      <body className="{inter.className}">
        {children}
        <Script src="/script/decap-to-admin.js"></Script>
      </body>
    </html>
  );
}
