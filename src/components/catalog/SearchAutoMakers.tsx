'use client';

import { autoMakers } from '@/constants';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';

type Props = {
  autoMaker: string;
  setAutoMaker: (automaker: string) => void;
};

const SearchAutoMakers = ({ autoMaker, setAutoMaker }: Props) => {
  const [query, setQuery] = useState('');

  const filteredAutoMakers =
    query === ''
      ? autoMakers
      : autoMakers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="flex flex-1 max-sm:w-full justify-start items-center">
      <Combobox value={autoMaker} onChange={setAutoMaker}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/automaker-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="Volkswagen"
            displayValue={(autoMaker: string) => autoMaker}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {filteredAutoMakers.length === 0 && query !== '' ? (
                <div className="cursor-default select-none py-2 pl-10 pr-4">
                  Nothing found
                </div>
              ) : (
                filteredAutoMakers.map((maker) => (
                  <Combobox.Option
                    key={maker}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-primary-blue text-white' : 'text-gray-900'
                      }`
                    }
                    value={maker}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {maker}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchAutoMakers;
