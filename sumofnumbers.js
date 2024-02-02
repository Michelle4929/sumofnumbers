function sumFor(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    // eslint-disable-next-line no-const-assign
    sum += data[i];
  }
  return sum;
}
const numbers = [1, 2, 3];
console.log(sumFor(numbers));

function sumWhile(data) {
  let sum = 0;
  let index = 0;
  while (index < data.length) {
    sum += data[index];
    index++;
  }
  return sum;
}

console.log(sumWhile(numbers));

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumRecursion(data.slice(1));
}

console.log(sumRecursion(numbers));

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(numbers));
