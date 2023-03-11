const _ = require("lodash");

/**
	* @description Verifies if an array is a subarray of another (IT SEE IF THE ORDER IS RIGHT);
	* @param {Array} parent array to be the searched; 
	* @param {Array} a subarray that matches;
*/
const isSub = (array, subarray) => {
	let auxIndex = 0;
	let controller = [...subarray].fill(false);
	for (let i = 0; i < array.length; i++) {
		if (array[i] === subarray[0]) { auxIndex = i }
		let subArrayIndex = i - auxIndex;
		if (subArrayIndex < subarray.length) {
			if (_.isEqual(subarray[subArrayIndex], array[i])) { controller[subArrayIndex] = true }
			if (subArrayIndex === subarray.length - 1) 	  { return !(controller.includes(false)) }
		}
	}
	return false;
}

module.exports = isSub;
