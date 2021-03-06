import { Component } from '@angular/core';
import {LocalizeRouterModule, LocalizeParser, LocalizeRouterSettings} from 'localize-router';
import {LocalizeRouterHttpLoader} from 'localize-router-http-loader';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})

export class NavMenuComponent {
    collapse: string = 'collapse';

    collapseNavbar(): void {
        if (this.collapse.length > 1) {
            this.collapse = '';
        } else {
            this.collapse = 'collapse';
        }
    }

    collapseMenu() {
        this.collapse = 'collapse';
    }
}
