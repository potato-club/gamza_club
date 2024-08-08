"use client";
import React, { useState, useEffect } from "react";
import { useFunnel } from "@/app/_hooks/useFunnel";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  lastName: string;
  firstName: string;
  department: string;
  studentID: string;
}

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

  const handleSubmitForm = () => {
    console.log("Form submitted with data: ", formData);
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
            setFormData={setFormData}
            formData={formData}
          />
        </Funnel.Step>
        <Funnel.Step name="Third">
          <ThirdCard
            setStep={setStep}
            setFormData={setFormData}
            handleSubmitForm={handleSubmitForm}
          />
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

export default CardNumber;
