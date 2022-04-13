
// 1. Write a function that reverses a number.
// Example: x = 349210
// Output = 012943
const num = 349120;

export function reverseNumber (number){
    let stringNum = number.toString();
    let reverseNum = stringNum.split("").reverse().join("");
    console.log (reverseNum);
}

reverseNumber (349120);


// 2. Write a function that returns a passed string with letters in alphabetical order.

// Example: 'webmaster'
// Output: 'abeemrstw'

export function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));


// 3. Write a function that accepts a string as a parameter and converts the first letter of each word of the string to uppercase.

// Example: 'the quick brown fox'
// Output: 'The Quick Brown Fox '

const str = "the quick brown fox";

const arr = str.split(" ");
for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const str2 = arr.join(" ");
console.log(str2);

// 4. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example: 5 is prime since it can only be divided by 5 and 1, 8 is not prime because it can be divided by 1,2,4,8.

// So 5 would return true, and 8 would return false.
export function isPrime1(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n); //returns the square root of the passed value
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}

console.log(isPrime1(6));
console.log(isPrime1(5));


// 5.  Write a function to extract unique characters from a string.

// Example: "thequickbrownfoxjumpsoverthelazydog"
// Output: "thequickbrownfxjmpsvlazydg"

export function findUnique(str){
    // The variable that contains the unique values
    let uniq = "";
     
    for(let i = 0; i < str.length; i++){
      // Checking if the uniq contains the character
      if(uniq.includes(str[i]) === false){
        // If the character not present in uniq
        // Concatenate the character with uniq
        uniq += str[i]
      }
    }
    return uniq;
  }
   
  console.log(findUnique("thequickbrownfoxjumpsoverthelazydogs"));

// Write a function that will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

export function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));
  
