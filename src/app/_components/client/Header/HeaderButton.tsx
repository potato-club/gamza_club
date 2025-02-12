'use client';

import '@/app/_styles/header.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface ButtonProps {
  id?: string;
  imageSrc: string | StaticImport;
  desc: string;
  width?: number;
  height?: number;
  padding?: number;
  onClick?: () => void;
}

const HeaderButton = ({
  id,
  imageSrc,
  desc,
  width,
  height,
  onClick,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className="transition-button relative group hover:bg-gray-200"
      onClick={onClick}
    >
      <Image
        src={imageSrc}
        width={width}
        height={height}
        alt={desc}
        className="rounded-full aspect-square"
      />
      <span className="absolute-center group-button-desc transition-button hover-opacity mt-1">
        {desc}
      </span>
    </button>
  );
};

export default HeaderButton;
