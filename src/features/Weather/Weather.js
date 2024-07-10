import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather, selectWeather } from "./weatherSlice";
import { icons } from "./weatherIcons";

export default function Weather() {

    const dispatch = useDispatch();
    const { weather, weatherIsLoading, weatherHasFailed } = useSelector(selectWeather);
    const [ currentIconSrc, setCurrentIconSrc ] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              dispatch(fetchWeather(latitude, longitude ))
            },
            (error) => {
              console.error('Error fetching user location:', error);
            }
        );
    }, [dispatch]);

    useEffect(() => {
        if (weather.current) {
            const isDay = weather.current.is_day === 1 ? "day" : "night";
            const weatherObj = icons[weather.current.weather_code][isDay]
            setCurrentIconSrc(weatherObj.image);
        }
    }, [weather]);

    

    if (weatherIsLoading) {
        return (
            <div className="Weather">
                <p>Loading...</p>
            </div>
        );
    }

    if (weatherHasFailed || !weather.current) {
        return (
            <div className="Weather">
                <p>No weather available.</p>
            </div>
        );
    }

    return (
        <div className="Weather">
            <img className="icon" alt="weather icon" src={currentIconSrc}/>
            <h1 className="Temperature">{weather.current ? weather.current.temperature_2m : ""}°C</h1>
        </div>
    )
}