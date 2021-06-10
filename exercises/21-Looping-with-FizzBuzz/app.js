function fizzBuzz() {
    // Your code here
    for (let num = 1; num <= 100; num++) {
        if ((0 === num % 3) && (0 === num % 5)) {
            console.log("FizzBuzz");
        } else if (0 === num % 5) {
            console.log("Buzz" );
        } else if (0 === num % 3) {
            console.log("fizz");
        } else {
            console.log(num);
        }
    }
}

fizzBuzz();