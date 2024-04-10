// var array = [5, 15, 20, 30];
// var myIndex = -1
// const fun1 = (val, i, array) => {
//     if (val == 20) {
//         myIndex = i
//     }
// }
// array.findIndex(fun1)

// console.log(myIndex)



// console.log(array.indexOf(5))
// console.log(array.includes(5))
// console.log(array.reverse())
// console.log(array.sort())

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});

// console.log(points)

// var array1=[35,40]
//  let ARRAY1=array.concat(array1)

// console.log(ARRAY1)
// let found=0
// let number=5
// array.forEach(element => {
//     if(element==number){
//             found=1
//     }
// });

// console.log(found)
// if(found==0){
//     console.log(number+" is not found")
// }else{
//     console.log(number+" is found")
// }
// var data=[]
// console.log(array,data)
// for(let i=0;i<array.length;i++){
//     if(array[i]==number){
//         console.log(number+" is found")
//     var item=array.splice(i,1)
//     data.push(item[0])
// }
// }


// console.log(array,data)

var data=[
    {status:false},
    {status:false},
    {status:false},
    {status:false},
]




//  multiSelection
function multiSelection(i) {

    var data_1=data

    for (let index = 0; index < data_1.length; index++) {
        if(index==i){
            data_1[i].status=!data_1[i].status
        } 
       
        
    }
    data=data_1
}
    console.log(data)
    for (let index = 0; index < data.length; index++) {
     multiSelection(index)
     
     console.log(data)
    }



