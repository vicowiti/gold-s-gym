import React from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  return (
    <Box id="exercises">
      <Pagination count={10} color="primary" />
    </Box>
  );
};

export default Exercises;
