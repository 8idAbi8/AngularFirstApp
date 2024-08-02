import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

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

          Process of sharing data from the parent component to the child component 
          by binding data to those properties in the template using property binding.
          Property binding enables you to connect a variable to an Input in an Angular template. 
          The data is then dynamically bound to the Input.

          You added a new property binding and passed in a reference to a class property. 
          Now, the HousingLocationComponent (child component) has access to data that it can use to customize the component's display.

          Note, using the ngFor, in the code [housingLocation] = "housingLocation" the housingLocation value now refers to the variable used in the ngFor directive. 
          Before this change (<app-housing-location [housingLocation]="housingLocation"></app-housing-location>), it referred to the property on the HomeComponent class.
    -->
    <app-housing-location
      *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation">
    </app-housing-location>
    </section>    
    `,
  styleUrl: './home.component.css'
})

/* add an array of HousingLocation. instances of the interface (HousingLocation) in the HomeComponent */
    export class HomeComponent {
      readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
    
      housingLocationList: HousingLocation[] = [];
      housingService: HousingService = inject(HousingService);

      // the constructor is the first function that runs when this component is created.
      constructor() {
        this.housingLocationList = this.housingService.getAllHousingLocations();
      }
    }