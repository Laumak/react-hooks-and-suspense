import React, { useState, useEffect } from "react";

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

// https://egghead.io/playlists/react-hooks-and-suspense-650307f2
const useCounter = ({ initialState, step }) => {
  // In order to only run this once, it must be a function
  const initialCount = () =>
    Number(localStorage.getItem("count") || initialState);
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + step);
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]); // Only "run" this effect when the given value(s) change

  return { count, increment };
};

const UseStateCounter = () => {
  const { count, increment } = useCounter({ initialState: 5, step: 3 });
  return <button onClick={increment}>{count}</button>;
};

export { ComponentCounter, UseStateCounter };
