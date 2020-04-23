import { Selector } from 'testcafe';
export default class BootstrapFormsPage {

    constructor () {

        this.title = Selector('h1#content');
        this.readOnlyInput = Selector('input[readonly].form-control');

        this.defaultCheckbox = Selector('input#defaultCheck1').withAttribute('type', 'checkbox');
        this.disabledCheckbox = Selector('input#defaultCheck2').withAttribute('type', 'checkbox');

        this.defaultRadioButton = Selector('input#exampleRadios1').withAttribute('type', 'radio');
        this.secondDefaultRadioButton = Selector('input#exampleRadios2').withAttribute('type', 'radio');
        this.disabledRadioButton = Selector('input#exampleRadios3').withAttribute('type', 'radio');
    }
}