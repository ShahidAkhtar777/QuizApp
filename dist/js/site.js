
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
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    topic: "HTML",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    topic: "HTML",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "HTML",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "HTML",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "CSS",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },{
    id: 6,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    topic: "CSS",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    topic: "CSS",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 8,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "CSS",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 9,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "JS",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "JS",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },{
    id: 11,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    topic: "JS",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 12,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    topic: "JS",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 13,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "NODE",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 14,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "NODE",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 15,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "NODE",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },{
    id: 16,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    topic: "NODE",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 17,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    topic: "MONGO",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 18,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "MONGO",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 19,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "MONGO",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 20,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    topic: "MONGO",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
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
