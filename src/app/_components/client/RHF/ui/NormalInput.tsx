import { Input, InputProps } from '@/app/_components/ui/input';
import { forwardRef } from 'react';

interface CardInputProps extends InputProps {
  stringSize: 'medium' | 'large';
}
const NormalInput = forwardRef<HTMLInputElement, CardInputProps>(
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
NormalInput.displayName = 'CardInput';

export default NormalInput;
