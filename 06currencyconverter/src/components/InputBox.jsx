import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  selectedCurrency,
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const id = useId();
  return (
    <div className="flex flex-row gap-3 bg-gray-200 p-5 rounded transpare">
      <div className="flex flex-col">
        <label htmlFor={id}>{label}</label>
        <input
          className="text-black"
          type="number"
          id={id}
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="currencyType">Currency Type</label>
        <select name="" id="currencyType" disabled={currencyDisabled} value={selectedCurrency} onChange={(e)=> {onCurrencyChange && onCurrencyChange(e.target.value)}}>
          {currencyOptions &&
            currencyOptions.map((currency, i) => (
              <option key={i} value={currency}>{currency}</option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
