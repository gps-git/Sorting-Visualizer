function selectionsort(){
  disablebutton(true,"red");
  document.getElementById("selection").style.borderColor="greenyellow";
  let cc=0;
  for(let k=0;k<n;k++){
    let ind=k;
    for(let j=k+1;j<n;j++)
    {
      setTimeout(()=>{
        div_num[k].style.backgroundColor="red";
      },cc+=delay);
      setTimeout(()=>{
        div_num[j].style.backgroundColor="red";
      },cc+=delay);
      if(h[j]<h[ind])
      {
        ind=j;
      }
      setTimeout(()=>{
        div_num[j].style.backgroundColor="greenyellow";
      },cc+=delay);
    }
    setTimeout(()=>{
      div_num[ind].style.backgroundColor="#cc43c5";
    },cc+=delay);
    let temp=h[ind];
    h[ind]=h[k];
    h[k]=temp;
    setTimeout(()=>{
      div_num[k].style.height=h[k]+"%";
      div_num[ind].style.height=h[ind]+"%";
      div_num[ind].style.backgroundColor="greenyellow";
      div_num[k].style.backgroundColor="#24ffff";
    },cc+=(2*delay));
  } 
  setTimeout(()=>{
    disablebutton(false,"white");
  },cc);
}