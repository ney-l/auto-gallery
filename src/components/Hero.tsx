'use client';

import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  const handleScroll = () => {
    console.log('handle scroll');
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Simplify Your Car Rental Journey!</h1>
        <p className="hero__subtitle">
          Efforlessly Discover, Rent, and Cruise with Ease!
        </p>
        <Button
          label="Discover Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="A cool car"
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay">
            <Image
              src="/hero-bg.svg"
              alt="hero background"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
