import React from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      padding="20px"
    >
      <Typography
        variant="h3"
        marginBottom="46px"
        sx={{
          textAlign: { sm: "center" },
        }}
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>
      <Pagination count={10} color="primary" />
    </Box>
  );
};

export default Exercises;
