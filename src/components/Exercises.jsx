import React, { useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  function paginate(e, value) {
    setCurrentPage(value);

    window.scrollTo({ top: "1800px", behavior: "smooth" });
  }

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
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 ? (
          <Pagination
            count={Math.ceil(exercises.length / exercisesPerPage)}
            color="standard"
            shape="rounded"
            page={currentPage} //state
            onChange={paginate} //page changing function
          />
        ) : (
          ""
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
