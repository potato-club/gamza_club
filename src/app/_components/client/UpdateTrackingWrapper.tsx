import useUpdateFormStore from '@/app/_store/form/useUpdateFormStore';
import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

interface Props {
  children: React.ReactNode;
  compareData: any;
}

const UpdateTrackingWrapper = ({ children, compareData }: Props) => {
  const { control, setValue } = useFormContext();
  const watchedData = useWatch({ control });
  const { setIsDifferent } = useUpdateFormStore();

  // 초기값 설정
  useEffect(() => {
    Object.keys(compareData).forEach((key) => {
      setValue(key, compareData[key]);
    });
  }, [compareData, setValue]);

  // 변경 감지 및 전역 상태 업데이트
  useEffect(() => {
    const isDifferent = Object.keys(compareData).some(
      (key) =>
        JSON.stringify(compareData[key]) !== JSON.stringify(watchedData[key])
    );

    setIsDifferent(isDifferent);
  }, [watchedData, compareData, setIsDifferent]);

  return <>{children}</>;
};

export default UpdateTrackingWrapper;
