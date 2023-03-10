const questions = {
  1: {
    question: "What is the correct way to write a JavaScript array?",
    answers: {
      a: 'let colors = "red", "blue", "green"',
      b: 'let colors = ["red", "blue", "green"]',
      c: 'let colors = (1:"red", 2:"blue", 3:"green")',
      d: 'let colors = 1="red", 2="blue", 3="green"',
    },
    correct: "b",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  2: {
    question: "How do you create a function in JavaScript?",
    answers: {
      a: "function = myFunction()",
      b: "function() myFunction{}",
      c: "myFunction:function()",
      d: "let myFunction = function()",
    },
    correct: "d",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  3: {
    question: "What is the correct way to write a JavaScript object?",
    answers: {
      a: 'let person = {name:"John", age:30}',
      b: 'let person = "name":"John", "age":30',
      c: 'let person = "name:John, age:30"',
      d: 'let person = ("name":"John", "age":30)',
    },
    correct: "a",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  4: {
    question: "How do you write a JavaScript for loop?",
    answers: {
      a: "for i = 1 to 5",
      b: "for (let i <= 5; i++)",
      c: "for (let i = 0; i < 5; i++)",
      d: "for i = 0 to 5, i++",
    },
    correct: "c",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  5: {
    question: "What is the correct way to write a JavaScript if statement?",
    answers: {
      a: "if i = 5",
      b: "if i == 5 then",
      c: "if i = 5 then",
      d: "if (i == 5)",
    },
    correct: "d",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  6: {
    question: "How do you write a JavaScript while loop?",
    answers: {
      a: "while i = 1 to 10",
      b: "while (i <= 10)",
      c: "while i <= 10",
      d: "while (i = 1; i <= 10; i++)",
    },
    correct: "b",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  7: {
    question:
      "How would you get access to an element with the id 'first-button'?",
    answers: {
      a: 'let myFirstButton = document.querySelector("#first-button")',
      b: 'let myFirstButton = document.querySelectorAll("#first-button")',
      c: 'let myFirstButton = document.querySelector(".first-button")',
      d: 'let myFirstButton = button.querySelector("first-button")',
    },
    correct: "a",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  8: {
    question: "How do you find out the local storage value for the username?",
    answers: {
      a: "let username = local.storage",
      b: 'let username = localStorage.getItem("user")',
      c: 'let username = getItem.localStorage("username")',
      d: 'let username = localStorage("username")',
    },
    correct: "b",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  9: {
    question: "How do you write a JavaScript do-while loop?",
    answers: {
      a: "do { i++; } while (i <= 10);",
      b: "do i++; while (i <= 10);",
      c: "do {i++; while (i <= 10)}",
      d: "do i++; while i <= 10;",
    },
    correct: "a",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  10: {
    question:
      "How do you write a JavaScript function that takes in parameters?",
    answers: {
      a: "myFunction(i, j) {return i * j;}",
      b: "function myFunction = (i, j) {return i * j;}",
      c: "function myFunction(i, j) {return i * j;}",
      d: "let myFunction = function(i, j) {return i * j;}",
    },
    correct: "c",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  11: {
    question: "How do you write a JavaScript function that returns a value?",
    answers: {
      a: "myFunction() {return x;}",
      b: "return x from myFunction()",
      c: "function myFunction() {return x;}",
      d: "let myFunction = function() {return x;}",
    },
    correct: "c",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  12: {
    question: "How do you write a JavaScript for-in loop?",
    answers: {
      a: "for i = 0 to myArray {console.log(i);}",
      b: "for i in myArray {console.log(myArray[i]);}",
      c: "for i = 0 to myArray.length {console.log(myArray[i]);}",
      d: "for (i in myArray) {console.log(myArray[i]);}",
    },
    correct: "d",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  13: {
    question: "How do you write a JavaScript for-of loop?",
    answers: {
      a: "for (i of myArray) {console.log(i);}",
      b: "for i in myArray {console.log(i);}",
      c: "for i = 0 to myArray.length {console.log(myArray[i]);}",
      d: "for i = 0 to myArray {console.log(i);}",
    },
    correct: "a",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  14: {
    question: "How do you write a JavaScript ternary operator?",
    answers: {
      a: 'x == 5 ? console.log("x is 5") : console.log("x is not 5")',
      b: 'if x == 5 then console.log("x is 5") else console.log("x is not 5")',
      c: 'x == 5 {console.log("x is 5");} else {console.log("x is not 5");}',
      d: 'x == 5 {c,onsole.log("x is 5")} else {console.log("x is not 5")}',
    },
    correct: "a",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },

  15: {
    question: "How do you write a JavaScript arrow function?",
    answers: {
      a: "let myFunction = => {return x;}",
      b: "let myFunction = () => {return x;}",
      c: "myFunction = () => return x;",
      d: "myFunction() => {return x;}",
    },
    correct: "b",
    userChoice: "Unanswered",
    timeStart: "",
    timeStop: "",
  },
};
