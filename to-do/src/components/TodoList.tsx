import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredTodos } from '../store/todo';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};