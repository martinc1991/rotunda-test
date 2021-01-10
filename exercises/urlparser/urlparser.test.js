const { urlParser, trimAndRemoveSlash } = require('./urlparser');

// Tests
describe('Verifies that the URL string is actually a string', function () {
	it('should return an error message for an FORMAT STRING input different from a string', () => {
		let notStringMessage = 'Incorrect format string type of value';

		expect(urlParser(6, '/6/api/listings/3?sort=desc&limit=10')).toBe(notStringMessage);
		expect(urlParser({ number: 6 }, '/6/api/listings/3?sort=desc&limit=10')).toBe(notStringMessage);
		expect(urlParser([6], '/6/api/listings/3?sort=desc&limit=10')).toBe(notStringMessage);
	});

	it('should return an error message for an URL input different from a string', () => {
		let notStringMessage = 'Incorrect URL string type of value, you should only try to parse strings';

		expect(urlParser('/:version/api/:collection/:id', 6)).toBe(notStringMessage);
		expect(urlParser('/:version/api/:collection/:id', { number: 6 })).toBe(notStringMessage);
		expect(urlParser('/:version/api/:collection/:id', [6])).toBe(notStringMessage);
	});
});

describe('Parses URL strings correctly', function () {
	it('should return an object with the parsed parameters', () => {
		let testParsedUrl_1 = { version: 6, collection: 'listings', id: 3, sort: 'desc', limit: 10 };
		let testParsedUrl_2 = { version: 2, collection: 'songs', id: 1, sort: 'asc', limit: 5 };

		expect(urlParser('/:version/api/:collection/:id', '/6/api/listings/3?sort=desc&limit=10')).toEqual(testParsedUrl_1);
		expect(urlParser('/:version/api/:collection/:id', '/2/api/songs/1?sort=asc&limit=5')).toEqual(testParsedUrl_2);
	});

	it('should correctly parse an URL string without parameters', () => {
		let testParsedUrlWithoutParameters_1 = { version: 6, collection: 'listings', id: 3 };
		let testParsedUrlWithoutParameters_2 = { version: 2, collection: 'songs', id: 1 };

		expect(urlParser('/:version/api/:collection/:id', '/6/api/listings/3')).toEqual(testParsedUrlWithoutParameters_1);
		expect(urlParser('/:version/api/:collection/:id', '/2/api/songs/1')).toEqual(testParsedUrlWithoutParameters_2);
	});

	it('should manage different format strings', () => {
		let testParsedDifferentFormatString_1 = { genre: 'drama', subgenre: 'love', id: 5, sort: 'asc', limit: 20, itemsperpage: 5, pricelimit: 150, state: 'new' };
		let testParsedDifferentFormatString_2 = { type: 'pickup', brand: 'ford', color: 'blue', year: 2005 };

		expect(urlParser('/books/:genre/sortbytitle/:subgenre/:id', '/books/drama/sortbytitle/love/5?sort=asc&limit=20&itemsperpage=5&pricelimit=150&state=new')).toEqual(testParsedDifferentFormatString_1);
		expect(urlParser('/cars/:type/:brand', '/cars/pickup/ford?color=blue&year=2005')).toEqual(testParsedDifferentFormatString_2);
	});
});
