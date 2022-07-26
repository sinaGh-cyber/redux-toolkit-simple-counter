import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../features/counter/counterSlice';
import { useState } from 'react';

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment(step || 1));
        }}
      >
        +
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          dispatch(decrement(step || 1));
        }}
      >
        -
      </button>
      <input
        type="number"
        value={parseInt(step) || 0}
        onChange={(e) => {
          setStep(parseInt(e.target.value));
        }}
      />
    </div>
  );
};

export default Counter;
