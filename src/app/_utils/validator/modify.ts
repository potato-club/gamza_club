import { z } from 'zod';

export const ModifySchema = z.object({
  title: z
    .string()
    .min(2, '프로젝트 이름은 두글자 이상이어야 합니다.')
    .default(''),
  describe: z
    .string()
    .min(2, '설명은 두글자 이상 해주세요')
    .max(20, '설명은 20자 이하로 해주세요')
    .default(''),
  status: z
    .enum(['PLAN', 'PROGRESS', 'DONE'], {
      required_error: '상태 값 한가지는 필수입니다.',
    })
    .default('DONE'),
  date: z
    .object({
      from: z
        .date()
        .max(new Date(), { message: '유효한 기간을 선택해주세요.' })
        .or(z.null()),
      to: z
        .date()
        .max(new Date(), { message: '유효한 기간을 선택해주세요.' })
        .or(z.null()),
    })
    .refine(
      (data) => data.from !== null && data.to !== null && data.from < data.to,
      {
        message: '기간이 잘못 되었습니다.',
      }
    )
    .default({ from: null, to: null }),
});
