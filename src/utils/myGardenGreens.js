import { AsyncStorage } from "react-native";

/* myGreen = [
  {
    id: new Date(),
    greenName: string,
    name: string,
    isForSeeding: boolean, //is for seeding
    isForPlanting: boolean, //is for planting
    date: Date,
    quantity: number,
    picture: string
  }
];*/

function saveMyGardenGreens(myGarden) {
  AsyncStorage.setItem("MyGarden", JSON.stringify(myGarden));
}

async function addMyGardenGreen(myGreen) {
  const oldGarden = await getMyGardenGreens();
  let myGarden = [];
  if (oldGarden) myGarden = oldGarden;
  myGarden.push(...myGreen);
  AsyncStorage.setItem("MyGarden", JSON.stringify(myGarden));
}

function mergeMyGardenGreen(myGarden) {
  AsyncStorage.mergeItem("MyGarden", JSON.stringify(myGarden));
}

function deleteMyGarden(myGarden) {
  AsyncStorage.removeItem("MyGarden");
}

async function getMyGardenGreens() {
  let myGarden = await AsyncStorage.getItem("MyGarden");
  return JSON.parse(myGarden);
}

export default {
  saveMyGardenGreens,
  addMyGardenGreen,
  mergeMyGardenGreen,
  getMyGardenGreens,
  deleteMyGarden
};
