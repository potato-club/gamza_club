import React, { ChangeEvent } from "react";
import { Button } from "@/app/_components/ui/button";
import { useForm } from "react-hook-form";

type SecondCardProps = {
  setStep: (step: "First" | "Second" | "Third") => void;
  formData: {
    email: string;
    password: string;
    confirmPassword: string;
    lastName: string;
    firstName: string;
    department: string;
    studentID: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      confirmPassword: string;
      lastName: string;
      firstName: string;
      department: string;
      studentID: string;
    }>
  >;
};

const SecondCard: React.FC<SecondCardProps> = ({
  setStep,
  formData,
  setFormData,
}) => {
  const handleNext = () => {
    setStep("Third");
  };

  const handlePrev = () => {
    setStep("First");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const inputStyle =
    "w-[350px] h-[45px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500";

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[21px]">
        <input
          name="email"
          key="email"
          placeholder="이메일"
          className={`${inputStyle} mt-[70px]`}
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          key="password"
          type="password"
          placeholder="비밀번호"
          className={inputStyle}
          value={formData.password}
          onChange={handleChange}
        />
        <input
          name="confirmPassword"
          key="confirmPassword"
          type="password"
          placeholder="비밀번호 확인"
          className={inputStyle}
          value={formData.confirmPassword}
          onChange={handleChange}
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
          size="signup"
          className="bg-green-500 text-white hover:bg-white hover:text-green-500 hover:border-[2px] hover:border-green-500"
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default SecondCard;
