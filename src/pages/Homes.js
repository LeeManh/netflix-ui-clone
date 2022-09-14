import React from "react";
import Banner from "../components/Banner";
import SlideMoives from "../components/SlideMoives";
import Navbar from "../components/Navbar";

const Homes = () => {
  return (
    <div className="mx-auto h-[200vh] max-w-screen-2xl overflow-hidden bg-body">
      <Navbar />
      <Banner />

      <SlideMoives title="Mới phát hành" />
      <SlideMoives title="Hiện đang thịnh hành" />
      <SlideMoives title="Chương trình truyền hình Hàn Quốc" />
    </div>
  );
};

export default Homes;
