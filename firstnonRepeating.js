function firstNonRepeatingChar(str){

    let map=new Map();

    for(let i=0;i<str.length;i++){
        if(map.has(str[i])){
            map.set(str[i],map.get(str[i])+1)
        }else{
            map.set(str[i],1)
        }
    }

    for(let i=0;i<str.length;i++){
        if(map.get(str[i])===1){
            return i
        }
    }

    return -1
}

console.log(firstNonRepeatingChar("leetcode"))
console.log(firstNonRepeatingChar("loveleetcode"))
console.log(firstNonRepeatingChar("aabb"))
