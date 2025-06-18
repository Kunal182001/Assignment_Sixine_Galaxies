import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import cartimg from '../../assets/cart.svg'
import heartimg from '../../assets/heart.svg'
import profile from '../../assets/people.svg'
import skincare from '../../assets/skincare.svg'
import mainimg from '../../assets/mainimg.svg'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef();
    const navbarRef = useRef();
    const menuItemRefs = useRef([]);
    menuItemRefs.current = [];
    const sectionRef = useRef();
    const text1Ref = useRef();
    const text2Ref = useRef();
    const imageRef = useRef();
    const sectionRef1 = useRef();
    const imageRef1 = useRef();
    const cardRef = useRef();
    const buttonRef = useRef();
    const sectionRef2 = useRef();
    const headlineRef = useRef();
    const textRef = useRef();

    //part4
    useEffect(() => {
        const ctx = gsap.context(() => {
            const textElement = textRef.current;
            const words = textElement.innerText.split(" ");

            // Clear and rebuild the paragraph with span-wrapped words
            textElement.innerHTML = words
                .map((word) => `<span class="inline-block opacity-0 px-[2px]">${word}</span>`)
                .join(" ");

            const wordSpans = textElement.querySelectorAll("span");

            // Scroll-triggered word-by-word fade-in
            gsap.to(wordSpans, {
                opacity: 1,
                y: 0,
                stagger: 0.12,
                duration: 0.9,
                delay: 0.3,
                ease: "power6.out",
                scrollTrigger: {
                    trigger: textElement,
                    start: "top 90%",
                },
            });

        }, sectionRef2);

        return () => ctx.revert();
    }, []);

    //part3
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                delay: 2.5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            tl.fromTo(
                imageRef1.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.3, ease: "power2.out" }
            )
                .fromTo(
                    cardRef.current,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
                    "-=1"
                )
                .fromTo(
                    buttonRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
                    "-=0.8"
                );

            const button = buttonRef.current;

            const onHover = () => {
                gsap.to(button, {
                    scale: 1.08,
                    boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
                    backgroundColor: "#3A4D42",
                    duration: 0.3,
                    ease: "power2.out",
                });
            };

            const onLeave = () => {
                gsap.to(button, {
                    scale: 1,
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
                    backgroundColor: "#2D3B36",
                    duration: 0.3,
                    ease: "power2.out",
                });
            };

            const onTap = () => {
                gsap.to(button, {
                    scale: 0.93,
                    duration: 0.1,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: 1,
                });
            };

            button.addEventListener("mouseenter", onHover);
            button.addEventListener("mouseleave", onLeave);
            button.addEventListener("touchstart", onTap, { passive: true });

            return () => {
                button.removeEventListener("mouseenter", onHover);
                button.removeEventListener("mouseleave", onLeave);
                button.removeEventListener("touchstart", onTap);
            };
        }, sectionRef1);

        return () => ctx.revert();
    }, []);

    //part2
    useEffect(() => {
        const tl = gsap.timeline({ delay: 1.5 }); // wait for homepage reveal

        tl.fromTo(
            text1Ref.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1.4, ease: "power2.out" }
        )
            .fromTo(
                text2Ref.current,
                { opacity: 0, y: 40, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power2.out" },
                "-=1.0"
            )
            .fromTo(
                imageRef.current,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
                "-=1.0"
            );
    }, []);

    //navbar
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            containerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
        );

        tl.fromTo(
            navbarRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
            "-=1.2"
        );

        tl.fromTo(
            menuItemRefs.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 1,
                ease: "power2.out",
            },
            "-=0.8"
        );
    }, []);

    const addToRefs = (el) => {
        if (el && !menuItemRefs.current.includes(el)) {
            menuItemRefs.current.push(el);
        }
    };
    return (
        //Main Screen
        <div
            ref={containerRef}
            className="w-full bg-[#EFF5E1] relative flex flex-col font-[Inter] items-center text-[#2D3B36] overflow-hidden">
            {/* Navbar */}
            <div
                ref={navbarRef}
                className="w-full bg-[#EFF5E1] flex justify-center items-center z-[100] overflow-hidden py-4 px-4 sm:px-8"
            >
                <div className="w-full max-w-[1440px] flex justify-between items-center">
                    {/* Logo / Title */}
                    <p className="text-[24px] sm:text-[28px] md:text-[30px] font-[800] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95">
                        SKINCARE
                    </p>

                    {/* Center Navigation Links - hidden on small screens */}
                    <div className="hidden md:flex gap-8 text-[16px] md:text-[20px] font-[400]">
                        {["All products", "Serum", "Sunscreen", "Bundle"].map((item, idx) => (
                            <div
                                key={idx}
                                ref={addToRefs}
                                className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        {/* Cart */}
                        <div
                            ref={addToRefs}
                            className="w-10 h-10 bg-[#F8FEE5] rounded-full flex justify-center items-center transition-transform duration-200 hover:scale-110 active:scale-90"
                        >
                            <img src={cartimg} alt="Cart" className="w-5 h-5" />
                        </div>
                        <div
                            ref={addToRefs}
                            className="hidden md:flex text-[16px] font-[400] cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
                        >
                            Cart(1)
                        </div>

                        {/* Heart */}
                        <div
                            ref={addToRefs}
                            className="w-10 h-10 bg-[#F8FEE5] rounded-full flex justify-center items-center transition-transform duration-200 hover:scale-110 active:scale-90"
                        >
                            <img src={heartimg} alt="Heart" className="w-5 h-5" />
                        </div>

                        {/* Profile */}
                        <div
                            ref={addToRefs}
                            className="w-10 h-10 bg-[#F8FEE5] rounded-full flex justify-center items-center transition-transform duration-200 hover:scale-110 active:scale-90"
                        >
                            <img src={profile} alt="Profile" className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* part-2 */}
            <div
                ref={sectionRef}
                className="w-full max-w-[1440px] flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-12 px-4 sm:px-8 bg-[#EFF5E1] py-16"
            >
                {/* Left Paragraph */}
                <p
                    ref={text1Ref}
                    className="text-[16px] sm:text-[14px] md:text-[20px] lg:text-[20px] font-[400] text-center lg:text-left max-w-[335px]"
                >
                    Transform your skincare routine with premium products that restore,
                    protect, and enhance your natural glow every day
                </p>

                {/* Center Heading */}
                <p
                    ref={text2Ref}
                    className="text-[65px] sm:text-[80px] md:text-[90px] lg:text-[100px] font-[700] leading-tight text-center lg:text-left"
                >
                    GLOW NATURALLY
                </p>

                {/* Right Image */}
                <img
                    ref={imageRef}
                    className="w-[402px] sm:w-[180px] md:w-[200px] lg:w-[223px] h-auto"
                    src={skincare}
                    alt="Skincare"
                />
            </div>

            {/* part-3 */}
            <div
                ref={sectionRef1}
                className="relative w-full max-w-[1440px] flex justify-center items-center mt-10 pb-6 px-4 sm:px-8"
            >
                <img
                    ref={imageRef1}
                    src={mainimg}
                    alt="Main"
                    className="w-[402px] sm:w-[420px] md:w-[510px] lg:w-[610px] h-auto transition-transform duration-500 ease-in-out"
                />

                {/* Floating Card */}
                <div
                    ref={cardRef}
                    className="absolute bottom-10 sm:bottom-4 md:bottom-6 lg:bottom-10 w-[360px] sm:w-[400px] md:w-[455px] lg:w-[476px] min-h-[100px] rounded-full bg-[#EFF5E1] flex items-center shadow-md hover:shadow-xl active:shadow-lg transition-all duration-500 ease-in-out px-3"
                >
                    <div className="w-[75px] sm:w-[57px] md:w-[88px] h-[75px] sm:h-[57px] md:h-[88px] border-2 border-dotted border-[#2D3B36] rounded-full flex justify-center items-center hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out">
                        <img
                            className="w-[50px] sm:w-[50px] h-[50px] md:h-[75px] sw:h-[51px] md:w-[75px] rounded-full"
                            src={skincare}
                            alt="Skincare"
                        />
                    </div>
                    <p className="ml-4 text-[14px] sm:text-[14px] md:text-[18px] font-[400]">
                        While giving you an invigorating cleansing experience
                    </p>
                </div>
            </div>

            {/* Button */}
            <div
                ref={buttonRef}
                className="w-[150px] sm:w-[180px] h-[50px] sm:h-[60px] bg-[#2D3B36] flex justify-center items-center rounded-full mt-6 cursor-pointer transition-all duration-300 ease-in-out"
            >
                <p className="text-sm sm:text-base text-[#EFF5E1] font-[400] leading-[100%]">
                    Shop Now
                </p>
            </div>

            {/* part-4 */}
            <div
                ref={sectionRef2}
                className="w-full flex justify-center items-center bg-[#FEFFF4] px-4 sm:px-8 lg:px-16 py-20"
            >
                <div className="w-full max-w-[1440px] flex flex-col items-center bg-[#FEFFF4]">
                    <p
                        ref={headlineRef}
                        className="text-[60px] sm:text-[120px] md:text-[180px] lg:text-[250px] font-[800] text-[#2D3B36] text-center leading-none md:leading-[150px] lg:leading-[200px] transition-all duration-500 hover:tracking-wider"
                    >
                        SKINCARE
                    </p>

                    <p
                        ref={textRef}
                        className="text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] font-[400] leading-relaxed md:leading-[60px] lg:leading-[78px] text-center mt-10 sm:mt-14 md:mt-20 text-[#2D3B36] max-w-[95%] sm:max-w-[90%] lg:max-w-[80%]"
                    >
                        Experience the ultimate in skincare with our expertly formulated products, crafted to
                        nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with
                        advanced science, our collection ensures every skin type can achieve a radiant, healthy
                        glow. Embrace your beauty with confidence every day.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Home