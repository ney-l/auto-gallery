'use client';

import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

type Props = {
  label: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

function Button({ label, containerStyles, handleClick }: Props) {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{label}</span>
    </button>
  );
}

export default Button;
