import React, { useEffect, useState } from "react";
import MutateButton from "../../_components/MutateButton";

interface Props {
  id: number;
  userName: string;
  name: string;
  description: string;
  state: any;
  fileUrl: string;
  port: number;
  status: "PENDING" | "SUCCESS" | "FAILED";
  deploymentStep: string;
}

const PendingItem = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [deploymentMessage, setDeploymentMessage] = useState("");

  useEffect(() => {
    if (props.status === "PENDING") {
      const eventSource = new EventSource(
        `${process.env.NEXT_PUBLIC_API_URL}/project/deploy/subscribe/${props.id}`
      );

      eventSource.onmessage = (event) => {
        try {
          if (event.data.startsWith("ping: 연결 유지를 위한 핑")) {
            return;
          }
          const jsonData = JSON.parse(event.data);
          const stepString = jsonData.deploymentStep || "";
          const stepNumber = parseInt(stepString.split(":")[0], 10);

          if (!isNaN(stepNumber)) {
            setCurrentStep(stepNumber);
          }
          setDeploymentMessage(stepString);
        } catch (error) {
          console.error("SSE 파싱 에러:", error);
        }
      };

      eventSource.onerror = (err) => {
        console.error("SSE 연결 에러:", err);
        eventSource.close();
      };

      return () => {
        eventSource.close();
      };
    } else if (props.status === "SUCCESS") {
      setCurrentStep(7);
      setDeploymentMessage("7: 배포 완료");
    } else if (props.status === "FAILED") {
      setDeploymentMessage("배포 실패");
    }
  }, [props.id, props.status]);

  const getProgressBarColor = () => {
    if (props.status === "FAILED") return "bg-red-500";
    if (props.status === "SUCCESS") return "bg-blue-500";
    return "bg-blue-500";
  };

  return (
    <div className="flex justify-between items-center border border-stone-200 w-full h-[70px] px-5 py-3 rounded-xl">
      <div className="flex gap-x-5 h-6">
        <span className="flex w-[60px] justify-center">{props.name}</span>
        <span className="w-[120px] text-ellipsis overflow-hidden whitespace-nowrap">
          {props.description}/{props.status}
        </span>
      </div>

      {/* 중앙: 로딩바 + 단계 메시지 */}
      <div className="flex-1 px-4">
        {/* 단계 전체 메시지 */}
        <div className="text-sm mb-1">{deploymentMessage}</div>

        {/* 진행도 바 */}
        <div className="relative w-full h-2 bg-gray-200 rounded">
          <div
            className={`absolute top-0 left-0 h-2 rounded ${getProgressBarColor()}`}
            style={{
              width:
                props.status === "PENDING"
                  ? `${(currentStep / 7) * 100}%`
                  : "100%",
            }}
          />
        </div>
        <div className="text-xs mt-1">단계 {currentStep} / 7</div>
      </div>

      <div className="flex gap-x-2">
        <MutateButton
          value="확인"
          color="text-green-600"
          id={props.id}
          type="project"
        />
        {props.status !== "SUCCESS" ? (
          <MutateButton
            value="삭제"
            color="text-red-600"
            id={props.id}
            type="project"
          />
        ) : null}
      </div>
    </div>
  );
};

export default PendingItem;
