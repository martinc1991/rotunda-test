// Auxiliar function
const trimAndRemoveSlash = function (string) {
	let newString = string.trim();
	if (newString.startsWith('/')) {
		newString = newString.substring(1);
	}
	return newString;
};

// Main function
const urlParser = function (formatString, url) {
	// Checking if 'formatString' and 'url' are strings
	if (typeof formatString !== 'string') return 'Incorrect format string type of value';
	if (typeof url !== 'string') return 'Incorrect URL string type of value, you should only try to parse strings';

	let hash = {};
	let parameters;
	let values;
	let formatKeys;

	// Standarizing inputs
	trimmedFormatString = trimAndRemoveSlash(formatString);
	trimmedUrl = trimAndRemoveSlash(url);

	// Splitting the url into: the parameters (if there are any) and (key, value) pairs
	if (trimmedUrl.includes('?')) {
		parameters = trimmedUrl.split('?').pop().split('&');
		values = trimmedUrl.split('?').shift().split('/');
	} else {
		parameters = null;
		values = trimmedUrl.split('/');
	}
	formatKeys = trimmedFormatString.split('/');

	// For every element in the keys array, there is a element of the values array
	for (let i = 0; i < formatKeys.length; i++) {
		if (formatKeys[i].startsWith(':')) {
			hash[formatKeys[i].substring(1)] = !isNaN(Number(values[i])) ? Number(values[i]) : values[i]; // Parses strings to numbers (if possible)
		}
	}

	if (parameters) {
		// Every element of the parameters array is a (key, value) pair
		for (let i = 0; i < parameters.length; i++) {
			let key = parameters[i].split('=').shift();
			let value = parameters[i].split('=').pop();
			hash[key] = !isNaN(Number(value)) ? Number(value) : value; // Parses strings to numbers (if possible)
		}
	}

	return hash;
};

// Exports the functions for testing purposes
module.exports = {
	urlParser,
	trimAndRemoveSlash,
};
