import axios from "axios";

const getApiGenerator = next  => (route, name) => {
  axios.defaults.headers.common['Authorization'] = "Bearer AAAAAAAAAAAAAAAAAAAAACB%2BwgAAAAAAA%2FQQqrGFmnEMah3WAuGubPyxvXQ%3DdAyfKNu9DBB1wC9TUOGPIiOw89q4rJwmb8KRbKT3VvNjgef5Bi";
  axios.get(route)
  .then(response => {
    const trends = []
    response.data[0].trends.forEach((trend) => {
      trends.push(trend.name);
    });
    console.log(trends);
    return next({
      type: "TRENDS_FETCHED",
      payload: trends
    });
  })
  .catch(err => {
    return next({
      type: "FETCHING_ERROR",
      payload: err
    });
  })
}

const dataService = store => next => action => {
  next(action)
  const getApi = getApiGenerator(next);
  switch (action.type) {
    case "FETCH_TRENDS":
      getApi("https://api.twitter.com/1.1/trends/place.json?id=23424908", "FETCH_TRENDS");
      break;
    default:
    break
  }
}

export default dataService;