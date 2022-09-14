import React, { useEffect, useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Navbar = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div
      className={
        "wrapper fixed top-0 left-0 z-50 flex h-[41px] w-full items-center justify-between duration-300 md:h-[68px] " +
        `${isScrolled ? "bg-nav" : "bg-translate "} `
      }
    >
      <div className="flex h-full space-x-2 md:space-x-4">
        <img
          src={process.env.PUBLIC_URL + "/images/netflix-logo.png"}
          alt=""
          className="h-auto w-[74px] shrink-0 cursor-pointer object-contain md:w-[92px]"
        />
        <div className=" group relative text-sm font-semibold lg:hidden">
          <div className="flex h-full cursor-pointer items-center space-x-2 before:absolute before:top-[100%] before:h-[20px]  before:w-full">
            <span> Duyệt tìm </span>
            <BsFillCaretDownFill className="animate-rotate h-4 w-4" />
          </div>

          <ul className="menu absolute top-[calc(100%+20px)] left-1/2 flex w-[280px] -translate-x-1/2 flex-col items-center bg-nav md:w-[300px] ">
            <li className="link active w-full py-4 text-center hover:bg-white/10">
              Trang chủ
            </li>
            <li className="link-menu">Phim T.hình</li>
            <li className="link-menu">Phim</li>
            <li className="link-menu">Mới và phổ biến</li>
            <li className="link-menu">Danh sách của tôi</li>
            <li className="link-menu">Duyệt tìm theo ngôn ngữ</li>
          </ul>
        </div>

        <ul className="hidden items-center space-x-4 lg:flex">
          <li className="link active">Trang chủ</li>
          <li className="link">Phim T.hình</li>
          <li className="link">Phim</li>
          <li className="link">Mới và phổ biến</li>
          <li className="link">Danh sách của tôi</li>
          <li className="link">Duyệt tìm theo ngôn ngữ</li>
        </ul>
      </div>

      <div className="relative flex items-center space-x-2 md:space-x-6">
        {/* Search  */}
        <div
          className={
            "absolute top-1/2 right-full flex origin-right -translate-y-1/2 items-center space-x-2 border bg-nav py-1 px-2 duration-300 " +
            `${
              isOpenSearch
                ? "visible scale-x-100 opacity-100"
                : "invisible scale-x-0 opacity-0"
            }`
          }
        >
          <BiSearch className="icon" onClick={() => setIsOpenSearch(false)} />
          <input
            type="text"
            placeholder="Phim..."
            className="border-none bg-transparent outline-none"
          />
        </div>
        <BiSearch
          className={
            "icon duration-300 " +
            `${isOpenSearch ? "invisible opacity-0" : "visible opacity-100"}`
          }
          onClick={() => setIsOpenSearch(true)}
        />

        {/* Notifications */}
        <div className="relative cursor-pointer">
          <div className="absolute -top-2 -right-2 hidden h-5 w-5 items-center justify-center rounded-full bg-red text-xs font-semibold lg:flex">
            1
          </div>
          <FaBell className="icon" />
        </div>

        {/* Avatar */}
        <div className="group relative flex cursor-pointer items-center space-x-2 ">
          <img
            src={process.env.PUBLIC_URL + "/images/avatar.png"}
            alt=""
            className="h-[40px] w-[32px] shrink-0 cursor-pointer rounded-lg object-contain"
          />
          <BsFillCaretDownFill className="animate-rotate h-4 w-4" />

          <ul className="menu absolute top-[calc(100%+20px)] right-0 w-[250px] bg-nav text-center ">
            <li className="link-menu flex items-center space-x-2 pl-4">
              <RiUser3Line className="h-5 w-5" />
              <span>Tài khoản</span>
            </li>
            <li className="link-menu flex items-center space-x-2 border-b border-b-gray-100  pl-4">
              <AiOutlineQuestionCircle className="h-5 w-5" />
              <span>Trung tâm trợ giúp</span>
            </li>

            <li className="link-menu ">Đăng xuất khỏi Netflix</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
