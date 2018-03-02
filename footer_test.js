
Feature('Footer');

Scenario('C3761 User should be redirected to all links in the footer', (I) => {
	// User starts on the home page
	I.amOnPage('/');
	// User clicks into each footer link and verifies that the new tab opened is correct
	
	I.verifyLink('#footer_location_sui', 'https://www.google.ca/maps/place/Baarerstrasse+78,+6300+Zug,+Switzerland/@47.1503544,8.5600228,13z/data=!4m5!3m4!1s0x479aaa5a228e6f4f:0x8c1b21c0abb4af0!8m2!3d47.1769615!4d8.5181374?shorturl=1');
	I.verifyLink('#footer_location_toronto', 'https://www.google.ca/maps/place/183+Bathurst+St+#400,+Toronto,+ON+M5T+2R7/@43.647674,-79.4060915,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34e769f74b4f:0x43c58bb713ae6313!8m2!3d43.647674!4d-79.4038975?shorturl=1');
	I.verifyLink('#footer_location_mtl', 'https://www.google.ca/maps/place/204+Rue+Notre-Dame+Ouest,+Montréal,+QC+H2Y+1T3/@45.5036141,-73.5595132,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a59fadbe3dd:0xf54bc4e16ec9ec3b!8m2!3d45.5036104!4d-73.5573245?shorturl=1');
	I.verifyLink('#footer_dubtoken', 'https://dubtokens.com/');
	I.verifyLink('#footer_ivep', 'https://ivep.io/');
	I.verifyLink('#footer_terms_of_use', 'https://dubtokens.com/terms-of-use/');
	I.verifyLink('#footer_news', 'https://dubtokens.com/latest-news/');
	I.verifyLink('#footer_contact', 'https://dubtokens.com/contact/');
	I.verifyLink('#footer_privacy', 'https://dubtokens.com/privacy-policy/');
	I.verifyLink('#footer_social_facebook', 'https://www.facebook.com/dubtokens');
	I.verifyLink('#footer_social_instagram', 'https://www.instagram.com/dubtokens/');
	I.verifyLink('#footer_social_twitter', 'https://twitter.com/dubtokens/');
	I.verifyLink('#footer_social_telegram', 'https://t.me/joinchat/Gqx2HEtDDmMDAWWqFwnaLQ/');
	I.verifyLink('#footer_social_reddit', 	'https://www.reddit.com/r/dubtokens/');
	I.verifyLink('#footer_social_medium', 'https://medium.com/dubtokens');
	I.verifyLink('#footer_copyright', 'https://ivep.io/')
	I.verifyLinkNotTabbed('#footer_signup', 'https://ico-staging.dubtokens.com/signup');
	I.verifyLinkNotTabbed('#footer_login','https://ico-staging.dubtokens.com/login')


});

