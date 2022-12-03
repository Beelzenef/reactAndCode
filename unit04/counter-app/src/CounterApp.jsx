import PropTypes from "prop-types";
import { useState } from "react";

function CounterApp({ initial }) {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    setCounter(counter + 1);
  };

  const substract = () => {
    setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>+1</button>
      <button onClick={substract}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

CounterApp.propTypes = {
  initial: PropTypes.number.isRequired,
};

// CounterApp.defaultProps = {
//   initial: 0,
// };

export default CounterApp;
