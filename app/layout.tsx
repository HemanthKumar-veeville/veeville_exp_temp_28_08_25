import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Veeville - Where grown-ups remember how to play",
  description:
    "A set of hand-crafted immersive experiences for your team and leadership. Through play, touch, wonder, and experimentation, we help teams unlearn biases, collaborate organically, and see challenges with fresh eyes.",
  generator: "Veeville Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https:; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'self';"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia+Pro:wght@182;296;433;622;727&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
