let question1 = confirm("Hi there, are you ready for this?");

if (question1 == true) {
  alert("Great! Let's dive into it!");
} else {
  alert("I'm still gonna carry on, sorry.");
}

let colour = prompt("What is your favourite colour?");

switch (colour.toLowerCase()) {
  case "purple":
    alert("Your favourite colour was purple. Gross.");
    break;
  case "grey":
    alert("Nice. Good choice.");
    break;
  default:
    alert(
      "Pretty sure that colour doesn't exist. Have you thought about grey or purple?"
    );
}
let question2 = confirm("Do you like football?");
if (question2 == true) {
  alert("Yes, let's go !");
} else {
  alert("Really?!");
}
let question3 = confirm("Do you like  Liverpool?");
if (question3 == true) {
  alert("Y.N.W.A.");
} else {
  alert("Well, give it a chance at least.");
}
let question4 = confirm("Have you ever been in Liverpool?");
if (question4 == true) {
  alert("Friendly place isn't it?");
} else {
  alert("Make plans to visit it, at least once!");
}
