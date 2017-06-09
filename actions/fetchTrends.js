import axios from "axios";
const trends = [];

export const trendAction = (trends) => {
  return {
    type: "FETCH_TRENDS",
    payload: trends
  }
}

export const fetchTrends = () => {
  axios.defaults.headers.common['Authorization'] = "Bearer AAAAAAAAAAAAAAAAAAAAACB%2BwgAAAAAAA%2FQQqrGFmnEMah3WAuGubPyxvXQ%3DdAyfKNu9DBB1wC9TUOGPIiOw89q4rJwmb8KRbKT3VvNjgef5Bi";
  axios.get("https://api.twitter.com/1.1/trends/place.json?id=23424908")
  .then(response => {
    response.data[0].trends.forEach((trend) => {
      trends.push(trend.name);
    });
    console.log(response.data[0].trends);
  })
  .catch(err => console.log(err));
  trendAction(trends);
}