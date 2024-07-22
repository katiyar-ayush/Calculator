function result(v)
{
    document.getElementById("res").value+=v
}
function solution()
{
    let x = document.getElementById("res").value
	let y = eval(x) 
	document.getElementById("res").value = y 

}
function blank()
{
    document.getElementById("res").value=""
}
function bs()
{
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}
function per()
{
    let r=document.getElementById("res").value
    document.getElementById("res").value=r/100
}