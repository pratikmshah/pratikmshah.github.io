---
title:  "JavaScript"
date:   2018-09-17
image: "/javascript/javascript-logo.jpg"
---
Javascript is one of the core programming language for the web. Its purpose was to make web pages more interactive to the user. Over time the language has grown from only being used on the client side to being embedded into other server-side technologies. Also there have been extensive frameworks built on top of JavaScript such as React and Angular. Lately the trend has been to move away from other languages, such as Ruby, and to just use native JavaScript.

<br>

### Table of Contents
 - [Syntax](#statements)
 - [Comments](#comments)
 - [Display Results](#disresult)
 - [Variables](#var)
 - [](#)
 - [](#)
 - [](#)
 - [](#)
 - [](#)

###  <a name=""></a>
###  <a name=""></a>
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
