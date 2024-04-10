var array=[23,2,35,34,65,6,20]

for(let i=0;i<array.length;i++){
    
    for(let j=0;j<array.length-1;j++){
       
        if(array[j]>=array[j+1]){
            let x=array[j]
             let y=array[j+1]
            array[j]=y
            array[j+1]=x
            

        }

        }
        console.log(array)
}


console.log(array)