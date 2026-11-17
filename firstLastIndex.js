function firstOccurence(nums,target){
    let left=0;
    let right=nums.length-1;
    let answer=-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(nums[mid]===target){
            answer=mid;
            right=mid-1
        }else if(nums[mid]<target){
            left=mid+1
        }else{
            right=mid-1
        }
    }

    return answer


};

function lastOccurence(nums,target){
    let left=0;
    let right=nums.length-1;
    let answer=-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(nums[mid]===target){
            answer=mid;
            left=mid+1;
        }else if(nums[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }

    return answer
}

function findIndex(nums,target){
    let first=firstOccurence(nums,target);
    let last=lastOccurence(nums,target);

    return [first,last]
}


console.log(findIndex([5, 7, 7, 8, 8, 8, 10],8))

console.log(findIndex([5, 7, 7, 8, 8, 10], 6));

console.log(findIndex([1], 1));

console.log(findIndex([], 0));



