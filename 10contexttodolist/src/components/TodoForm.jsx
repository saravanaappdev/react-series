import React, { useState } from "react";
import { useTodo } from "../contexts/todoContext";

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("");

  const { addTodo, todoList } = useTodo();

  const addTodoItem = () => {
    console.log("Add Todo->", todoMsg);
    if(!todoMsg) return;
    addTodo({
      todo: todoMsg,
      completed: false,
    });
    setTodoMsg("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodoItem();
  };

  return (
    <>
      {/* <h3>{JSON.stringify(todoList)}</h3> */}
      <form onSubmit={onSubmit} className="flex my-3">
        <input
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        
        //   className="rounded-lg border-blue-500 border-2 px-2"
          type="text"
          value={todoMsg}
          onChange={(e) => {
            setTodoMsg(e.target.value);
          }}
        />
        <button 
        className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
        onClick={() => {}}>Add Todo</button>
      </form>
    </>
  );
}

export default TodoForm;
