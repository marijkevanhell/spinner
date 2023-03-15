let delay = 100;

let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 200;
}