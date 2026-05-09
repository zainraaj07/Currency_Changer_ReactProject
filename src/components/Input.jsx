import React, { useId } from "react";

function Input({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  selectCurrency,
  onCurrencyChange,
}) {

  const amountInputId = useId();

  return (
    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md border border-white/30">

      {/* Label */}
      <div className="flex justify-between items-center mb-3">
        <label
          htmlFor={amountInputId}
          className="text-white font-semibold text-lg"
        >
          {label}
        </label>

        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="px-3 py-2 rounded-xl bg-white/80 outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      {/* Input */}
      <input
        id={amountInputId}
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        placeholder="Enter Amount"
        className="w-full p-3 rounded-xl outline-none bg-white/80 text-black"
      />
    </div>
  );
}

export default Input;