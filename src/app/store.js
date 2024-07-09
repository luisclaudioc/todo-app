import { configureStore } from "@reduxjs/toolkit";
// import reducers
import todosReducer from '../features/Todos/todosSlice';
import quoresReducer from '../features/Quotes/quotesSlice';
import weatherReducer from '../features/Weather/weatherSlice';
import pictureReducer from '../features/Pictures/picturesSlice'


export default configureStore({
  reducer: {
    todos: todosReducer,
    quotes: quoresReducer,
    weather: weatherReducer,
    picture: pictureReducer,
  },
});