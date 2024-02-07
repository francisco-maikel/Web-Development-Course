const API =
"https://api.github.com/users/EmanuelQuintino"

console.log("Antes");

const userGitHub = fetch(API)
 .then((res) => res.json())
 .then((data) => console.log(data));
  cath ((error)=>console.log(error))
 .finally (() => console.log("Fim da requisão!!!"))

console.log("Depois");