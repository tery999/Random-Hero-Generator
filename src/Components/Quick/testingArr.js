const objtest = {
    Акробатика: {
        name: "Акробатика",
        information: "hi",
        points: 0
    },
    Бивакуване: {
        name: "Бивакуване",
        information: "hi2",
        points: 0
    },
    Езда: {
        name: "Езда",
        information: "hi3",
        points: 0
    }
}

const copy = structuredClone(objtest);
copy.Акробатика.information = "hehehe";

console.log(objtest);
console.log(copy);
