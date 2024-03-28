import {useContext, createContext} from 'react';

export const TodoContext = createContext({
    todoList: [
        {
            id: 1,
            todo: 'Hello world',
            completed: true,
        }
    ],
    addTodo : (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}