import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store"; 

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.value);
    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => dispatch(counterActions.increment());  
    const increaseHandler = () => dispatch(counterActions.increment(10));  
    const decrementHandler = () => dispatch(counterActions.decrement());
    const toggleHandler = () => dispatch(counterActions.toggle());

    return (
        <main className="my-20 mx-auto  max-w-md  rounded-md p-4 text-center bg-[#f4f0fa]">
            <h1 className="uppercase m-0 text-gray-600 text-base">Redux Counter</h1>  
            {show && <div className="text-2xl text-purple-900 my-8 font-bold">{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 10</button> 
                <button onClick={decrementHandler}>Decrement</button> 
            </div>
            <button className="m-4" onClick={toggleHandler}>Toggle</button>
        </main>
    );
};

export default Counter;
