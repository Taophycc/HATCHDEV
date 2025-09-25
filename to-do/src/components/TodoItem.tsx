import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, Todo } from "../store/todo";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <li style={{ listStyle: "none", margin: "10px 0" }}>
      <span
        onClick={handleToggle}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none",
          opacity: todo.completed ? 0.5 : 1,
        }}
      >
        {todo.text}
      </span>

      <button onClick={handleDelete} style={{ marginLeft: "1rem" }}>
        X
      </button>
    </li>
  );
};
