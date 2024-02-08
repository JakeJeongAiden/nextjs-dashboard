import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

//By adding Inter to the body element, the font will be applied throughout the application.
//antialiased render text using grayscale antialaising. It smoothes the edges of the text.
