import React, { useRef, useState } from "react";
import {
  BsFillPlayFill,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const MovieItem = () => {
  const [isMute, setIsMute] = useState(true);
  const [isEnter, setIsEnter] = useState(false);

  const videoRef = useRef();

  const handleMouseEnter = () => {
    setIsEnter(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsEnter(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full shrink-0 cursor-pointer">
        <img
          src={process.env.PUBLIC_URL + "/images/banner.webp"}
          alt=""
          className={
            "aspect-video h-full w-full rounded-sm object-cover duration-300 " +
            `${isEnter ? "invisible opacity-0" : "visible opacity-100"}`
          }
        />
      </div>

      <div
        className={
          "absolute inset-0 top-1/2 left-1/2 z-40 hidden h-[280px] w-[calc(100%+20px)] origin-center -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-sm bg-body  shadow-[rgba(0,0,0,0.24)_0px_3px_8px] duration-500  lg:block " +
          `${
            isEnter
              ? "visible  scale-100 opacity-100"
              : "invisible scale-50 opacity-0"
          }`
        }
      >
        <div className="relative">
          <video
            playsInline
            autoPlay
            muted={isMute}
            ref={videoRef}
            className="aspect-video h-auto w-full"
            poster={process.env.PUBLIC_URL + "/images/banner.webp"}
          >
            <source
              src={process.env.PUBLIC_URL + "/videos/trailer-video.mp4"}
              type="video/mp4"
            />
          </video>
          <div
            onClick={() => setIsMute((pre) => !pre)}
            className="absolute bottom-3 right-3"
          >
            {isMute ? (
              <BsFillVolumeMuteFill className="icon-round " />
            ) : (
              <BsFillVolumeUpFill className="icon-round " />
            )}
          </div>
        </div>

        <div className="space-y-2 p-3">
          <div className="flex items-center space-x-3">
            <BsFillPlayFill className="icon-round" />
            <AiOutlinePlus className="icon-round" />
          </div>
          <div className="space-x-2">
            <span className="font-semibold text-green-500">Độ trùng: 89%</span>
            <span className="border px-[3px] text-xs font-semibold tracking-wide">
              18+
            </span>
            <span>16 tập</span>
          </div>

          <div className="flex cursor-pointer flex-wrap items-center font-semibold">
            <span className="relative pr-4">Kịch tính</span>
            <span>Hàng động</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
