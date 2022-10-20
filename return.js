function hello()            //formal parameter or formal arguments
{
var a=12,b=5
var c=a+b
return c
}
function by(x)
{
var s=hello()
var final=s-x
return by,final                     //will return latest value i.e,final
}
var z=by(6)
console.log('answer is '+z) 