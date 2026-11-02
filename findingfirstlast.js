// function findingIndex(nums,target){
//     let index=[];

//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===target){
//             index.push(i)
//         }
//     }

//     return index.length===0?[-1,-1]:[index[0],index[index.length-1]]

// }

function findingfirstOccurece(nums,target){

    let left=0;
    let right=nums.length-1;
    let answer=-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(nums[mid]===target){
            answer=mid;
            right=mid-1

        }else if(nums[mid]>target){
            right=mid-1;

        }else{
            left=mid+1
        }
    }
    return answer
}

function findLastOccurecr(nums,target){
    let left=0;
    let right=nums.length-1;
    let answer=-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(nums[mid]===target){
            answer=mid;
            left=mid+1
        }else if(nums[mid]>target){
            right=mid-1
        }else{
            left=mid+1
        }
    }

    return answer
}

function returnIndex(nums,target){
     
    let firstIndex=findingfirstOccurece(nums,target);

    let lastIndex=findLastOccurecr(nums,target);

    return [firstIndex,lastIndex]
}



// console.log(findingIndex([5, 7, 7, 8, 8, 10], 8))
// console.log(findingIndex([5, 7, 7, 8, 8, 10], 6))
// console.log(findingIndex([1], 1))



console.log(returnIndex([5, 7, 7, 8, 8, 10], 8))
console.log(returnIndex([5, 7, 7, 8, 8, 10], 6))
console.log(returnIndex([1], 1))


