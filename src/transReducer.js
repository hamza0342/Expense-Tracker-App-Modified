const TransactionReducer = ((state, action)=>{
    switch(action.type){
        case 'ADD': {
                return [action.payload, ...state]
        }

        case 'DELETE' : {
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            } 
        }

        default:
            return state

    }
})

export default TransactionReducer;