import React, { ChangeEvent } from "react";
import { Button } from "@/app/_components/ui/button";

type ThirdCardProps = {
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
  handleSubmit: () => void;
};

const ThirdCard: React.FC<ThirdCardProps> = ({
  setStep,
  formData,
  setFormData,
  handleSubmit,
}) => {
  const handlePrev = () => {
    setStep("Second");
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
        <div className="flex mt-[70px] gap-[30px]">
          <input
            name="lastName"
            placeholder="성"
            className="w-[160px] h-[45px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            name="firstName"
            placeholder="이름"
            className="w-[160px] h-[45px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <input
          name="department"
          placeholder="학과"
          className={inputStyle}
          value={formData.department}
          onChange={handleChange}
        />
        <input
          name="studentID"
          placeholder="학번"
          className={inputStyle}
          value={formData.studentID}
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
          onClick={handleSubmit}
        >
          가입
        </Button>
      </div>
    </div>
  );
};

export default ThirdCard;
