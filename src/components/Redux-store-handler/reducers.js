export const pageReducer = function (pageNumber = 1, action) {
  switch (action.type) {
    case "INCREMENT":
      return pageNumber + 1;
    case "DECREMENT":
      if (pageNumber > 1) {
        return pageNumber - 1;
      }
    default:
      return pageNumber;
  }
};
export const categoryReducer = function (categoryState = "sports", action) {
  switch (action.type) {
    case "CHANGE_INPUT_VAL":
      return action.payload;
    default:
      return categoryState;
  }
};
