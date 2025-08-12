import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Predictive Workshops — Air Cargo",
  description: "Gathering business requirements for practical AI & predictive use cases.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
