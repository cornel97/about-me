"use strict";
let question1 = confirm("Hi there, are you ready for this?");

if (question1 == true) {
  alert("Great! Let's dive into it!");
  //console.log("Great! Let's dive into it!");
} else {
  alert("I'm still gonna carry on, sorry.");
  //console.log ("I'm still gonna carry on, sorry.");
}

let person = prompt("What is your name?");

if (person != null) {
  alert("Hello there, " + person + " !");
}

let colour = prompt("What's your favourite colour?");

while (colour != "purple" && colour != "grey") {
  colour = prompt(
    "Pretty sure that colour doesn't exist. Have you thought about purple of grey?"
  );
}
switch (colour.toLowerCase()) {
  case "purple":
    alert("Your favourite colour was purple. Gross.");
    //console.log("Your favourite colour was purple. Gross.");
    break;
  case "grey":
    alert("Nice. Good choice.");
    //console.log("Nice. Good choice.");
    break;
}

let question2 = confirm("Do you like football?");
if (question2 == true) {
  alert("Yes, let's go !");
  //console.log("Yes, let's go !");
} else {
  alert("Really?!");
  //console.log("Really?!");
}
let question3 = confirm("Do you like  Liverpool?");
if (question3 == true) {
  alert("Y.N.W.A.");
  //console.log("Y.N.W.A.");
} else {
  alert("Well, give it a chance at least.");
  //console.log("Well, give it a chance at least.");
}
let question4 = confirm("Have you ever been in Liverpool?");
if (question4 == true) {
  alert("Friendly place isn't it?");
  //console.log("Friendly place isn't it?");
} else {
  alert("Make plans to visit it, at least once!");
  //console.log("Make plans to visit it, at least once!");
}
