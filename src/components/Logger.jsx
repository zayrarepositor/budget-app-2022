import { useState } from "react";
import Message from "./Message";

const Logger = ({ budget, setBudget, setValid }) => {
  const [error, setError] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setBudget(Number(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!budget || budget < 0) {
      setError("invalid input value");
      return;
    }
    setError("");
    setValid(true);
  };

  return (
    <div className="logger-container shadow container">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="availablebudget">
            Available budget
          </label>
          <input
            className="logger-new-input"
            type="number"
            id="availablebudget"
            placeholder="available hours"
            value={budget}
            onChange={handleInput}
          />
        </div>
        <input type="submit" value="enter" />
        {error && <Message type="error">{error}</Message>}
      </form>
    </div>
  );
};

export default Logger;
