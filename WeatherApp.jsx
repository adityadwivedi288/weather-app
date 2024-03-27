import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo] =useState({
        city : "mumbai",
        humidity: 15,
        temp :22.84,
        tempMax :23.05,
        tempMin :22.84,
    })

    let updateInfo =(newInfo) =>{
         setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h1>Weather App </h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}