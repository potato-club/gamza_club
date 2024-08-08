import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/app/_components/ui/button";
import { FormData } from "./formData";
interface SecondCardProps {
  setStep: (step: "First" | "Second" | "Third") => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formData: FormData;
}

const SecondCard: React.FC<SecondCardProps> = ({
  setStep,
  setFormData,
  formData,
}) => {
  const { register, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: formData,
  });

  const onSubmit = (data: FormData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
    setStep("Third");
  };

  const handlePrev = () => {
    setStep("First");
  };

  const inputStyle =
    "w-[350px] h-[45px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500";

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[21px]">
        <input
          {...register("email")}
          placeholder="이메일"
          className={`${inputStyle} mt-[70px]`}
          defaultValue={formData.email}
        />
        <input
          {...register("password")}
          type="password"
          placeholder="비밀번호"
          className={inputStyle}
          defaultValue={formData.password}
        />
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="비밀번호 확인"
          className={inputStyle}
          defaultValue={formData.confirmPassword}
        />
      </div>
      <div className="flex items-center justify-end gap-[10px]">
        <Button
          size="signup"
          className="text-black border-[2px] border-gray-300 hover:bg-white hover:text-green-500 hover:border-[2px] hover:border-green-500"
          onClick={handlePrev}
        >
          이전
        </Button>
        <Button
          type="submit"
          size="signup"
          className="bg-green-500 text-white hover:bg-white hover:text-green-500 hover:border-[2px] hover:border-green-500"
          onClick={handleSubmit(onSubmit)}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default SecondCard;
