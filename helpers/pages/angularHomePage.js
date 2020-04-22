import { Selector } from 'testcafe';
export default class AngularHomePage {
    constructor () {
        this.angularLogoNavbar = Selector('.nav-link.home img');
        this.angularLogoHeroSection = Selector('.hero-logo img');
        this.textInHeroSection = Selector('div.hero-headline');
        this.getStartedButton = Selector('a.button.hero-cta');
        this.searchInput = Selector('input[type="search"]');
    }
}