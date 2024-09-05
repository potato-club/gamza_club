import { Input, InputProps } from "@/app/_components/ui/input";
import { forwardRef } from "react";

interface CardInputProps extends InputProps {
  stringSize: "small" | "medium" | "large";
  value: any;
}

const NormalInput = forwardRef<HTMLInputElement, CardInputProps>(
  ({ stringSize, className, type, value, ...props }, ref) => {
    const sizeVariant = {
      small: "normal-input w-[165px]",
      medium: "normal-input w-[225px]",
      large: "normal-input w-[360px]",
    };

    return (
      <Input
        className={`${sizeVariant[stringSize]}`}
        {...props}
        ref={ref}
        type={type}
        value={value}
      />
    );
  }
);

NormalInput.displayName = "CardInput";

export default NormalInput;
