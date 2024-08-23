import { z } from "zod";

const passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\s;&%=\-+<>'"\\#])[\w~`!@#$^*()_{}[\]:,./?]{8,15}$/;

export const SignUpSchema = {
  first: z.object({
    terms: z.boolean().refine((value) => value === true, {
      message: "약관에 동의해야 합니다.",
    }),
  }),
  second: z.object({
    email: z.string().email().default(""),
    password: z
      .string()
      .min(8, {
        message: "비밀번호는 영문/숫자/특수문자 조합으로 8~15자리 입니다.",
      })
      .max(15, {
        message: "비밀번호는 영문/숫자/특수문자 조합으로 8~15자리 입니다.",
      })
      .regex(passwordPattern, {
        message: "특수문자 중 ; & % = - + < > ＼ 는 사용할 수 없습니다.",
      })
      .default(""),
    passwordConfirm: z.string().default(""),
  }),
  third: z.object({
    firstName: z.string().default(""),
    lastName: z.string().default(""),
    major: z.string().default(""),
    studentNumber: z.string().default(""),
  }),
};
