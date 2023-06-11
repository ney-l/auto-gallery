'use client';

import { carRentCalculator } from '@/services';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../Button';
import CarDetails from './CarDetails';

export type Car = {
  cityMpg: number;
  carClass: string;
  combinationMpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuelType: string;
  highwayMpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
  images: {
    main: string;
    front: string;
    top: string;
    back: string;
  };
};

type Props = {
  car: Car;
};

const CarCard = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cityMpg, year, make, model, transmission, drive } = car;
  const carRent = carRentCalculator.calculateCarRent(cityMpg, year);

  const icons = [
    {
      image: '/steering-wheel.svg',
      altText: 'steering wheel',
      title: transmission === 'a' ? 'Automatic' : 'Manual',
    },
    {
      image: '/tire.svg',
      altText: 'tire',
      title: drive.toUpperCase(),
    },
    {
      image: '/gas.svg',
      altText: 'gas',
      title: `${cityMpg} MPG`,
    },
  ];

  return (
    <div className=" flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>{' '}
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={car.images.main}
          alt="car model"
          priority
          fill
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          {/* Icons */}
          {icons.map((item) => (
            <Icon
              key={item.title}
              title={item.title}
              image={item.image}
              altText={item.altText}
            />
          ))}
        </div>
        {/* button */}
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <Button
            label="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

type IconProps = {
  title: string;
  image: string;
  altText: string;
};
const Icon = ({ title, image, altText }: IconProps) => (
  <div className="flex flex-col justify-center items-center gap-2">
    <Image src={image} width={20} height={20} alt={altText} />
    <p className="text-[14px]">{title}</p>
  </div>
);

export default CarCard;
