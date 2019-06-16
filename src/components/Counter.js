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

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return { count, increment };
};

// https://egghead.io/lessons/react-use-the-usestate-react-hook?pl=react-hooks-and-suspense-650307f2
const UseStateCounter = () => {
  const { count, increment } = useCounter();
  return <button onClick={increment}>{count}</button>;
};

export { ComponentCounter, UseStateCounter };
