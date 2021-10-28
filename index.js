function palindrome(str) {
    // your code here!
    str.replace(/\W/g, '').toLowerCase();
    const strLength = str.length;

    for(let i=0;i<strLength/2;i++){
      if(str[i]!=str[strLength-1-i]) return false;
    }
    return true;
    //code end. don't edit anything below
  }


// do not edit below this line
module.exports = palindrome