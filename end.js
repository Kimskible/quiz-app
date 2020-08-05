const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('saveScoreBtn')
const finalScore = document.getElementById('finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

// updating final score to html
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
    // if nothing inside the usrname field, set button to disable but if there is then enable the button 
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = (e) => {
    e.preventDefault();
};




// const username = document.getElementById('username');
// const saveScoreBtn = document.getElementById('saveScoreBtn');
// const finalScore = document.getElementById('finalScore');
// const mostRecentScore = localStorage.getItem('mostRecentScore');
// finalScore.innerText = mostRecentScore;

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value;
// });

// saveHighScore = (e) => {
//     e.preventDefault();
// };

