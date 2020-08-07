const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText")
const scoreText = document.getElementById("score")
const progressBarFull = document.getElementById("progressBarFull")
let currentQuestion = {};
let acceptAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions =[];

fetch("questions.json") //pulling from local form -returns a promise
.then(res ==>{
  return res.json
}).then( loadedQuestions =>{
  questions = loadedQuestions;
  startGame;
}).catch(err=>{
  console.error(err);
})


//CONSTANTS --> for game
const bonus = 10;
const maxQuestion = 3;

//Funtion responsible for the game to start, uses "getnewquestion" function 
//which displays questions 
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestion = [...questions];    //Take the question array and spread its element in the new array
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestion.length === 0 || questionCounter >= maxQuestion) {
    localStorage.setItem('mostRecentScore', score);
    //go to end of page
    return window.location.assign("/end.html")
  }
  questionCounter++;
  progressText.innerText = `Questions ${questionCounter}/${maxQuestion}`;
  // Update progress bar 
  progressBarFull.style.width = `${(questionCounter / maxQuestion) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  currentQuestion = availableQuestion[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });
  //Take avaiable questions array and take out the question that we used
  availableQuestion.splice(questionIndex, 1);
  acceptAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptAnswers) return;
    acceptAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];


    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply == "correct") {
      incrementScore(bonus);
    }

    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

//increment score
incrementScore = num => {
  score += num;
  scoreText.innerText = score;
}

