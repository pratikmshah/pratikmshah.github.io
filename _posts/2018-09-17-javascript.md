---
title:  "JavaScript"
date:   2018-09-17
image: "/javascript/javascript-logo.jpg"
---
Javascript is one of the core programming language for the web. Its purpose was to make web pages more interactive to the user. Over time the language has grown from only being used on the client side to being embedded into other server-side technologies. Also there have been extensive frameworks built on top of JavaScript such as React and Angular. Lately the trend has been to move away from other languages, such as Ruby, and to just use native JavaScript. Note: this post will assume you have programing experience so topics will be condensed.

<br>

### Table of Contents
 - [Syntax](#statements)
 - [Comments](#comments)
 - [Display Results](#disresult)
 - [Variables](#var)
 - [Operators, Expressions, & Comparisons](#opexpcom)
 - [Arrays](#arr)
 - [](#)
 - [](#)
 - [](#)

###  <a name=""></a>
###  <a name=""></a>

<br>

### Syntax <a name="statements"></a>
Each line of code is an instruction to the browser.

``` javascript
console.log("Hello World");
```
The `;` is used to end a statement just like a period at the end of a sentence.

<br>

### Comments <a name="comments"></a>

``` javascript
// for single line comment

/*

Use this for multi-line
comments

*/

```

Some rules about when you comment: is that its purpose should be used to explain complex or complicated code, no need to comment for obvious things, and when you update the code remember to update the comment also.

<br>

### Display Results <a name="disresult"></a>
You can output results of a code in several ways such as, alert box, writing to the document, or console.

``` javascript
alert("displays alert box");

document.write("writes to html doc");

console.log("write to console");

```

<br>

### Variables <a name="var"></a>
Initialize variables using keyword `var` followed by variable name (use camelCase) and an initial value.

``` javascript
// declare and initialize on one line
var x = 5;

// declare and initialize on two lines
var x;
x = 5;

```

Naming Convention:
- variables start with lower case letter or $ or _
- don't contain special symbols %,#, !
- written in camelCase

Variable Types:
``` javascript
// Strings - store characters
var name = "Pratik";

// Numbers
var days = 365;

var bankBalance = 4534.25;

// Boolean
var over = true;
var under = false;

// Functions
var myFunction = function() {
  return "Hello!";
};

// Special Types - Undefined
var myValue;    

// Special Types - Empty value
var myValue = null;

```
<br>

### Operators, Expressions, & Comparisons <a name="opexpcom"></a>

Operators:
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus

Variables can also store the result of expressions.
``` javascript
var x = 5 + 6;
var name = "Pratik" + "Shah";

```

Increment & Decrement
``` javascript
var x = 10;

x++; // x is 11
x--; // x is 10

// you can also increment or decrement before which will change value first then compute
++x;
--x;

```

Comparisons:
- `==` Equal to
- `===` Equal value and data type
- `!=` Not equal to
- `!==` Not Equal value or data type
- `>, >=` Greater than, greater than or equal
- `<, <=` Less than, less than or equal

Logical Opperators:
- `&&` AND - Both values must be true
- `||` OR - At least 1 value must be true
- `!` NOT - Inverse ex: if true it must not be true

``` javascript
// Logical Operators
var x = 10;
var y = 5;

console.log(x < 10 || y > 3); // true
console.log(x > 5 && y < 3);  // false

```

<br>

### Arrays <a name="arr"></a>
Arrays are a list of variables and are written using `[]`. To access an item in an array specify element number inside the brackets. Array access is zero based so the first element starts with zero ex: lists[0].

``` javascript
var restaurants = ["Taco Bell", "Dominos", "Panda Express"];

console.log(restaurants[0]);  // return Taco Bell

```

You can change and add values either by setting a new value to the element or using built in functions.

``` javascript
var numbers = [5, 6, 7, 8, 9];

numbers[3] = 10; // [5, 6, 7, 10, 9]

numbers.push(11); //[5, 6, 7, 10, 9, 11]

numbers.pop();  // will return last value and remove it [5, 6, 7, 10, 9]

```

<br>
