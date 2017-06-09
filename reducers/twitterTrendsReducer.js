const initialState = {
  trending: ["obasanjo", "atiku", "UCL"]
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TRENDS":
      return initialState.trending.concat(action.payload);
    default:
      return initialState;
  }
}