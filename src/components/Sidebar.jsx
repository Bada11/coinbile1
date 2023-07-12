import React, { useContext } from "react";
import { AiOutlineHome, AiOutlineForm } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { BsCoin, BsClockHistory } from "react-icons/bs";
import { BiHomeAlt, BiCog, BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TransactionContext } from "../Context/Transaction";

const Sidebar = () => {
  const { signOut } = useContext(TransactionContext);
  return (
    <div className="card p-6 w-[65px]  rounded text-[#5f5f5f] z-10">
      <div className="text-center items-center text-[#5f5f5f] bg-transparent font-bold ">
        <Link to="/">
          <BiHomeAlt className="mt-10 bg-transparent font-bold hover:text-[#5ce2ff]" />
        </Link>

        <Link to="/form">
          <FiSend className="mt-10 bg-transparent hover:text-[#5ce2ff]" />
        </Link>

        <Link to="/api">
          <BsCoin className="mt-10 bg-transparent hover:text-[#5ce2ff]" />
        </Link>

        <Link to="/api">
          <AiOutlineHome className="mt-10 bg-transparent hover:text-[#5ce2ff]" />
        </Link>
        <Link to="/transactions">
          <BsClockHistory className="mt-10 bg-transparent hover:text-[#5ce2ff]" />
        </Link>
      </div>
      <div className="bottom-0 mb-10 absolute pb-0 bg-transparent ">
        <BiLogOut className=" mt-10 bg-transparent hover:text-[#5ce2ff]" />
        <BiCog
          className=" mt-10 bg-transparent hover:text-[#5ce2ff]"
          onClick={() => signOut()}
        />
      </div>
    </div>
  );
};

export default Sidebar;
