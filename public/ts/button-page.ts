import { Component } from "angular2/core";
import { ButtonComponent } from "feel-ui/dist/feel";
@Component({
    directives: [ ButtonComponent ],
    selector: "button-page",
    template: `<h1>Buttons</h1>
               <feel-button [flat]="false" [text]="'raised'"></feel-button>
               <feel-button [flat]="true" [text]="'flat'" (click)=onClick()></feel-button>`
})
export class ButtonPage {

   onClick() {
     console.log("clicked");
   }
}
