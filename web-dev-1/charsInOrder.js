// TODO: your docstring here

function charsInOrder(str1,str2) {
  if (str1.length < 1) { 
    return true;
  }
  let str1Index = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[str1Index]) {
      str1Index++;
    }
    if (str1Index === str1.length) {
      return true;
    }
  } return false;
}
