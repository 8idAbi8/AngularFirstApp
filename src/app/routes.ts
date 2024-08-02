/** This file is where we will define the routes in the application. */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

/** a variable called routeConfig of type Routes and define two routes for the app: */
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'detail/:id',
        component: DetailsComponent,
        title: 'Home details'
    }
];

/** The entries in the routeConfig array represent the routes in the application. 
 *  The first entry navigates to the HomeComponent whenever the url matches ''. 
 *  The second entry uses some special formatting that will be revisited in a future lesson. */

export default routeConfig;