//(completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  
  
  
  
  
  //2 Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
  
  const maxOfThree = function(x, y, z) {
    if (x >= y && x >= z) {
      return x;
    } else if (y >= x && y >= z) {
      return y;
    } else {
      return z;
    }
  };
    console.log(maxOfThree(5, 7, 10));
  
  
  //3Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
  
  function isCharAVowel(t) {
    t = t.toLowerCase();
    return ('aeiouy'.indexOf(t) > -1);
    
  }
  
  console.log(isCharAVowel('t'));
  
  
  //4Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
  
  const sumArray = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  };
  console.log(sumArray([19, 10, 10]));
  //for shay or whoever is grading. bit stuck with js i find myself having to google everything. not sure about this code, it returned 39 but dont feel positive about it. 
  
  
  
  //5Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
  
  
  function multiplyArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }
  
  console.log(multiplyArray([7, 12, 21]));
  
  
  
  
  
  //6Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
  
  const numArgs = function(...args) {
    return args.length;
    
  };
  
  
  
  console.log(numArgs('test', true, 5));
  //for instructor. Having to take a peek at the lab answer sheet for alot of these. Ordering a javascript book for dummies asap. Hope this at least brings a smile while grading.
  
  
  //7Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
  
  function reverseString(s) {
  
    let arr = s.split('');
  
    return arr.reverse().join('');
  
  }
  
  console.log(reverseString('barcelona'));
  
  
  //8Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
  
  const longestStringInArray = function(arr) {
    let longest = 0;
    
    arr.forEach(function(s) {
      if (s.length > longest) longest = s.length;
    });
    return longest;
   
  };
  
  console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning']));
  
  
  
  //9Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
  
  function stringsLongerThan(arr, len) {
    
    return arr.filter(function(s) {
      return (s.length > len);
    });
    
  };
  
  console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'sunshine'], 3));
  
  //overall not very confident with this material quite yet as you can clearly see. I'm having to either google or check the lab answer sheet for todays work. Will review it tonight and this weekend. 