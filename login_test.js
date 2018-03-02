
Feature('login');
/*
Scenario('C3861 User should be able to navigate Forgot Password screen', (I) => {
	I.amOnPage('/login');
	I.verifyLinkNotTabbed('FORGOT PASSWORD', 'https://ico-staging.dubtokens.com/forgot_password');
	}
	*/

Scenario('C3860 User can access the login page and login', (I) => {
	I.amOnPage('/login');
	I.fillField('identifier', 'agambito+johndoes1@dubdub.com');
	I.fillField('password', 'dubdub00');
	I.click('LOG IN');
	I.seeCurrentUrlEquals('https://ico-dev.dubtokens.com/dashboard');
	
	
	
});
