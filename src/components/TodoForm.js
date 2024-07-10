import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../features/Todos/todosSlice";

export default function TodoForm() {

    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            return;
        };

        dispatch(addTodo({
            id: uuidv4(),
            text: text,
            done: false,
        }));

        setText("");
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h1>What do you need to do?</h1>
            <input 
                id="new-todo"
                name="new-todo" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    )
}