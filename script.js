let person = {
    name: "Nilay",
	age: 22,
	city: "pune"
};

// for(let key in person){
// 	console.log(key)
// }

function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys(person));