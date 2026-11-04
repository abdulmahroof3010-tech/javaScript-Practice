function findingPeakElement(nums){

    let left=0;
    let right=nums.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(nums[mid]<nums[mid+1]){
            left=mid+1

        }else{
            right=mid
        }
    }
    return left

}

console.log(findingPeakElement([1, 2, 1, 3, 5, 6, 4]))
console.log(findingPeakElement([1, 2, 3, 1]))
console.log(findingPeakElement([5, 4, 3, 2, 1]))

