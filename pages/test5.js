import React, { useEffect, useState } from "react";

export default function test5() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  //   Add Todo Logic
  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  // delete Logic
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // toggle Completed Logic
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Search Logic
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-400 text-2xl text-black">
      {/* 1. Add Todo Section */}
      <div className="w-150 flex flex-col bg-gray-200 rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Toda App</h1>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a Task"
            className="w-full p-3 rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 rounded-lg text-lg transition-colors"
          >
            Add
          </button>
        </div>

        {/* 2. Search Todo Section */}
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search task"
            className="w-full p-2 rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
        </div>

        {/* 3. Todo List Section */}
        <div className="flex flex-col gap-3">
          {filteredTodos.length === 0 ? (
            <p className="text-center text-gray-500">
              {todos.length === 0
                ? "No tasks yet. Add one above!"
                : "No tasks match your search."}
            </p>
          ) : (
            filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 cursor-pointer"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span
                    className={`text-lg ${todo.completed ? "text-gray-500 line-through" : "font-medium"}`}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-md font-medium transition-colors"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
