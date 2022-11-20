import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = function (props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((x) => (
        <ExpenseItem key={x.id} expense={x}></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
