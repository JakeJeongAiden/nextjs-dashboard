//use this file to keep the fonts that will be used throughout the application.

import { Inter, Lusitana } from 'next/font/google';

//specify what subset of the font to use. A file that contains a limited collection of glyphs.
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
