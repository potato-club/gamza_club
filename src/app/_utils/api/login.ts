import axios from "axios";
import apiClient from "./axiosClient";

export interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  const res = await apiClient.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
    {
      email: data.email,
      password: data.password,
    }
  );

  return res;
};

export const signUp = async () => {};
