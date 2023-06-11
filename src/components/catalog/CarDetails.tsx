'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Car } from './CarCard';
import { Fragment } from 'react';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  car: Car;
};

const CarDetails = ({ isOpen, closeModal, car }: Props) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <DialogTransition />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <CloseButton onCloseModal={closeModal} />

                  <CarImages />

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>

                    <DetailsTable car={car} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const DialogTransition = () => (
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-black bg-opacity-25" />
  </Transition.Child>
);

const CloseButton = ({ onCloseModal }: { onCloseModal: () => void }) => (
  <button
    type="button"
    onClick={onCloseModal}
    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
  >
    <Image
      src="/close.svg"
      alt="close"
      width={20}
      height={20}
      className="object-contain"
    />
  </button>
);

const CarImages = () => (
  <div className="flex-1 flex flex-col gap-3">
    <CarMainImage />
    <div className="flex gap-3">
      <CarImage />
      <CarImage />
      <CarImage />
    </div>
  </div>
);

const CarMainImage = () => (
  <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
    <Image
      src="/hero.png"
      alt="car model"
      priority
      fill
      className="object-contain"
    />
  </div>
);

const CarImage = () => (
  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
    <Image
      src="/hero.png"
      alt="car model"
      priority
      fill
      className="object-contain"
    />
  </div>
);

const DetailsTable = ({ car }: { car: Car }) => {
  const formatedCar: Record<string, any> = {};
  Object.entries(car).forEach(([key, value]) => {
    formatedCar[key.split(/(?=[A-Z])/).join(' ')] = value;
  });

  return (
    <div className="mt-3 flex flex-wrap gap-4">
      {Object.entries(formatedCar).map(([key, value]) => (
        <div key={key} className="flex justify-between gap-5 w-full text-right">
          <h4 className="text-grey capitalize">{key}</h4>
          <p className="text-black-100 font-semibold capitalize">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default CarDetails;
