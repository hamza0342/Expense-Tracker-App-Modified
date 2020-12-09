import TransactionReducer from './transReducer';
import React, { createContext, useReducer } from 'react';

const initialTransactions = [
    {
        amount: 500,
        desc: "cash"
    },

    {
        amount: -800,
        desc: "Book"
    },

    {
        amount: -200,
        desc: "Camera"
    }
]

export const TransactionContext = createContext(initialTransactions);



export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj) {
        dispatch({
            type: 'ADD',
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })

    }

    function deleteTransaction(id) {
        dispatch({
          type: 'DELETE',
          payload: id
        });
      }
    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction: addTransaction
        }}> 
        {children}
        </TransactionContext.Provider>
    )
}
