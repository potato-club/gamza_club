import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/app/_components/ui/button";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  lastName: string;
  firstName: string;
  department: string;
  studentID: string;
}

interface ThirdCardProps {
  setStep: (step: "First" | "Second" | "Third") => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleSubmitForm: () => void;
}

const ThirdCard: React.FC<ThirdCardProps> = ({
  setStep,
  setFormData,
  handleSubmitForm,
}) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
    handleSubmitForm();
  };

  const handlePrev = () => {
    setStep("Second");
  };

  const inputStyle =
    "w-[350px] h-[45px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[32px]"
    >
      <div className="flex flex-col gap-[21px]">
        <div className="flex mt-[70px] gap-[30px]">
          <input
            {...register("lastName")}
            placeholder="성"
            className="w-[160px] h-[45px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500"
          />
          <input
            {...register("firstName")}
            placeholder="이름"
            className="w-[160px] h-[45px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500"
          />
        </div>
        <input
          {...register("department")}
          placeholder="학과"
          className={inputStyle}
        />
        <input
          {...register("studentID")}
          placeholder="학번"
          className={inputStyle}
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
        >
          가입
        </Button>
      </div>
    </form>
  );
};

export default ThirdCard;
