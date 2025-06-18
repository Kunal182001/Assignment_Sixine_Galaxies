import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loading = ({ onComplete }) => {
  const loaderRef = useRef();
  const dropletRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    // Floating droplet loop
    gsap.to(dropletRef.current, {
      y: -12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 0.8,
    });

    // Glow / scale text animation loop
    gsap.to(textRef.current, {
      scale: 1.09,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut",
    });

    // Full timeline (build-up over time)
    tl.fromTo(
      loaderRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" }
    )
      .to({}, { duration: 5 }) // hold & animate
      .to(loaderRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#EFF5E1] text-[#355E3B] transition-all"
    >
      <div ref={dropletRef} className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-[#6BA16F]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C12 2 4 10.25 4 15.5C4 19.64 7.36 23 11.5 23C15.64 23 19 19.64 19 15.5C19 10.25 12 2 12 2Z" />
        </svg>
      </div>
      <h1
        ref={textRef}
        className="text-3xl md:text-4xl font-semibold tracking-wide"
      >
        Nurturing your skin...
      </h1>
    </div>
  );
};

export default Loading;
