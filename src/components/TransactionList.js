import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import { connect } from "react-redux";

function TransactionList({ transactions }) {
  //const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  transactions: state.transactions.transactions
});

export default connect(mapStateToProps)(TransactionList);
