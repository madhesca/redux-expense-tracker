import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const submitHandler = e => {
    e.preventDefault();

    if ((text !== "" && amount > 0) || amount < 0) {
      const newTrans = {
        id: Math.random(),
        text,
        amount: +amount
      };

      addTransaction(newTrans);
      setText("");
      setAmount("");
    } else {
      alert("Wrong Format");
    }
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input value={text} onChange={e => setText(e.target.value)} type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input value={amount} onChange={e => setAmount(e.target.value)} type="text" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
