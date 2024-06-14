import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  // const counter = useSelector(state => state.counter);
  // const show = useSelector(state => state.showCounter);
  // const incrementHandler = () => dispatch({ type: 'increment' });
  // const increaseHandler = () => dispatch({ type: 'increase', amount: 10 });
  // const decrementHandler = () => dispatch({ type: 'decrement' });
  // const toggleCounterHandler = () => dispatch({ type: 'toggle' });

  const counter = useSelector(state => state.counter.value);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => dispatch(counterActions.increment(0));
  const increaseHandler = () => dispatch(counterActions.increment(5));
  const decrementHandler = () => dispatch(counterActions.decrement());
  const toggleCounterHandler = () => dispatch(counterActions.toggle());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// class Counter extends Component {
//   render() {
//     const { increment,incrementBy5, decrement,toggle, counter } = this.props;

//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{counter}</div>
//         <div>
//           <button onClick={increment}>+</button>
//           <button onClick={incrementBy5}>+5</button>
//           <button onClick={decrement}>-</button>
//           <button onClick={toggle}>toggle</button>
//         </div>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return { counter: state.counter};
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     incrementBy5: () => dispatch({ type: 'increment', amount: 5 }),
//     decrement: () => dispatch({ type: 'decrement' }),
//     toggle: () => dispatch({ type: 'toggle' }),
//   };
// };

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);