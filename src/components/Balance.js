import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(item => item.amount);
  const total = amounts.reduce((acc, curr) => (acc += curr), 0);

  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">${total.toFixed(2)}</h1>
    </div>
  );
}

export default Balance;
