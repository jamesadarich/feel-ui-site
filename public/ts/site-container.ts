import { Component, provide } from "angular2/core";
import {bootstrap}    from "angular2/platform/browser"
//import { RouteConfig,  RouterOutlet } from "angular2/router";
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy } from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
import { ButtonPage } from "./button-page";
import { InputPage } from "./input-page";
import { MenuBar } from "feel-ui/dist/menu-bar";
@Component({
    directives: [ ButtonPage, MenuBar, ROUTER_DIRECTIVES ],
    selector: "my-app",
    template: `<feel-menu-bar [title]="'Feel'"></feel-menu-bar>
               <router-outlet></router-outlet>`
})
@RouteConfig([
    {path: "/",        component: ButtonPage, name: "Home"},
    {path: "/buttons",        component: ButtonPage, name: "Buttons"},
    {path: "/input", component: InputPage, name: "Input"  }
])
class SiteContainer {
}
bootstrap(SiteContainer, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: PathLocationStrategy })]);
