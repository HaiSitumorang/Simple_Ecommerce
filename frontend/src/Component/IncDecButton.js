import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";

const IncDecButton = ({state, setState}) => {
  const handleIncrement = () => {
    setState(state + 1);
  };

  const handleDecrement = () => {
    if (state != 1) {
      setState(state - 1);
    }
  };
  return (
    <ButtonGroup size="large" color="primary" sx={{ padding: "20px 0px" }}>
      {
        state == 1 ?
          <Button
            disabled
            variant="contained"
            color="primary"
            onClick={handleDecrement}
          >-
          </Button>
          :
          <Button
            variant="contained"
            color="primary"
            onClick={handleDecrement}
          >-
          </Button>
      }
      <Button
        disabled
        color="primary"
        sx={{
          border:"1px solid",
          borderLeft:"0px solid",
          borderRight:"0px solid"
        }}
      >{state}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleIncrement}
      >+
      </Button>
    </ButtonGroup>
  )
}

export default IncDecButton