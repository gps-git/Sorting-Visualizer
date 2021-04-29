var cc;
function merge(l,m,r){
  let x=l,y=m+1;
  while(x<=m||y<=r)
  {
    if(x<=m)
    {
      let xx=x;
      setTimeout(()=>{
        div_num[xx].style.backgroundColor="#6e1780";
      },cc+=delay);
      x++;
    }
    if(y<=r)
    {
      let yy=y;
      setTimeout(()=>{
        div_num[yy].style.backgroundColor="#6e1780";
      },cc+=delay);
      y++;
    }
  }
  let n1=m-l+1,n2=r-m;
  let a1=[];
  let a2=[];
  for(let i=l;i<=m;i++)
  {
    a1.push(h[i]);
  }
  for(let i=m+1;i<=r;i++)
  {
    a2.push(h[i]);
  }
  let i=0,j=0,ind=l;
  while(i<n1&&j<n2)
  {
    let ind1=ind;
    let ii=ind,jj=j;
    setTimeout(()=>{
      div_num[ii].style.backgroundColor="red";
      div_num[m+1+jj].style.backgroundColor="red";
    },cc+=delay);
    if(a1[i]<a2[j])
    {
      h[ind]=a1[i];
      let temp=i;
      setTimeout(()=>{
        div_num[ind1].style.height=a1[temp]+"%";
      },cc+=delay);
      i++;
      ind++;
    }
    else{
      h[ind]=a2[j];
      let temp=j;
      let temp1=i;
      setTimeout(()=>{
        div_num[ind1].style.height=a2[temp]+"%";
        for(let t=ind1+1;t<=m+1+temp;t++)
        {
        div_num[t].style.height=a1[temp1]+"%";
        temp1++;
        }
      },cc+=delay);
      j++;
      ind++;
    }
    setTimeout(()=>{
      div_num[ind1].style.backgroundColor="#24ffff";
      div_num[m+1+jj].style.backgroundColor="#6e1780";
    },cc+=delay);
  }
  while(i<n1)
  {
    let ind1=ind;
    h[ind1]=a1[i];
    let temp=i;
    setTimeout(()=>{
      div_num[ind1].style.backgroundColor="red";
    },cc+=delay);
    setTimeout(()=>{
      div_num[ind1].style.height=a1[temp]+"%";
    },cc+=delay);
    setTimeout(()=>{
      div_num[ind1].style.backgroundColor="#24ffff";
    },cc+=delay);
    i++;
    ind++;
  }
  while(j<n2)
  {
    let ind1=ind;
    h[ind1]=a2[j];
    let temp=j;
    setTimeout(()=>{
      div_num[ind1].style.backgroundColor="red";
    },cc+=delay);
    setTimeout(()=>{
      div_num[ind1].style.height=a2[temp]+"%";
    },cc+=delay);
    setTimeout(()=>{
      div_num[ind1].style.backgroundColor="#24ffff";
    },cc+=delay);
    j++;
    ind++;
  }
}
function mrgsrt(l,r){
  if(l<r)
  {
    let m=l;
    if((r-l)%2==0)
    m+=(r-l)/2;
    else
    m+=(r-l-1)/2;
    mrgsrt(l,m);
    mrgsrt(m+1,r);
    merge(l,m,r);
  }
}
function mergesort(){
  disablebutton(true,"red");
  document.getElementById("merge").style.borderColor="greenyellow";
  cc=0;
  console.log(h);
  mrgsrt(0,n-1);
  console.log(h);
  setTimeout(()=>{
    disablebutton(false,"white");
  },cc);
}