import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

/**
 * This component will represent the details page that provides more information on a given housing location.
 */

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  /**The housingLocation properties are being accessed with the optional chaining operator ?. 
   * This ensures that if the housingLocation value is null or undefined the application doesn't crash. */
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
  </article>
`,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
/**
 * This code gives the DetailsComponent access to the ActivatedRoute router feature 
 * that enables you to have access to the data about the current route. 
 * In the constructor, the code converts the id parameter acquired from the route from a string to a number.
 * 
 * The component has the code to display the correct information based on the selected housing location. 
 * The constructor includes a call to the HousingService 
 * to pass the route parameter as an argument to the getHousingLocationById service function. * 
 */
