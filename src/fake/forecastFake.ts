import IForecast from "../dtos/IForecast";


 const foreCastFake: IForecast[]= [
    {
    number: 1,
    name: "Today",
    temperature: 75,
    temperatureUnit: "F",
    windSpeed: "10 to 20 mph",
    windDirection: "E",
    icon: "https://api.weather.gov/icons/land/day/bkn/tsra,50?size=medium",
    shortForecast: "Mostly Cloudy then Chance Showers And Thunderstorms",
    detailedForecast: "A slight chance of rain showers between 3pm and 4pm, then a chance of showers and thunderstorms. Mostly cloudy, with a high near 75. East wind 10 to 20 mph, with gusts as high as 30 mph. Chance of precipitation is 50%."
},
{
    number: 2,
    name: "Tonight",
    temperature: 59,
    temperatureUnit: "F",
    windSpeed: "15 to 20 mph",
    windDirection: "SE",
    icon: "https://api.weather.gov/icons/land/night/tsra,60/tsra,50?size=medium",
    shortForecast: "Showers And Thunderstorms Likely",
    detailedForecast: "A chance of showers and thunderstorms before 8pm, then showers and thunderstorms likely between 8pm and 10pm, then showers and thunderstorms likely. Mostly cloudy, with a low around 59. Southeast wind 15 to 20 mph, with gusts as high as 30 mph. Chance of precipitation is 60%."

}

]


export default foreCastFake;