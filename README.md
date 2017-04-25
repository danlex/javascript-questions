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
 * [Question8: How would you compare two objects in JavaScript?](#question8)
 * [Question9: Delete can delete but](#question9)
 * [Question10: What is arrow function?](#question10)
 * [Question11: What is lambda function?](#question11)
 * [Question12: What are JavaScript types?](#question12)
 
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
#### Question8.  
**How would you compare two objects in JavaScript?**

**Answer:**

```javascript
function objectEquals(v1, v2) {
    if (typeof(v1) !== typeof(v2)) {
        return false;
    }
    if (typeof(v1) === "function") {
        return v1.toString() === v2.toString();
    }
    if (v1 instanceof Object && v2 instanceof Object) {
        if (Object.getOwnPropertyNames(v1).length !== Object.getOwnPropertyNames(v2).length) {
            return false;
        }
        var r = true;
        for (k in v1) {
            r = objectEquals(v1[k], v2[k]);
            if (!r) {
                return false;
            }
        }
        return true;
    }
    
    return v1 === v2;
}
```
#### Question9.   
**Delete can delete but**

**Answer:**

Look at the code below, I have a property in a object and I am creating a new object where I am setting it to a new value. If I delete that property what will i get if I try to access that property?
```javascript
var myObject = {
  price: 20.99,
  get_price : function() {
    return this.price;
  }
};
var customObject = Object.create(myObject);
customObject.price = 19.99;
delete customObject.price;
console.log(customObject.get_price());
```
**Answer:**

You will see 20.99
#### Question10.  
**What is arrow function?**

**Answer:**

An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.
```javascript
(param1, param2, …, paramN) => { statements }
```
The other benefit of using arrow functions with promises/callbacks is that it reduces the confusion surrounding the this keyword. In code with multiple nested functions, it can be difficult to keep track of and remember to bind the correct this context. In ES5, you can use workarounds like the .bind method (which is slow) or creating a closure using var self = this;.
Because arrow functions allow you to retain the scope of the caller inside the function, you don’t need to create self = this closures or use bind.

As was mentioned previously, the this keyword works differently in arrow functions. The methods call(), apply(), and bind() will not change the value of this in arrow functions. (In fact, the value of this inside of a function simply can’t be changed–it will be the same value as when the function was called.) If you need to bind to a different value, you’ll need to use a function expression.

Arrow functions cannot be used as constructors as other functions can.

Arrow functions do not have the local variable arguments as do other functions. 

Where to use arrow functions:

Use function in the global scope and for Object.prototype properties.

Use class for object constructors.

Use => everywhere else

#### Question11. 
**What is lambda function?**

**Answer:**

Lambda function is a function that is passed as parameter to another function or assigned to a variable.
```javascript
test = function(){alert("Hello1");};
test2 = test;
test = function(){alert("Hello2");};

//Passing functions
var list=new Array("A","AB","ABC","ABCD");
compare = function(a,b){
 return a.length-b.length;
}
list.sort(compare);
```
#### Question12. 
**What are JavaScript types?**
**Answer:**

Following are the JavaScript types:
```javascript
Number
String
Boolean
Function
Object
Null
Undefined
```

## Getting Involved

  1. [Contributors](#contributors)
  2. [How to Contribute](https://github.com/danlex/javascript-questions/edit/master/CONTRIBUTING.md)
  3. [License](https://github.com/danlex/javascript-questions/blob/master/LICENSE)
  
### Contributors:
This document started in 2017 as a contribution of [@danlex].
