let initialState = []
export default (state = initialState, action) => {
  switch (action.type) {
    case "TRENDS_FETCHED": {
      return initialState = action.payload;
    }
    default:
      return initialState;
  }
}