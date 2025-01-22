'use client';

import { RHFFileInput, RHFInput } from '@/app/_components/client/RHF';
import UpdateTrackingWrapper from '@/app/_components/client/UpdateTrackingWrapper';
import { CardButton } from '@/app/_components/server/GamzaCard';
import { useFormFunnel } from '@/app/_hooks/funnel/useFormFunnel';
import { RepostSchema } from '@/app/_utils/validator/repost';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import UpdateButton from '../../modify/_components/UpdateButton';
import { convertURLtoFile } from '@/app/_utils/convertURLtoFile';
import { useAppModify } from '@/app/_hooks/react-query/project/useAppModify';

interface Props {
  id: number;
  file: string;
  port: number;
  tag: string;
  variableKey: string;
}

const Content = (props: Props) => {
  const { id, file, port, tag, variableKey } = props;
  const { FormFunnel } = useFormFunnel('First');
  const { mutate } = useAppModify();

  const [fileData, setFileData] = useState<null | File>(null);

  useEffect(() => {
    const fetch = async () => {
      const fileObj = await convertURLtoFile(file);
      setFileData(fileObj);
    };
    fetch();
  }, [file]);

  return (
    <FormFunnel>
      <FormFunnel.Step
        name="First"
        schema={RepostSchema}
        onSubmit={(data) =>
          mutate({
            id,
            file: data.file,
            port: data.port,
            v_key: data.v_key,
            tag: data.tag,
          })
        }
      >
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-6 items-center p-7">
            <UpdateTrackingWrapper
              compareData={{
                file: fileData,
                port: String(port),
                tag,
                v_key: variableKey || '',
              }}
            >
              <RHFFileInput
                name="file"
                placeholder="업로드"
                label="애플리케이션 업로드"
              />
              <RHFInput
                name="port"
                size="medium"
                placeholder="포트 번호"
                label="내부 포트"
              />
              <RHFInput
                name="v_key"
                size="medium"
                placeholder="ex) salt 키"
                label="환경 변수"
              />
              <RHFInput
                name="tag"
                size="medium"
                placeholder="ex) v1.0.0"
                label="태그(버전)"
              />
            </UpdateTrackingWrapper>
          </div>
          <div className="flex justify-end gap-x-3">
            <Link href={'/'}>
              <CardButton text="이전" />
            </Link>
            <UpdateButton />
          </div>
        </div>
      </FormFunnel.Step>
    </FormFunnel>
  );
};

export default Content;
