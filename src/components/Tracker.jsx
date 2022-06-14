import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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

  return (
    <div className="logger-container shadow container columns">
      <div>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage > 100 ? "#b91c1c" : "#f58320d5",
            textColor: percentage > 100 ? "#b91c1c" : "#2a8b5d",
            trailColor: "#666666",
          })}
          text={`${percentage}% spent`}
        />
      </div>
      <div className="expenses">
        <button className="reset-app" type="button" onClick={handleReset}>
          Reset App
        </button>
        <p>
          <span>Total: </span>
          {currencyFormatter(budget)}
        </p>
        <p className={`${available < 0 ? "negative" : ""}`}>
          <span>Available: </span>
          {currencyFormatter(available)}
        </p>
        <p>
          <span>Spent: </span>
          {currencyFormatter(spent)}
        </p>
      </div>
    </div>
  );
};

export default Tracker;
