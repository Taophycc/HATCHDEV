import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../store/todo";

export function TodoInput() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim()) {
      dispatch(AddTodo({ text: text.trim() }));
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
