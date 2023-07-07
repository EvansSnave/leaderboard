export const generateID = async () => {
  try {
    const fetching = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'ScorePoint'
      })
    }
    );
    if (fetching.ok !== true) throw new Error('Cannot create new game');
    const response = await fetching.json();
    const identification = response.result.split(': ')[1].replace('added.', '');
    localStorage.setItem('GameID', identification);
  } catch (error){
    throw new Error(`Cannot create a new game ${error}`);
  }
};