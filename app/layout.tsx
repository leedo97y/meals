import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/main-header/header";

export const metadata: Metadata = {
  title: "Foodie-Meals",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
