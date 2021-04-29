function heapify(nn,j)
{
  let largest=j;
  setTimeout(()=>{
    div_num[j].style.backgroundColor="red";
  },cc+=delay);
  let left=2*j+1;
  let right=2*j+2;
  if(left<=nn)
  {
    setTimeout(()=>{
      div_num[left].style.backgroundColor="blue";
    },cc+=delay);
  }
  if(right<=nn)
  {
    setTimeout(()=>{
      div_num[right].style.backgroundColor="blue";
    },cc+=delay);
  }
  if(left<=nn&&h[left]>h[largest])
  largest=left;
  if(right<=nn&&h[right]>h[largest])
  largest=right;
  if(largest!=j)
  {
    let temp=h[largest];
    h[largest]=h[j];
    h[j]=temp;
    let h1=h[largest],h2=h[j];
    setTimeout(()=>{
      div_num[largest].style.height=h1+"%";
      div_num[j].style.height=h2+"%";
    },cc+=delay);
    setTimeout(()=>{
      if(left<=nn)
      div_num[left].style.backgroundColor="greenyellow";
      if(right<=nn)
      div_num[right].style.backgroundColor="greenyellow";
    },cc+=delay);
    setTimeout(()=>{
      div_num[j].style.backgroundColor="#6e1780";
    },cc+=delay);
    setTimeout(()=>{
      div_num[j].style.backgroundColor="greenyellow";
    },cc+=delay);
    heapify(nn,largest);
  }
  else{
    setTimeout(()=>{
      if(left<=nn)
      div_num[left].style.backgroundColor="greenyellow";
      if(right<=nn)
      div_num[right].style.backgroundColor="greenyellow";
    },cc+=delay);
    setTimeout(()=>{
      div_num[j].style.backgroundColor="#6e1780";
    },cc+=delay);
    setTimeout(()=>{
      div_num[j].style.backgroundColor="greenyellow";
    },cc+=delay);
  }
}
function heapsort(){
  disablebutton(true,"red");
  document.getElementById("heap").style.borderColor="greenyellow";
  cc=0;
  console.log(h);
  let md;
  if(n%2==0)
  md=(n/2)-1;
  else
  md=(n-1)/2;
  for(let j=md;j>=0;j--)
  {
    heapify(n-1,j);
  }
  for(let j=n-1;j>=0;j--)
  {
    let temp=h[j];
    h[j]=h[0];
    h[0]=temp;
    let h1=h[0],h2=h[j];
    let jj=j;
    setTimeout(()=>{
      div_num[jj].style.backgroundColor="red";
      div_num[0].style.backgroundColor="red";
    },cc+=delay);
    setTimeout(()=>{
      div_num[jj].style.height=h2+"%";
      div_num[0].style.height=h1+"%";
    },cc+=delay);
    setTimeout(()=>{
      div_num[jj].style.backgroundColor="#24ffff";
    },cc+=delay);
    if(jj>0)
    heapify(jj-1,0);
  }
  console.log(h);
  setTimeout(()=>{
    disablebutton(false,"white");
  },cc);
}