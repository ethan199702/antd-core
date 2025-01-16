import { useReducer } from "react";
interface IState {
  count: number;
}

interface Action {
  type: "increment" | "minus";
  num: number;
}

const App = () => {
  const reducer = (state: IState, action: Action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "minus":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", num: 1 })}>
        Increment
      </button>
      {state.count}
      <button onClick={() => dispatch({ type: "minus", num: 1 })}>minus</button>
    </div>
  );
};

export default App;
