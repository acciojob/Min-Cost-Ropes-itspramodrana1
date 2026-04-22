function mincost(arr) { 
  if (arr.length <= 1) return 0;

  let cost = 0;

  // Sort initially
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    // Take two smallest
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // Insert back and keep sorted
    arr.push(sum);
    arr.sort((a, b) => a - b);
  }

  return cost;
}

module.exports = mincost;