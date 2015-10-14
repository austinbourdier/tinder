describe('App', function() {
	it('should be title Tinder', function() {
		browser.ignoreSynchronization = true;
		browser.get('http://localhost:3000');
		expect(browser.getTitle()).toEqual('Tinder');
	});
	it('matches list should not initially show, then should show after the matches messaging icon is clicked', function() {
		browser.ignoreSynchronization = true;
		expect(element(by.id('match-list')).isDisplayed()).toBeFalsy();
		element(by.id('tinder-messages-link')).click();
		expect(element(by.id('match-list')).isDisplayed()).toBeTruthy();
		element(by.id('tinder-messages-link')).click();
	});
});