const fs = require("fs");

data = fs.readFileSync('problem1.json', { encoding: "utf-8" })

const obj = JSON.parse(data) // ----1----//
console.log("Read File", obj)

obj.height = 2,  // ---2---//
    obj.weight = 4,
    console.log("Fluffy Wieght", obj.weight, "Fluffy Hieght", obj.height,)

obj.name = "Fluffyy"  // ---3---//

fluffyyFriends = obj.catFriends; // ---4---//
const listOfActivities = fluffyyFriends.map(activity => activity.activities);
const allfriendsActivities = listOfActivities.flat()
console.log("activities of Fluffyys catFriends", allfriendsActivities)

const listOffluffyfriendds = fluffyyFriends.map(activity => activity.name);// ---5---//
console.log("catFriends names", listOffluffyfriendds.flat())

const weightOfFriends = fluffyyFriends.map(activity => activity.weight);// ---6---//
weightSum = weightOfFriends.reduce((partialSum, a) => partialSum + a, 0);
console.log("weight of catFriends", weightSum)

const fluffyyNumberActivities = obj.activities.length;// ---7---//
const fluffyyFriendsActivities = allfriendsActivities.length;
sumOfAllActivities = Number(fluffyyNumberActivities) + Number(fluffyyFriendsActivities)
console.log("total activities", sumOfAllActivities)

const newActivities = listOfActivities.map((list, index) => 
([...list, index === 0 ? ["Play", "Jump",] : ["Run", "drink milk",]]).flat())
console.log('New activities',newActivities ) // ---8---//

let barColorChange=fluffyyFriends[0].furcolor;// ---9---//
      barColorChange="Red";
console.log("Update color of bar", barColorChange)