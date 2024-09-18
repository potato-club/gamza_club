"use client";
import React, { useState } from "react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import { useFormFunnel } from "@/app/_hooks/useFormFunnel";
import { SignUpSchema } from "@/app/_utils/validator/signup";
import axios from "axios";
import { useRouter } from "next/navigation";
const CardNumber = () => {
  const { FormFunnel, setStep } = useFormFunnel<"First" | "Second" | "Third">(
    "First"
  );
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const response = await axios.post("http://3.34.207.58:8080/user/signup", {
        familyName: data.firstName,
        givenName: data.lastName,
        email: data.email,
        password: data.password,
        major: data.major,
        studentId: data.studentNumber,
      });
      alert("회원가입이 완료되었습니다!");
      router.push("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Failed to sign up:",
          error.response?.data || error.message
        );
      } else {
        console.error("Error:", error);
      }
    }
  };

  return (
    <FormFunnel>
      <FormFunnel.Step
        name="First"
        schema={SignUpSchema.first}
        onNext={() => setStep("Second")}
      >
        <FirstCard />
      </FormFunnel.Step>
      <FormFunnel.Step
        name="Second"
        schema={SignUpSchema.second}
        onNext={() => setStep("Third")}
        onPrev={() => setStep("First")}
      >
        <SecondCard />
      </FormFunnel.Step>
      <FormFunnel.Step
        name="Third"
        schema={SignUpSchema.third}
        onPrev={() => setStep("Second")}
        onSubmit={handleSubmit}
      >
        <ThirdCard />
      </FormFunnel.Step>
    </FormFunnel>
  );
};

export default CardNumber;
