const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScore = JSON.parse(localStorage.getItem('highScore')) || [];
const maxHighScore = 5
// setting score to html
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
};

const score ={
    score: Math.floor( Math.random()*100),
    name: username
};

highScore.push(score);
//sorting array for highscore with more than 5 scores
highScore.sort((a,b) =>b.score - a.score;);
highScore.splice(5);
//updating highscore
localStorage.setItem('hishScore', JSON.stringify(highScore));
//go back to home window
window.location.assign('/');