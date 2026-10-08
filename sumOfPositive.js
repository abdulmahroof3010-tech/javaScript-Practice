function sumOfPositive(nums){

    let sum=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            sum+=nums[i]
        }
    }

    return sum

}

console.log(sumOfPositive([2, -5, 7, 0, -3, 4]))
console.log(sumOfPositive([-5, -2, 0]))
console.log(sumOfPositive([10, 20, 5]))
console.log(sumOfPositive([]))
console.log(sumOfPositive([-1, -2, -3]))
console.log(sumOfPositive([0, 5, -2]))

