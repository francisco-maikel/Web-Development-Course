const gameName = prompt ("Digite o nome:")
const gameGenre = prompt ("Digite o genero:")
const gameReleaserYear = prompt("Digite o ano")

const game = {
    name: gameName,
    genre: gameGenre,
    ReleaserYear: gameReleaserYear,
}

console.log(game.name); 
console.log(game.genre);
console.log(game.ReleaserYear);