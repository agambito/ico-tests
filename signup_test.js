
Feature('Signup');

Scenario('C3858 User should be able to read the terms of use contract', (I) => {
	// User starts on the home page
	I.amOnPage('/');
	// User clicks into each footer link and verifies that the new tab opened is correct
	I.verifyWord('TERMS OF USE', 'https://dubtokens.com/terms-of-use/');
});
