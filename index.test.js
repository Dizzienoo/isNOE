const isNOE = require (`./index`);

describe(`Tests for isNOE returning true`, () => {
	test(`Check that undefined object returns true`, async () => {
		expect(isNOE(undefined)).toBe(true);
	});

	test(`Check that null object returns true`, async () => {
		expect(isNOE(null)).toBe(true);
	});

	test(`Check that empty object returns true`, async () => {
		expect(isNOE({})).toBe(true);
	});

	test(`Check that empty string returns true`, async () => {
		expect(isNOE(``)).toBe(true);
	});

	test(`Check that string of undefined returns true`, async () => {
		expect(isNOE(`undefined`)).toBe(true);
	});

	test(`Check that empty array returns true`, async () => {
		expect(isNOE([])).toBe(true);
	});
});

describe(`Tests for isNOE returning false`, async () => {
	test(`Check that populated array returns false`, async () => {
		expect(isNOE([`value`])).toBe(false);
	});

	test(`Check that object with contents returns false`, async () => {
		expect(isNOE({hello: true})).toBe(false);
	});

	test(`Check that string returns false`, async () => {
		expect(isNOE(`hello`)).toBe(false);
	});
	
	test(`Check that zero returns false`, async () => {
		expect(isNOE(0)).toBe(false);
	});

	test(`Check that one returns false`, async () => {
		expect(isNOE(1)).toBe(false);
	});
});