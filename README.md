angular getting started tutorial:
https://v17.angular.io/tutorial/first-app/first-app-lesson-01


In your project directory, 
Run this command to install the dependencies needed to run the app:     npm install
Run this command to build and serve the default app:                    ng serve
Run this command to create a new HomeComponent:                         ng generate component home --inline-template --skip-tests
Run this command to create a new HousingLocationComponent:              ng generate component housingLocation --inline-template --skip-tests
Run this command to create the new interface:                           ng generate interface housinglocation
Run this command to create the new service:                             ng generate service housing --skip-tests


-main.ts is where the app starts running.
-app.component.ts is the source file that describes the app-root component. 
    This is the top-level Angular component in the app. A component is the basic building block of an Angular application. 


-ngFor 
    is a specific type of directive used to dynamically repeat data in a template. 
    In plain JavaScript you would use a for loop - ngFor provides similar functionality for Angular templates.
    You can utilize ngFor to iterate over arrays and even asynchronous values.
 
-Angular Services
    Angular services provide a way for you to separate Angular app data and functions that can be used by multiple components in your app. To be used by multiple components, a service must be made injectable. Services that are injectable and used by a component become dependencies of that component. The component depends on those services and can't function without them.

-Angular Routing:
    Routing is the ability to navigate from one component in the application to another. 
    In Single Page Applications (SPA), only parts of the page are updated to represent the requested view for the user.
    The Angular Router enables users to declare routes and specify which component should be displayed on the screen if that route is requested by the application.

-Routing:
    -Routing is the ability to navigate from one component in the application to another. In Single Page Applications (SPA), only parts of the page are updated to represent the requested view for the user.
    -RouterLink ([routerLink]): (https://angular.dev/api/router/RouterLink) 
        When applied to an element in a template, makes that element a link that initiates navigation to a route. Navigation opens one or more routed components in one or more <router-outlet> locations on the page.

    