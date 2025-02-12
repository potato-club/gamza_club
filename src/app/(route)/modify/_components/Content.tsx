'use client';

import {
  RHFInput,
  RHFCalendar,
  RHFRadioGroup,
  RHFListSelector,
} from '@/app/_components/client/RHF';
import { CardButton } from '@/app/_components/server/GamzaCard';
import Link from 'next/link';
import React from 'react';
import { useFormFunnel } from '@/app/_hooks/funnel/useFormFunnel';
import { ModifySchema } from '@/app/_utils/validator/modify';
import { useModifyForm } from '@/app/_hooks/react-query/project/useModify';
import { Collaborator } from '@/app/_types/RHFProps';
import { useUserList } from '@/app/_hooks/react-query/user/useUserList';
import UpdateTrackingWrapper from '@/app/_components/client/UpdateTrackingWrapper';
import UpdateButton from './UpdateButton';

interface Props {
  id: number;
  name: string;
  description: string;
  state: string;
  startedDate: string;
  endedDate: string;
  collaborators: Collaborator[];
}

const Content = ({ ...props }: Props) => {
  const { FormFunnel } = useFormFunnel('First');
  const { mutate } = useModifyForm();
  const { data } = useUserList();

  return (
    <FormFunnel>
      <FormFunnel.Step
        name="First"
        schema={ModifySchema}
        onSubmit={(data) =>
          mutate({
            id: props.id,
            title: data.title,
            description: data.describe,
            status: data.status,
            date: data.date,
            collaborators: data.collaborators.map(
              (item: Collaborator) => item.id
            ),
          })
        }
      >
        <div className="flex flex-col gap-y-9">
          <div className="flex flex-col gap-y-6 items-center">
            {data && (
              <UpdateTrackingWrapper
                compareData={{
                  title: props.name,
                  describe: props.description,
                  status: props.state,
                  date: {
                    from: new Date(props.startedDate),
                    to: new Date(props.endedDate),
                  },
                  collaborators: props.collaborators,
                }}
              >
                <RHFInput
                  name="title"
                  placeholder="프로젝트 이름"
                  size="large"
                />
                <RHFInput
                  name="describe"
                  placeholder="프로젝트 설명"
                  size="large"
                />
                <RHFRadioGroup
                  name="status"
                  label="상태"
                  itemList={[
                    {
                      value: 'PLAN',
                      id: 'PLAN',
                      title: '계획',
                      disalbed: true,
                    },
                    {
                      value: 'PROGRESS',
                      id: 'PROGRESS',
                      title: '진행',
                      disalbed: true,
                    },
                    {
                      value: 'DONE',
                      id: 'DONE',
                      title: '완료',
                      checked: true,
                    },
                  ]}
                />
                <RHFCalendar name="date" label="개발 기간" id={'modify-date'} />
                <RHFListSelector
                  userList={data.userList}
                  name="collaborators"
                  label="공동 작업자"
                />
              </UpdateTrackingWrapper>
            )}
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
