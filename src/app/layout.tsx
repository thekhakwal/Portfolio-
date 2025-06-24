// app/layout.tsx
import './globals.css';
import GlobalProvider from '@/context/GlobalProvider';


export const metadata = {
  title: 'Komal Kharkwal | Abhiko | Abhishek Kumar Majumdar – Frontend Developer Portfolio',
  description: 'Portfolio of Komal Kharkwal a.k.a Abhiko, built by Abhishek Kumar Majumdar – Expert in frontend, UI/UX, and AR Development.',
  keywords: ['Komal Kharkwal', 'Abhiko', 'Abhishek Kumar Majumdar', 'Frontend Developer', 'UI/UX Designer', 'AR Developer', 'Next.js Portfolio'],
  authors: [{ name: 'Abhishek Kumar Majumdar', url: 'https://Abhishekkumarmajumdar.in' }],
  openGraph: {
    title: 'Komal Kharkwal | Frontend Developer',
    description: 'Creative frontend portfolio website by Abhiko & Abhishek Kumar Majumdar.',
    url: 'https://komalkharkwal.vercel.app',
    siteName: 'Komal Kharkwal Portfolio',
    images: [
      {
        url: '../../public/Asset/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Komal Kharkwal Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
