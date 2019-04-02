


function dwarfRollCall(dwarves) {
	var newStr = [];
	dwarves.forEach(function(name, i) {
		newStr.push(i+1 +". " + name);
	});
	return newStr.join(" ");
}

dwarfRollCall(["Dopey","Grumpy","Bashful","Doc"]);

function summonCaptainPlanet(array) {
	return array.map(function(ele) {
		return ele.toUpperCase() + "!";
	});
}

summonCaptainPlanet(["earth", "wind", "fire", "water", "heart"]);


function longPlaneteerCalls(words) {
	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
	}   
	return false;
}
longPlaneteerCalls(["wind", "fire"]);





function findTheCheese (foods) {
    var cheese = ["camembert", "cheddar", "gouda"];
    for(var i = 0; i < foods.length; i++) {
        for(var j = i; j < cheese.length; j++){
           if(foods[i] === cheese[j]) {
                return cheese[j];
            }
        }
    }
    return "no cheese!";
}

findTheCheese(["banana", "cheddar", "sock", "gouda"]);

