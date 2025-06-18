import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-[#2D3B36] relative flex flex-col font-[Inter] items-center pt-[100px] sm:pt-[120px] md:pt-[150px] pb-[80px] md:pb-0 overflow-hidden">
    <div className="w-[90%] flex flex-col items-start gap-8">
      {/* Top Content */}
      <div className="w-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8">
        <p className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[55px] font-[400] text-[#E7E8E0] max-w-[100%] md:max-w-[50%] leading-tight">
          Join The Skincare Community Now
        </p>
        <div className="flex flex-col items-start">
          <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-[400] text-[#E7E8E0]">
            Get in Touch
          </p>
          <p className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[55px] font-[400] text-[#E7E8E0] break-all">
            contact.skincare.com
          </p>
        </div>
      </div>
  
      {/* Footer Links */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-[#EFF5E1] mt-[80px] sm:mt-[150px] md:mt-[200px] lg:mt-[250px] gap-6">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {["Facebook", "Instagram", "YouTube"].map((item, i) => (
            <p key={i} className="text-[16px] sm:text-[18px] md:text-[20px] font-[400]">
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 sm:mt-0">
          {["Terms of Service", "Privacy Policy", "Cookies Policy"].map((item, i) => (
            <p key={i} className="text-[16px] sm:text-[18px] md:text-[20px] font-[400]">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  
    {/* Background Text */}
    <div className="w-full flex justify-center items-center md:mt-[60px]">
      <p className="text-[90px] sm:text-[160px] md:text-[220px] lg:text-[240px] font-[700] text-[#3D4B4680] leading-none tracking-tight">
        SKINCARE
      </p>
    </div>
  </div>
  
  )
}

export default Footer