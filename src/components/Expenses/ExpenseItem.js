import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">${props.expense.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
