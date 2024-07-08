
import { createSlice } from "@reduxjs/toolkit";


export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {},
        weatherIsLoading: false,
        weatherHasFailed: false,
    },
    reducers: {
        fetchWeatherStart: (state, action) => {
            state.weatherIsLoading = true;
            state.weatherHasFailed = false;
        },
        fetchWeatherSuccess: (state, action) => {
            state.weatherIsLoading = false;
            state.weatherHasFailed = false;
            state.weather = action.payload;
        },
        fetchWeatherFailure: (state, action) => {
            state.weatherIsLoading = false;
            state.weatherHasFailed = true;
        },
    }
});

export const fetchWeather = (latitude, longitude) => async (dispatch) => {
    dispatch(fetchWeatherStart());
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,weather_code&models=icon_seamless`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        console.log(result)
        dispatch(fetchWeatherSuccess(result));
    } catch (error) {
        dispatch(fetchWeatherFailure(error.message));
    }
};

export const selectWeather = (state) => state.weather;
export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } = weatherSlice.actions;
export default weatherSlice.reducer;