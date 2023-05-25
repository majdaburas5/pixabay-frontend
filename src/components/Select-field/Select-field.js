import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { handleSelectChange } from "../Actions/categoryActions";
export default function SelectField() {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
      <Select
        style={{ width: "120px", height: "37px" }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={category}
        label="category"
        onChange={(event) => dispatch(handleSelectChange(event.target.value))}
      >
        <MenuItem value={"sports"}>sports</MenuItem>
        <MenuItem value={"work"}>work</MenuItem>
        <MenuItem value={"food"}>food</MenuItem>
        <MenuItem value={"animals"}>animals</MenuItem>
      </Select>
    </FormControl>
  );
}
