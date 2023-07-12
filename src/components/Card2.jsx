import React from "react";
import image2 from "../assets/coin.png";
import image3 from "../assets/2.png";
import image4 from "../assets/alien.svg";
import image5 from "../assets/1.svg";
import image6 from "../assets/shop_szjeit.svg";
import image7 from "../assets/3.svg";

import {
  fadeIn,
  footerVariants,
  staggerChildren,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../Utils/motion";

const Card2 = () => {
  return (
    <div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-20"
    >
      <h1 className="sm:text-[40px] text-[30px] text-white text-center">
        Blockchains for mass adoption
      </h1>

      <div className="grid sm:grid-cols-2 sm:p-20 p-0 gap-3 py-20 ">
        <div className=" border border-solid border-gray-500 bg-none text-white p-10 bg-transparent rounded">
          <div className="flex justify-center items-center">
            <img src={image5} className="sm:w-[40%] w-[60%] pb-5" />
          </div>
          <h1 className=" text-[25px]">Polygon Miden COMING SOON</h1>
          <p className="mt-5 text-[#5f5f5f]">
            Build advanced dApps with client-side proving with the first
            decentralized rollup that leverages execution proofs of concurrent,
            local transactions.
          </p>

          <p className="mt-5 underline cursor-pointer">View more</p>
        </div>

        <div className=" border border-solid border-gray-500 bg-none text-white p-10 bg-transparent rounded">
          <div className="flex justify-center items-center">
            <img src={image4} className="sm:w-[40%] w-[60%] pb-5" />
          </div>
          <h1 className="gap-3 text-[25px]">Polygon Miden COMING SOON</h1>
          <p className="mt-5 text-[#5f5f5f]">
            Build advanced dApps with client-side proving with the first
            decentralized rollup that leverages execution proofs of concurrent,
            local transactions.
          </p>

          <p className="mt-5 underline cursor-pointer">View more</p>
        </div>

        <div className=" border border-solid border-gray-500 bg-none text-white p-10 bg-transparent rounded">
          <div className="flex justify-center items-center">
            <img src={image6} className="sm:w-[40%] w-[60%] pb-5" />
          </div>
          <h1 className=" gap-3 text-[25px]">Polygon Miden COMING SOON</h1>
          <p className="mt-5 text-[#5f5f5f]">
            Build advanced dApps with client-side proving with the first
            decentralized rollup that leverages execution proofs of concurrent,
            local transactions.
          </p>

          <p className="mt-5 underline cursor-pointer">View more</p>
        </div>

        <div className=" border border-solid border-gray-500 bg-none text-white p-10 bg-transparent rounded">
          <div className="flex justify-center items-center">
            <img src={image7} className="sm:w-[40%] w-[60%] pb-5" />
          </div>
          <h1 className="text-[25px]">Polygon Miden COMING SOON</h1>
          <p className="mt-5 text-[#5f5f5f]">
            Build advanced dApps with client-side proving with the first
            decentralized rollup that leverages execution proofs of concurrent,
            local transactions.
          </p>
          <p className="mt-5 underline cursor-pointer">View more</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
