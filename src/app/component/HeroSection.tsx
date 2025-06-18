"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

const images = [
  "/desktop1.jpg",
  "/image_slide1.jpg",
  "/image_slide2.jpg",
  "/image_slide3.jpeg",
  "/image_slide4.jpg",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // for border animation restart
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextIndex = (currentIndex + 1) % images.length;

  const changeImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAnimationKey((prev) => prev + 1); // restart border animation
  };

  const handleNextClick = () => {
    clearInterval(intervalRef.current!);
    changeImage();
    startAutoSlide(); // restart interval
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      changeImage();
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <div className={`relative min-h-screen w-full ${workSans.className}`}>
      {/* Background Image */}
      <Image
        key={images[currentIndex]}
        src={images[currentIndex]}
        alt="Farm Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0 brightness-70 contrast-120 transition-all duration-700 ease-in-out"
      />

      {/* Main Heading Content */}
      <div className="absolute inset-0 mt-[175px] flex flex-col justify-center px-4 md:px-20 z-10 text-[#EEF4F9]">
        <span className="text-[16px] font-[400] leading-[150%] mb-[24px]">
          Welcome To TenTwenty Farms
        </span>
        <h1 className="text-[64px] md:text-6xl font-[400] leading-[100%] max-w-xl">
          From Our Farms <br /> To Your Hands
        </h1>

        {/* Next Thumbnail Navigation */}
        <div className="flex items-center gap-[33px] mt-10">
          <div
            key={animationKey}
            className="relative w-24 h-24 p-3 bg-transparent border border-[#8f9192] cursor-pointer group"
            onClick={handleNextClick}
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <span className="absolute top-0 left-0 h-[5px] bg-white animate-top-edge w-0"></span>
              <span className="absolute top-0 right-0 w-[5px] bg-white animate-right-edge h-0"></span>
              <span className="absolute bottom-0 right-0 h-[5px] bg-white animate-bottom-edge w-0"></span>
              <span className="absolute bottom-0 left-0 w-[5px] bg-white animate-left-edge h-0"></span>
            </div>

            <div className="relative w-full h-full overflow-hidden">
              <Image
                key={images[nextIndex]}
                src={images[nextIndex]}
                alt="Next Slide Preview"
                layout="fill"
                objectFit="cover"
              />
              <span className="absolute inset-0 flex items-center justify-center text-[#EEF4F9] text-[16px] font-[400]">
                Next
              </span>
            </div>
          </div>

          <div className="w-[150px] flex items-center gap-[15px] text-white text-xs tracking-widest">
            <span className="block">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="block h-0.5 w-[103px] bg-white my-1"></span>
            <span className="block">
              {String(images.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
