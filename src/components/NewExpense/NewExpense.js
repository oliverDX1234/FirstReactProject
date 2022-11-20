import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = function (props) {
  const saveDataHandler = (data) => {
    props.onNewExpense(data);
  };

  const [showForm, setShowForm] = useState(false);

  const exitFormHandler = function(){
    setShowForm(false)
  }

  return (
    <div className="new-expense">
      {!showForm && (
        <button
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add New Expense
        </button>
      )}
      {showForm && <ExpenseForm onSaveData={saveDataHandler} onExitForm={exitFormHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
