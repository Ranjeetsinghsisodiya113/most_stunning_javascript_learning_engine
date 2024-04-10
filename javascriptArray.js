var array = [5, 15, 20, 30];
let y = 5;
let x = 0;
array.forEach((Element) => {
    if (Element == y) {
        x = 1
        return false
    } else {

    }
})



if (x == 0) {
    array.push(y)
} else {
    console.log('yes')

}

console.log('array', array)

let index = array.indexOf(5)
console.log('index', index)
let find_ndex = array.includes(5)

console.log('find_index', find_ndex)

let slice = array.slice(1, 3)

console.log('slice', slice)

let fruits1 = ['apple', 'banana'];
let fruits2 = ['orange', 'grapes'];
let allFruits = fruits1.concat(fruits2);

console.log('allFruits', allFruits)

allFruits.sort()
console.log('allFruits', allFruits)

array.map((item) => {
    if (item == 5) {
        array.pop(5)
    }
}
)

console.log('array', array)