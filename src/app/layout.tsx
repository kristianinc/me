import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "xankiiza",
  description:
    "A premium one-page personal portfolio built with Next.js, refined typography, layered imagery, and smooth motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const saved = localStorage.getItem("theme");
                const theme = saved || "dark";
                document.documentElement.dataset.theme = theme;
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
