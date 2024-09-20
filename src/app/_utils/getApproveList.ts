import axios from "axios";

export const getApproveList = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/user/approve/list`
  );
  return res.data;
};
