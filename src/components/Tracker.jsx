import { useState, useEffect } from "react";

import { currencyFormatter } from "../helpers";

const Tracker = ({ budget, expenses, setBudget, setExpenses, setValid }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce((total, exp) => exp.amount + total, 0);
    const totalAvailable = budget - totalSpent;
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );

    setAvailable(totalAvailable);
    setSpent(totalSpent);

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1500);
  }, [expenses]);

  const handleReset = () => {
    const result = confirm("Are you sure to clean budget and expenses?");
    if (result) {
      setExpenses([]);
      setBudget("");
      setValid(false);
    }
  };

  const divStyle = {
    width: `${percentage}%`,
  };

  return (
    <div className="logger-container shadow container">
      <div className="expenses">
        <p>
          <span>Budget: </span>
          {currencyFormatter(budget)}
        </p>
        <p className={`${available < 0 ? "negative" : ""}`}>
          <span>Spent: </span>
          {currencyFormatter(spent)}
        </p>
        <div className="progress-bar-div">
          <div className="progress-bar">
            <div
              className={`progress ${
                percentage > 95 ? "negative" : percentage > 50 ? "medium" : ""
              }`}
              style={divStyle}></div>
          </div>
          <span
            className={`${
              percentage > 95 ? "negative" : ""
            }`}>{`${percentage}%`}</span>
        </div>

        <p className={`${available < 0 ? "negative" : ""}`}>
          <span>Available: </span>
          {currencyFormatter(available)}
        </p>

        <button className="reset-app" type="button" onClick={handleReset}>
          Reset App
        </button>
      </div>
    </div>
  );
};

export default Tracker;
