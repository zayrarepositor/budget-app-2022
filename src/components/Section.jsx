import React from "react";
import Logger from "./Logger";
import Tracker from "./Tracker";
import addImg from "../img/icons8-más-48.png";

const Section = ({
  budget,
  setBudget,
  valid,
  setValid,
  expenses,
  setExpenses,
}) => {
  return (
    <div className="section-header">
      <h1>Budget and Expenses Planner</h1>

      {valid ? (
        <>
          <div className="header-text">
            <p>
              Ok! Now, add your expenses with button{" "}
              <img src={addImg} alt="..." />
              at the corner
            </p>
          </div>
          <Tracker
            budget={budget}
            expenses={expenses}
            setExpenses={setExpenses}
            setBudget={setBudget}
            setValid={setValid}></Tracker>
        </>
      ) : (
        <Logger
          budget={budget}
          setBudget={setBudget}
          setValid={setValid}></Logger>
      )}
    </div>
  );
};

export default Section;
