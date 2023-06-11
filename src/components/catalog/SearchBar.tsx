'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import SearchAutoMakers from './SearchAutoMakers';

const SearchBar = () => {
  const [autoMaker, setAutoMaker] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!autoMaker || !model) {
      return alert('Please fill all the fields');
    }

    updateSearchParams();
  };

  const updateSearchParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    model
      ? searchParams.set('model', model.toLowerCase())
      : searchParams.delete('model');
    autoMaker
      ? searchParams.set('autoMaker', autoMaker.toLowerCase())
      : searchParams.delete('autoMaker');

    const newRelativePathQuery =
      window.location.pathname + '?' + searchParams.toString();
    router.push(newRelativePathQuery);
  };
  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchAutoMakers autoMaker={autoMaker} setAutoMaker={setAutoMaker} />
        <SearchButton classNames="sm:hidden" />
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          src="/car-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton classNames="sm:hidden" />
      </div>
      <SearchButton classNames="max-sm:hidden" />
    </form>
  );
};

const SearchButton = ({ classNames }: { classNames: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${classNames}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="search"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

export default SearchBar;
