const x = parseInt(process.argv[2]);

if (process.argv[2] === undefined) {
  console.log("Missing number of occurrences");
} else if (!isNaN(x) && x > 0) {
  for (let i = 0; i < x; i++) console.log("C is fun");
}