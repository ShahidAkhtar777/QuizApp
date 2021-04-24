
var len = sessionStorage.length;
if(len>0)
  sessionStorage.clear();

let html_score = 0;
let css_score = 0;
let js_score = 0;
let node_score = 0;
let mongo_score = 0; 


let questions = [
  {
      id: 1,
      topic: "HTML",
      question: "  What does HTML stands for?",
      answer: "Hypertext Markup Language.",
      options: ['Hypertext Machine language.', 'Hypertext Machine language.', 'Hypertext Markup Language.', 'Hightext machine language.']
  },
  {
      id: 2,
      topic: "HTML",
      question: " The correct sequence of HTML tags for starting a webpage is -",
      answer: "HTML, Head, Title, Body",
      options: ['Head, Title, HTML, body', 'HTML, Body, Title, Head', 'HTML, Title,  Head, Body', 'HTML, Head, Title, Body']
  },
  {
      id: 3,
      topic: "HTML",
      question: "  The hr tag in HTML is used for -",
      answer: "horizontal ruler",
      options: ['new line', 'vertical ruler', 'new paragraph', 'horizontal ruler']
  },
  {
      id: 4,
      topic: "HTML",
      question: "Which of the following attribute is used to provide a unique name to an element?",
      answer: "id",
      options: ['class', 'id', 'type', 'none']
  },
  {
      id: 5,
      topic: "CSS",
      question: "  What does CSS stand for?",
      answer: "Cascading style sheets",
      options: ['Cascade style sheets', 'Color and style sheets', 'Cascading style sheets', ' None']
  },
  {
      id: 6,
      topic: "CSS",
      question: "  The property in CSS used to change the background color of an element is -",
      answer: "background-color",
      options: ['bgcolor', 'color', 'background-color', 'All of the above']
  },
  {
      id: 7,
      topic: "CSS",
      question: "  The CSS property used to control the element's font-size is -",
      answer: "font-size",
      options: ['text-style', 'text-size', 'font-size', 'None of the above']
  },
  {
      id: 8,
      topic: "CSS",
      question: "  Are the negative values allowed in padding property?",
      answer: "No",
      options: ['Yes', 'No', 'May be', 'Can not say']
  },
  {
      id: 9,
      topic: "javascript",
      question: "  Which type of language JavaScript is ___",
      answer: "Object-Based",
      options: ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level']
  },
  {
      id: 10,
      topic: "javascript",
      question: "  Which one of the following is not a keyword:",
      answer: "use strict",
      options: ['if', 'with', 'debugger', 'use strict']
  },
  {
      id: 11,
      topic: "javascript",
      question: " Which one of the following method or operator is used for identification of the array?",
      answer: "isarrayType()",
      options: ['Typeof', '==', '===' , 'isarrayType()']
  },
  {
      id: 12,
      topic: "javascript",
      question: " In JavaScript, what kind of scoping is used?",
      answer: "Lexical scoping",
      options: ['Lexical scoping', 'Literal scoping', 'Sequential scoping', 'Segmental scoping']
  },
  {
      id: 13,
      topic: "php",
      question: " The term PHP is an acronym for PHP:_______________",
      answer: "Hypertext Preprocessor",
      options: ['Hypertext Preprocessor', 'Hypertext multiprocessor', 'Hypertext markup Preprocessor', 'Hypertune Preprocessor']
  },
  {
      id: 14,
      topic: "php",
      question: " PHP is a ____________ language?",
      answer: "server-side scripting",
      options: ['user-side scripting', 'client-side scripting', 'server-side scripting', 'None']
  },
  {
      id: 15,
      topic: "php",
      question: " PHP files have a default file extension of_______",
      answer: "php",
      options: ['html', 'xml', 'php', 'hphp']
  },
  {
      id: 16,
      topic: "php",
      question: " In which year php was created?",
      answer: "1994",
      options: ['1993', '1994', '1996', '1999']
  },
  {
      id: 17,
      topic: "Node",
      question: " All APIs of Node.JS are",
      answer: "Asynchronous",
      options: ['Asynchronous', 'Synchronous', 'Both', 'None']
  },
  {
      id: 18,
      topic: "Node",
      question: " Which of the following is true about readable stream?",
      answer: "Both",
      options: ['Readable stream is used for read operation', 'Output of readable stream can be input to a writable stream', 'Both', 'None']
  },
  {
      id: 19,
      topic: "Node",
      question: " Which of the following command will show all the modules installed globally?",
      answer: "$ npm ls -g",
      options: ['$ npm ls -g', '$ npm ls', '$ node ls -g', '$ node ls']
  },
  {
      id: 20,
      topic: "Node",
      question: " Which of the following code can make a request to a web server? ",
      answer: "http.request(options, callback)",
      options: ['http.request(options, callback)', 'http.createRequest(options, callback)', 'http.makeRequest(options, callback)', 'None']
  },
];

let question_count = 0;
let count = 0;

window.onload = function() {
  show(question_count);

};

function next() {   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  // console.log(question_count);


  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) 
  {
    let type = questions[question_count].topic;
    if(type==="HTML")
      html_score += 10;
    else if(type==="CSS")
      css_score += 10;
    else if(type==="JS")
      js_score += 10;
    else if(type==="NODE")
      node_score += 10;
    else if(type==="MONGO")
      mongo_score += 10;
   
    sessionStorage.setItem("html_score", html_score);
    sessionStorage.setItem("css_score", css_score);
    sessionStorage.setItem("js_score", js_score);
    sessionStorage.setItem("node_score",node_score);
    sessionStorage.setItem("mongo_score",mongo_score);
  }

  question_count++;

  show(question_count);
 
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
