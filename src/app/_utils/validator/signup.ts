import { z } from "zod";

const passwordPattern = /^[\w~`!@#$^*()_{}[\]:,./?]{8,15}$/;

export const SignUpSchema = {
  first: z.object({
    terms: z.boolean().refine((value) => value === true, {
      message: "약관에 동의해주세요",
    }),
  }),
  second: z.object({
    email: z.string().email().default(""),
    password: z
      .string()
      .min(8, {
        message: "비밀번호는 8자 이상이어야 합니다.",
      })
      .max(15, {
        message: "비밀번호는 15자 이하여야 합니다.",
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
