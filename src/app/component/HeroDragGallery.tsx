"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import { motion, useMotionValue, animate } from "framer-motion";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const workSans = Work_Sans({ subsets: ["latin"] });

const items = [
  {
    image: "/drag_image1.png",
    title: "Client 1",
    location: "Dubai, United Arab Emirates",
  },
  {
    image: "/drag_image2.png",
    title: "Client 2",
    location: "Paris, France",
  },
  {
    image: "/drag_image3.png",
    title: "Client 3",
    location: "Tokyo, Japan",
  },
  {
    image: "/drag_image4.jpg",
    title: "Client 4",
    location: "Kerla, India",
  },
  {
    image: "/drag_image5.jpg",
    title: "Client 5",
    location: "Queensland, Australia",
  },
  {
    image: "/drag_image6.jpg",
    title: "Client 6",
    location: "Lumbini, Nepal",
  },
  {
    image: "/drag_image7.jpg",
    title: "Client 7",
    location: "Bremen, Germany",
  },
];

export default function HeroDragGallery() {
  const [activeIndex, setActiveIndex] = useState(2);
  const x = useMotionValue(0);
  const dragging = useRef(false);

  const textRef = useRef<HTMLHeadingElement>(null)

  const handleDragEnd = (data: any, info: any) => {
    if (info.offset.x < -100 && activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (info.offset.x > 100 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
    animate(x, 0, { type: "spring", stiffness: 300 });
  };

  useEffect(() => {
    if (!textRef.current) return

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <div
      className={`w-full py-20 flex flex-col items-center bg-white mt-[20px] ${workSans.className}`}
    >
      <h2 className="text-[56px] font-[400] mb-4 leading-[72px] tracking-[-1]" ref={textRef}>Quality Products</h2>
      <p className="font-[400] text-[#7A7777] text-center max-w-xl mb-10 sm:px-[0px] px-[35px]" ref={textRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="relative flex justify-center items-center w-full max-w-5xl h-[400px] overflow-hidden mt-[100px]">
        {/* Left Image */}
        {activeIndex > 0 && (
          <div className="absolute left-10 transform -rotate-[10deg] scale-[0.85] z-0">
            <Image
              src={items[activeIndex - 1].image}
              alt="left"
              width={250}
              height={350}
              className="rounded-lg h-[419px] w-[300px]"
            />
          </div>
        )}

        {/* Draggable Center Image */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={() => (dragging.current = true)}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="z-10 cursor-grab relative rounded-lg"
        >
          <Image
            src={items[activeIndex].image}
            alt="center"
            width={300}
            height={400}
            className="rounded-xl h-[600px]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[60px] h-[60px] bg-white text-black text-sm flex items-center justify-center rounded-full shadow-lg">
              Drag
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        {activeIndex < items.length - 1 && (
          <div className="absolute right-10 transform rotate-[10deg] scale-[0.85] z-0">
            <Image
              src={items[activeIndex + 1].image}
              alt="right"
              width={250}
              height={350}
              className="rounded-lg h-[419px] w-[300px]"
            />
          </div>
        )}
      </div>

      {/* Client Info */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-medium">{items[activeIndex].title}</h3>
        <p className="text-gray-500">{items[activeIndex].location}</p>
      </div>
    </div>
  );
}
