let initialState = ["obasanjo", "atiku", "UCL"]
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "TRENDS_FETCHED": {
      return initialState = action.payload;
      // break;
    }
    default:
      return initialState;
      // break;
  }
  // return state;
}