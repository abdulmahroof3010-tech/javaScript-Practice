function matrix(nums,target){
    let left=0;//0
    let right=(nums.length*nums[0].length)-1;//4 nums[right]=10
    let numberOfColumn=nums[0].length;//4

    while(left<=right){
        let mid=Math.floor((left+right)/2);//2 

        let row=Math.floor(mid/numberOfColumn);//0
        let column=mid%numberOfColumn;//2
         //nums[0][2]===3
         //5===3
        if(nums[row][column]===target){
           return true
        }else if(nums[row][column]>target){
            right=mid-1

        }else{
            left=mid+1
        }
    }

    return false

}

console.log(matrix( [[1,  3,  5,  7],[10, 11, 16, 20],[23, 30, 34, 60]],3))
console.log(matrix( [
  [1,  3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
],13))

