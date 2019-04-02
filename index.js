
function dwarfRollCall(dwarves) {
	var newStr = [];
	dwarves.forEach(function(name, i) {
		newStr.push(i+1 +". " + name);
	});
	return newStr.join(" ");
}

dwarfRollCall(["Doc", "Dopey", "Bashful", "Grumpy"]);