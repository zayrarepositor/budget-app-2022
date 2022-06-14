import { useState, useEffect } from "react";
import Message from "../Message.jsx";
import closeImg from "./img/icons8-eliminar.svg";

const Modal = ({
  setModal,
  modalAnimation,
  setModalAnimation,
  addExpense,
  expenseToEdit,
  setExpenseToEdit,
  about,
  setAbout,
}) => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(expenseToEdit).length > 0) {
      setExpenseName(expenseToEdit.expenseName);
      setAmount(expenseToEdit.amount);
      setCategory(expenseToEdit.category);
      setId(expenseToEdit.id);
    }
  }, []);

  const closeModal = () => {
    setModalAnimation(false);

    setTimeout(() => {
      setModal(false);
    }, 500);

    setAbout(false);
    setExpenseToEdit({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([expenseName, amount, category].includes("")) {
      setErrors("all values are required");
      setTimeout(() => {
        setErrors("");
      }, 2000);
      return;
    }

    addExpense({ expenseName, amount, category, id });
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={closeImg} alt="..." onClick={closeModal} />
      </div>
      {about ? (
        <div className={`about ${modalAnimation ? "show" : "close"}`}>
          <h3>about the project</h3>
          <div className="text-box">
            <h2>budget-app-2022</h2>
          </div>
          <p>
            ❤ Hey! Here developer Zayra, and a small project, in progress, with{" "}
            <span>vite</span> and <span>css</span>.
          </p>
          <p>
            ☑ Budget App was thought as a helper for{" "}
            <span>expenses register and track</span>.
          </p>
          <h3>✉ More info:</h3>
          <ul>
            <li>
              github <span>☞</span>{" "}
              <a
                href="https://github.com/zayrarepositor"
                target="_blank"
                rel="noopener noreferrer">
                zayrarepositor
              </a>
            </li>
            <li>
              linkedIn <span> ☞ </span>{" "}
              <a
                href="https://www.linkedin.com/in/zayra-velasco-5bb934141"
                target="_blank"
                rel="noopener noreferrer">
                Zayra Velasco
              </a>
            </li>
            <li>
              mail<span> ☞ </span>{" "}
              <a
                href="mailto:zayra.contacto@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                zayra.contacto@gmail.com
              </a>
            </li>
          </ul>
          <p>
            <span>Good Life!</span> ( ͡~ ͜ʖ ͡°)
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`form ${modalAnimation ? "show" : "close"}`}>
          <legend>
            {expenseToEdit.expenseName ? "Edit expense" : "Add new expense"}
          </legend>
          <div className="modalinput">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="expenseName"
              type="text"
              placeholder="expense"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
          </div>
          <div className="modalinput">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              name="amount"
              type="number"
              placeholder="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="modalinput">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option value="">-- --</option>

              <option value="leisure">leisure</option>
              <option value="savings">savings</option>
              <option value="house">house</option>
              <option value="other">other expenses</option>
              <option value="food">food</option>
              <option value="health">health</option>
              <option value="suscriptions">suscriptions</option>
              <option value="education">education</option>
              <option value="pet">pet</option>
              <option value="rent">rent</option>
              <option value="services">basic services</option>
            </select>
            {errors && <Message type="error">{errors}</Message>}
          </div>
          <input
            type="submit"
            value={expenseToEdit.expenseName ? "Edit expense" : "Add expense"}
          />
        </form>
      )}
    </div>
  );
};

export default Modal;
