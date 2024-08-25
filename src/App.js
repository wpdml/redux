import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: -5 } });
  };

  return (
    <div>
      <h1>
        {id},{password}
      </h1>
      <h1>{count}</h1>
      <button onClick={increase}>Increase!</button>
      <button onClick={decrease}>Decrease!</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
