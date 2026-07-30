import React from "react";
import { HiMenu, HiDotsVertical } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";

// function gener
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
console.log(generateOTP());
export default function GoogleAuth() {
  const [randomDigits, setRandomDigits] = useState([
    {
      id: 1,
      name: "Instagram",
      code: "115 639",
    },
    {
      id: 2,
      name: "Slack",
      code: "115 639",
    },
    {
      id: 3,
      name: "Google",
      code: "712 988",
    },
    {
      id: 4,
      name: "Facebook",
      code: "158 185",
    },
    {
      id: 5,
      name: "Amazon",
      code: "540 809",
    },
    {
      id: 6,
      name: "Discord",
      code: "796 919",
    },
  ]);
  // useState for initak value and secound is refersh secound

  const [accounts, setAccounts] = useState();
  const [seconds, setSeconds] = useState(10);

  //   // useEffecrt countdown and refersh

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomDigits((prev) =>
        prev.map((item) => ({
          ...item,
          code: generateOTP(),
        })),
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-8">
      {/* dusra div hai ye mobile */}
      <div className="relative w-[400px] h-[800px] bg-white rounded-xl shadow-2xl overflow-hidden">
        {/*hadder  */}

        <div className="flex justify-between items-center px-5 py-4 border">
          <div className="flex items-center gap-4">
            <HiMenu className="text-2xl text-gray-800" />

            <h1 className="text-2xl font-bold ">
              {/* <span className="text-amber-300"> Google</span> */}

              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>

              <span className="text-gray-800 ml-2">Authenticator</span>
            </h1>
          </div>
          <HiDotsVertical className="text-2xl text-gray-800" />
        </div>

        <div className="overflow-y-auto h-[700px]">
          {randomDigits?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center px-5 py-6 border"
            >
              <div>
                <p className="text-gray-800 text-sm">{item.name}</p>

                <h2 className="text-3xl font-bold text-blue-600 mt-2  ">
                  {item.code}
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full border-[6px] border-blue-500 border-t-transparent rotate-45"></div>
            </div>
          ))}
        </div>
        <button className=" absolute bottom-6 right-6 w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center ">
          <FiPlus className="text-4xl text-blue-500" />
        </button>
      </div>
    </div>
  );
}
