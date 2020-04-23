import BootstrapFormsPage from "../helpers/pages/bootstrapFormsPage";

fixture`TC3 - Checking form elements`
    .page`https://getbootstrap.com/docs/4.4/components/forms/`;

const bootstrapFormsPage = new BootstrapFormsPage();

/*
Given https://getbootstrap.com/docs/4.4/components/forms/ URL is opened
Then title of the browser should be "Forms · Bootstrap"
And The readonly input should not be in the viewport
When The readonly input is scrolled into the viewport
Then The readonly input should be in the viewport
And The readonly input should be readonly
 */