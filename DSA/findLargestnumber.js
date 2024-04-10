function findLargest(number) {
    var largest = number[0]
    number.forEach(element => {

        if (largest <= element) {
            largest = element
        }

    });

    console.log(largest)
}

var number = [56, 67, 234, 56, 235]

findLargest(number)