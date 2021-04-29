function insertionsort(){
  disablebutton(true,"red");
  document.getElementById("insertion").style.borderColor="greenyellow";
  let cc=0;
  for(let k=0;k<n-1;k++){
    div_num[0].style.backgroundColor="#24ffff";
    let j=k+1;
    let x=j;
    while(j>0&&h[j]<h[j-1]){
      let y=j;
      setTimeout(()=>{
        div_num[y].style.backgroundColor="red";
      },cc+=delay);

      setTimeout(()=>{
        div_num[y-1].style.backgroundColor="red";
      },cc+=delay);
      let temp=h[j];
      h[j]=h[j-1];
      h[j-1]=temp;
      let h1=h[y];
      let h2=h[y-1];
      setTimeout(()=>{
        div_num[y].style.height =h1+"%"; 
        div_num[y-1].style.height = h2+"%";
        },cc+=delay);
        setTimeout(()=>{
          div_num[y].style.backgroundColor="#24ffff";
        },cc+=delay);
      
      j--;
      x=j;
    }
    setTimeout(()=>{
      div_num[x].style.backgroundColor="#24ffff";
    },cc+=delay);
  }
  console.log(h);
  setTimeout(()=>{
    disablebutton(false,"white");
  },cc);
}