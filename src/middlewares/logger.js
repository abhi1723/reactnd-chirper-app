const logger = (store) => (next) => (action) =>{
    console.group(action.type);
        console.log("action : ",action);
        const returnedValue = next(action);
        const newState = store.getState();
        console.log("new state : ",newState);
    console.groupEnd();
    return returnedValue;
}

export default logger;