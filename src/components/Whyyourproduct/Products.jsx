import React from 'react'
import { useEffect, useRef } from "react";
import productimg from '../../assets/product.png'
import lockimg from '../../assets/lock.svg'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef = useRef(null);
  const awardRef = useRef(null);
  const productImgRef = useRef(null);
  const blocksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text blocks staggered
      gsap.from(blocksRef.current, {
        opacity: 0,
        y: 40,
        stagger: 0.25,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 1%",
        },
      });

      // Animate image fade and lift
      gsap.from(productImgRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: productImgRef.current,
          start: "top 1%",
        },
      });

      // Award card animation
      gsap.from(awardRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: awardRef.current,
          start: "top 90%",
        },
      });

      // Hover / tap effects
      const image = productImgRef.current;
      const award = awardRef.current;

      const scaleUp = el => gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      const scaleDown = el => gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
      const tapEffect = el => gsap.to(el, { scale: 0.95, duration: 0.15, yoyo: true, repeat: 1 });

      image.addEventListener("mouseenter", () => scaleUp(image));
      image.addEventListener("mouseleave", () => scaleDown(image));
      image.addEventListener("touchstart", () => tapEffect(image));

      award.addEventListener("mouseenter", () => scaleUp(award));
      award.addEventListener("mouseleave", () => scaleDown(award));
      award.addEventListener("touchstart", () => tapEffect(award));

      return () => {
        image.removeEventListener("mouseenter", () => scaleUp(image));
        image.removeEventListener("mouseleave", () => scaleDown(image));
        image.removeEventListener("touchstart", () => tapEffect(image));

        award.removeEventListener("mouseenter", () => scaleUp(award));
        award.removeEventListener("mouseleave", () => scaleDown(award));
        award.removeEventListener("touchstart", () => tapEffect(award));
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-[#FEFFF4] px-4 sm:px-6 lg:px-20  flex justify-center font-[Inter] text-[#2D3B36]"
    >
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row justify-between items-center gap-[80px]">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="flex items-center border border-[#2D3B36] rounded-full px-6 py-2">
            <div className="w-[20px] h-[20px] bg-[#2D3B36] rounded-full mr-4"></div>
            <p className="text-[18px] sm:text-[20px] font-[400]">Why Our Products</p>
          </div>

          <p
            ref={(el) => (blocksRef.current[0] = el)}
            className="text-[32px] sm:text-[48px] lg:text-[60px] font-[400] mt-10 leading-tight"
          >
            YOUR SKIN DESERVES THE BEST CARE.
          </p>

          <p
            ref={(el) => (blocksRef.current[1] = el)}
            className="text-[16px] sm:text-[18px] font-[400] mt-6 leading-[24px] max-w-[90%]"
          >
            Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our range crafted with love, backed by science, and inspired by nature.
          </p>

          {/* Feature blocks */}
          {[
            {
              num: "01",
              title: "Bio Ingredients",
              desc:
                "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
            },
            {
              num: "02",
              title: "Everything Natural",
              desc: "Pure ingredients for pure skin. The perfect solution for your skincare needs.",
            },
            {
              num: "03",
              title: "All Handmade",
              desc:
                "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
            },
          ].map((block, i) => (
            <div
              key={i}
              className="flex items-start gap-6 mt-10"
            >
              <p className="text-[36px] sm:text-[50px] lg:text-[60px] font-[400]">{block.num}</p>
              <div className="flex flex-col gap-4">
                <p className="text-[24px] sm:text-[36px] font-[400]">{block.title}</p>
                <p className="text-[16px] sm:text-[18px] font-[400] leading-[24px]">{block.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col items-center relative">
          <img
            ref={productImgRef}
            src={productimg}
            className="w-full max-w-[600px] h-auto object-contain"
            alt="Product"
          />

          {/* Award box */}
          <div
            ref={awardRef}
            className="absolute bottom-15 w-[90%] max-w-[476px] h-[100px] bg-[#EFF5E1] rounded-full flex items-center px-4"
          >
            <div className="w-[88px] h-[88px] border-2 border-dotted border-[#2D3B36] rounded-full flex justify-center items-center">
              <div className="w-[80px] h-[80px] bg-[#2D3B36] rounded-full flex justify-center items-center">
                <img src={lockimg} alt="lock" className="w-[40px] h-[40px]" />
              </div>
            </div>
            <p className="ml-6 text-[16px] sm:text-[20px] font-[400]">Best Skin Care Product Award Winning</p>
          </div>

          <div className="w-full flex justify-between items-center mt-6 text-[14px] sm:text-[16px] font-[400] px-4 sm:px-0">
            <p>SINCE 2001</p>
            <p>LEARN MORE</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Products