import React from "react";
import UserList from "./UserList";
import { Suspense } from "@suspensive/react";
import Loading from "../_components/Loading";
const page = () => {
  return (
    <Suspense clientOnly fallback={<Loading />}>
      <UserList />
    </Suspense>
  );
};

export default page;
