export const timeToFloat = (hours, minutes) => {
  const hourFraction = minutes / 60;
  return hours + hourFraction;
};
