"use client";
import React, { useState } from "react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import { useFormFunnel } from "@/app/_hooks/useFormFunnel";
import { SignUpSchema } from "@/app/_utils/validator/signup";

const CardNumber = () => {
  const { FormFunnel, setStep } = useFormFunnel<"First" | "Second" | "Third">(
    "First"
  );
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
        onSubmit={(data) => {
          console.log("submit!! : ", data);
        }}
      >
        <ThirdCard />
      </FormFunnel.Step>
    </FormFunnel>
  );
};

export default CardNumber;
