let person = {
    name: "Nilay"
};

// for(let key in person){
// 	console.log(key)
// }

function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys(person));