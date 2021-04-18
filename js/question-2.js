const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=4b791d2274ab41618b37d219015f3eee";

const gameContainer = document.querySelector(".gameContainer");

async function games() {
  try {
    gameContainer.innerHTML = "";

    const response = await fetch(url);
    const results = await response.json();
    const data = results.results;

    for (let i = 0; i < data.length; i++) {
      if (i === 8) break;

      const game = data[i];

      /*console.log(`${i} ${game.name}
          Rating: ${game.rating}
          Nr. of tags: ${game.tags.length}`);*/

      gameContainer.innerHTML +=
        `<div class="game">
          <h2>${game.name}</h2>
          <p>Rating: ${game.rating}</p>
          <p>Nr. of tags: ${game.tags.length}</p>
        </div>`;
    }
  } catch (error) {
    console.log("Error occured", error);
    gameContainer.innerHTML = displayError();
  }
}

games();