import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper relative min-h-screen w-screen overflow-x-hidden">
      <img
        src={process.env.PUBLIC_URL + "/images/bg-login.jpg"}
        alt=""
        className="absolute top-0 left-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-body/50"></div>

      {/* Header */}
      <div className="py-6">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/netflix-logo.png"}
            alt="logo"
            className="logo-big"
          />
        </Link>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-[440px] rounded bg-body/80 px-8 py-10 ">
        <form className="space-y-8">
          <h1 className="title-form mb-8">Đăng nhập</h1>
          <div className="text-field">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="text-field">
            <label>Mật khẩu</label>
            <input type="password" />
          </div>
          <button className="btn-form">Đăng nhập</button>
        </form>
        <p className="mt-3 cursor-pointer text-right text-sm text-gray-300">
          Bạn cần trợ giúp?
        </p>

        <div className="mt-8 space-y-2">
          <div>
            <span className="text-gray-300">Bạn mới than gia Netflix.</span>
            <Link to="/signup">
              <span className="hover-underline ml-2 font-semibold text-white">
                Đăng ký ngay
              </span>
            </Link>
          </div>
          <p className="text-sm text-gray-300">
            Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là
            robot.{" "}
            <span className="hover-underline text-blue-500">
              Tìm hiểu thêm.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
