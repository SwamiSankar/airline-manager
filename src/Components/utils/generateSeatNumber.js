export const generateSeatNumber = () => {
  let result = [];
  for (let i = 65; i < 73; i++) {
    for (let j = 1; j < 7; j++) {
      result.push(String.fromCharCode(i) + j);
    }
  }
  return result;
};
