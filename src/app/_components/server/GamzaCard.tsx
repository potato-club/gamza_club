import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';

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
  color?: 'green';
  text: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  onSubmit?: () => void;
  value?: 'prev' | 'next' | 'submit';
  disabled?: boolean;
}

export const CardButton = ({ ...props }: CardButtonProps) => {
  const colorVariant = {
    init: 'normal-button font-bold',
    green: 'normal-button bg-[#36AE5A] text-white font-bold',
  };
  return (
    <button
      className={`${
        props.color === 'green' ? colorVariant.green : colorVariant.init
      } ${
        props.disabled && 'bg-gray-100 text-slate-400 hover:cursor-not-allowed'
      }`}
      {...props}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
