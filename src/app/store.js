import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../features/Todos/todosSlice';
import quotesReducer from '../features/Quotes/quotesSlice';
import weatherReducer from '../features/Weather/weatherSlice';
import picturesReducer from '../features/Pictures/picturesSlice';


export default configureStore({
  reducer: {
    todos: todosReducer,
    quotes: quotesReducer,
    weather: weatherReducer,
    picture: picturesReducer,
  },
});