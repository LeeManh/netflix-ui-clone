import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="wrapper relative h-screen w-screen overflow-hidden">
      <img
        src={process.env.PUBLIC_URL + "/images/bg-login.jpg"}
        alt=""
        className="absolute top-0 left-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-body/50"></div>

      <div className="flex items-center justify-between py-8">
        <img
          src={process.env.PUBLIC_URL + "/images/netflix-logo.png"}
          alt="logo"
          className="h-auto w-[88px] object-contain md:w-[133px]"
        />
        <div className="flex space-x-2 sm:space-x-4 ">
          <select className="cursor-pointer border bg-transparent px-1 text-xs font-semibold outline-none sm:text-sm md:px-2 md:text-base">
            <option value="vn" className="text-black">
              Tiếng Việt
            </option>
            <option value="eng" className="text-black">
              English
            </option>
          </select>

          <Link
            to="/login"
            className="rounded border-none bg-red px-3 py-2 text-xs font-semibold outline-none sm:text-sm md:px-4 md:text-base"
          >
            Đăng nhập
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[950px] space-y-6 text-center sm:px-20 lg:mt-10 lg:px-28">
        <h1 className="text-2xl font-bold tracking-wide sm:text-3xl lg:text-5xl lg:!leading-snug">
          Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.
        </h1>
        <p className="text-base font-semibold lg:text-xl">
          Xem ở mọi nơi. Hủy bất kỳ lúc nào.
        </p>
        <p className="text-base font-semibold lg:text-xl">
          Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách
          thành viên của bạn.
        </p>

        <input
          type="text"
          placeholder="Địa chỉ email"
          className="mx-auto w-full max-w-[500px] border-none bg-white px-4 py-2 font-semibold text-black outline-none"
          defaultValue="example@gmail.com"
        />

        <button className="mx-auto rounded-sm bg-red px-8 py-2">
          <Link to="/signup-password" className="flex items-center ">
            <span>Bắt đầu</span>
            <BsChevronRight className="" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Signup;
