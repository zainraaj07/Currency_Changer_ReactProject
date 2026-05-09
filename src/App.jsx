// App.jsx

import { useState } from "react";
import Input from "./components/Input";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(
      (amount * currencyInfo[to]).toFixed(2)
    );
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Currency Box */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Input */}
          <div className="mb-5">
            <Input
              label="From"
              amount={amount}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          {/* Swap Button */}
          <div className="flex justify-center my-5">
            <button
              type="button"
              onClick={swap}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition duration-300 shadow-lg"
            >
              Swap
            </button>
          </div>

          {/* To Input */}
          <div className="mb-6">
            <Input
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisable
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl text-xl font-bold transition duration-300"
          >
            Convert {from} to {to}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;