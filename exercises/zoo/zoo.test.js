const Animal = require('./zoo');

// Animal definitions
var lion = new Animal('lion', 'grr');
var tiger = new Animal('tiger', 'roarr');
var snail = new Animal('snail', '');

// Tests
describe('Animal is a class', function () {
	it('a particular animal should be an implementation of Animal class', () => {
		expect(lion).toBeInstanceOf(Animal);
	});
	it('it should be possible to create many animals from Animals', () => {
		expect(lion).toBeInstanceOf(Animal);
		expect(tiger).toBeInstanceOf(Animal);
		expect(snail).toBeInstanceOf(Animal);
	});
});

describe('Every animal', function () {
	it('has a name property', () => {
		expect(lion).toHaveProperty('name');
		expect(tiger).toHaveProperty('name');
		expect(snail).toHaveProperty('name');
	});
	it('is named after the name provided in the Animal call', () => {
		expect(lion.name).toBe('lion');
		expect(tiger.name).toBe('tiger');
		expect(snail.name).toBe('snail');
	});
	it('has a speak method', () => {
		expect(lion).toHaveProperty('speak');
		expect(tiger).toHaveProperty('speak');
		expect(snail).toHaveProperty('speak');
	});
	it('speaks accordingly to the particular animal sound provided in the Animal call', () => {
		expect(lion.speak('Hello my friend')).toBe('Hello grr my grr friend grr');
		expect(tiger.speak('Hello my friend')).toBe('Hello roarr my roarr friend roarr');
		expect(snail.speak('Hello my friend')).toBe('Hello my friend');
	});
});
