// For each number check if it is a prime number by running it through the isPrime function
function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j == 0) {
      return false;
    } else {
      return true;
    }
  }
}

for (let i = 1; i < 501; i++) {
  if (isPrime(i)) {
    console.log(i + "FIZZBUZZ++");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + "FIZZBUZZ");
  } else if (i % 3 == 0) {
    console.log(i + "FIZZ");
  } else if (i % 5 == 0) {
    console.log(i + "BUZZ");
  }
}

// If I had more time I would research more on how to write to a file rather than console logging everything
