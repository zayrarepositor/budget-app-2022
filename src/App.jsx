import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section";
import Modal from "./components/Modal/Modal.jsx";
import Expenses from "./components/Expenses";
import { idGenerator } from "./helpers";
import addImg from "./img/icons8-más-48.png";
import Filters from "./components/Filters";
import { Profile } from "./components/Profile";
import { LogoutButton } from "./components/Logout";

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [valid, setValid] = useState(false);
  const [about, setAbout] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );
  const [expenseToEdit, setExpenseToEdit] = useState({});
  const [filter, setFilter] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    if (Object.keys(expenseToEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setModalAnimation(true);
      }, 500);
    }
  }, [expenseToEdit]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    if (filter) {
      const filteredExp = expenses.filter(
        (expense) => expense.category === filter
      );
      setFilteredExpenses(filteredExp);
    }
  }, [filter]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget")) ?? 0;

    if (budgetLS > 0) {
      setValid(true);
    }
  }, []);

  const openAboutModal = () => {
    setAbout(true);
    setModal(true);
    setTimeout(() => {
      setModalAnimation(true);
    }, 500);
  };

  const openExpenseModal = () => {
    setModal(true);
    setExpenseToEdit({});
    setTimeout(() => {
      setModalAnimation(true);
    }, 500);
  };

  const addExpense = (expense) => {
    if (expense.id) {
      const updatedExpenses = expenses.map((exp) =>
        exp.id === expense.id ? expense : exp
      );
      setExpenses(updatedExpenses);
      setExpenseToEdit({});
    } else {
      expense.id = idGenerator();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }
    setModalAnimation(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className={modal ? "fix" : ""}>
      <Header openAboutModal={openAboutModal}></Header>
      <Section
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        valid={valid}
        setValid={setValid}
        setExpenses={setExpenses}></Section>
      {valid && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter}></Filters>
            <Expenses
              expenses={expenses}
              setExpenseToEdit={setExpenseToEdit}
              deleteExpense={deleteExpense}
              filteredExpenses={filteredExpenses}
              filter={filter}></Expenses>
          </main>
          <div className="add-expense">
            <figure>
              <div className="add-text">
                <h3>add expense</h3>
              </div>{" "}
              <img src={addImg} alt="..." onClick={openExpenseModal} />{" "}
            </figure>
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          modalAnimation={modalAnimation}
          setModalAnimation={setModalAnimation}
          addExpense={addExpense}
          expenseToEdit={expenseToEdit}
          setExpenseToEdit={setExpenseToEdit}
          about={about}
          setAbout={setAbout}
        />
      )}
      <Profile />
    </div>
  );
}

export default App;
