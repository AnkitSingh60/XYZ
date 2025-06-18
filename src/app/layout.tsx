import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./component/Navbar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Apps, Webdesign, E-commerce & E-marketing | TenTwenty | Dubai UAE",
  description: "Created by Ankit Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
