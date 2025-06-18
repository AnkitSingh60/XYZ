import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./component/Navbar";

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
        {children}
      </body>
    </html>
  );
}
