import './style.css';
import boddyInner from './modules/bodyInner';

boddyInner();

// add input and enable submit button
const nameInput = document.getElementById('nameInput');
const scoreInput = document.getElementById('scoreInput');
const submitInput = document.getElementById('submitInput');

// loop added elements and add them in <pContainer> div
const store = (Leaderboard) => {
  const pContainer = document.getElementById('pContainer');
  pContainer.innerHTML = '';

  // <pContainer.innerHTML = '';> to not repeate the previous elements after submitting
  const wrapItems = () => {
    for (let i = 0; i < Leaderboard.length; i += 1) {
      const classOG = () => {
        if (i % 2 === 0) {
          return 'grey';
        }
        return 'whiteBG';
      };
      pContainer.innerHTML += `<p class="${classOG()}">${Leaderboard[i].user} : ${Leaderboard[i].score}</p>`;
    }
  };
  wrapItems();
};

async function postGames() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GEy6FALeMWnyj27AvWAG/scores/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),
  });
    // waits until the request completes...
}

async function fetchGames() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GEy6FALeMWnyj27AvWAG/scores/');
  const data = response.json().then((res) => {
    const dataServer = res.result;
    store(dataServer);
    console.log(dataServer);
  });
}

fetchGames();
// push input in array
submitInput.addEventListener('click', () => {
  postGames();
  scoreInput.value = '';
  nameInput.value = '';
});

const refreshAll = document.getElementById('refreshBtn');

refreshAll.addEventListener('click', () => {
  fetchGames();
});
