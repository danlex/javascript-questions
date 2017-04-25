# Javascript Questions

This file contains a number of front-end javascript interview questions.

## Table of Contents
1. [Questions](#questions)
 * [Question1: Consider the two functions below. Will they both return the same thing? Why or why not?](#question1)
 * [Question2: What will the code below output of adding 2 decimal numbers?](#question2)
 * [Question3: In what order will the numbers 1-4 be logged to the console when the code below is executed?](#question3)
 * [Question4: What will be the output of the seTtimeout inside a for loop?](#question4)
 * [Question5: What would the following lines of code output to the console?](#question5)
 * [Question6: How do you check if an object is an array or not?](#question6)
 * [Question7: == Vs ===](#question7)
2. Getting Involved
 * [Contributors](#contributors)
 * [How to Contribute](https://github.com/danlex/javascript-questions/edit/master/CONTRIBUTING.md)
 * [License](https://github.com/danlex/javascript-questions/blob/master/LICENSE)

## Questions
#### Question1. 

**Consider the two functions below. Will they both return the same thing? Why or why not?**

```javascript
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());
```
**Answer:**
```javascript
foo1 returns:
Object {bar: "hello"}
foo2 returns:
Undefined
```

#### Question2. 
**What will the code below output of adding 2 decimal numbers? Explain your answer**

```javascript
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```
**Answer:**
```javascript
0.30000000000000004
false
```
#### Question3.
**In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?**

```javascript
(function() {
   console.log(1); 
   setTimeout(function(){console.log(2)}, 1000); 
   setTimeout(function(){console.log(3)}, 0); 
   console.log(4);
})();
```
**Answer:**
```javascript
1
4
3
2
```

#### Question4.
**What will be the output of the seTtimeout inside a for loop?**
What will be the output of the following code:
```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
Explain your answer. How could the use of closures help here?
```
**Answer:**
```javascript
The code sample shown will not display the values 0, 1, 2, 3, and 4 as might be expected; 
rather, it will display 5, 5, 5, 5, and 5.

The reason for this is that each function executed within the loop will be executed after 
the entire loop has completed and all will therefore reference the last value stored in i, which was 5.
```
#### Question5.
**What would the following lines of code output to the console?**
```javascript
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
```
**Answer:**
```javascript
0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2
```
#### Question6.
**How do you check if an object is an array or not?**
```javascript
var arrayList = [1,2,3];
```
**Answer:**
```javascript
if( Object.prototype.toString.call( arrayList ) === '[object Array]' ) {
  console.log('Array!');
}
Or
Array.isArray(arrayList);
var toString = Object.prototype.toString;

toString.call(new Date);    // [object Date]
toString.call(new String);  // [object String]
toString.call(Math);        // [object Math]

// Since JavaScript 1.8.5
toString.call(undefined);   // [object Undefined]
toString.call(null);        // [object Null]
```
#### Question7. 
**== Vs ===**
**Answer:**
The simplest way of saying that, == will not check types and === will check whether both sides are of same type.
Rule for implicit coercion: Comparison by using == does implicit type conversion under the hood. And rules for implicit coercion are as follows-

If both operands are same type use ===
undefined == null
If one operands is string another is number, convert string to number
If one is boolean and another is non-boolean, convert boolean to number and then perform comparison
While comparing a string or number to an object, try to convert the object to a primitive type and then try to compare
Be careful while comparing objects, identifiers must reference the same objects or same array.
```javascript
var a = {a: 1};
var b = {a: 1};
a == b //false
a === b //false

var c = a;
a == c//true
a === c //true
```       
Special note: NaN, null and undefined will never === another type. NaN does not even === itself.

## Getting Involved

  1. [Contributors](#contributors)
  2. [How to Contribute](https://github.com/danlex/javascript-questions/edit/master/CONTRIBUTING.md)
  3. [License](https://github.com/danlex/javascript-questions/blob/master/LICENSE)
  
### Contributors:
This document started in 2017 as a contribution of [@danlex].
