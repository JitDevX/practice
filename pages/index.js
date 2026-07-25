import React, { useEffect, useState } from "react";


export default function index() {
  const[month, setMonth] = useState("")
  const[year, setYear] = useState("")
  const[order, setOrder] = useState( [])

console.log(month)
  useEffect(() => {
    console.log(month)
    if (month === "oct"){
      window.alert("oct")
    }
  },[month])




  return (
    //main componet
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-2 m-2">
      <div className="flex flex-row bg-[#df5252] ma-w-4xl w-full h-screen">
        {/* left side */}
        <div className="flex flex-col  justify-around   w-1/2 bg-white h-full shadow-lg rounded-2xl m-4 p-2  ">
          <h2 className="text-gray-800 p-2 m-4"> Payment details</h2>

          <div className="flex flex-col">
            <label className="text-black"> Payment Method:-</label>
            <select className="text-gray-800 bg-transparent border-b border-red-500 w-full ">
              <option>crdit card</option>
              <option>dabit card</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-black"> card number</label>
            <input
              type="number"
              maxLength={16}
              placeholder="card number"
              className="border-b border-red-500  text-gray-700"
            />
          </div>

          <div className="flex flex-col-3 gap-5">
            <div className="flex flex-col">
              <label className="text-black">Expire Month</label>
              <select className="text-gray-800 bg-transparent border-b border-red-500  w-full"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              >
                <option>jan</option>
                <option>feb</option>
                <option>march</option>
                <option>apirl</option>
                <option>may</option>
                <option>june</option>
                <option>july</option>
                <option>aug</option>
                <option>sep</option>
                <option>oct</option>
                <option>nav</option>
                <option>dec</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-black">Expire Month</label>
              <select className="text-gray-800 bg-transparent border-b border-red-500  w-full "
              value={year}
              onChange={(e) => setYear(e.target.value)}
              >
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-black">cvvv</label>
              <input
                type="number"
                maxLength={3}
                className="text-gray-800 bg-transparent border-b border-red-500  w-full"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="text-black">Name </label>
            <input
              type="text"
              className="text-gray-800 bg-transparent border-b border-red-500  w-full"
              placeholder="name"
            />
          </div>

          <div className="flex flex-row items-center">
            <button className="bg-amber-700  rounded-3xl shadow-2xl m-5 p-3"
            >
              Pay now
            </button>
            <p className="text-black text-2xl"> headphoes </p>
          </div>


        </div>

        {/* right side */}

        <div className="flex flex-col justify-center items-center w-1/2 h-full shadow-lg rounded-2xl m-4 p-2 ">
          <img
            src="./headphone-11530972547el05n3vobv-removebg-preview 2.png"
            alt="head"
          />

          <p className="text-white"> Ep on ear Buds $99.99</p>
        </div>
      </div>
    </div>
  );
}
