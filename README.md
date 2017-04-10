# Javascript Questions

This file contains a number of front-end javascript interview questions.

## Getting Involved

  1. [Contributors](#contributors)
  1. [How to Contribute](https://github.com/danlex/javascript-questions/edit/master/CONTRIBUTING.md)
  1. [License](https://github.com/danlex/javascript-questions/edit/master/LICENSE)

## Javascript Questions
Question1. Consider the two functions below. Will they both return the same thing? Why or why not?
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
Answer:
```javascript
foo1 returns:
Object {bar: "hello"}
foo2 returns:
Undefined
```

Q2. What will the code below output? Explain your answer.
```javascript
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```
Answer:
```javascript
0.30000000000000004
false
```
