import BootstrapFormsPage from "../helpers/pages/bootstrapFormsPage";

fixture`TC-4 Interaction with checkbox form elements`
    .page`https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios`;

const bootstrapFormsPage = new BootstrapFormsPage();

test(`The default checkbox should be enabled
    And The disabled checkbox should be disabled
    And The default checkbox should be unchecked`, async t => {
    await t
        .expect(bootstrapFormsPage.defaultCheckbox.getAttribute("disabled")).eql(undefined)
        .expect(bootstrapFormsPage.disabledCheckbox.getAttribute("disabled")).eql('')
        .expect(bootstrapFormsPage.defaultCheckbox.checked).eql(false);
});

test(`When The default checkbox is clicked on
    Then The default checkbox should be checked`, async t => {
    await t
        .click(bootstrapFormsPage.defaultCheckbox)
        .expect(bootstrapFormsPage.defaultCheckbox.checked).eql(true);
});