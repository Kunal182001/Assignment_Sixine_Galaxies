import React from 'react'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import product2 from '../../assets/product2.svg'
import headphone from '../../assets/headphone.svg'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
const FAQ = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const headphoneRef = useRef(null);
    const contentRefs = useRef([]);
    const faqs = [
        {
            question: "Are your products safe for sensitive skin?",
            answer: "Yes! All our products are dermatologically tested and safe for sensitive skin types.",
        },
        {
            question: "Are your products cruelty-free?",
            answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
        },
        {
            question: "What’s your return policy?",
            answer: "You can return products within 30 days of purchase if unopened and unused.",
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to most countries worldwide. Shipping charges may apply.",
        },
        {
            question: "How do I choose the right product?",
            answer: "Use our skin quiz or chat with our expert to get personalized recommendations.",
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);
    useEffect(() => {
        // Animate image and text section on mount
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(
            textRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
        );

        // Hover effect on headphone circle
        if (headphoneRef.current) {
            gsap.set(headphoneRef.current, { transformOrigin: "center" });

            headphoneRef.current.addEventListener("mouseenter", () => {
                gsap.to(headphoneRef.current, { scale: 1.05, duration: 0.2 });
            });
            headphoneRef.current.addEventListener("mouseleave", () => {
                gsap.to(headphoneRef.current, { scale: 1, duration: 0.2 });
            });
            headphoneRef.current.addEventListener("mousedown", () => {
                gsap.to(headphoneRef.current, { scale: 0.95, duration: 0.1 });
            });
            headphoneRef.current.addEventListener("mouseup", () => {
                gsap.to(headphoneRef.current, { scale: 1, duration: 0.1 });
            });
        }
    }, []);
    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            const tl = gsap.timeline();
            tl.fromTo(
                contentRefs.current[openIndex],
                { height: 0, opacity: 0 },
                {
                    height: "auto",
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    clearProps: "height",
                }
            );
        }
    }, [openIndex]);
    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="w-full bg-[#FEFFF4] relative flex justify-center font-[Inter] items-center text-[#2D3B36] pt-[100px] sm:pt-[120px] md:pt-[150px] pb-[60px] sm:pb-[80px] lg:pb-[90px] px-4">
            <div className="w-full max-w-[1400px] flex flex-col-reverse lg:flex-row justify-between items-center gap-12">

                {/* Left image with headphone */}
                <div ref={imageRef} className="w-full lg:w-[45%] relative flex justify-center items-center">
                    <img src={product2} className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] h-auto" />

                    <div className="absolute bottom-4 sm:bottom-8 w-full max-w-[300px] h-auto rounded-full bg-[#EFF5E1] flex justify-start items-center p-2 gap-4 shadow-md">
                        <div
                            ref={headphoneRef}
                            className="w-[60px] h-[60px] sm:w-[88px] sm:h-[88px] border-[2px] border-dotted border-[#2D3B36] rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <div className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] bg-[#2D3B36] rounded-full flex justify-center items-center">
                                <img className="w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]" src={headphone} />
                            </div>
                        </div>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[400]">
                            24/7 We’re Here to Help You
                        </p>
                    </div>
                </div>

                {/* Right FAQ content */}
                <div ref={textRef} className="w-full lg:w-[48%] flex flex-col items-start">
                    {/* Badge */}
                    <div className="w-full max-w-[340px] h-auto border border-[#2D3B36] rounded-full flex items-center px-4 py-2 mb-6">
                        <div className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] bg-[#2D3B36] rounded-full mr-4"></div>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[400]">Frequently Asked Question</p>
                    </div>

                    {/* Heading */}
                    <p className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-[400] leading-tight mt-6 mb-10">
                        Answers to Your Skincare Questions, All in One Place.
                    </p>

                    {/* FAQ Accordion */}
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            onClick={() => toggleFAQ(index)}
                            className={`w-full max-w-[600px] border border-[#2D3B36] rounded-md cursor-pointer mb-4 transition-all duration-300 ${openIndex === index ? "bg-[#f2f2f2]" : ""}`}
                        >
                            <div className="flex justify-between items-center px-4 py-3">
                                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[400]">{faq.question}</p>
                                <img
                                    className={`w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] transition-transform duration-500 ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                                    src={openIndex === index ? minus : plus}
                                    alt="Toggle"
                                />
                            </div>

                            {/* Answer */}
                            {openIndex === index && (
                                <div
                                    ref={(el) => (contentRefs.current[index] = el)}
                                    className="overflow-hidden px-4 pb-4"
                                >
                                    <p className="text-[14px] sm:text-[16px] font-[400]">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default FAQ