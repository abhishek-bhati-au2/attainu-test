function strtoint(value){
    var result = 0, neg = 1 , i=0;
      
    while (value.charAt(i) == ' ') {
      i++;
    }
    if (value.charAt(i) == '+') {
      i++;
    }
    else if (value.charAt(i) == '-') {
      neg = -1;
      i++;
    }
    while(value.charAt(i) >= '0' && value.charAt(i) <= '9'){
           result *= 10;
         result += value.charAt(i)-0;
         i++
  }
  
     return result*neg;
  
  }
  console.log(strtoint("   14567"));
  console.log(strtoint("1111   "));
  console.log(strtoint("abhi1111"))
  console.log(strtoint("-1111"))