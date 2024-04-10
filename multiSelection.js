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



