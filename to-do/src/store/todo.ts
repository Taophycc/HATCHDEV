import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  filter: Filter;
  counter: number;
}

export type Filter = "All" | "ACTIVE" | "COMPLETED";

const initialState: TodoState = {
  todos: [{ id: 1, text: "Learn Redux", completed: false }],
  filter: "All",
  counter: 1,
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState: initialState,
  reducers: {
    AddTodo: (state, action: PayloadAction<Pick<Todo, "text">>) => {
      state.todos.push({
        id: state.counter,
        text: action.payload.text,
        completed: false,
      });
      state.counter += 1;
    },
    toggleTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      let todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const selectFilteredTodos = (state: RootState) => {
  const todos = state.todo.todos;
  const filter = state.todo.filter;

  if (filter === "COMPLETED") {
    return todos.filter((todo) => todo.completed);
  } else if (filter === "ACTIVE") {
    return todos.filter((todo) => !todo.completed);
  } else {
    return todos;
  }
};

export const selectActiveTodoCount = (state: RootState) =>
  state.todo.todos.filter((todo) => !todo.completed).length;

export const { AddTodo, toggleTodo, deleteTodo, setFilter } = TodoSlice.actions;
