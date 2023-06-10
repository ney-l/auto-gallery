import { Navbar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Auto Gallery',
  description: 'Find the best rides in the world! 🚘🚙',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
