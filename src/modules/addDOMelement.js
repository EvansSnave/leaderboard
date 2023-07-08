import loadScores from './createHTML.js';
/* eslint-disable arrow-parens */

const rowDOM = (table, arrayObjects) => {
  arrayObjects.forEach(object => {
    table.innerHTML += loadScores(object);
  });
};

export default rowDOM;