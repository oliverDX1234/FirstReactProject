import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const newExpenseHandler = (newExpense) => {
    let oldId = parseInt(expenses.at(-1).id.at(-1));
    const newId = "e" + (oldId += 1);

    setExpenses(() => {
      return [{ id: newId, ...newExpense }, ...expenses];
    });
  };

  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ]);

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler}> </NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
