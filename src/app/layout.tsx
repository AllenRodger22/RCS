
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rodger Creations Studio | Video Editor Portfolio',
  description: 'High-retention video editing focused on YouTube growth, viral reach, and audience satisfaction. Specialized in fast-paced gaming content and Shorts.',
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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
