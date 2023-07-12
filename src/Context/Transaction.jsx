import React, { useState, useEffect, createContext } from "react";
import { ethers, parseEther } from "ethers";
import { auth, provider } from "../components/Firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { ContractAddress, ContractABI } from "../Utils/contract";

const { ethereum } = window;

export const TransactionContext = createContext();

//This is the first step for declaring the providers
const getTransaction = async () => {
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = provider.getSigner();
  const Useraccounts = await provider.send("eth_requestAccounts", []);
  const balance = await provider.getBalance(Useraccounts[0]);
  const transaction = new ethers.Contract(ContractAddress, ContractABI, signer);

  console.log(balance);
  return transaction;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    message: "",
  });
  const [isloading, setIsloading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [balance, setBalance] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e, name) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("please install metamask");

      const transactionContract = getTransaction();

      //calling the getBlockchain() function from the smart contract
      const Alltransaction = transactionContract.getBlockchain();

      //mapping over the Alltransaction(getBlockchain() function)  to get the structured values from the smart Contract
      const ExistingTransaction = Alltransaction.map((transaction) => ({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date(
          transaction.timestamp.toNumber() * 1000
        ).tolocalestring(),
        message: transaction.message,
        amount: parseInt(transaction.amount._hex) / 10 ** 18,
      }));

      console.log(ExistingTransaction);

      setTransactions(ExistingTransaction);
    } catch (error) {
      console.log(error);
    }
  };

  const IfTransationsIsExisting = async () => {
    try {
      if (!ethereum) return alert("please install metamask");

      const transactionContract = getTransaction();
      const AllTransactionCount = transactionContract.getBlockchainCount();

      window.localStorage.setItem("transactionCount", AllTransactionCount);
    } catch (error) {
      console.log(error);
    }
  };

  //This is the logic to connect the web-App to metaMask
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);

      window.Location.reload;
    } catch (error) {
      console.log(error);
    }
  };

  //This is to check if your wallet is connected to your webapp
  const checkifWalletisConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        console.log(accounts);

        getAllTransactions();
        setCurrentAccount(accounts[0]);
      } else {
        ("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //This is the logic to send ethereum to different wallet
  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const { addressTo, amount, message } = formData;

      const transactionContract = getTransaction();
      //const Amount = ethers.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: amount,
          },
        ],
      });

      //here we are calling the function addToBlockchain from the smart contract with the getSigner()
      const transactionHash = transactionContract.addToBlockchain(
        addressTo,
        amount,
        message
      );

      console.log(transactionHash);

      setIsloading(true);
      console.log(`loading - ${transactionHash}`);
      await transactionHash;

      setIsloading(false);
      console.log(`Success - ${transactionHash}`);

      const transactionCount = transactionContract.getBlockchainCount();
      setTransactionCount(transactionCount.toNumber());
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getBalance = async () => {
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = provider.getSigner();
    const Useraccounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(Useraccounts[0]);
    const transaction = new ethers.Contract(
      ContractAddress,
      ContractABI,
      signer
    );

    console.log(balance);
    setBalance(balance);
  };

  const signIn = () => {
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
      .then((result) => {
        const credentail = new GoogleAuthProvider.credentialFromResult(result);
        const token = credentail.accessToken;
        const user = result.user;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOut = async () => {
    await auth.signOut();
    navigate("/auth");
  };

  const users = auth.currentUser;

  if (users !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = users.displayName;
    const email = users.email;
    const photoURL = users.photoURL;
    const emailVerified = users.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = users.uid;
  }

  useEffect(() => {
    checkifWalletisConnected();
    IfTransationsIsExisting();
    getBalance();
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsloading(false);
      if (user) {
        navigate("/EthHome");
      } else {
        navigate("/auth");
      }
    });
  }, [transactionCount, user]);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        sendTransaction,
        handleChange,
        formData,
        isloading,
        balance,
        transactions,
        signIn,
        signOut,
        users,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
