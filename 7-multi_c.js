const x = parseInt(process.argv[2]);
isNaN(x) || x <= 0 ? console.log("Missing number of occurrences") : (() => { for (let i = 0; i < x; i++) console.log("C is fun"); })();