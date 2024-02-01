let questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  {
    numb: 6,
    question: "What is the output of the following code snippet?\n\nconsole.log(0.1 + 0.2 === 0.3);",
    answer: "false",
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ]
  },
  {
    numb: 7,
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function that retains access to its enclosing scope's variables.",
    options: [
      "A method of closing browser windows.",
      "A closure is a function that retains access to its enclosing scope's variables.",
      "A built-in JavaScript function for closing files.",
      "A function that closes other functions."
    ]
  },
  {
    numb: 8,
    question: "What is the result of the expression 2 + '2' in JavaScript?",
    answer: "'22'",
    options: [
      "4",
      "22",
      "'22'",
      "TypeError"
    ]
  },
  {
    numb: 9,
    question: "What is the purpose of the 'use strict' directive in JavaScript?",
    answer: "It enforces stricter parsing and error handling in JavaScript.",
    options: [
      "It allows the use of outdated JavaScript features.",
      "It indicates the usage of JavaScript frameworks.",
      "It enables asynchronous code execution.",
      "It enforces stricter parsing and error handling in JavaScript."
    ]
  },
  {
    numb: 10,
    question: "What is the difference between '==' and '===' operators in JavaScript?",
    answer: "'==' checks for value equality, while '===' checks for both value and type equality.",
    options: [
      "'==' checks for value equality, while '===' checks for reference equality.",
      "'==' checks for both value and type equality, while '===' checks for value equality.",
      "'==' checks for value equality, while '===' checks for both value and type equality.",
      "'==' and '===' operators are identical in JavaScript."
    ]
  },
  {
    numb: 11,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answer: "It refers to the object to which the currently executing code belongs.",
    options: [
      "It refers to the previous object in the call stack.",
      "It refers to the parent object of the current object.",
      "It refers to the global window object.",
      "It refers to the object to which the currently executing code belongs."
    ]
  },
  {
    numb: 12,
    question: "What is the output of the following code?\n\nconsole.log(typeof null);",
    answer: "'object'",
    options: [
      "'null'",
      "'undefined'",
      "'object'",
      "'string'"
    ]
  },
  {
    numb: 13,
    question: "What is the purpose of the 'new' keyword in JavaScript?",
    answer: "It creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.",
    options: [
      "It restarts the current loop iteration.",
      "It creates a new variable.",
      "It creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.",
      "It creates a new global scope."
    ]
  },
  {
    numb: 14,
    question: "What is the difference between 'var', 'let', and 'const' in JavaScript?",
    answer: "'var' has function scope, 'let' has block scope, and 'const' is used for constants with block scope.",
    options: [
      "'var' has block scope, 'let' has function scope, and 'const' is used for constants with block scope.",
      "'var' has block scope, 'let' has global scope, and 'const' is used for constants with function scope.",
      "'var' has function scope, 'let' has block scope, and 'const' is used for constants with function scope.",
      "'var' has function scope, 'let' has global scope, and 'const' is used for constants with global scope."
    ]
  },
  {
    numb: 15,
    question: "What is a JavaScript promise?",
    answer: "A promise is an object representing the eventual completion or failure of an asynchronous operation.",
    options: [
      "A guarantee that a function will always return a value.",
      "A promise is an object representing the eventual completion or failure of an asynchronous operation.",
      "A way to handle errors in JavaScript.",
      "A data structure for storing key-value pairs."
    ]
  },
  {
    numb: 16,
    question: "What is the 'Event Loop' in JavaScript?",
    answer: "The event loop is the process that handles asynchronous callbacks in JavaScript.",
    options: [
      "A loop that iterates through all events in a web page.",
      "The event loop is the process that handles asynchronous callbacks in JavaScript.",
      "A loop that executes all JavaScript code in a web page.",
      "The process that handles asynchronous callbacks in JavaScript."
    ]
  },
  {
    numb: 17,
    question: "What is the purpose of the 'async' and 'await' keywords in JavaScript?",
    answer: "They are used to write asynchronous code that looks synchronous and easier to understand.",
    options: [
      "They are used to create new threads in JavaScript.",
      "They are used to handle exceptions in JavaScript.",
      "They are used to write asynchronous code that looks synchronous and easier to understand.",
      "They are used to write synchronous code in JavaScript."
    ]
  },
  {
    numb: 18,
    question: "What is the difference between 'null' and 'undefined' in JavaScript?",
    answer: "'null' is a deliberate absence of any value, while 'undefined' means that a variable has been declared but has not yet been assigned a value.",
    options: [
      "'null' means a variable has not been declared, while 'undefined' means a variable has been declared but has no value.",
      "'null' means a variable has been assigned the value undefined, while 'undefined' means no value has been assigned to a variable.",
      "'null' is a deliberate absence of any value, while 'undefined' means that a variable has been declared but has not yet been assigned a value.",
      "'null' represents a boolean false value, while 'undefined' represents a boolean true value."
    ]
  },
  {
    numb: 19,
    question: "What is the difference between 'let' and 'const' in JavaScript?",
    answer: "'let' allows the variable's value to be reassigned, while 'const' does not.",
    options: [
      "'let' is used for global variables, while 'const' is used for local variables.",
      "'let' is used for constants, while 'const' is used for variables.",
      "'let' allows the variable's value to be reassigned, while 'const' does not.",
      "'let' is used for block-scoped variables, while 'const' is used for function-scoped variables."
    ]
  },
  {
    numb: 20,
    question: "What is the purpose of the JavaScript 'map' function?",
    answer: "The 'map' function is used to transform elements of an array by applying a function to each element.",
    options: [
      "The 'map' function is used to create a new array by removing elements that do not satisfy a condition.",
      "The 'map' function is used to filter elements of an array based on a condition.",
      "The 'map' function is used to combine all elements of an array into a single value.",
      "The 'map' function is used to transform elements of an array by applying a function to each element."
    ]
  },
  {
    numb: 21,
    question: "What is the purpose of the JavaScript 'filter' function?",
    answer: "The 'filter' function is used to create a new array with elements that satisfy a condition.",
    options: [
      "The 'filter' function is used to transform elements of an array by applying a function to each element.",
      "The 'filter' function is used to remove elements from an array.",
      "The 'filter' function is used to combine all elements of an array into a single value.",
      "The 'filter' function is used to create a new array with elements that satisfy a condition."
    ]
  },
  {
    numb: 22,
    question: "What is the purpose of the JavaScript 'reduce' function?",
    answer: "The 'reduce' function is used to reduce the elements of an array to a single value by applying a function to each element.",
    options: [
      "The 'reduce' function is used to transform elements of an array by applying a function to each element.",
      "The 'reduce' function is used to create a new array with elements that satisfy a condition.",
      "The 'reduce' function is used to combine all elements of an array into a single value.",
      "The 'reduce' function is used to reduce the elements of an array to a single value by applying a function to each element."
    ]
  },
  {
    numb: 23,
    question: "What is the difference between 'null' and 'undefined' in JavaScript?",
    answer: "'null' represents a deliberate non-value or absence of a value, while 'undefined' represents an undeclared or uninitialized value.",
    options: [
      "'null' represents an undeclared or uninitialized value, while 'undefined' represents a deliberate non-value or absence of a value.",
      "'null' represents a deliberate non-value or absence of a value, while 'undefined' represents an undeclared or uninitialized value.",
      "'null' represents a deliberate non-value or absence of a value, while 'undefined' represents an uninitialized variable.",
      "'null' represents an uninitialized variable, while 'undefined' represents a deliberate non-value or absence of a value."
    ]
  },
  {
    numb: 24,
    question: "What is the difference between '==' and '===' operators in JavaScript?",
    answer: "'==' checks for value equality with type coercion, while '===' checks for value equality without type coercion.",
    options: [
      "'==' checks for value equality with type coercion, while '===' checks for value equality without type coercion.",
      "'==' checks for reference equality, while '===' checks for value equality.",
      "'==' checks for both value and type equality, while '===' checks for value equality.",
      "'==' and '===' operators are identical in JavaScript."
    ]
  },
  {
    numb: 25,
    question: "What is the purpose of the 'typeof' operator in JavaScript?",
    answer: "The 'typeof' operator is used to determine the data type of a variable or expression.",
    options: [
      "The 'typeof' operator is used to convert a string to a number.",
      "The 'typeof' operator is used to compare two variables.",
      "The 'typeof' operator is used to define a new variable.",
      "The 'typeof' operator is used to determine the data type of a variable or expression."
    ]
  },
  {
    numb: 26,
    question: "What is the purpose of the JavaScript 'forEach' function?",
    answer: "The 'forEach' function is used to execute a provided function once for each array element.",
    options: [
      "The 'forEach' function is used to create a new array with elements that satisfy a condition.",
      "The 'forEach' function is used to remove elements from an array.",
      "The 'forEach' function is used to combine all elements of an array into a single value.",
      "The 'forEach' function is used to execute a provided function once for each array element."
    ]
  },
  {
    numb: 27,
    question: "What is a JavaScript 'module'?",
    answer: "A JavaScript 'module' is a file containing JavaScript code that can be reused in other JavaScript files.",
    options: [
      "A JavaScript 'module' is a data structure used to store key-value pairs.",
      "A JavaScript 'module' is a file containing JavaScript code that can be reused in other JavaScript files.",
      "A JavaScript 'module' is a method used to create new objects.",
      "A JavaScript 'module' is a loop that iterates through all events in a web page."
    ]
  },
  {
    numb: 28,
    question: "What is the purpose of the JavaScript 'Object.keys()' method?",
    answer: "The 'Object.keys()' method is used to return an array of a given object's own enumerable property names.",
    options: [
      "The 'Object.keys()' method is used to execute a function once for each array element.",
      "The 'Object.keys()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Object.keys()' method is used to remove elements from an array.",
      "The 'Object.keys()' method is used to return an array of a given object's own enumerable property names."
    ]
  },
  {
    numb: 29,
    question: "What is the purpose of the JavaScript 'Object.values()' method?",
    answer: "The 'Object.values()' method is used to return an array of a given object's own enumerable property values.",
    options: [
      "The 'Object.values()' method is used to execute a function once for each array element.",
      "The 'Object.values()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Object.values()' method is used to remove elements from an array.",
      "The 'Object.values()' method is used to return an array of a given object's own enumerable property values."
    ]
  },
  {
    numb: 30,
    question: "What is the purpose of the JavaScript 'Object.entries()' method?",
    answer: "The 'Object.entries()' method is used to return an array of a given object's own enumerable property [key, value] pairs.",
    options: [
      "The 'Object.entries()' method is used to execute a function once for each array element.",
      "The 'Object.entries()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Object.entries()' method is used to remove elements from an array.",
      "The 'Object.entries()' method is used to return an array of a given object's own enumerable property [key, value] pairs."
    ]
  },
  {
    numb: 31,
    question: "What is the purpose of the JavaScript 'Object.assign()' method?",
    answer: "The 'Object.assign()' method is used to copy the values of all enumerable own properties from one or more source objects to a target object.",
    options: [
      "The 'Object.assign()' method is used to execute a function once for each array element.",
      "The 'Object.assign()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Object.assign()' method is used to remove elements from an array.",
      "The 'Object.assign()' method is used to copy the values of all enumerable own properties from one or more source objects to a target object."
    ]
  },
  {
    numb: 32,
    question: "What is the purpose of the JavaScript 'Object.create()' method?",
    answer: "The 'Object.create()' method is used to create a new object with the specified prototype object and properties.",
    options: [
      "The 'Object.create()' method is used to execute a function once for each array element.",
      "The 'Object.create()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Object.create()' method is used to remove elements from an array.",
      "The 'Object.create()' method is used to create a new object with the specified prototype object and properties."
    ]
  },
  {
    numb: 33,
    question: "What is the purpose of the JavaScript 'Object.freeze()' method?",
    answer: "The 'Object.freeze()' method is used to freeze an object, preventing new properties from being added to it and existing properties from being removed or changed.",
    options: [
      "The 'Object.freeze()' method is used to execute a function once for each array element.",
      "The 'Object.freeze()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Object.freeze()' method is used to remove elements from an array.",
      "The 'Object.freeze()' method is used to freeze an object, preventing new properties from being added to it and existing properties from being removed or changed."
    ]
  },
  {
    numb: 34,
    question: "What is the purpose of the JavaScript 'Object.seal()' method?",
    answer: "The 'Object.seal()' method is used to seal an object, preventing new properties from being added to it and marking all existing properties as non-configurable.",
    options: [
      "The 'Object.seal()' method is used to execute a function once for each array element.",
      "The 'Object.seal()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Object.seal()' method is used to remove elements from an array.",
      "The 'Object.seal()' method is used to seal an object, preventing new properties from being added to it and marking all existing properties as non-configurable."
    ]
  },
  {
    numb: 35,
    question: "What is the purpose of the JavaScript 'Object.getOwnPropertyNames()' method?",
    answer: "The 'Object.getOwnPropertyNames()' method is used to return an array of all properties (enumerable or not) found directly upon a given object.",
    options: [
      "The 'Object.getOwnPropertyNames()' method is used to execute a function once for each array element.",
      "The 'Object.getOwnPropertyNames()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Object.getOwnPropertyNames()' method is used to remove elements from an array.",
      "The 'Object.getOwnPropertyNames()' method is used to return an array of all properties (enumerable or not) found directly upon a given object."
    ]
  },
  {
    numb: 36,
    question: "What is the purpose of the JavaScript 'Object.getOwnPropertyDescriptors()' method?",
    answer: "The 'Object.getOwnPropertyDescriptors()' method is used to get all own property descriptors of a given object.",
    options: [
      "The 'Object.getOwnPropertyDescriptors()' method is used to execute a function once for each array element.",
      "The 'Object.getOwnPropertyDescriptors()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Object.getOwnPropertyDescriptors()' method is used to remove elements from an array.",
      "The 'Object.getOwnPropertyDescriptors()' method is used to get all own property descriptors of a given object."
    ]
  },
  {
    numb: 37,
    question: "What is the purpose of the JavaScript 'Object.getOwnPropertySymbols()' method?",
    answer: "The 'Object.getOwnPropertySymbols()' method is used to get all symbol properties found directly upon a given object.",
    options: [
      "The 'Object.getOwnPropertySymbols()' method is used to execute a function once for each array element.",
      "The 'Object.getOwnPropertySymbols()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Object.getOwnPropertySymbols()' method is used to remove elements from an array.",
      "The 'Object.getOwnPropertySymbols()' method is used to get all symbol properties found directly upon a given object."
    ]
  },
  {
    numb: 38,
    question: "What is the purpose of the JavaScript 'Object.fromEntries()' method?",
    answer: "The 'Object.fromEntries()' method is used to transform a list of key-value pairs into an object.",
    options: [
      "The 'Object.fromEntries()' method is used to execute a function once for each array element.",
      "The 'Object.fromEntries()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Object.fromEntries()' method is used to remove elements from an array.",
      "The 'Object.fromEntries()' method is used to transform a list of key-value pairs into an object."
    ]
  },
  {
    numb: 39,
    question: "What is the purpose of the JavaScript 'String.fromCharCode()' method?",
    answer: "The 'String.fromCharCode()' method is used to return a string created from the specified sequence of Unicode values.",
    options: [
      "The 'String.fromCharCode()' method is used to execute a function once for each array element.",
      "The 'String.fromCharCode()' method is used to transform elements of an array by applying a function to each element.",
      "The 'String.fromCharCode()' method is used to remove elements from an array.",
      "The 'String.fromCharCode()' method is used to return a string created from the specified sequence of Unicode values."
    ]
  },
  {
    numb: 40,
    question: "What is the purpose of the JavaScript 'String.prototype.split()' method?",
    answer: "The 'String.prototype.split()' method is used to split a string into an array of substrings.",
    options: [
      "The 'String.prototype.split()' method is used to execute a function once for each array element.",
      "The 'String.prototype.split()' method is used to transform elements of an array by applying a function to each element.",
      "The 'String.prototype.split()' method is used to remove elements from an array.",
      "The 'String.prototype.split()' method is used to split a string into an array of substrings."
    ]
  },
  {
    numb: 41,
    question: "What is the purpose of the JavaScript 'String.prototype.substring()' method?",
    answer: "The 'String.prototype.substring()' method is used to return a subset of a string between one index and another.",
    options: [
      "The 'String.prototype.substring()' method is used to execute a function once for each array element.",
      "The 'String.prototype.substring()' method is used to transform elements of an array by applying a function to each element.",
      "The 'String.prototype.substring()' method is used to remove elements from an array.",
      "The 'String.prototype.substring()' method is used to return a subset of a string between one index and another."
    ]
  },
  {
    numb: 42,
    question: "What is the purpose of the JavaScript 'String.prototype.slice()' method?",
    answer: "The 'String.prototype.slice()' method is used to extract a section of a string and return it as a new string.",
    options: [
      "The 'String.prototype.slice()' method is used to execute a function once for each array element.",
      "The 'String.prototype.slice()' method is used to transform elements of an array by applying a function to each element.",
      "The 'String.prototype.slice()' method is used to remove elements from an array.",
      "The 'String.prototype.slice()' method is used to extract a section of a string and return it as a new string."
    ]
  },
  {
    numb: 43,
    question: "What is the purpose of the JavaScript 'String.prototype.trim()' method?",
    answer: "The 'String.prototype.trim()' method is used to remove whitespace from both ends of a string.",
    options: [
      "The 'String.prototype.trim()' method is used to execute a function once for each array element.",
      "The 'String.prototype.trim()' method is used to transform elements of an array by applying a function to each element.",
      "The 'String.prototype.trim()' method is used to remove elements from an array.",
      "The 'String.prototype.trim()' method is used to remove whitespace from both ends of a string."
    ]
  },
  {
    numb: 44,
    question: "What is the purpose of the JavaScript 'Array.prototype.concat()' method?",
    answer: "The 'Array.prototype.concat()' method is used to merge two or more arrays.",
    options: [
      "The 'Array.prototype.concat()' method is used to execute a function once for each array element.",
      "The 'Array.prototype.concat()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Array.prototype.concat()' method is used to remove elements from an array.",
      "The 'Array.prototype.concat()' method is used to merge two or more arrays."
    ]
  },
  {
    numb: 45,
    question: "What is the purpose of the JavaScript 'Array.prototype.filter()' method?",
    answer: "The 'Array.prototype.filter()' method is used to create a new array with all elements that pass the test implemented by the provided function.",
    options: [
      "The 'Array.prototype.filter()' method is used to execute a function once for each array element.",
      "The 'Array.prototype.filter()' method is used to transform elements of an array by applying a function to each element.",
      "The 'Array.prototype.filter()' method is used to remove elements from an array.",
      "The 'Array.prototype.filter()' method is used to create a new array with all elements that pass the test implemented by the provided function."
    ]
  },
  {
    numb: 46,
    question: "What is the purpose of the JavaScript 'Array.prototype.forEach()' method?",
    answer: "The 'Array.prototype.forEach()' method is used to execute a provided function once for each array element.",
    options: [
      "The 'Array.prototype.forEach()' method is used to create a new array with elements that satisfy a condition.",
      "The 'Array.prototype.forEach()' method is used to remove elements from an array.",
      "The 'Array.prototype.forEach()' method is used to execute a provided function once for each array element.",
      "The 'Array.prototype.forEach()' method is used to transform elements of an array by applying a function to each element."
    ]
  },
  {
    numb: 47,
    question: "What is the purpose of the JavaScript 'Array.prototype.indexOf()' method?",
    answer: "The 'Array.prototype.indexOf()' method is used to return the first index at which a given element can be found in the array, or -1 if it is not present.",
    options: [
      "The 'Array.prototype.indexOf()' method is used to execute a function once for each array element.",
      "The 'Array.prototype.indexOf()' method is used to create a new array with elements that satisfy a condition.",
      "The 'Array.prototype.indexOf()' method is used to return the first index at which a given element can be found in the array, or -1 if it is not present.",
      "The 'Array.prototype.indexOf()' method is used to remove elements from an array."
    ]
  },
  {
    numb: 48,
    question: "What is the purpose of the JavaScript 'Array.prototype.includes()' method?",
    answer: "The 'Array.prototype.includes()' method is used to determine whether an array includes a certain value.",
    options: [
      "The 'Array.prototype.includes()' method is used to execute a function once for each array element.",
      "The 'Array.prototype.includes()' method is used to create a new array with elements that satisfy a condition.",
      "The 'Array.prototype.includes()' method is used to determine whether an array includes a certain value.",
      "The 'Array.prototype.includes()' method is used to remove elements from an array."
    ]
  },
  {
    numb: 49,
    question: "What is the purpose of the JavaScript 'Array.prototype.reverse()' method?",
    answer: "The 'Array.prototype.reverse()' method is used to reverse the order of the elements in an array.",
    options: [
      "The 'Array.prototype.reverse()' method is used to execute a function once for each array element.",
      "The 'Array.prototype.reverse()' method is used to create a new array with elements that satisfy a condition.",
      "The 'Array.prototype.reverse()' method is used to reverse the order of the elements in an array.",
      "The 'Array.prototype.reverse()' method is used to remove elements from an array."
    ]
  },
  {
    numb: 50,
    question: "What is the purpose of the JavaScript 'Array.prototype.slice()' method?",
    answer: "The 'Array.prototype.slice()' method is used to extract a section of an array and return a new array.",
    options: [
      "The 'Array.prototype.slice()' method is used to execute a function once for each array element.",
      "The 'Array.prototype.slice()' method is used to create a new array with elements that satisfy a condition.",
      "The 'Array.prototype.slice()' method is used to extract a section of an array and return a new array.",
      "The 'Array.prototype.slice()' method is used to remove elements from an array."
    ]
  }
];
