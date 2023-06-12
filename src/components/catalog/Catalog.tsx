import React from 'react';
import SearchBar from './SearchBar';
import { catalog, fuels, yearOfManufacture } from '@/constants';
import CarCard from './CarCard';
import { carService } from '@/services';
import { SearchParams } from '@/app/page';
import Filter from './Filter';
import ShowMore from './ShowMore';

type CatalogProps = {
  searchParams: SearchParams;
};

const lastYear = new Date().getFullYear() - 1;

const Catalog = async ({ searchParams }: CatalogProps) => {
  // get params from url
  const {
    autoMaker = '',
    year = lastYear,
    fuelType = '',
    limit = 10,
    model = '',
  } = searchParams;
  // fetch cars
  const cars = await carService.fetchCars({
    autoMaker,
    year,
    fuelType,
    limit,
    model,
  });
  // check if cars not found
  const isCarsNotFound =
    !cars || !Array.isArray(cars.data) || cars.data.length < 1;

  const pageNumber = (searchParams.limit || 10) / 10;
  const isNext = (searchParams.limit || 10) > cars.data.length;

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
        <h1 className="text-4xl font-extrabold">{catalog.title}</h1>
        <p>{catalog.subtitle}</p>
      </div>

      <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
        <SearchBar />

        {/* Filters */}
        <div className="flex justify-start flex-wrap items-center gap-2">
          <Filter name="fuel" options={fuels} />
          <Filter name="year" options={yearOfManufacture} />
        </div>
      </div>

      {isCarsNotFound ? (
        <div className="mt-16 flex justify-center items-center flex-col gap-2">
          <h2>Oops, no results found</h2>
          <p>{cars.message}</p>
        </div>
      ) : (
        <section>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
            {cars.data &&
              cars.data.map((car, index) => <CarCard car={car} key={index} />)}
          </div>

          <ShowMore pageNumber={pageNumber} isNext={isNext} />
        </section>
      )}
    </div>
  );
};

export default Catalog;
