import React from "react";
import Navonet from "../assets/navonet.jpeg";
import { AiOutlineGithub } from "react-icons/ai";

import {
  fadeIn,
  footerVariants,
  staggerChildren,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../Utils/motion";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" py-10 px-5 rounded text-[white]  mt-20 sm:mt-20 border border-[#5f5f5f]"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-[15%] font-bold">
        <h1 className="text-[25px] font-extrabold coinbile sm:flex hidden gap-2 ">
          Coinbile
        </h1>
        <ul className="text-[15x] gap-5 cursor-pointer">
          <li className="text-[20px]  underline">About Us</li>
          <li className="mt-5">Pricing</li>
          <li className="mt-5">Blog</li>
        </ul>

        <ul className="text-[15x] gap-5 cursor-pointer">
          <li className="text-[20px]  underline">Social</li>
          <li className="mt-5">Twitter</li>
          <li className="mt-5">Facebook</li>
          <li className="mt-5">Instagram</li>
          <li className="mt-5">TikTok</li>
        </ul>

        <ul className="text-[15x] gap-5 cursor-pointer">
          <li className="text-[20px] underline">Terms</li>
          <li className="mt-5">Privacy </li>
          <li className="mt-5">DPA</li>
        </ul>
      </div>
      <button className="border px-4 py-2 rounded sm:mt-0 mt-20 flex gap-2 border-[#5f5f5f]">
        <AiOutlineGithub className="text-[22px] " />
        Star us
      </button>

      <h1 className="text-center font-bold mt-4">
        Powered by
        <span className="ml-1">NAVOnet</span>
      </h1>
      <div className=" flex justify-center px-[50%]">
        <img
          src={logo}
          className="w-20 h-20 rounded sm:flex hidden flex justify-center"
        />
      </div>
    </div>
  );
};

export default Footer;
