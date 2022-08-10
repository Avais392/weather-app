import WeatherMapsNetworkService from "../services/WeatherMapsNetworkService"

export const getWeatherMapForClouds = (onSuccess:(url:string)=>void) => {
    WeatherMapsNetworkService.getWeatherMapForClouds().then((result) => {
        onSuccess(result as string);
    })
}
export const getWeatherMapForPrecipitation = (onSuccess:(url:string)=>void) => {
    WeatherMapsNetworkService.getWeatherMapForPrecipitation().then((result) => {
        onSuccess(result as string);
    })
}
export const getWeatherMapForTemp = (onSuccess:(url:string)=>void) => {   WeatherMapsNetworkService.getWeatherMapForTemp().then((result) => {
        onSuccess(result as string);
    })
}

