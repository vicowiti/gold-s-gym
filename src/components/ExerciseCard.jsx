import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt="Exercise Gif" loading="lazy" />
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Button
          sx={{
            color: "#fff",
            borderRadius: "20px",
            textTransform: "capitalize",
            ml: "21px",
            fontSize: "14px",
            background: "#ffa9a9",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            color: "#fff",
            borderRadius: "20px",
            textTransform: "capitalize",
            ml: "21px",
            fontSize: "14px",
            background: "#111",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        textAlign="center"
        color="#000"
        fontWeight="bold"
        textTransform="capitalize"
        mt="11px"
        pb="10px"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
