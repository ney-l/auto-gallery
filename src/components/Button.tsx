'use client';

import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

type Props = {
  label: string;
  containerStyles?: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  rightIcon?: string;
  isDisabled?: boolean;
};

function Button({
  label,
  containerStyles,
  handleClick,
  btnType = 'button',
  textStyles,
  rightIcon,
}: Props) {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{label}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default Button;
