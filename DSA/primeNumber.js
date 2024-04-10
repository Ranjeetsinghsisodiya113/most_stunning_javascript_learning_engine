function checkPrime(x) {
   let  status =true
    if (x == 1) {
       
         console.log('prime1')
         status= false
    }

    if (x <= 3) {
         console.log('prime2')
         status= true
    }
    for (let i = 2; i < x; i++) {

        if ( x% i == 0) {
        status=false
        }

    }

    if(status==true){
        return status
    }else{
        return status
    }

}




x = 30

let c=checkPrime(x)

if(c==false){
    console.log(x+" is not prime")
}else{
    console.log(x+" is  prime")
}


