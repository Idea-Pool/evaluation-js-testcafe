import { Selector } from 'testcafe';

fixture`TC-6 Checking button form elements`
    .page`https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state`
    .meta('page', 'bootstrap');

test(`Then there should be a button with text "Primary button"`, async t => {
    await t
        .expect(Selector("button")
            .withAttribute("type", "button")
            .withText("Primary button")
            .exists).ok();
});

test(`And The primary button should be disabled`, async t => {
    await t
        .expect(Selector("button")
            .withAttribute("type", "button")
            .withText("Primary button")
            .getAttribute("disabled"))
        .eql('');
});

test(`When the page is scrolled down 1 page
    Then The active primary link button should not be disabled`, async t => {
    await t
        .hover(Selector("a").withText("Primary link"))
        .expect(Selector("a")
            .withAttribute("role", "button")
            .withText("Primary link")
            .getAttribute("disabled"))
        .eql(undefined);
});