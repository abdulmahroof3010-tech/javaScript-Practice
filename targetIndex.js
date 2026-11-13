function firstOccurece(nums,target){
    let left=0;
    let right=nums.length-1;
    let answer=-1;
    
    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(nums[mid]===target){
            answer=mid
            right=mid-1
        }else if(nums[mid]>target){
            right=mid-1

        }else{
            left=mid+1
        }
    }

    return answer 
}

function lastOccurece(nums,target){
    let left=0;
    let right=nums.length-1;
    let answer=-1;


    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(nums[mid]===target){
            answer= mid
            left=mid+1
        }else if(nums[mid]<target){
            left=mid+1
        }else{
            right=mid-1
        }
    }

    return answer
}

function findingIndex(nums,target){
    let first=firstOccurece(nums,target);
    let last=lastOccurece(nums,target);

    return [first,last]
}

console.log(findingIndex( [5, 7, 7, 8, 8, 10],8))