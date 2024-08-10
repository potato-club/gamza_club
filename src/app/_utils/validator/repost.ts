import { z } from 'zod';

const MAX_FILE_SIZE = 200000000;
const ACCEPTED_FILE_TYPES = ['application/zip'];

export const RepostSchema = z.object({
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
});
