var a = {
b:3,
c:function()
{
return this.b;
}
}
var b = 10;
console.log(a.c());
var d = a.c;

console.log(d());

// var e = d.bind(a);
// console.log(e());

console.log(f=>(d.bind(a)));