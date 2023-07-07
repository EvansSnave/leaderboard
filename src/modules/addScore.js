export default class Scores {
  constructor() {
    this.Id = localStorage.getItem('GameID');
  };
  async addParticipant(dataObject) {
    try {
      await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.Id}/scores/`,
      {
        method: 'POST',
        body: JSON.stringify({
          user: dataObject.user,
          score: dataObject.score
        }),
        headers: {'Content-Type': 'application/json'}
      }
      );
    }catch (error) {
      throw new Error(`Could not add participant: ${error}`);
    }
  };
  async getScores() {
    try {
      const allScores = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.Id}/scores/`);
      if (!allScores.ok) {
        throw new Error('Failed to fetch scores');
      }
      const allScoresJson = await allScores.json();
      return allScoresJson.result;
    }catch (error) {
      throw new Error(`Could not get data: ${error}`);
    }
  }
};