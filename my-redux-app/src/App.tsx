import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { decrement, increment, selectCounterValue } from "./store/counter";
import { BaseUser, selectUserState, update } from "./store/user";

function App() {
  const count = useAppSelector(selectCounterValue);
  const user = useAppSelector(selectUserState);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeName = () => {
    dispatch(
      update({
        ...(user as BaseUser),
        name: "Tinubu",
      })
    );
  };

  return (
    <div className="App">
      <h1>Welcome, {user.name}</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={handleDecrement}>Decrement</button>{" "}
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <button onClick={handleChangeName}>Change Name</button>
      </div>
    </div>
  );
}

export default App;
