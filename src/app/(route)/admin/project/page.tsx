import React from "react";
import { Suspense } from "@suspensive/react";
import AdminProjectList from "./AdminProjectList";
import Loading from "../_components/Loading";
const page = () => {
  return (
    <Suspense clientOnly fallback={<Loading />}>
      <AdminProjectList />
    </Suspense>
  );
};

export default page;
