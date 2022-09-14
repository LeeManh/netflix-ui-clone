import React from "react";
import { Link } from "react-router-dom";

const SingupPassword = () => {
  return (
    <div className="container mx-auto min-h-screen bg-white text-black">
      <div className="wrapper flex items-center justify-between border-b py-6">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/netflix-logo.png"}
            alt="logo"
            className="logo-big"
          />
        </Link>

        <Link
          to="/login"
          className="text-base font-semibold text-black underline-offset-1 duration-200 hover:underline hover:underline-offset-2 md:text-lg"
        >
          Đăng nhập
        </Link>
      </div>

      <div className="mx-auto mt-10 max-w-[440px] p-[20px]">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold">Chào mừng bạn!</h2>
          <h2 className="text-3xl font-semibold">
            Tham gia Netflix thật đơn giản.
          </h2>
          <p className="text-base font-medium">
            Chỉ cần nhập mật khẩu và bạn sẽ được xem ngay lập tức.
          </p>
        </div>

        <form className="mt-6 space-y-4">
          <div className="flex flex-col">
            <span>Email</span>
            <span className="font-semibold">example@gmail</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Nhập mật khẩu"
              className="w-full border px-2 py-2 font-semibold"
            />
          </div>
          <span className="block text-blue-400 hover:underline hover:underline-offset-2">
            Bạn quên mật khẩu?
          </span>
          <button className="btn-form">Đăng ký</button>
        </form>
      </div>
    </div>
  );
};

export default SingupPassword;
