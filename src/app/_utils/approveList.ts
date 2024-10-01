import axios from "axios";

export const getApproveList = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/user/approve/list`
  );
  return res;
};

export const userControl = async (id: number, type: string, value: string) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/admin`;

  const url = `${baseUrl}/${type}/${
    value === "거부" ? "not/" : ""
  }approve/${id}`;
  const res = await axios.post(url);
};
