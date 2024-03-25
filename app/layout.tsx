import type { Metadata } from "next";
import "./globals.css";
import HeaderBackground from "@/components/header-background";
import Header from "@/components/header";

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
        <HeaderBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
