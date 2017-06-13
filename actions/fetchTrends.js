import axios from "axios";
import settings from "../private/settings/settings";

const getApiGenerator = next  => (route, name) => {
  axios.defaults.headers.common['Authorization'] = settings.twitter.authorization;
  axios.get(route)
  .then(response => {
    const trends = []
    const topTenTrends = []
    response.data[0].trends.forEach((trend, index) => {
      trends.push(trend.name);
      if (index < 10) {
        topTenTrends.push(trend.name);
      }
    });
    return next({
      type: "TRENDS_FETCHED",
      payload: topTenTrends
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