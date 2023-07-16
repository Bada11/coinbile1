import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import { Button } from "../components";
import { TransactionContext } from "../Context/Transaction";
import { shortenAddress } from "../Utils/shortenAddress";
import img1 from "../assets/1.png";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import nft from "../assets/nft.jpg";
import nft2 from "../assets/nft2.jpg";
import nft3 from "../assets/download.jpg";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { data } from "../Utils/data";
import { NovuProvider, NotificationBell } from "@novu/notification-center";
import { SiEthereum } from "react-icons/si";

import {
  fadeIn,
  footerVariants,
  staggerChildren,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../Utils/motion";

const EthHome = () => {
  const [navbar, setNavbar] = useState(false);

  const { connectWallet, currentAccount, signOut, users, balance } =
    useContext(TransactionContext);

  const AllNfts = () => {
    alert("Not available at the moment!");
  };

  return (
    <div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-transparent w-full"
    >
      <div className="bg-none h-full sm:p-0 flex">
        <div className="fixed sm:flex hidden relative p-3 h-[100vh]">
          <Sidebar />
        </div>

        {navbar && (
          <div className="fixed w-full h-full nav  bg-black bg-none z-10 p-10 mt-0 top-0">
            <ul className="text-white text-center py-10 ">
              <AiOutlineClose
                onClick={() => setNavbar(false)}
                className="text-[25px]"
              />
              <Link to="/EthHome">
                <li className="mt-100">Home</li>
              </Link>

              <Link to="/form">
                <li className="mt-10">Send ETH</li>
              </Link>
              <Link to="/api">
                <li className="mt-10">Coin Rankings</li>
              </Link>
              <Link to="/transactions">
                <li className="mt-10">Transactions</li>
              </Link>
              <li className="mt-10" onClick={() => signOut()}>
                Sign out
              </li>
              <div className="mt-10 text-black">
                <Button
                  title={currentAccount ? "Wallet Connected" : "Connect Wallet"}
                  handleClick={connectWallet}
                />
              </div>
            </ul>
          </div>
        )}

        <div className=" absolute sm:px-20   bg-transparent flex justify-between w-full p-6 gap-3">
          <img
            src={users.photoURL}
            className="w-[40px] h-[40px] rounded-full sm:hidden"
          />
          <div className="flex justify-between w-full">
            <input
              className=" sm:w-[300px] w-full h-[40px] rounded-[100px] card px-3  sm:ml-6 overview-[#5ce2ff] text-white outline-none"
              placeholder="Search something..."
              //onClick={() => setNavbar(true)}
            />

            <div className="sm:hidden ">
              <CiMenuFries
                className="text-white text-[30px] ml-5 "
                onClick={() => setNavbar(true)}
              />
            </div>
          </div>

          <div className="sm:flex hidden gap-5">
            <img
              src={users.photoURL}
              className="w-[40px] h-[40px] rounded-full "
            />
            <Button
              title={currentAccount ? "Connected" : "Connect "}
              handleClick={connectWallet}
            />
          </div>
        </div>

        <div className="text-white w-full h-auto absolute sm:hidden mt-[15%] p-10 text-[25px] bg-transparent">
          <h1 className="bg-transparent">
            Hi, {users.displayName}.
            <span className="text-[20px] ml-3">
              {shortenAddress(currentAccount)}
            </span>
          </h1>
        </div>

        <div className="bg-transparent card w-full sm:h-[255px] xs:h-[560px] pb-5 sm:pb-0 sm:mt-[10%] mt-[40%] rounded-[10px] sm:flex  m-7 gap-3">
          <div className="p-5 w-full bg-transparent">
            <img src={img1} className="w-full h-full rounded-[10px]" />
          </div>
          <div className="px-10 bg-transparent">
            <h1 className="text-white  mt-10 text-[30px] ">
              Start sending and receiving ethereum with coinbile.
            </h1>

            <div className="flex justify-between float-left sm:gap-3 gap-10 mt-5">
              <Link to='/form'><Button title="Continue" /></Link>
            </div>
          </div>
        </div>
        <div className=" w-[25%] h-auto sm:mt-[10%] mt-[40%] card rounded p-2 sm:mr-5 xl:flex hidden ">
          <div className="p-5">
            <img src={nft3} className="h-[45%] w-full rounded-[5px]" />

            <h1 className="text-center mt-5 text-white">
              Hi,{users.displayName}
            </h1>

            <h1 className="text-white text-center mt-7">
              {shortenAddress(currentAccount)}
            </h1>

            <h1 className="text-[#5ce2ff] text-center text-[20px] mt-7 flex justify-center gap-2">
              <SiEthereum className="mt-1" /> {balance}ETH
            </h1>
          </div>
        </div>
      </div>

      <div className="flex bg-transparent justify-between sm:w-[75%] w-full sm:mt-[-17%] mt-5 sm:p-0 px-10">
        <h1 className="sm:ml-[15%]  text-white ">Top NFTs</h1>

        <div>
          <button
            className="flex  gap-3  text-white bg-[#121212] px-3 py-2 rounded-[80px]"
            onClick={AllNfts}
          >
            All NFTs
          </button>
        </div>
      </div>

      <div className="bg-none">
        {data?.length > 0 ? (
          <div className="grid sm:grid-cols-3  sm:ml-[10%] gap-4 sm:w-[70%] xs:w-[65%] w-full sm:p-0 sm:p-5 p-10 sm:mt-5 mt-0 pb-5">
            {data.map((datax) => (
              <div
                key={datax.token_id}
                className="sm:w-[290px] w-full card rounded-[10px] p-2"
              >
                <div className="glass bg-transparent  absolute px-3 text-white m-2 rounded-[20px]">
                  <h1 className="bg-transparent">12/04/23</h1>
                </div>
                <img
                  src={datax.image}
                  className="w-full h-[140px] rounded-[10px]"
                />

                <AiOutlineHeart className="float-right z-20 text-[#eaeaea]  mt-2 p-1 text-[25px] rounded cursor-pointer glass" />
                <h1 className="text-white p-5 text-center">
                  {datax.name}
                  <br />
                </h1>
                <div className="flex justify-between text-[12px] bg-transparent">
                  <p className="text-white bg-transparent">{datax.amount}</p>
                  <p className="text-white float-right bg-transparent">
                    {datax.block_number}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "loading..."
        )}
      </div>
    </div>
  );
};

export default EthHome;

//uJXFvj0651phXVCTqZ2ezxlN4k7WNIwY
