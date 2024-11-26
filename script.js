let amt=document.getElementById("am");
let tip=document.getElementById("ti");
let c=document.getElementById("Calc");
let tout=document.getElementById("Tamt");
let aout=document.getElementById("Total");
c.addEventListener("click",function(){
    let a=Number(am.value)
    let t=Number(ti.value)
    let p=(a*t)/100
    tout.innerText=`Tip amount: ₹${p}`
    aout.innerText=`Total: ₹${p+a}`
})