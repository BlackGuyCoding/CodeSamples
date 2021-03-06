/* Challenge #91: Record Collection
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince", //RIP Prince!//
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if(value !== "" && (prop !== "tracks")){
    collection[id][prop] = value;
  }
  if(prop === "tracks" && value !== ""){
    collection[id].tracks.push(value);
  }
  if(value === ""){
    delete collection[id][prop];
  }
  return collection;
}

updateRecords(5439, "artist", "ABBA");
