beforeEach(() => {
	// go the port3001
	cy.visit("http://localhost:3001/");
});

describe("Fetches the correct url", () => {
	it("passes", () => {
		cy.visit("http://localhost:3001/");
	});
});

//appearance
//rub-a-dub is h1
//search mentors is heading

describe("Page is rendered as intended", () => {
	it('has an h1 reading "rub-a-dub"', () => {
		cy.contains("rub-a-dub");
	});
	it('has a paragraph reading "search mentors"', () => {
		cy.get("p").contains("search mentors");
	});
});

// //user can scroll

describe("User can scroll down page", () => {
	it("Scrolls to the bottom of the page", () => {
		cy.scrollTo("bottom");
	});
});

//user can use search bar
//select looking for search
//click, type, new result is shown
//user can clear (backspace) search

describe("User can use search bar", () => {
	it('Selects the search bar by input field with "search" text value', () => {
		cy.get('[data-cy="searchBar"]')
			.invoke("attr", "placeholder")
			.should("contain", "search");
	});
	it('Clicks into search input, types "sophie", userCard for "sophie" is shown', () => {
		cy.get('[data-cy="searchBar"]')
			.click()
			.type("sophie")
			.get('[data-cy="userCard"]')
			.should("contain", "sophie");
	});
});

//user can use advanced filter
//can find advanced filters
//can click on dropdown, select option and results will display relevant users
//can click dropdown, type option and hit enter key > results will display relevant users

describe("User can use the advanced filter search engine", () => {
	it("Searches for html in the programming languages dropdown", () => {
		cy.get("input").eq(1).wait(500).type("css{enter}");
		//.get("button")
		// .get(".user-tag");
	});

	it("Searches for uk in locations dropdown", () => {
		cy.get("input").eq(3).wait(500).type("uk{enter}").reload();
	});

	it("Searches for english in the spoken languages dropdown", () => {
		cy.get("input").eq(5).wait(500).type("english{enter}").reload();
	});
});

//3 filters
//clear a filter and get updated results
describe("User can use the advanced filter search engine and search for 3 filters simultaneously", () => {
	it("Searches for css in the programming languages dropdown", () => {
		cy.get("input").eq(1).wait(500).type("css{enter}");
		cy.get("input").eq(3).wait(500).type("uk{enter}");
		cy.get("input").eq(5).wait(500).type("klingon{enter}");
	});
});

//results > user card layout check
//card has: image, name, tag buttons, flag, bio
