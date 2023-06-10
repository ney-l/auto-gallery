'use client';

import Image from 'next/image';
import Button from './Button';
import { hero } from '@/constants';

const Hero = () => {
  const handleScroll = () => {
    console.log('handle scroll');
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <Button
          label={hero.callToActionTitle}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay">
          <Image
            src={hero.bg}
            alt={hero.bgAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
