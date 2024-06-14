const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type == 'INCREMENT') 
        return { counter: state.counter + 1 ,state: action.payload++}; 
    return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT'});
