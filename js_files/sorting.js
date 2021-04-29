function disablebutton(value,clr){
  document.getElementById("random").disabled=value;
  document.getElementById("bubble").disabled=value;
  document.getElementById("selection").disabled=value;
  document.getElementById("insertion").disabled=value;
  document.getElementById("merge").disabled=value;
  document.getElementById("quick").disabled=value;
  document.getElementById("heap").disabled=value;
  document.getElementById("arraysize").disabled=value;
  document.getElementById("speed").disabled=value;
  document.getElementById("random").style.borderColor = clr;
  document.getElementById("bubble").style.borderColor = clr;
  document.getElementById("selection").style.borderColor = clr;
  document.getElementById("insertion").style.borderColor = clr;
  document.getElementById("merge").style.borderColor = clr;
  document.getElementById("quick").style.borderColor = clr;
  document.getElementById("heap").style.borderColor = clr;
}
var slider=document.getElementById("arraysize");
var n=slider.value;
var sortspeed=document.getElementById("speed");
var delay=10;
var i;
var div_num=[];
var h=[];
document.getElementById("random").addEventListener("click", creatediv);
document.getElementById("bubble").addEventListener("click", bubblesort);
document.getElementById("selection").addEventListener("click", selectionsort);
document.getElementById("insertion").addEventListener("click", insertionsort);
document.getElementById("merge").addEventListener("click", mergesort);
document.getElementById("quick").addEventListener("click", quicksort);
document.getElementById("heap").addEventListener("click", heapsort);
function createarray(){
var arr=[];
for(i=0;i<n;i++){
  var num=Math.floor(Math.random()*100)+1;
  h[i]=num;
  arr.push(num);
}
for(i=1;i<=n;i++)
{
  var x=document.getElementById("bar"+i);
  x.style.height=arr[i-1]+"%";
  x.style.backgroundColor="greenyellow";
}
}
function creatediv()
{
  div_num=[];
  h=[];
  document.getElementById("bars").innerHTML='';
  for(i=0;i<n;i++)
  {
    var x=document.createElement("DIV");
    div_num.push(x);
    x.className="arraybars";
    x.id="bar"+(i+1);
    document.getElementById("bars").appendChild(x);
  }
  createarray();
}
slider.addEventListener("input",update_size);
sortspeed.addEventListener("input",update_speed);
function update_size(){
  n=slider.value;
  creatediv();
}
function update_speed(){
  let temp1=sortspeed.value;
  console.log(temp1);
  switch(parseInt(temp1))
  {
    case 1:
      delay=1000;
      break;
    case 2:
      delay=100;
      break;
    case 3:
      delay=10;
      break;  
    case 4:
      delay=5;
      break;
    case 5:
      delay=1;
      break;
  }
  console.log(delay);
}
