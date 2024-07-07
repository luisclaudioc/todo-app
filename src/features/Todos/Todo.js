import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleDoneTodo } from "./todosSlice";

export default function Todo({ todo }) {

    const { text, done } = todo
    
    const dispatch = useDispatch();

    const deleteTodo = (e) => {
        e.preventDefault();
        dispatch(removeTodo(todo));
    };

    const toggleTodo = (e) => {
        e.preventDefault();
        dispatch(toggleDoneTodo(todo));
    }

    return (
        <div className="Todo flex-row" style={done ? {backgroundColor: "#007bff"} : {backgroundColor: "#ff8c00"}}>
            <h3>{text}</h3>
            <button className="btn check-btn" onClick={toggleTodo}>{done ? "UNDO" : "DO"}</button>
            <button className="btn delete-btn" onClick={deleteTodo}>X</button>
        </div>
    )
}