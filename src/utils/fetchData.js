export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "48455352cdmshc725f12a412211cp1fe7f5jsnb2788f8dfe73",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const bodyPartsUrl = "https://exercisedb.p.rapidapi.com/exercises";
