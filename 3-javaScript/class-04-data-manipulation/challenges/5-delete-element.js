const animes = 
["Boku no Hero",
 "Deth Note", 
 "Tokyo Ghoul", 
 "Yu Yu Hakusho", 
 "Hunter x Hunter"]

function deleteArrayElement(name, array) {
    const index =array.indexOf(name);
    array.splice(index, 1)
    return array;
}

 console.log(deleteArrayElement("Deth Note", animes));