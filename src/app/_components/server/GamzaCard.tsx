import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import { Input } from '@/app/_components/ui/input';

interface Props {
  title: string;
  content: React.ReactNode;
}
const GamzaCard = ({ title, content }: Props) => {
  return (
    <Card className="flex-col gap-y-4 w-[626px] px-10 py-9 bg-white rounded-3xl">
      <CardHeader className="flex-row justify-between p-0">
        <div className="flex gap-x-4 items-center">
          <img
            src="/Logo.svg"
            width={48}
            height={48}
            className="rounded-full"
          />
          <CardTitle className="w-full text-2xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4 p-0">{content}</CardContent>
    </Card>
  );
};

export default GamzaCard;

interface CardButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  color?: 'green' | 'init';
}

export const CardButton = ({ text, ...props }: CardButtonProps) => {
  const colorVariant = {
    init: 'normal-button font-bold',
    green: 'normal-button bg-[#36AE5A] text-white font-bold',
  };
  return (
    <button
      className={
        props.color === 'green' ? colorVariant.green : colorVariant.init
      }
      {...props}
    >
      {text}
    </button>
  );
};

interface CardInputProps {
  size: 'medium' | 'large';
  type?: 'text' | 'number' | 'password' | 'file';
  placeholder?: string;
  name?: string;
}

export const CardInput = ({ size, ...props }: CardInputProps) => {
  const sizeVariant = {
    medium: 'normal-input w-[225px]',
    large: 'normal-input w-[360px]',
  };
  return (
    <Input
      id="picture"
      {...props}
      className={
        size === 'medium' ? `${sizeVariant.medium}` : `${sizeVariant.large}`
      }
    />
  );
};
