import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rodger Creations Studio | Retention Engineering',
  description: 'Viral growth through high-retention video editing. Specialized in psychological hooks and YouTube growth strategy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Inter:wght@400;700&family=Roboto+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-black">{children}</body>
    </html>
  );
}