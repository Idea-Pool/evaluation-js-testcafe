import AngularHomePage from '../helpers/pages/angularHomePage';
import AngularStartPage from '../helpers/pages/angularStartPage';

fixture`TC1 - Checking landing pages elements`
    .page`https://angular.io`;

const homePage = new AngularHomePage();
const startPage = new AngularStartPage();

test('Angular logo in the top navbar should be visible', async t => {
    await t
        .expect(homePage.angularLogoNavbar.exists).ok();
});

test('Angular logo in the hero section should be visible', async t => {
    await t
        .expect(homePage.angularLogoHeroSection.exists).ok();
});

test('Text in hero section should be "One framework. Mobile & desktop."', async t => {
    await t
        .expect(homePage.textInHeroSection.innerText).eql('One framework.\nMobile & desktop.');
});

test('Get started button should be visible in the hero section', async t => {
    await t
        .expect(homePage.getStartedButton.exists).ok();
});

test(`When Get started button is clicked, 
    Then the url changes to /start 
    And title should be "Getting Started with Angular: Your First App"`, async t => {
    await t
        .click(homePage.getStartedButton);

    const getCurrentURL = await t.eval(() => window.location);

    await t
        .expect(await getCurrentURL.href).eql('https://angular.io/start', {timeout: 3000})
        .expect(startPage.title.innerText).eql('Getting Started with Angular: Your First App');
});