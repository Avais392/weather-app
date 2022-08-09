import { REACT_APP_API_KEY } from "../../utils/constants";


class SearchNetworkService {
  search (place: string)  {
    return new Promise((resolve, reject) => {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result0) => {
          resolve(result0[0]);
        })
        .catch((err) => reject(err));
    });
  };
}
export default new SearchNetworkService();
