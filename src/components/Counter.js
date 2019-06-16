import React, { useState } from "react";

class ComponentCounter extends React.Component {
  state = { count: 0 };

  render() {
    const { count } = this.state;

    return (
      <button onClick={() => this.setState({ count: count + 1 })}>
        {count}
      </button>
    );
  }
}

const useCounter = ({ initialState, step }) => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);

  return { count, increment };
};

// https://egghead.io/lessons/react-use-the-usestate-react-hook?pl=react-hooks-and-suspense-650307f2
const UseStateCounter = () => {
  const { count, increment } = useCounter({ initialState: 5, step: 3 });
  return <button onClick={increment}>{count}</button>;
};

export { ComponentCounter, UseStateCounter };
