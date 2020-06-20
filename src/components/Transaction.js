import React, { useContext } from "react";
//import { GlobalContext } from "../context/GlobalState";
import { connect } from "react-redux";
import { deleteItem } from "../redux/globalActions";

function Transaction({ transaction, deleteItem }) {
  console.log("delete", transaction);
  //const { deleteItem } = useContext(GlobalContext);
  const sign = transaction.amount > 0 ? "+" : "-";
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}{" "}
      <span>
        {sign}$ {Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteItem(transaction.id)}>
        x
      </button>
    </li>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id))
});

export default connect(null, mapDispatchToProps)(Transaction);
