import BootstrapFormsPage from "../helpers/pages/bootstrapFormsPage";

fixture`TC-7 Checking select form elements`
    .page`https://getbootstrap.com/docs/4.4/components/forms/#form-controls`
    .meta('page', 'bootstrap');

const bootstrapFormsPage = new BootstrapFormsPage();

test(`Then The example select should be visible`, async t => {
    await t
        .expect(bootstrapFormsPage.exampleSelect.visible).ok();
});

test(`And The example multiple select should be a multiple select`, async t => {
    await t
        .expect(bootstrapFormsPage.exampleMultiSelect.getAttribute("multiple")).eql('');
});

test(`And The selected option in example select should be "1"`, async t => {
    await t
        .expect(bootstrapFormsPage.exampleSelect.value).eql('1');
});

test(`And there should not be option like "hello" in example select`, async t => {
    await t
        .expect(bootstrapFormsPage.exampleSelect.find('option').withText('hello').exists).eql(false);
});

test(`And there should be option like "2" in example select`, async t => {
    await t
        .expect(bootstrapFormsPage.exampleSelect.find('option').withText('2').exists).eql(true);
});

test(`When The option "2" is selected in example select
 Then The selected option in example select should be "2"
 And Thu number of options in example select should be 5`, async t => {
    await t
        .click(bootstrapFormsPage.exampleSelect)
        .click(bootstrapFormsPage.exampleSelect.find('option').withText('2'))
        .expect(bootstrapFormsPage.exampleSelect.value).eql('2')
        .expect(bootstrapFormsPage.exampleSelect.find('option').count).eql(5);
});