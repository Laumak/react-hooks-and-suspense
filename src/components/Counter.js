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

// https://egghead.io/lessons/react-use-the-usestate-react-hook?pl=react-hooks-and-suspense-650307f2
const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export { ComponentCounter, UseStateCounter };
