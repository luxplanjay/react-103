export const trimValues = (values) => {
  console.log(values);
  const trimmedValues = {};

  for (const [key, value] of Object.entries(values)) {
    if (typeof value === "string") {
      console.log("Should trim");
      trimmedValues[key] = value.trim();
    } else {
      trimmedValues[key] = value;
    }
  }

  console.log(trimmedValues);

  return trimmedValues;
};
