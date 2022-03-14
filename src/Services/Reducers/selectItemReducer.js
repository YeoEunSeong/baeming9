const initailSelect = null;

const selectItemReducer = (state = initailSelect, action) => {
  switch (action.type) {
    case "FETCH_ITEM_DETAIL":
      const Item = action.payload;
      return Item;

    default:
      return state;
  }
};

export default selectItemReducer;
