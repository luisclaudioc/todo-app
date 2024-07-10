import React from "react";
import Todo from "../Todos/Todo";

export default function Dones({ dones }) {
    
    return (
        <div className="container">
            <h2>DONE:</h2>
            {dones.length !== 0
            ? (
                <div className="todo-container flex-row">
                    {dones.map((done) => <Todo key={done.id} todo={done}/>)}
                </div>
            )
            : (<p>No previous tasks!</p>)
            }  
        </div>
    )
}