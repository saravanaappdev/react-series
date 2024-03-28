import React, { useState, useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [option, setOption] = useState("ALL");

  const updateTodoList = (name, isCompleted) => {
    let updatedList = todoList.map((item) => {
      if (item.name == name) {
        item.isCompleted = isCompleted;
      }
      return item;
    });
    setTodoList(updatedList);
    console.log("todo->", updatedList);
  };

  const Todo = ({ checked, name }) => {
    return (
      <div className="flex flex-wrap flex-row gap-3 justify-around w-[300px] p-3 border-spacing-1 border-gray-500 border-2 m-2 rounded-2xl bg-gray-400 shadow-md text-white">
        <div className="flex gap-3">
          <input
            type="checkbox"
            checked={checked}
            id={name}
            name={name}
            onChange={(e) => {
              updateTodoList(name, e.target.checked);
            }}
          />
          <label htmlFor={name}>{name}</label>
        </div>
        <h6>
          Completed :{" "}
          {checked ? (
            <span className="w-[80px] bg-green-500 px-2 py-1 rounded-lg shadow-md ">
              {" "}
              YES{" "}
            </span>
          ) : (
            <span className="w-[80px] bg-red-500 px-2 py-1 rounded-lg shadow-md">
              {" "}
              NO{" "}
            </span>
          )}{" "}
        </h6>
      </div>
    );
  };

  const dummyList = [
    {
      id: 1,
      name: "A",
      isCompleted: false,
    },
    {
      id: 2,
      name: "B",
      isCompleted: true,
    },
    {
      id: 3,
      name: "C",
      isCompleted: true,
    },
  ];
  
  useEffect(() => {
    setTodoList(dummyList);
  }, []);

  const getOptionsList = () => {
    if (!todoList) {
      return [];
    } else {
      return todoList.filter((item) => {
        if (option === "COMPLETED") return item.isCompleted;
        if (option === "ACTIVE") return !item.isCompleted;
        return true;
      });
    }
  };
  return (
    <div className="bg-orange-300 h-screen flex items-center flex-col">
      <div>
        <h2 className="font-bold text-3xl">Filter</h2>
        <div className="flex flex-row gap-3">
          <button
            onClick={() => {
              setOption("ALL");
            }}
            style={
              option === "ALL"
                ? { borderWidth: "5px", borderColor: "darkcyan" }
                : { backgroundColor: "" }
            }
            className="p-3 border-spacing-1 bg-amber-400 border-red-100 border-2 rounded-lg shadow-md"
          >
            {" "}
            ALL{" "}
          </button>
          <button
            onClick={() => {
              setOption("ACTIVE");
            }}
            style={
              option === "ACTIVE"
                ? { borderWidth: "5px", borderColor: "greenyellow" }
                : { backgroundColor: "" }
            }
            className="p-3 border-spacing-1 bg-green-400 border-red-100 border-2 rounded-lg shadow-md"
          >
            {" "}
            ACTIVE{" "}
          </button>
          <button
            onClick={() => {
              setOption("COMPLETED");
            }}
            style={
              option === "COMPLETED"
                ? { borderWidth: "5px", borderColor: "blueviolet" }
                : { backgroundColor: "" }
            }
            className="p-3 border-spacing-1 bg-blue-400 border-red-100 border-2 rounded-lg shadow-md"
          >
            {" "}
            COMPLETED{" "}
          </button>
        </div>
      </div>
      <ul>
        {getOptionsList().map((item) => (
          <li key={item.id}>
            <Todo checked={item.isCompleted} name={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
