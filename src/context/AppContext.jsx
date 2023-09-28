import { createContext, useReducer } from "react";

const AppReducer = (state , action)=>{
    switch(action.type){
        case 'Add_Expense':
            return{
                ...state,
                Expenses : [...state.Expenses , action.payload],
            };
        case 'Delete_expense':
            return {
                ...state,
                Expenses : state.Expenses.filter(
                    (curr)=> curr.id!==action.payload
                )
            }
        case 'SET_BUDGET':
            return {
                ...state ,
                Budget : action.payload
            }

        default:
            return state;
    }
}

const initialState = {
    Budget :5000,
    Expenses :[
        {
            id: 1,
            expense: "Khana Kha lliye bhai",
            cost: 1000
        },
        {
            id: 2,
            expense: "Daru Pii lliye bhai",
            cost: 500
        },
    ]

};

export const AppContext = createContext();
export const AppProvider = (props)=>{
    const [state , dispatch] = useReducer(AppReducer , initialState);
    return(
        <AppContext.Provider value={
            {
                Budget : state.Budget,
                Expenses : state.Expenses,
                dispatch,

            }

        }>
            {props.children}

        </AppContext.Provider>
    )
}

