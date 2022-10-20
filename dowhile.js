const chd=require('readline-sync')
var i=0,n    
n= chd.questionInt ('enter loop size')
do{
    console.log('your value is'+i)
    i++
}
while(i<n)