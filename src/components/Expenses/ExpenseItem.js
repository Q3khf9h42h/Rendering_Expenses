import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from'./ExpenseDate'
// import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  //  const[title,setTitle]= useState(props.title);
  //  const [amount, setAmount] = useState(props.amount); // State to track the amount
  //  console.log('ExpenseItem evaluated by React');
  //    const clickHandler=()=>{
  //       setTitle('Updated!');
        
  //       console.log(title);
  //    };
  //    const changeAmountHandler = () => {
  //       setAmount(100);
  //       console.log(100);
  //     };
    
     return (
        
    <Card className="expense-item">
    <ExpenseDate date={props.date}/>
  <div className="expense-item_description">
    {/* <ExpenseDetails title={props.title} amount={props.amount} /> */}
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
    </div>
    <div className="expense-item_location">Location: {props.locationOfExpenditure}</div>
    {/* <button onClick={clickHandler} >Change Title</button>  */}
    {/* <button onClick={changeAmountHandler}>Change to $100</button> New button */}
    </Card>
    
     );
}
export default ExpenseItem;