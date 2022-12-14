import React, { useState } from "react";
import style from "../styles/aboutus.module.css";
import * as Data from "../utils/data";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Aboutus = () => {
  const { Legend } = Data.Data;

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className={`${style.aboutus} relative  `}>
      <div className="w-[90%] mx-auto py-[50px]">
        <div className="flex flex-col tablet:flex-row gap-[2rem] justify-center items-center ">
          <div className="chart flex-1 hidden laptop:block">
            <div></div>
          </div>
          <div className="about_text tablet:flex-1 text-white ">
            <div className=" flex flex-col text-center tablet:text-right gap-[1rem] w-full ">
              <h3 className="text-base mb-[.5rem] font-medium">
                alphfxtrading
              </h3>
              <h2 className="text-5xl text-[#ffc107] font-semibold mb-[.5rem]">
                more about us
              </h2>
              <p className="mb-[2rem] text-[14px] ">
                With our all New strategy on bitcoin and forex trades, we make
                up to 98% daily wins, we also have a bitcoin mining team working
                with our platform. We generate a profit of 3BTC daily which
                equals $47,686 in today&apos;s market. Our company is SEC
                registered, fully licensed and Insured, your initial capital
                invest is 100% insured
              </p>
            </div>
            <div className="legend_count flex tablet:flex-row gap-[2rem] flex-col  tablet:text-right w-[60%] tablet:w-full mx-auto ">
              {Legend.map((legend, index) => (
                <div key={index} className="flex-1 w-full tablet:w-full ">
                  <div className="flex justify-center tablet:justify-end items-center gap-[.5rem]">
                    <span className="text-[36px] text-[#ffeb3b] font-bold">
                      <ScrollTrigger
                        onEnter={() => setCounterOn(true)}
                        onExit={() => setCounterOn(false)}
                      >
                        {counterOn && (
                          <CountUp start={0} end={legend.number} duration={3} />
                        )}
                      </ScrollTrigger>
                    </span>
                    {legend.image}
                  </div>
                  <h6 className="text-center tablet:text-right font-bold uppercase">
                    {" "}
                    {legend.details}{" "}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
