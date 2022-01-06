  //(1)Two Strings Anagram or Not 
let isAnagram=(x,y) =>{
    x=x.toUpperCase().split('').sort().join('');
    y=y.toUpperCase().split('').sort().join('');
   return  x===y;
}
  console.log(
      isAnagram ("Cup" , "Tea" ),
      isAnagram ("State" , "Taste")
  );
      
         //(Or)
function cheakStringsAnagram(x,y){
    let len1=x.length;
    let len2=y.length;
    if(len1!==len2){
        console.log('Invalid Input');
        return
    }
    let str1=x.toLowerCase().split('').sort().join('');
    let str2=y.toLowerCase().split('').sort().join('');
   if(str1===str2){
       console.log('This String Is Anagram');
   }
   else{
       console.log('This String Is Not Anagram');
   }
}
      cheakStringsAnagram("Indian","ndiani"),
      cheakStringsAnagram("Indian","Ganesh"),
      cheakStringsAnagram("Indian","Army")

//(2)To Remove duplicates from an array without the inbuilt set method(logical method)
    let a=[1,2,5,2,1,8];
    let b=[];
    let len=a.length;
    for(let i=0; i<len; i++){
        if(b.indexOf(a[i])=== -1){
            b.push(a[i]);
        }
    }
        console.log(b);

         //(OR)

    let a=[1,2,5,2,1,8];
    obj={};
    for(let i of a){
        obj[i]=true;
    }     
    let b=Object.keys(obj);
    console.log(b)

//(3)To Find factorialof a number with recursion    n!=n*(n-1)!
    function fact(n)
    {
        if(n==1)
           return 1;
        else
            return n*fact(n-1);   
    }   
    var rValue=fact(4);
    document.write(rValue);

              //(OR)

            function factorial(x) {

                // if number is 0
                if (x == 0) {
                    return 1;
                }
            
                // if number is positive
                else {
                    return x * factorial(x - 1);
                }
            }
            
            // take input from the user
            const num = prompt('Enter a positive number: ');
            
            // calling factorial() if num is positive
            if (num >= 0) {
                const result = factorial(num);
                console.log(`The factorial of ${num} is ${result}`);
            }
            else {
                console.log('Enter a positive number.');
            }
            Output
            
 //(4)To find GCD(greatest common divisor) of two numbers with recursion  in javascript
 function gcd(x, y) {
    if (y === 0) return x;
    /* else */  return gcd(y, x % y);
}

console.log(gcd(27, 12)); // 3
console.log(gcd(12, 27)); // 3

//(5)To print fibonaci sequence for given number
    // take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
          //(Or)

     // declaration of the variables  
var n1 = 0,  n2 = 1, next_num, i;  
var num = parseInt (prompt (" Enter the limit for Fibonacci Series "));  
document.write( "Fibonacci Series: ");  
for ( i = 1; i <= num; i++)  
{  document.write (" <br> " +  n1); // print the n1  
    next_num = n1 + n2; // sum of n1 and n2 into the next_num  
      
    n1 = n2; // assign the n2 value into n2  
    n2 = next_num; // assign the next_num into n2  
}  

//(6)To generate passcal triangle for given rows in javascript program
     
const pascalTriangle = n => {
    const arr = []
    
    for (let i = 0; i < n; i++) {
        const row = [1]
        
        for (let j = 1; j < i; j++) {
            row.push(arr[i-1][j-1] + arr[i-1][j])
        }
        
        if( i > 0 ) row.push(1)
        
        arr.push(row)
    }
    
    return arr
}

console.log(pascalTriangle(6))
//(7)Sort an elements of array using bubble sort algorithm

/*Syntax
BubbleSort(array){
  for i -> 0 to arrayLength 
     for j -> 0 to (arrayLength - i - 1)
      if arr[j] > arr[j + 1]
        swap(arr[j], arr[j + 1])
}*/

     
// Bubble sort Implementation using Javascript
  
  
// Creating the bblSort function
 function bblSort(arr){
     
    for(var i = 0; i < arr.length; i++){
        
      // Last i elements are already in place  
      for(var j = 0; j < ( arr.length - i -1 ); j++){
          
        // Checking if the item at present iteration 
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){
            
          // If the condition is true then swap them
         
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    // Print the sorted array
    console.log(arr);
   }
     
     
   // This is our unsorted array
   var arr = [234, 43, 55, 63,  5, 6, 235, 547];
     
     
   // Now pass this array to the bblSort() function
   bblSort(arr);


   //(8)Write a Javascript for loop that will iterate from 0 to (number of your choice).For each iteration, it will cheak if the current number is odd or even and display a message to the screen
     

   for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

  //(9)write an javascript program to find grades for the given marks as inpuit:for marks>90 A , for marks>80 B , marks>70 C , mark>60 D , marks>50 E , marks<50 will be fail
      
  let mark=prompt("Enter Your Mark: ");
  switch(true){
       case(mark > 90):
          console.log("GRADE : A");
          break;
       case(mark > 80):
          console.log("GRADE : B");
          break;
       case(mark > 70):
          console.log("GRADE : C");
          break;
       case(mark > 60):
          console.log("GRADE : D");
          break;
       case(mark > 50):
          console.log("GRADE : E");
          break;
       default:
          console.log("GRADE : F");
          break;
       
  }

  //(10)Write a program to inform the user is eligible to vote or not for input given by user as age.

      
  let age=prompt("Enter Your age : ");
  switch(true){
    case(age > 18):
         console.log("You Are Eligible To Vote");
         break;
    default:
         console.log("You Are Not Eligible To Vote");
        break;
  }

  //ASSIGNMENT Day(4)

  // (1) Write a javascript program to seperate all the details of users which contains userid==3 in the following api [use fetch for getting data from api] 








  //ASSIGNMENT Day(5)
  //(1)  Write a program for example of async await
             

  //(2)  write a program for example of promises in javascript

//3. write a program for example of localstorage for storing and getting a value
//4. write a program for example of sessionstorage  for storing and getting a value 

//5. difference between localstorage and session storage 

//6.  Let array1 = [1,2,3,4,5,6] and let us assign array2=array1  . If we change the values of array2 will array1 changed? Find out!

//7. write a program to explain what is deep copy and shallow copy 

//8.write a program for example of for, for in , for of and for each in javascript

//9. using switch case write a program to right to vote based on age of person eg: if age above 18 can vote or below 18 cannot vote 

//10.  Write a program to calculate area of traingle for values provided by user with default paramters to the function (Google what is default paramters to function)