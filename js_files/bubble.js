function bubblesort(){
  disablebutton(true,"red");
  document.getElementById("bubble").style.borderColor="greenyellow";
  let cc=0;
  for(let k=0;k<n;k++){
    let flag=1;
    for(let j=0;j<n-k-1;j++){
      setTimeout(()=>{
        div_num[j].style.backgroundColor="red";
        div_num[j+1].style.backgroundColor="red";
      },cc+=delay);
      if(h[j]>h[j+1])
      {
        let temp=h[j];
        h[j]=h[j+1];
        h[j+1]=temp;
        let h1=h[j],h2=h[j+1];
        flag=0;
        setTimeout(() => {     
          div_num[j].style.height=h1+"%";
          div_num[j+1].style.height=h2+"%";
        },cc+=delay);
      }
      setTimeout(() => {
        div_num[j].style.backgroundColor="greenyellow";
      },cc+=delay);
    }
    setTimeout(()=>{
      div_num[n-k-1].style.backgroundColor="#24ffff";
    },cc+=delay);
  }
  console.log(h);
  setTimeout(()=>{
    disablebutton(false,"white");
  },cc);
}