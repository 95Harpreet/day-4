const chd=require('readline-sync')
var i,n         //initialization
 n=chd.questionInt('enter loop size')
 while(n!=0)                         //condition
 {
    console.log('value is'+n) 
    n=n-1   //n-=1
 }