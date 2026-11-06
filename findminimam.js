function findMinimal(nums){

    let left=0;
    let right=nums.length-1;
   

    while(left<right){
        let mid=Math.floor((left+right)/2);

       if(nums[mid]>nums[right]){
            left=mid+1
            
        }else if(nums[mid]<=nums[right]){
            right=mid
           
        }



    }

    return nums[left]

}

console.log(findMinimal([3, 4, 5, 1, 2]))
console.log(findMinimal([4, 5, 6, 7, 0, 1, 2]))
console.log(findMinimal([11, 13, 15, 17]))
console.log(findMinimal([1]))
