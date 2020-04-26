import { Selector } from 'testcafe';
export default class AngularStartPage {
    constructor () {
        this.title = Selector('h1#getting-started-with-angular-your-first-app');
    }
}