import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <!-- 
    Used Angular template syntax to render values in the HousingLocation template. 
    Two important skills: passing data to components, Interpolating values into a template. 
    
    Used property binding to bind the housingLocation.photo to the src attribute. 
    The alt attribute uses interpolation to give more context to the alt text of the image.
    You use interpolation to include the values for name, city and state of the housingLocation property. 
  -->
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  /*
    Inputs allow components to share data. The direction of the data sharing is from parent component to child component.
    @Input() properties in the HousingLocationComponent component will enable you to customize the data displayed in the component.
    The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler 
    that the value of this property won't be null or undefined.
  */
  @Input() housingLocation!: HousingLocation;
}


