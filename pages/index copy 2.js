import React, { useState } from 'react'

export default function BankAccount() {
  const [amount, setAmount] = useState(1000)

  function deposit () {
    setAmount(amount + 100)
  }
  function withdrawal () {
    if (amount > 100) {
      setAmount (amount - 100)
    }
  }

  function reset () {
    setAmount(1000)
  }



  return (
    <div className ="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Bank Account</h1>
      <p className="text-lg mb-4">Current Balance: ${amount}</p>
      <div className="flex space-x-4">
        <button
          onClick={deposit}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Deposit $100
        </button>
        <button
          onClick={withdrawal}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Withdraw $100
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>

    </div>
  )
}
