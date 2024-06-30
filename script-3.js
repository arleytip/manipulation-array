let listState = ["Brazil", "China", "Japan", "Russia", "USA"];
listState.push("África");
console.log(listState);

listState.pop();
console.log(listState);

listState.unshift("New Zeland");
console.log(listState);

listState.shift();
console.log(listState);

let lastState = listState[listState.length - 1];
console.log(lastState);

console.log(listState[1]);

console.log(listState[2]);
