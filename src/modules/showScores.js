import Scores from './addScore.js';
import rowDOM from './addDOMelement.js';

const refresh = () => {
  const buttonRefresh = document.querySelector('.table-container__button');
  buttonRefresh.addEventListener('click', async () => {
    const table = document.querySelector('.table-container__body');
    // Resets inner HTML so that data won't be repeated

    table.innerHTML = '';
    const data = new Scores();
    // Got array of data from API: scores and names.
    const scoresAPI = await data.getScores();
    rowDOM(table, scoresAPI);
  });
};

export default refresh;
