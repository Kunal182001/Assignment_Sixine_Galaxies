import React from 'react'
import { useRef, useEffect, useState } from "react";
import leftarrow from '../../assets/leftarrow.svg'
import rightarrow from '../../assets/rightarrow.svg'
import product1 from '../../assets/product1.svg'
import product2 from '../../assets/product2.svg'
import product3 from '../../assets/product3.svg'
import shopcart from '../../assets/shopcart.svg'
import model from '../../assets/model.svg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Bestseller = () => {
    const sliderRef = useRef(null);
    const leftBtnRef = useRef(null);
    const rightBtnRef = useRef(null);
    const leftBtnRef1 = useRef(null);
    const rightBtnRef1 = useRef(null);
    const sliderRef1 = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [newcurrentIndex, setnewcurrentIndex] = useState(0);
    const products = [product1, product3, product2, product1, product3, product2];
    const itemsToShow = 3;
    const buttonRef = useRef(null);
    const categories = {
        "NEW ARRIVAL": [
            { img: product1, name: "ALYA SKIN CLEANSER", price: "$29.99" },
            { img: product3, name: "RITUAL OF SAKURA", price: "$27.99" },
            { img: product2, name: "THE BODY LOTION", price: "$19.99" },
        ],
        CLEANSING: [
            { img: product2, name: "DEEP CLEAN FOAM", price: "$21.99" },
            { img: product1, name: "SOFT GLOW GEL", price: "$24.50" },
            { img: product3, name: "HERBAL WASH", price: "$18.75" },
        ],
        "ACNE FIGHTER": [
            { img: product3, name: "CLEAR SKIN FOAM", price: "$25.00" },
            { img: product2, name: "SPOTLESS LOTION", price: "$23.99" },
            { img: product1, name: "ACNE AWAY KIT", price: "$31.49" },
        ],
        "ANTI AGGING": [
            { img: product1, name: "YOUTH ELIXIR", price: "$34.99" },
            { img: product2, name: "WRINKLE CREAM", price: "$29.00" },
            { img: product3, name: "NIGHT GLOW SERUM", price: "$32.45" },
        ],
    };
    const [activeTab, setActiveTab] = useState("NEW ARRIVAL");
    const imageRefs = useRef([]);


    useEffect(() => {
        // Animate product cards when activeTab changes
        gsap.fromTo(
            imageRefs.current,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.1,
            }
        );
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const tabs = ["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGGING"];



    useEffect(() => {
        const btn = buttonRef.current;

        // Hover animation
        const tl = gsap.timeline({ paused: true });
        tl.to(btn, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
        });

        btn?.addEventListener("mouseenter", () => tl.play());
        btn?.addEventListener("mouseleave", () => tl.reverse());

        // Tap/click animation
        btn.addEventListener("pointerdown", () => {
            gsap.to(btn, {
                scale: 0.95,
                duration: 0.1,
                ease: "power1.inOut",
            });
        });

        btn.addEventListener("pointerup", () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out",
            });
        });

        return () => {
            // Clean up event listeners
            btn.removeEventListener("mouseenter", () => tl.play());
            btn.removeEventListener("mouseleave", () => tl.reverse());
            btn.removeEventListener("pointerdown", () => { });
            btn.removeEventListener("pointerup", () => { });
        };
    }, []);

    //handle slide
    const handleSlide = (direction) => {
        const container = sliderRef.current;
        const itemWidth = container.children[0].offsetWidth + 25; // product width + gap

        let newIndex = currentIndex + direction;
        const maxIndex = products.length - itemsToShow;

        if (newIndex < 0) newIndex = 0;
        if (newIndex > maxIndex) newIndex = maxIndex;

        setCurrentIndex(newIndex);
        gsap.to(container, {
            x: -newIndex * itemWidth,
            duration: 0.8,
            ease: "power3.inOut",
        });
    };
    //handle slide for mobile
    const handleSlideformb = (direction) => {
        const container = sliderRef1.current;
        const itemWidth = container.children[0].offsetWidth + 25; // product width + gap

        let newIndex = newcurrentIndex + direction;
        const maxIndex = products.length - itemsToShow;

        if (newIndex < 0) newIndex = 0;
        if (newIndex > maxIndex) newIndex = maxIndex;

        setnewcurrentIndex(newIndex);
        gsap.to(container, {
            x: -newIndex * itemWidth,
            duration: 0.8,
            ease: "power3.inOut",
        });
    };

    //Animation on moving left or right
    useEffect(() => {
        [leftBtnRef, rightBtnRef].forEach((ref) => {
            if (!ref.current) return;
            const el = ref.current;

            const tl = gsap.timeline({ paused: true });
            tl.to(el, { scale: 1.1, duration: 0.2, ease: "power2.out" })
                .to(el, { scale: 1, duration: 0.2, ease: "power2.in" });

            el.addEventListener("pointerdown", () => gsap.to(el, { scale: 0.9, duration: 0.1 }));
            el.addEventListener("pointerup", () => tl.restart());
        });
    }, []);

    useEffect(() => {
        [leftBtnRef1, rightBtnRef1].forEach((ref) => {
            if (!ref.current) return;
            const el = ref.current;

            const tl = gsap.timeline({ paused: true });
            tl.to(el, { scale: 1.1, duration: 0.2, ease: "power2.out" })
                .to(el, { scale: 1, duration: 0.2, ease: "power2.in" });

            el.addEventListener("pointerdown", () => gsap.to(el, { scale: 0.9, duration: 0.1 }));
            el.addEventListener("pointerup", () => tl.restart());
        });
    }, []);

    return (
        <div className="w-full bg-[#FEFFF4]  relative flex justify-center font-[Inter] items-center text-[#2D3B36] pt-[30px] md:pt-[250px]">
            <div className='w-[90%] flex flex-col  bg-[#FEFFF4]'>

                {/* Header */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 flex-wrap">
                    <div className="border border-[#2D3B36] rounded-full px-5 py-3 flex items-center gap-3">
                        <div className="w-4 h-4 bg-[#2D3B36] rounded-full" />
                        <p className="text-base sm:text-lg">Best Selling Products</p>
                    </div>

                    <p className="text-[34px] sm:text-3xl md:text-[40px] lg:text-[60px] leading-tight text-center lg:text-left max-w-2xl">
                        Skincare That Brings Out Your Natural Radiance
                    </p>

                    <div className="md:flex  hidden gap-4">
                        <img ref={leftBtnRef} className="w-10 h-10 sm:w-[60px] sm:h-[60px] cursor-pointer" src={leftarrow} onClick={() => handleSlide(-1)} />
                        <img ref={rightBtnRef} className="w-10 h-10 sm:w-[60px] sm:h-[60px] cursor-pointer" src={rightarrow} onClick={() => handleSlide(1)} />
                    </div>
                </div>

                {/* Slider */}
                <div className="overflow-hidden w-full mt-[10px] md:mt-[0px]">
                    <div ref={sliderRef} className="flex gap-4 sm:gap-6 transition-transform duration-300 ease-in-out">
                        {products.map((product, i) => (
                            <div key={i} className="flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[440px] lg:w-[460px]">
                                <div className="relative">
                                    <img src={product} className="w-full h-auto object-cover" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-[#FEFFF4] rounded-md p-4 flex justify-between items-center">
                                        <div>
                                            <p className="text-base sm:text-lg">{i % 3 === 0 ? "ALYA SKIN CLEANSER." : i % 3 === 1 ? "RITUAL OF SAKURA." : "THE BODY LOTION.."}</p>
                                            <p className="text-sm sm:text-base opacity-50">FROM ${i % 3 === 0 ? "29.99" : i % 3 === 1 ? "27.99" : "19.99"}</p>
                                        </div>
                                        <div className="w-10 h-10 sm:w-16 sm:h-16 bg-[#2D3B361A] rounded-md flex justify-center items-center">
                                            <img src={shopcart} className="w-4 h-4 sm:w-6 sm:h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:hidden  flex justify-center items-center'>
                    <div className="flex gap-4">
                        <img ref={leftBtnRef} className="w-10 h-10 sm:w-[60px] sm:h-[60px] cursor-pointer" src={leftarrow} onClick={() => handleSlide(-1)} />
                        <img ref={rightBtnRef} className="w-10 h-10 sm:w-[60px] sm:h-[60px] cursor-pointer" src={rightarrow} onClick={() => handleSlide(1)} />
                    </div>
                </div>


                {/* Model part */}
                <div className="relative w-full mt-12 hidden md:flex">
                    <img src={model} className="w-full h-auto object-cover" />

                    <div className="absolute bottom-10 right-16 sm:right-16 max-w-[90%]  flex flex-col items-center gap-4 text-center">
                        <p className="text-xl sm:text-3xl md:text-5xl lg:text-[80px] text-[#FEFFF4] leading-tight font-[400]">
                            Feel Beautiful Inside and Out with Every Product.
                        </p>
                        <div className="bg-[#FEFFF4] px-6 py-3 rounded-full cursor-pointer text-[#2D3B36] font-[400] hover:scale-105 transition">
                            Shop Now
                        </div>
                    </div>
                </div>

                {/* New Arrival section */}
                <div className="w-full overflow-hidden relative flex flex-col items-center mt-[100px]">
                    <p className="text-2xl sm:text-3xl md:text-5xl lg:text-[60px] text-center font-[400] max-w-[90%]">
                        Feel Beautiful Inside and Out with Every Product.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10">
                        {tabs.map((tab) => (
                            <p
                                key={tab}
                                ref={buttonRef}
                                onClick={() => handleTabClick(tab)}
                                onMouseDown={() => gsap.to(`.tab-${tab}`, { scale: 0.95, duration: 0.1 })}
                                onMouseUp={() => gsap.to(`.tab-${tab}`, { scale: 1, duration: 0.1 })}
                                className={`tab-${tab} transition-all duration-200 cursor-pointer w-[140px] sm:w-[194px] h-[50px] sm:h-[60px]  text-sm sm:text-[20px] font-[400] flex justify-center items-center rounded-[100px] ${activeTab === tab
                                    ? "bg-[#2D3B36] text-[#FEFFF4]"
                                    : "border-[1px] border-[#2D3B36]"
                                    }`}
                            >
                                {tab}
                            </p>
                        ))}
                    </div>

                    {/* Product Cards */}
                    <div ref={sliderRef1} className="w-full flex  md:justify-between items-center gap-[10px] md:mt-[60px]">
                        {categories[activeTab].map((product, index) => (
                            <div
                                key={index}
                                ref={(el) => (imageRefs.current[index] = el)}
                                className="flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[420px] lg:w-[420px] mb-[20px]"
                            >
                                <img src={product.img} className="w-[440px] h-[670px]" />
                                <div className="w-[95%] md:w-[90%] absolute bottom-30 md:right-5 md:bottom-25 right-2 h-[100px] rounded-[10px] bg-[#FEFFF4] flex justify-between items-center">
                                    <div className="flex flex-col items-start">
                                        <p className="font-[400] text-base sm:text-lg ml-[15px] mt-[10px]">
                                            {product.name}
                                        </p>
                                        <p className=" font-[400] text-sm sm:text-base  ml-[15px] mt-[10px] opacity-50">
                                            FROM {product.price}
                                        </p>
                                    </div>

                                    <div className="w-[80px] h-[80px] rounded-[10px] bg-[#2D3B361A] mt-[5px] mr-[15px] flex justify-center items-center">
                                        <img className="w-[30px] h-[30px]" src={shopcart} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:hidden  flex justify-center items-center'>
                    <div className="flex gap-4">
                        <img ref={leftBtnRef1} className="w-10 h-10 sm:w-[60px] sm:h-[60px] cursor-pointer" src={leftarrow} onClick={() => handleSlideformb(-1)} />
                        <img ref={rightBtnRef1} className="w-10 h-10 sm:w-[60px] sm:h-[60px] cursor-pointer" src={rightarrow} onClick={() => handleSlideformb(1)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bestseller