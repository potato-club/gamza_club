import React from "react";
import { useAcceptUser } from "@/app/_hooks/query/useAcceptUser";
interface Props {
  value: string;
  color: string;
  id: number;
  type: "user" | "project";
}
const MutateButton = ({ value, color, id, type }: Props) => {
  const { mutate } = useAcceptUser(id, type, value); // props로 넘어오는 type으로 project 인지 user 인지 확인후 value 로 승인,거부 결정
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
