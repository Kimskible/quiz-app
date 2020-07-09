const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript??',
    choice1: '<script>',
    choice2: '<javascript>',
    choice3: '<js>',
    choice4: '<scripting>',
    answer: 1,
  },
  {
    question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },
];


//CONSTANTS --> for game
const bonus = 10;
const maxQuestion = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestion = [...questions];    //Take the question array and spread its element in the new array
  getNewQuestion();
};

getNewQuestion = () =>{
  if(availableQuestion.length === 0 || questionCounter >= maxQuestion){
    //go to end of page
    return window.location.assign("/end.html")
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  currentQuestion = availableQuestion[questionIndex];
  question.innerText = currentQuestion.question;

    choices.forEach( choice => {
      const number = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + number];
    });

    //Take avaiable questions array and take out the question that we used
    availableQuestion.splice(questionIndex, 1);
    acceptAnswers = true;
};

choices.forEach(choice =>{
  choice.addEventListener('click', e => {
    if(!acceptAnswers) return;
    acceptAnswers = false;
    
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    console.log(selectedAnswer);
    getNewQuestion();
    });
});


startGame();
