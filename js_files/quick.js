function partition(l,r)
{
  for(let j=l;j<=r;j++)
  {
    let jj=j;
    setTimeout(()=>{
      div_num[jj].style.backgroundColor="yellow";
    },cc+=delay);
  }
  let pivot=h[r];
  setTimeout(()=>{
    div_num[r].style.backgroundColor="#6e1780";
  },cc+=delay);
  let j=l-1;
  for(let k=l;k<=r-1;k++)
  {
    let kk=k;
    setTimeout(()=>{
      div_num[kk].style.backgroundColor="red";
    },cc+=delay);
    if(h[k]<pivot)
    {
      j++;
      let temp=h[j];
      h[j]=h[k];
      h[k]=temp;
      let jj=j;
      setTimeout(()=>{
        div_num[jj].style.backgroundColor="red";
      },cc+=delay);
      let h1=h[j],h2=h[k];
      setTimeout(()=>{
        div_num[jj].style.height=h1+"%";
        div_num[kk].style.height=h2+"%";
      },cc+=delay);
      setTimeout(()=>{
        div_num[jj].style.backgroundColor="yellow";
      },cc+=delay);
    }
    setTimeout(()=>{
      div_num[kk].style.backgroundColor="greenyellow";
    },cc+=delay);
  }
  let temp=h[j+1];
  h[j+1]=h[r];
  h[r]=temp;
  let jj=j+1;
  setTimeout(()=>{
    div_num[jj].style.backgroundColor="#6e1780";
  },cc+=delay);
  let h1=h[j+1],h2=h[r];
  setTimeout(()=>{
    div_num[jj].style.height=h1+"%";
    div_num[r].style.height=h2+"%";
  },cc+=delay);
  setTimeout(()=>{
    div_num[jj].style.backgroundColor="greenyellow";
    div_num[r].style.backgroundColor="greenyellow";
  },cc+=delay);
  return j+1;
}
function qcksrt(l,r)
{
  if(l<r)
  {
    let pi=partition(l,r);
    setTimeout(()=>{
      div_num[pi].style.backgroundColor="#24ffff";
    },cc+=delay);
    qcksrt(l,pi-1);
    for(let j=l;j<pi;j++)
    {
      let temp=j;
      setTimeout(()=>{
        div_num[temp].style.backgroundColor="#24ffff";
      },cc+=delay);
    }
    qcksrt(pi+1,r);
    for(let j=pi+1;j<=r;j++)
    {
      let temp=j;
      setTimeout(()=>{
        div_num[temp].style.backgroundColor="#24ffff";
      },cc+=delay);
    }
  }
  else
  {
    setTimeout(()=>{
      div_num[l].style.backgroundColor="#24ffff";
    },cc+=delay);
  }
}
function quicksort(){
  disablebutton(true,"red");
  document.getElementById("quick").style.borderColor="greenyellow";
  cc=0;
  console.log(h);
  qcksrt(0,n-1);
  console.log(h);
  setTimeout(()=>{
    disablebutton(false,"white");
  },cc);
}