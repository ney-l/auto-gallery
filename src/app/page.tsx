import { Catalog, Hero } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <Catalog />
    </main>
  );
}
