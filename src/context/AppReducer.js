const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      return {
        ...state,
        transactions: state.transactions.filter(item => item.id !== action.payload)
      };

    case "ADD_ITEM":
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };

    default:
      return state;
  }
};

export default AppReducer;
