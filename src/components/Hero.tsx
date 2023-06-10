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
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0F62FE"
                d="M51.8,-51.2C61.9,-41.8,61.2,-20.9,58.5,-2.7C55.8,15.6,51.3,31.1,41.2,45.7C31.1,60.2,15.6,73.7,0.3,73.4C-14.9,73,-29.7,58.8,-45.7,44.3C-61.7,29.7,-78.7,14.9,-79.2,-0.4C-79.6,-15.8,-63.4,-31.5,-47.5,-40.9C-31.5,-50.4,-15.8,-53.4,2.6,-56C20.9,-58.6,41.8,-60.6,51.8,-51.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
