import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoContextProvider } from "./contexts/todoContext";
import { TodoForm, Todo } from "./components";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList([{ id: Date.now(), ...todo }, ...todoList]);
  };

  const deleteTodo = (id) => {
    console.log("id-->", id);
    const updatedList = todoList.filter((todo) => todo.id != id);
    setTodoList(updatedList);
  };

  const updateTodo = (id, todo) => {
    const updatedTodolist = todoList.map((item) =>
      item.id == id ? { ...todo } : item
    );
    setTodoList(updatedTodolist);
  };

  // For initial rendering from local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodoList(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContextProvider value={{ addTodo, deleteTodo, updateTodo, todoList }}>
      <div className="bg-[#172842] min-h-screen py-8 ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <TodoForm />
          <div className="flex flex-col flex-wrap gap-y-3">
            {todoList.map((item) => (
              <Todo key={item.id} {...item} />
            ))}
          </div>
          <div className="flex justify-center">
            {todoList.length === 0 ? <h3>NO DATA</h3> : null}
          </div>

        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
