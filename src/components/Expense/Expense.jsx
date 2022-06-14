import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { currencyFormatter, dateFormatter } from "../../helpers";
import savingsImg from "./img/icons8-caja-de-dinero-96.png";
import leisureImg from "./img/icons8-nintendo-switch-pro-controller-96.png";
import otherImg from "./img/icons8-regalo-96.png";
import houseImg from "./img/icons8-casa-96.png";
import foodImg from "./img/icons8-ingredientes-96.png";
import petImg from "./img/icons8-tazón-del-perro-96.png";
import healthImg from "./img/icons8-clínica-96.png";
import suscriptionsImg from "./img/icons8-smartphone-con-pantalla-táctil-96.png";
import rentImg from "./img/icons8-claves-de-uso-96.png";
import servicesImg from "./img/icons8-red-celular-96.png";
import educationImg from "./img/icons8-teaching-96.png";

const imgDictionary = {
  leisure: leisureImg,
  savings: savingsImg,
  house: houseImg,
  other: otherImg,
  food: foodImg,
  health: healthImg,
  suscriptions: suscriptionsImg,
  education: educationImg,
  pet: petImg,
  rent: rentImg,
  services: servicesImg,
};

const Expense = ({ expense, setExpenseToEdit, deleteExpense }) => {
  const { expenseName, amount, category, date, id } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setExpenseToEdit(expense)}>Edit</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}>
        <div className="expense shadow">
          <div className="expense-container">
            <img src={imgDictionary[category]} alt="..." />
            <div className="expense-info">
              <p className="category">{category}</p>
              <p className="expense-name">{expenseName}</p>
              <p className="expense-date">
                Adding at: <span>{dateFormatter(date)}</span>
              </p>
            </div>
          </div>
          <p className="expense-amount">{currencyFormatter(amount)}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
