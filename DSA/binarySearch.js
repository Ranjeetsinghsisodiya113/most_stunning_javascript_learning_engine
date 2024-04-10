// binary search can applied in only sorted array
function searchItem(I, array_i2, size) {
    var array_i = array_i2
    var size1 = 0
    if (size % 2 == 0) {
        size1 = parseInt(size / 2)
    } else {
        size1 = parseInt(size / 2) + 1
    }
    console.log('first wala', I, array_i, size)
    if (I < array_i[size1]) {

        array_i = array_i.slice(0, size1)
        return searchItem(I, array_i, array_i.length)

    }
    if (I > array_i[size1]) {
        array_i = array_i.slice(size1, size)
        return searchItem(I, array_i, array_i.length)



    }
    if (I == array_i[size1]) {
        console.log('mil gya')
        return true
    }



}

let array_i = [5, 6, 15,41,44, 54, 56, 60, 64, 70, 72]
var size = array_i.length
console.log("found", array_i, size)
var found = searchItem(66, array_i, size)


if (found == true) {
    console.log("found")
} else {
    console.log("No found")
}