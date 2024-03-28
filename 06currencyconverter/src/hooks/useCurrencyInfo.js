import { useEffect, useState } from "react";
import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi('fca_live_KTCP3ZYHlUtqg71h6whOza1dJGxwaI00ZiHoITwu');

// https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_KTCP3ZYHlUtqg71h6whOza1dJGxwaI00ZiHoITwu&currencies=EUR&base_currency=ZAR

function useCurrencyInfo(baseCurrency, convertCurrency) {
  const [amount, setAmount] = useState(0);

  useEffect(()=>{
    console.log('base->', baseCurrency, 'converted->', convertCurrency);

    freecurrencyapi
    .latest({
      base_currency: baseCurrency,
      currencies: convertCurrency,
    })
    .then((response) => {
      console.log(response);
      setAmount(response);
    })
    .catch((err) => {
      console.log("Err: ", err);
    });
  },[baseCurrency, convertCurrency]);

  console.log("Amount-->", amount);
  return amount;

}

export default useCurrencyInfo;
