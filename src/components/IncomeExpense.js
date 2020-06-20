import React, { useContext } from "react";
import { connect } from "react-redux";
//import { GlobalContext } from "../context/GlobalState";

function IncomeExpense({ transactions }) {
  // const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(item => item.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, curr) => (acc += curr), 0);
  const expense = amounts.filter(item => item < 0).reduce((acc, curr) => (acc += curr), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income.toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = ({ transactions: { transactions } }) => ({
  transactions
});

export default connect(mapStateToProps)(IncomeExpense);
