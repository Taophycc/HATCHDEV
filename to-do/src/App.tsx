import React from "react";
import "./App.css";

import { FilterButtons } from "./components/FilterButtons";
import { TodoList } from "./components/TodoList";
import { TodoCounter } from "./components/TodoCounter";
import { TodoInput } from "./components/TodoInput";

function App() {
  return (
    <>
      <TodoCounter />
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </>
  );
}

export default App;
