import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Cartaz Prático",
  description: "Gerador de Cartazes de forma mais prática e eficiente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
