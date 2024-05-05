import {createStore} from 'redux';
const intialstate = {//bancking app
    balance:1000,
    fullname:"manjula",
    mobile:null,
};

function reducer(state = intialstate,action){
    if(action.type =="deposit")
       return {...state,balance:state.balance + +action.payload};
    else if (action.type == "withdraw")
        return {...state,balance:state.balance -  +action.payload};
    else if (action.type == "mobileUpdate")
        return {...state, mobile: action.payload};
    else if (action.type == "nameUpdate")
        return {...state, fullname:action.payload};
    else
    return intialstate;
    // switch(action.type){
    //     case "deposit":
    //         return {...state,balance:state.balance + action.payload};
    //     case "withdraw"
    //         return {...state,balance:state.balance -  action.payload};
    //     case "mobileUpdate"
    //         return {...state, mobile: action.payload};
    //     case "nameUpdaye"
    //         return {...state, fullname:action.payload};
    //     default
    //     return state;
    //     }
}

function transactionReducer(state=[],action){
    switch(action.type){
        case "ADD TRANSACTION":
        return [...state,
            {
                id:action.payload.id,
                amount:action.payload.amount,
                type:action.payload.type, 
                date:action.payload.date,
            },
        ];
        default:
            return state;
    }
}

let rootReducer = combineReducers(
    {
        account:accountReducer,
        transaction:transactionReducer
    }
)
const store = createStore(rootReducer);
// const store = createStore(reducer);

console.log(store.getState())


store.dispatch({type:"deposit",payload:1000})
console.log(store.getState())


store.dispatch({type:"withdraw",payload:10})
console.log(store.getState())


store.dispatch({type:"mobileUpdate",payload:91009010})
console.log(store.getState())


store.dispatch({type:"nameUpdate",payload:"manjuladevarala"})
console.log(store.getState())
// displatch({type:"deposit",payload:1000})//disposit 1000 ruppes
// displatch({type:"withdraw",payload:1000})//disposit 1000 ruppes


export default store;