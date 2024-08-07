import React from "react";
import Todo from "./Todo";

export default function Todos({ todos }) {
    
    return (
        <div className="container">
            <h2>TO DO:</h2>
            {todos.length !== 0
                ? (
                    <div className="todo-container flex-row">
                        {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
                    </div>
                )
                : (<p>You are all caught up!</p>)
            }
        </div>
    )
}