function findTargetEle(arr,target){
let n = arr.length;
  for(let i = 0;i<n;i++){
    for(let j = i+1;j<n;j++){
      if(arr[i]+arr[j]==target){
      return [arr[i],arr[j]]
      }
    }
  }
  return [-1,-1]
}

findTargetEle([1,4,3,4,6,8,2],6); // output: [4,2]
