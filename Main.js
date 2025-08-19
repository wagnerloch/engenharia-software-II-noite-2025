console.log("Hello, World!");

for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
}

function fibonacci(n) {
    if (n < 0) return "Input should be a non-negative integer.";
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}