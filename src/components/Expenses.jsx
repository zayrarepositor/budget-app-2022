import React from "react";
import Expense from "./Expense/Expense";

const Expenses = ({
  expenses,
  setExpenseToEdit,
  deleteExpense,
  filteredExpenses,
  filter,
}) => {
  return (
    <div className="expenses-list container">
      {filter ? (
        <>
          <h2>
            {filteredExpenses.length ? "Expenses" : "There are not expenses"}
          </h2>
          {filteredExpenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setExpenseToEdit={setExpenseToEdit}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Expenses" : "There are not expenses"}</h2>
          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setExpenseToEdit={setExpenseToEdit}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Expenses;
