import React, { useContext, useState } from "react";
import { Button, Navbar, Sidebar } from "../components";
import { TransactionContext } from "../Context/Transaction";
import { SiEthereum } from "react-icons/si";
import { ThreeDots } from "react-loader-spinner";
import {
  NovuProvider,
  NotificationBell,
  PopoverNotificationCenter,
} from "@novu/notification-center";
import {
  fadeIn,
  footerVariants,
  staggerChildren,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../Utils/motion";

const Input = ({ placeholder, name, handlechange, value, type }) => (
  <input
    className="w-full card h-[50px] rounded p-2 mt-10 text-white outline-[blue]"
    placeholder={placeholder}
    onChange={(e) => handlechange(e, name)}
    value={value}
    step="0.0001"
    type={type}
  />
);

const Form = () => {
  const [input, setInputs] = useState("");
  const { formData, sendTransaction, handleChange, isloading,} =
    useContext(TransactionContext);

  const onNotificationClick = (message) => {
    // your logic to handle the notification click
    if (message?.cta?.data?.url) {
      window.location.href = message.cta.data.url;
    }
  };

  const Submit = async (e) => {
    const { addressTo, amount, message } = formData;

    e.preventDefault();

    console.log("Button clicked");
    await fetch("http://localhost:3000/home/", {
      method: "POST",
      body: JSON.stringify({
        description: input,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    input: "Error";

    sendTransaction();
  };

  return (
    <div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" flex sm:h-[150vh] h-[160vh]"
    >
      <div className="fixed sm:flex hidden relative p-3 h-[100vh]">
        <Sidebar />
      </div>

      <div className="float-right bg-transparent rounded">
        <div className="fixed bg-transparent p-5 rounded">
         {/* <NovuProvider
            subscriber-id="Submit"
            applicationIdentifier={"AtmZcPmcw1Jr"}
          >
            <PopoverNotificationCenter
              onNotificationClick={onNotificationClick}
              className="bg-transparent"
            >
              {({ unseenCount }) => (
                <NotificationBell
                  unseenCount={unseenCount}
                  className="bg-transparent"
                />
              )}
            </PopoverNotificationCenter>
              </NovuProvider>*/}
        </div>
      </div>

      <div className=" w-full p-5">
        <h1 className="text-white text-center py-3 text-[30px] font-bold">
          Send Ethereum
        </h1>
        <div className="sm:flex gap-3">
          <Input
            placeholder="Enter Address"
            name="addressTo"
            handlechange={handleChange}
          />

          <Input
            placeholder="Enter Amount(ETH)"
            name="amount"
            type="number"
            handlechange={handleChange}
          />
        </div>

        <div className="sm:flex gap-3">
          <Input
            placeholder="Enter Address"
            name="description"
            handlechange={handleChange}
          />
          <Input placeholder="Enter Address" handleChange={handleChange} />
        </div>

        <div className="w-full button mt-10 rounded h-[20%] p-5 ">
          <h1 className="text-center  text-[25px] bg-transparent">
            <SiEthereum className="bg-transparent" /> Send Ethereum with
            Coinbile
          </h1>
        </div>
        <textarea
          className="w-full mt-10 h-[30%] card rounded p-3 text-white outline-[blue]"
          placeholder="Enter Message"
          name="message"
          type="text"
          value={input}
          onChange={(e) => setInputs(e.target.value)}
        />

        <div className="py-2 ">
          {isloading ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#5ce2ff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <Button title={formData.amount}"Send ETH " handleClick={Submit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
