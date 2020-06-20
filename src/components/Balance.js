import React, { useContext } from "react";
import { connect } from "react-redux";
//import { GlobalContext } from "../context/GlobalState";
function Balance({ transactions }) {
  //const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(item => item.amount);

  const total = amounts.reduce((acc, curr) => (acc += curr), 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 style={{ fontSize: "40px" }} className={total > 0 ? "money plus" : "money minus"} id="balance">
        ${total.toFixed(2)}{" "}
      </h1>
    </div>
  );
}

const mapStateToProps = ({ transactions: { transactions } }) => ({
  transactions
});

export default connect(mapStateToProps)(Balance);
