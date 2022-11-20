import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart"
import "./Expenses.css";
import { useState } from "react";

const Expenses = function (props) {
  const [filterYear, setFilterYear] = useState("2019");

  const yearUpdatedHandler = (value) => {
    setFilterYear(value);
  };

  const filtered = props.expenses.filter(x => x.date.getFullYear() === filterYear)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filteredYear={filterYear} onYearUpdated={yearUpdatedHandler}></ExpensesFilter>
        <ExpensesChart expenses={filtered}></ExpensesChart>
        <ExpensesList expenses={filtered}></ExpensesList>
        
      </Card>
    </div>
  );
};

export default Expenses;
