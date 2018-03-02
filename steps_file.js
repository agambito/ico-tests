
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  	verifyLink: function(linkName, linkConfirm) {
  		// this.see(linkName);
  		this.click(linkName);
  		this.switchToNextTab();
  		this.waitInUrl(linkConfirm);
  		this.seeCurrentUrlEquals(linkConfirm);
  		this.closeCurrentTab();
	},
	
	verifyLinkNotTabbed: function(linkName, linkConfirm) {
		this.click(linkName);
		this.waitInUrl(linkConfirm);
		this.seeCurrentUrlEquals(linkConfirm);
	},
	
	verifyWord: function(wordsName, linkConfirm) {
		this.see(wordsName)
		this.click(wordsName);
		this.switchToNextTab();
		this.waitInUrl(linkConfirm);
		this.seeCurrentUrlEquals(linkConfirm);
		this.closeCurrentTab();
	
	}
  });
}
