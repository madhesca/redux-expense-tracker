import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/globalActions";
//import { GlobalContext } from "../context/GlobalState";

function AddTransaction({ addItem, transactions }) {
  // const { addItem, transactions } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  localStorage.setItem("items", JSON.stringify(transactions));
  const submitHandler = e => {
    e.preventDefault();

    if ((text !== "" && amount > 0) || amount < 0) {
      const newItem = {
        id: Math.random(),
        text,
        amount: +amount
      };
      console.log(newItem);

      addItem(newItem);
      setText("");
      setAmount("");
    } else {
      alert("wrong");
    }
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="text" placeholder="Enter amount..." value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ transactions: { transactions } }) => {
  return {
    transactions
  };
};

const mapDispatchToProps = dispatch => ({
  addItem: transaction => dispatch(addItem(transaction))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
