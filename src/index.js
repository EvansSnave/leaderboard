import './style.css';
import { generateID } from './modules/gameID.js';
import { refresh } from './modules/showScores.js'
import { submit } from './modules/inputPlayer.js';

//Making sure the ID does not change once we have it.
if (window.localStorage.length == 0) {
  await generateID();
};

//Prevent reload when submitting scores.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('click', (e) => {
    e.preventDefault();
  });
  refresh();
  submit();
});
