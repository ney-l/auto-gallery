'use client';

import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

type Props = {
  label: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
};

function Button({
  label,
  containerStyles,
  handleClick,
  btnType = 'button',
}: Props) {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{label}</span>
    </button>
  );
}

export default Button;
