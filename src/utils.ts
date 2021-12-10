export const convertNumber = (input: number) =>
  input >= 1.0e9
    ? (input / 1.0e9).toFixed(2) + "B"
    : input >= 1.0e6
    ? (input / 1.0e6).toFixed(2) + "M"
    : input >= 1.0e3
    ? (input / 1.0e3).toFixed(2) + "K"
    : input;
