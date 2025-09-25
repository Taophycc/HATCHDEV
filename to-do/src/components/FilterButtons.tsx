import React from "react";
import { useDispatch } from "react-redux";
import { Filter, setFilter } from "../store/todo";

export function FilterButtons() {
  const dispatch = useDispatch();

  const handleFilterClick = (filter: Filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <button onClick={() => handleFilterClick("All")}>All</button>
      <button onClick={() => handleFilterClick("ACTIVE")}>Active</button>
      <button onClick={() => handleFilterClick("COMPLETED")}>Completed</button>
    </div>
  );
}
