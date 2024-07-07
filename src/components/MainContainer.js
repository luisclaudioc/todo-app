import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../features/Todos/todosSlice";
import Weather from "../features/Weather/Weather";
import TodoForm from "./TodoForm"
import Todos from "../features/Todos/Todos";
import Dones from "../features/Dones/Dones";
import Quote from "../features/Quotes/Quote"


export default function MainContainer() {

    const allTodos = useSelector(selectTodos);
    const todos = allTodos.filter(todo => !todo.done)
    const dones = allTodos.filter(todo => todo.done)

    return (
        <div className="MainContainer">
            <Weather />
            <TodoForm />
            <Todos todos={todos} />
            <Dones dones={dones} />
            <Quote />
        </div>
    )
}