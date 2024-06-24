const arr = [
    {
        name: "first",
        information: "firstInfo",
        level: 1
    },
    {
        name: "second",
        information: "secInfo",
        level: 1
    },
    {
        name: "third",
        information: "thirdInfo",
        level: 1
    },
    {
        name: "forth",
        information: "fourthInfo",
        level: 1
    }
]

const copy = arr.map(obj => ({...obj}));

const filtered = copy.filter ( (el) => {
    return el.name === "third"
})

filtered[0].level += 1;

console.log(filtered);
console.log(arr);
console.log(copy);