import { z } from 'zod';

const MAX_FILE_SIZE = 200000000;
const ACCEPTED_FILE_TYPES = ['application/zip'];

export const PostSchema = {
  first: z.object({
    title: z
      .string()
      .min(2, '프로젝트 이름은 두글자 이상이어야 합니다.')
      .default(''),
    describe: z
      .string()
      .min(2, '설명은 두글자 이상 해주세요')
      .max(20, '설명은 20자 이하로 해주세요')
      .default(''),
  }),
  second: z.object({
    status: z
      .enum(['plan', 'progress', 'complete'], {
        required_error: '상태 값 한가지는 필수입니다.',
      })
      .default('complete'),
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
  }),
  third: z.object({
    file:
      typeof window === 'undefined'
        ? z.any()
        : z
            .instanceof(File)
            .refine(
              (file) => file?.size <= MAX_FILE_SIZE,
              `.zip파일의 사이즈는 200MB 이하여야 합니다.`
            )
            .refine(
              (file) => ACCEPTED_FILE_TYPES.includes(file.type),
              '.zip 형식만 업로드 가능합니다.'
            ),
    port: z
      .string()
      .min(1, { message: '포트 작성은 필수 입니다.' })
      .refine(
        (port) => Number(port) <= 65535 && Number(port) >= 0,
        '포트번호는 0 이상 65535 이하여야 합니다'
      )
      .default(''),
  }),
};
