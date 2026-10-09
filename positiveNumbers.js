// function arrayOfPositive(nums){
//     let positive=[];

//     for(let i=0;i<nums.length;i++){
//         if(nums[i]>0){
//             positive.push(nums[i])
//         }
//     }

//     return positive

// }\\


function arrayOfPositive(nums){
    let i=0;

    while(i<nums.length){
        if(nums[i]<=0){
            nums.splice(i,1)
        }else{
            i++
        }
    }

    return nums

}


console.log(arrayOfPositive( [2, -5, 7, 0, -3, 4]))
console.log(arrayOfPositive(  [-5, -2, 0]))
console.log(arrayOfPositive( [1, 2, 3]))
