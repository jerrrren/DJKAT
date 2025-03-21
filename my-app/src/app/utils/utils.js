const insertItem = (item) => {
  let currentHistory;
  if (!localStorage.getItem("history")) {
    currentHistory = [];
  } else {
    currentHistory = JSON.parse(localStorage.getItem("history"));
  }

  currentHistory.push(item);

  localStorage.setItem("history", JSON.stringify(currentHistory));
};

const resetItems = () => {
  localStorage.setItem("history", JSON.stringify([]));
};
export { insertItem, resetItems };
