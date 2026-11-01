
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YES Événementiel | Location et décoration",
  description:
    "Location de chapiteaux, chaises VIP, tables, sonorisation, décoration et services traiteur à Ouagadougou.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
