const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function games() {
  const response = await fetch(url);
  const results = await response.json();
  // console.log(results); 
  const data = results.results;

  for (let i = 0; i < data.length; i++) {
    if (i <= 7) {
      //console.log(data[i]);
      const game = data[i];
      console.log(`Name: ${game.name}`);
      console.log(`Rating: ${game.rating}`);
      console.log(`Nr. of tags: ${game.tags.length}`);
    }
  }
}

games();