const arg = process.argv[2];

if (arg === undefined) {
  console.log("Missing size");
} else {
  const size = parseInt(arg);
  if (!isNaN(size) && size > 0) {
    for (let i = 0; i < size; i++) {
      console.log("X".repeat(size));
    }
  }
}