"use client";
import React, { useState } from "react";
import { useFunnel } from "@/app/_hooks/useFunnel";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
  lastName: string;
  firstName: string;
  department: string;
  studentID: string;
};

const CardNumber = () => {
  const { Funnel, setStep } = useFunnel<"First" | "Second" | "Third">("First");

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    lastName: "",
    firstName: "",
    department: "",
    studentID: "",
  });

  const handleSubmit = async () => {
    console.log(formData);
  };

  return (
    <div>
      <Funnel>
        <Funnel.Step name="First">
          <FirstCard setStep={setStep} />
        </Funnel.Step>
        <Funnel.Step name="Second">
          <SecondCard
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        </Funnel.Step>
        <Funnel.Step name="Third">
          <ThirdCard
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

export default CardNumber;
