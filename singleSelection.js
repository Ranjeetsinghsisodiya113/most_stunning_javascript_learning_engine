//  singleSelection

var data=[
    {status:false},
    {status:false},
    {status:false},
    {status:false},
]
function singleSelection(i) {

    var data_1=data

    for (let index = 0; index < data_1.length; index++) {
            data_1[index].status=false

    }
    data_1[i].status=true
    data=data_1
}
    console.log(data)
    for (let index = 0; index < data.length; index++) {
        singleSelection(index)
     
     console.log(data)
    }