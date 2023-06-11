import React from 'react';
import SearchBar from './SearchBar';
import { catalog } from '@/constants';
import CarCard from './CarCard';
import { carService } from '@/services';

const Catalog = async () => {
  const cars = await carService.fetchCars('carrera');

  const isCarsNotFound =
    !cars || !Array.isArray(cars.data) || cars.data.length < 1;

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
        <h1 className="text-4xl font-extrabold">{catalog.title}</h1>
        <p>{catalog.subtitle}</p>
      </div>

      <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
        <SearchBar />
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
        </section>
      )}
    </div>
  );
};

export default Catalog;
