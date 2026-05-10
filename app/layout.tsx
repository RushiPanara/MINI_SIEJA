import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIEJA",
  description: "Transforming Ideas Into Reality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

