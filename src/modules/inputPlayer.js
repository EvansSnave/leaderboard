import Scores from './addScore.js';

const submit = () => {
  const submitButton = document.querySelector('.form__button');
  submitButton.addEventListener('click', async () => {
    const inputName = document.querySelector('.form__name');
    const inputScore = document.querySelector('.form__score');
    if (inputName.value === '' && inputScore.value === '') return;
    const submitScore = new Scores();
    await submitScore.addParticipant(
      {
        user: inputName.value,
        score: inputScore.value,
      },
    );
    inputName.value = '';
    inputScore.value = '';
  });
};

export default submit;