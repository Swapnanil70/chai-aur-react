import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id : 1, todo: "Learn React", completed: false}],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todo: action.payload,
                completed: false,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            todo.todo = action.payload.todo;
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            todo.completed = !todo.completed;
        },
    },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;