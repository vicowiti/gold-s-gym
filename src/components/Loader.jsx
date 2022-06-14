import { Stack } from "@mui/material";
import React from "react";
import { Bars } from "react-loader-spinner";
const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Bars color="gray" />
    </Stack>
  );
};

export default Loader;
