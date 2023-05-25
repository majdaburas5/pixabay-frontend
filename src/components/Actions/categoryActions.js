export const handleSelectChange = function (value) {
  return {
    type: "CHANGE_INPUT_VAL",
    payload: value,
  };
};
