import { Footer, Navbar } from '@/components';
import './globals.css';
import { brandName } from '@/constants';

export const metadata = {
  title: brandName,
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
        <Footer />
      </body>
    </html>
  );
}
