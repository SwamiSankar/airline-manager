const generateSeatNumber = () => {
  let result = [];
  for (let i = 65; i < 73; i++) {
    for (let j = 1; j < 7; j++) {
      result.push(String.fromCharCode(i) + j);
    }
  }
  return result;
};

const chunk = (arr, len) => {
  let chunks = [],
    i = 0,
    n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
};

let seats = generateSeatNumber();

export const generateSeatArray = (seats) => {
  let seats_set = chunk(seats, 6);
  return seats_set;
};
