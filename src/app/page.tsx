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

      {/* this workaround is necessary due to this Next.js bug: https://github.com/vercel/next.js/issues/42292 */}
      {/* @ts-expect-error Server Component */}
      <Catalog searchParams={searchParams} />
    </main>
  );
}
