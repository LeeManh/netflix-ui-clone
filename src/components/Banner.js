import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        src={process.env.PUBLIC_URL + "/images/banner.webp"}
        alt=""
        className="h-screen w-full object-cover"
      />
      <div className="wrapper absolute left-0 top-1/3 w-2/3 space-y-4 md:w-1/3 md:space-y-6">
        <h1 className="text-xl font-bold uppercase tracking-wide md:text-3xl">
          Mùa hè dấu yêu
        </h1>
        <p className="text-sm font-semibold tracking-wide md:text-base">
          Nhiều năm sau khi quay một bộ phim tài liệu đình đám ở trường cấp ba,
          hai người yêu cũ hay cãi vã nay bị kéo đến trước ống kính cùng nhau –
          và lại vướng vào nhau.
        </p>
        <div className="flex items-center space-x-4">
          <button className="btn--1">
            <BsFillPlayFill className="h-8 w-8" />
            <span>Phát</span>
          </button>
          <button className="btn--2">
            <IoMdInformationCircleOutline className="h-8 w-8" />
            <span>Thông tin khác</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
