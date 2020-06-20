import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import "./App.css";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Header />
      <Provider store={store}>
        <GlobalProvider>
          <div className="container">
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
          </div>
        </GlobalProvider>
      </Provider>
    </div>
  );
}

export default App;
