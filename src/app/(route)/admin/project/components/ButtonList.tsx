import TypeButton from "@/app/_components/client/TypeButton";
import React from "react";

interface Props {
  dataType: "modify" | "create" | "pending";
}
const ButtonList = ({ dataType }: Props) => {
  return (
    <div className="flex gap-x-4 mb-4">
      <TypeButton
        type="create"
        text={"생성"}
        total={20}
        dataType={dataType}
        href={"/admin/project?type=create"}
      />
      <TypeButton
        type="modify"
        text={"수정"}
        total={3}
        dataType={dataType}
        href={"/admin/project?type=modify"}
      />
      <TypeButton
        type="pending"
        text={"대기중"}
        total={3}
        dataType={dataType}
        href={"/admin/project?type=pending"}
      />
    </div>
  );
};

export default ButtonList;
