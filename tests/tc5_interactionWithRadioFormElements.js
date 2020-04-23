import BootstrapFormsPage from "../helpers/pages/bootstrapFormsPage";

fixture`TC-5 Interaction with radio form elements`
    .page`https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios`;

const bootstrapFormsPage = new BootstrapFormsPage();

test(`Then The default radio should be enabled`, async t => {
    await t
        .expect(bootstrapFormsPage.defaultRadioButton.getAttribute("disabled")).eql(undefined);
});

test(`And The disabled radio should be disabled`, async t => {
    await t
        .expect(bootstrapFormsPage.disabledRadioButton.getAttribute("disabled")).eql('');
});

test(`And The default radio should be selected`, async t => {
    await t
        .expect(bootstrapFormsPage.defaultRadioButton.checked).eql(true);
});

test(`And the second default radio should not be selected`, async t => {
    await t
        .expect(bootstrapFormsPage.secondDefaultRadioButton.checked).eql(false);
});

test(`When The second default radio is clicked on
    Then The default radio should be not selected
    And The second default radio should be selected`, async t => {
    await t
        .click(bootstrapFormsPage.secondDefaultRadioButton)
        .expect(bootstrapFormsPage.defaultRadioButton.checked).eql(false)
        .expect(bootstrapFormsPage.secondDefaultRadioButton.checked).eql(true);
});