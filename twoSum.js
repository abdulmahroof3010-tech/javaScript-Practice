// function findingtargetIndex(nums,target){

    

//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             let sum=nums[i]+nums[j];

//             if(sum===target){
//                 return [i,j]
//             }

//         }
//     }
   

// }


function findingtargetIndex(nums,target){

    let map=new Map();

    for(let i=0;i<nums.length;i++){
        let sum=target-nums[i];

        if(!map.has(sum)){
            map.set(nums[i],i)
        }else{
           let ind=map.get(sum);
           return [ind,i]
        }


    }


}
console.log(findingtargetIndex([2, 7, 11, 15],9))
console.log(findingtargetIndex([3, 2, 4],6))
console.log(findingtargetIndex([3, 3],6))

