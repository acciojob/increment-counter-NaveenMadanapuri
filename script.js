//your JS code here. If required.
let count=0;
const button=document.getElementById("btn");
const para=document.getElementById("count")
button.addEventListener("click",function(){
	alert(count++);
	para.innerText++;
})