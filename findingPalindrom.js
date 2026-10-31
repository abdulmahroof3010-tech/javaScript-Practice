function isPalindrom(str){
    let i=0;
    let j=str.length-1;

    while(i<j){
        if(/[^a-zA-Z0-9]/.test(str[i])){
            i++
        }else if(/[^a-zA-Z0-9]/.test(str[j])){
            j--
        }else if(str[i].toLowerCase()===str[j].toLowerCase()){
            i++;
            j--;

        }else{
            return false
        }
    }

    return true
}

console.log(isPalindrom("A man, a plan, a canal: Panama"))
console.log(isPalindrom("race a car"))
console.log(isPalindrom(" "))
