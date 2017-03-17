const obj1 = {
    1: 'I', 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX" 
}

const obj2 = {
    10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC'
};


function convert(number,cb){
	number = number.toString()
	var roman;
	if(number.length == 2){
		var dozen = parseInt(number[0]+"0");
		var unit = parseInt(number[1]);
		roman = obj2[dozen];
		if(unit != 0)
			roman += obj1[unit]
	}
	else{
		roman = obj1[parseInt(number[0])]
	}
	cb(roman);
}

module.exports = convert;