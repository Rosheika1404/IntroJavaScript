// Your code here:

for (let num = 99; num > 0; num--) {

    if (num === 2) {
        console.log(num + " bottles of milk on the wall, " + num + " bottles of milk. Take one down and pass it around, " + (num - 1) + " bottle of milk on the wall.")
    } else if (num === 1) {
        console.log(num + " bottle of milk on the wall, " + num + " bottles of milk. Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")
    } else {
        console.log(num + " bottles of milk on the wall, " + num + " bottles of milk. Take one down and pass it around, " + (num - 1) + " bottles of milk on the wall.")
    }

}