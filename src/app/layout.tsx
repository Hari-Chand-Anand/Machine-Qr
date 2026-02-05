import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine QR System",
  description: "QR-based machine information system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
