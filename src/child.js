import React, { useContext, useState } from 'react';
import {TransactionContext} from './TransactionContext';



function Child() {


    let {transactions, addTransaction} = useContext(TransactionContext);

    let [newdesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        addTransaction({
            amount:Number(newAmount),
            desc:newdesc
        });

        setDesc('');
        setAmount(0);
    }

    const getIncome = () => {
        let income = 0;
        for (var i=0; i< transactions.length; i++){
            if (transactions[i].amount > 0)
            income += transactions[i].amount
        }
        return income;

    }

    const getExpense = () => {

        let expense = 0;
        for (var i=0; i< transactions.length; i++){
            if (transactions[i].amount < 0)
            expense += transactions[i].amount
        }
        return expense;
         
    }

    const balance = getIncome() + getExpense();

    const calcbalance = () => {
        if (balance >0){
            return true;
        }

        else {
            return false;
        }
    }



  return (
    <div className="container">
      
        <h1 className="text-center">
            Expense Tracker
        </h1>

        <h2 className={`${calcbalance() === true ? 'Income balance' : 'Expense balance'}`}>
            Your balance <br /> ${balance}
        </h2>

        <div className= "expense-container">
            <h3 className="Income">
                Income <br /> ${getIncome()}
            </h3>
            <h3 className="Expense">
                Expense <br /> ${getExpense()}
            </h3>
        </div>

        <h3>
            History
        </h3>
        <hr />
        <ul className="transaction-list">

            {transactions.map((transObj, ind)=> {
                return (
                    <li key={ind}>
                <span>{transObj.desc}</span>
                <span>${transObj.amount}</span>
            </li>
                )
            })}
           
        </ul>

        <h3>
            Add new transaction
        </h3>
        <hr />

        <form className="transaction-form" onSubmit={handleAddition}>
            <label>
                Enter Description <br />
                <input type="text" onChange={(ev)=> setDesc(ev.target.value)}  value ={newdesc} placeholder="Enter Description" required />
            </label>
            <br />
            <label>
                Enter Amount <br />
                <input type="number" onChange={(ev)=> setAmount(ev.target.value)} placeholder="Enter Amount" value ={newAmount} required />
            </label>
            <br />

            <input type="submit" value="Add transaction" className="transaction"></input>
        </form>

    </div>
  );
}

export default Child;
