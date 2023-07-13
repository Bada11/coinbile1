import React, { useContext, useState } from "react";
import { Input } from "../components";
import image from "../assets/blockchain (1).png";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

import {
  fadeIn,
  footerVariants,
  staggerChildren,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../Utils/motion";
import { TransactionContext } from "../Context/Transaction";

const Auth = () => {
  const navigate = useNavigate();

  const { signIn } = useContext(TransactionContext);

  const notAvailable = () => {
    alert("Login not available at the moment");
    navigate('/EthHome')
  };

  return (
    <div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" "
    >
      <div className="sm:flex justify-between text-white sm:p-10 p-5">
        <div className="p-5">
          <img src={image} className=" image w-full mt-20 " />
        </div>

        <div className="sm:w-[40%] w-full sm:mt-10">
          <h1 className="text-[40px] mt-20 font-500 font-bold">Sign In</h1>

          <button
            className="bg-transparent w-full  text-white h-[60px] mt-10 rounded-[10px] card p-5"
            onClick={() => signIn()}
          >
            <FcGoogle className="bg-none absolute text-[25px] mt-[-5px]" /> Sign
            in with google
          </button>

          <h1 className="text-center py-3">Or</h1>

          <button
            className="bg-transparent w-full  text-white h-[60px]  rounded-[10px] card p-5"
            onClick={notAvailable}
          >
            <AiFillGithub className="bg-none absolute text-[25px] mt-[-5px]" />
            Sign in with github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
