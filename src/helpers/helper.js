export const getPaginationCount = num => {
  console.log("num is " + num);
  const arr = [];
  if (num <= 5) {
    arr.length = 0;
    return arr;
  } else {
    for (var i = 0; i < (num % 4) - 1; i++) {
      arr.push(i);
    }
    return arr;
  }
};
