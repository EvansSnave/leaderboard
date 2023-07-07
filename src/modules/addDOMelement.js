import { loadScores } from './createHTML.js';

export const rowDOM = (table, arrayObjects) => {
  arrayObjects.forEach( object => {
    table.innerHTML += loadScores(object);
  });
};