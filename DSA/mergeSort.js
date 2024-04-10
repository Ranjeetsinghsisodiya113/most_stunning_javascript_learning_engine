var array=[34,65,2,6,23,35,20]

for(let i=0;i<array.length;i++){
    
    for(let j=i+1;j<array.length;j++){
       
        if(array[i]>=array[j]){
            let x=array[i]
             let y=array[j]
            array[i]=y
            array[j]=x
        }else{

           
        }

        }
        console.log(array)
}


console.log(array)