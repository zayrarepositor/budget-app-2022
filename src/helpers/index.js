export const validateForm = (name, value) => {
  let errors = {};

  switch (name) {
    case "activityName":
      if (value === "") {
        errors.activityName = "what is the activity name?";
      }
      if (value.length > 20) {
        errors.activityName = "activity name must have less than 20 characters";
      }

      break;
    case "hours":
      if (value === 0 || value === "") {
        errors.hours = "how much hours the activity does take you?";
      }
      if (value < 0 || value > 24) {
        errors.hours = "hours must be between 1-24";
      }
      break;

    default:
      return errors;
  }
  return errors;
};

export const currencyFormatter = (amount) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const idGenerator = () => {
  const number = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return number + date;
};

export const dateFormatter = (date) => {
  const dateFormated = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return dateFormated.toLocaleDateString("en-US", options);
};
