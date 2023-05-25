import React from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import Button from "@mui/material/Button";
import SelectField from "../Select-field/Select-field";
import {
  handleIncrementClick,
  handleDecrementClick,
} from "../Actions/pageNumberActions";
import { useSelector, useDispatch } from "react-redux";

export default function PageHeader({}) {
  const pageNumber = useSelector((state) => state.pageNumber);
  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <Button
        variant="outlined"
        startIcon={<WestIcon />}
        style={{ marginTop: 8 }}
        onClick={() => dispatch(handleDecrementClick())}
      >
        Prev
      </Button>
      <SelectField />
      <Button
        variant="outlined"
        endIcon={<EastIcon />}
        style={{ marginTop: 8 }}
        onClick={() => dispatch(handleIncrementClick())}
      >
        Next
      </Button>
    </div>
  );
}
