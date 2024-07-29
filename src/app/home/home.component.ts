import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  template: `
    <section>
      <!-- add a search filter and a button -->
      <form>    
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- housingLocation property binding:
          When adding a property binding to a component tag, we use the [attribute] = "value" syntax to notify Angular 
          that the assigned value should be treated as a property from the component class and not a string value.
          The value on the right handside is the name of the property from the HomeComponent.      

          You added a new property binding and passed in a reference to a class property. 
          Now, the HousingLocationComponent has access to data that it can use to customize the component's display.
    -->
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>    
    `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}