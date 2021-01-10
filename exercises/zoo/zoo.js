class Animal {
	constructor(name, animalSound = '') {
		this.name = name;
		this.animalSound = animalSound;
	}
	speak = function (speech) {
		let animalSpeech = '';
		let words = speech.split(' ');
		words.map((word, i, arr) => {
			// This if statement checks if the animal actually makes a sound or not
			if (this.animalSound !== '') {
				// This if statement checks wether the current element of the array is the last one or not
				if (arr[i + 1]) {
					animalSpeech += word + ' ' + this.animalSound + ' ';
				} else {
					animalSpeech += word + ' ' + this.animalSound;
				}
			} else {
				animalSpeech = speech;
			}
		});
		return animalSpeech;
	};
}

// Exports the class for testing purposes
module.exports = Animal;
