import { CardButton } from '@/app/_components/server/GamzaCard';
import useUpdateFormStore from '@/app/_store/form/useUpdateFormStore';
import React from 'react';

const UpdateButton = () => {
  const { isDifferent } = useUpdateFormStore();

  return (
    <CardButton
      text="요청"
      type="submit"
      value="submit"
      color="green"
      disabled={!isDifferent}
    />
  );
};

export default UpdateButton;
