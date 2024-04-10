var string='11011';
var revstring=''
for(let i=string.length-1;i>=0;i--){
    revstring+=string[i]
}
console.log("revstring",revstring)
if(string== revstring){
console.log("pallindrom")
}else{
    console.log("not pallindrom")  
}

