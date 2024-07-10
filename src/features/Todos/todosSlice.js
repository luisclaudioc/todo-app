import { createSlice } from "@reduxjs/toolkit";

// MOCK DATA
const initialState = [
    {id: "1", text: "Do the dishes", done: false},
    {id: "2", text: "Clean the room", done: true},
    {id: "3", text: "Water the dog", done: false},
    {id: "4", text: "Walk plants", done: false},
    {id: "5", text: "Do the laundry", done: true},
    {id: "6", text: "Make the beds", done: false},
    {id: "7", text: "Study", done: true},
    {id: "8", text: "Homework", done: false},
];

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: initialState
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos.splice(index, 1);
        },
        toggleDoneTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos[index].done = !state.todos[index].done;
        }
    }
});

export const selectTodos = (state) => state.todos.todos;
export const { addTodo, removeTodo, toggleDoneTodo } = todosSlice.actions;
export default todosSlice.reducer;