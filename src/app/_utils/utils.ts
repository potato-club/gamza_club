import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// tailwind merge 시 클래스 충돌 문제 해결
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
