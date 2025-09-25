import React from "react";
import { useSelector } from "react-redux";
import { selectActiveTodoCount } from "../store/todo";

export function TodoCounter() {
  const activeCount = useSelector(selectActiveTodoCount);

  return <h2>Active To-Dos: {activeCount}</h2>;
}
