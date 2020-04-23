import { Selector } from 'testcafe';
import AngularHomePage from '../helpers/pages/angularHomePage';

fixture`TC2 - Checking Search field on Landing page`
    .page`https://angular.io`;

const homePage = new AngularHomePage();

test('Search input in the top navbar should be visible', async t => {
    await t
        .expect(homePage.searchInput.exists).ok();
});

test('And it should be empty', async t => {
    await t
        .expect(homePage.searchInput.value).eql('');
});

test('And it should be "Search" as placeholder', async t => {
    await t
        .expect(homePage.searchInput.getAttribute('placeholder')).eql('Search');
});

test(`When it is clicked in 
    And "directive" is typed in it 
    Then "Directive" should be listed in the "API" section`, async t => {
    await t
        .click(homePage.searchInput)
        .typeText(homePage.searchInput, 'directive')
        .expect(homePage.apiSection.exists).ok();
});

test(`When "Directive" is clicked in the "API" section 
    Then the URL should be https://angular.io/api/core/Directive 
    And the title on the content should be "Directive"`, async t => {
    await t
        .typeText(homePage.searchInput, 'directive')
        .click(homePage.apiSection);

    const getCurrentURL = await t.eval(() => window.location);

    await t
        .expect(await getCurrentURL.href).eql('https://angular.io/api/core/Directive', {timeout: 3000})
        .expect(Selector('h1#directive').innerText).eql('Directive');
});