import { Component } from '@angular/core';


@Component({
  selector:'app-property-card',
  // template: `<h1>This is a template</h1>`,
  templateUrl: 'property-card.component.html',
  // styles: [`h1{text-transform: capitalize;}`]
  styleUrls: ['property-card.component.css']
})
export class PropertyCardComponent {
  Property: any = {
    Id: "",
    Type: "House",
    Price: "20000",
    Name: "Bungalow"
  }
}
