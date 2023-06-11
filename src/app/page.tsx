import { Catalog, Hero } from '@/components';

export type SearchParams = {
  autoMaker: string;
  year: number;
  fuelType: string;
  limit: number;
  model: string;
};

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <main className="overflow-hidden">
      <Hero />

      <Catalog searchParams={searchParams} />
    </main>
  );
}
