export const loadScores = (dataObject) => {
  return `<tr>
          <th>${dataObject.user}</th>
          <th>${dataObject.score}</th>
          </tr>`;
};