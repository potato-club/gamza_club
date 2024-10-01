"use client";
import React from "react";
import { useAccectUser } from "@/app/_hooks/query/useAccecptUser";

interface Props {
  value: string;
  color: string;
  id: number;
  type: "user" | "project";
}
const MutateButton = ({ value, color, id, type }: Props) => {
  const { mutate } = useAccectUser(id, type, value);
  return (
    <button
      className={`normal-button ${color} hover:shadow-inner`}
      onClick={() => mutate()}
    >
      {value}
    </button>
  );
};

export default MutateButton;
