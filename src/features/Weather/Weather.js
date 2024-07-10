import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather, selectWeather } from "./weatherSlice";


export default function Weather() {

    const dispatch = useDispatch();
    const { weather, weatherIsLoading, weatherHasFailed } = useSelector(selectWeather);

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

    const temperature = weather.current 

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
            <h1 className="Temperature">{temperature ? temperature.temperature_2m : ""}°C</h1>
        </div>
    )
}