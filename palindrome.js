function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}
 
let str1 = "mam";
let str2 = "leena";
let str3 = "Coimbatore";
 
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));