var data=[
    {name:"Apple"},
    {name:"Ball"},
    {name:"Banana"},
    {name:"Nut"},
]

var data_1=data

var searchTitle="t"
var data1=data_1
if (data1 != null) {
    console.log('data1', data1);
    if (data1 != 'NA') {
        var text_data = searchTitle.toString().toLowerCase();
        let newData = data1.filter(function (item) {
            return (
                item.name.toString().toLowerCase().indexOf(text_data) >= 0
            )
        });
        if (newData.length > 0) {
           data=newData
        } else if (newData.length <= 0) {
            data=null
        }
    }
}

console.log('data ', data);



