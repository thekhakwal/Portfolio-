// app/layout.tsx
import './globals.css';
import GlobalProvider from '@/context/GlobalProvider';
export const metadata = {
  title: 'Komal Kharkwal | Portfolio',
  description: 'Frontend Developer Portfolio Website',
  icons: {
    icon: '/favicon.ico', // if you used PNG, write '/favicon.png'
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
