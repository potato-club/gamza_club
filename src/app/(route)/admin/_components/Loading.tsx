import React from "react";
import "@/app/_styles/loading.css";

const Loading = () => {
  return (
    <div className="flex  items-center justify-center  w-[1010px] h-[520px] border border-stone-200 bg-white rounded-lg  ">
      <span className="loader m-20"></span>
    </div>
  );
};

export default Loading;
