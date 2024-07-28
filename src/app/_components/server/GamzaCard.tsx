import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import { Input, InputProps } from '@/app/_components/ui/input';

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

export const CardButton = ({ ...props }) => {
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
      {props.text}
    </button>
  );
};

interface CardInputProps extends InputProps {
  stringSize: 'medium' | 'large';
}
export const CardInput = React.forwardRef<HTMLInputElement, CardInputProps>(
  ({ stringSize, className, type, ...props }, ref) => {
    const sizeVariant = {
      medium: 'normal-input w-[225px]',
      large: 'normal-input w-[360px]',
    };
    return (
      <Input
        className={
          stringSize === 'medium'
            ? `${sizeVariant.medium}`
            : `${sizeVariant.large}`
        }
        {...props}
        ref={ref}
        type={type}
      />
    );
  }
);
