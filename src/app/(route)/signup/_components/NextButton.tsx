import React from "react";
import { Button } from "@/app/_components/ui/button";
const NextButton = () => {
  return (
    <Button
      size="signup"
      className="bg-green-500 text-white hover:bg-white hover:text-green-500 hover:border-[2px] hover:border-green-500"
    >
      다음
    </Button>
  );
};

export default NextButton;
