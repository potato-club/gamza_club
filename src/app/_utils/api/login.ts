import axios from 'axios';
import axiosClient from './axiosClient';

export interface LoginData {
  email: string;
  password: string;
}

// export const login = async (data: LoginData) => {
//   const res = await axios.post(
//     `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
//     {
//       email: data.email,
//       password: data.password,
//     }
//   );

//   return res;
// };

export const login = async (data: LoginData) => {
  try {
    const response = await axios.post('/api/token', {
      email: data.email,
      password: data.password,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async () => {};
