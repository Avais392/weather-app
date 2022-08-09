import WeatherMapsNetworkService from "../services/WeatherMapsNetworkService"

export const getWeatherMapForClouds = (onSuccess) => {
    WeatherMapsNetworkService.getWeatherMapForClouds().then((result) => {
        onSuccess(result);
    })
}
export const getWeatherMapForPrecipitation = (onSuccess) => {
    WeatherMapsNetworkService.getWeatherMapForPrecipitation().then((result) => {
        onSuccess(result);
    })
}
export const getWeatherMapForTemp = (onSuccess) => {   WeatherMapsNetworkService.getWeatherMapForTemp().then((result) => {
        onSuccess(result);
    })
}

