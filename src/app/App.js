import './App.css';
import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../features/Todos/todosSlice";
import Weather from "../features/Weather/Weather";
import TodoForm from "../components/TodoForm";
import Todos from "../features/Todos/Todos";
import Dones from "../features/Dones/Dones";
import Quote from "../features/Quotes/Quote";
import Picture from "../features/Pictures/Picture";


export default function App() {

    const allTodos = useSelector(selectTodos);
    const todos = allTodos.filter(todo => !todo.done)
    const dones = allTodos.filter(todo => todo.done)

    return (
        <div className="App">
            <Weather />
            <TodoForm />
            <Todos todos={todos} />
            <Dones dones={dones} />
            <Quote />
            <Picture />
        </div>
    )
}
