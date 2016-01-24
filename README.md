# report-angular-2
An example of how to write a simple reporting tool in [Angular 2 Beta](https://angular.io/).

##Lost?
Start with a look at an [Angular 2 Hello World](https://github.com/DevelopIntelligenceBoulder/hello-angular-2) and an [Angular 2 Hello World with Typescript](https://github.com/DevelopIntelligenceBoulder/hello-angular-2-typescript).

## Instructions
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e.  Express, Angular, RxJS, SystemJS)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src/` in your web browser

## A Picture
The mocks via Balsamiq are located within the mock/ folder. There you will find a visualized breakdown of the Angular 2 components.

## An FYI!
We are using [SystemJS](https://github.com/systemjs/systemjs) in this application for loading our modules. It needs to be configured to recognize where Angular and RxJS modules live. Look at the `index.html` to see the configuration. Also, note that there will be one module bootstrapped. That module loads the entire Angular 2 application.

We are using [TypeScript](http://www.typescriptlang.org/) to write the application. TypeScript isn't needed, however it is the preferred way to write Angular 2 applications. Here is the [Handbook](http://www.typescriptlang.org/Handbook) to get you started. TypeScript can be transpiled via an IDE by defining a configuration within a `tsconfig.json`.

## Where is the data coming from?
This reporting tool is using data coming from an Azure Web Service @ `http://lemon-aide-api.azurewebsites.net/data/reports`. It is serving up a list of reports for us to consume.

##Where to go from here?
[DevelopIntelligence](http://www.developintelligence.com/) offers a variety of [classes on Angular](http://www.developintelligence.com/catalog/web-development-training/angularjs). Check out [Advanced AngularJS](http://www.developintelligence.com/catalog/web-development-training/angularjs/advanced-angularjs-development) or the [AngularJS Boot Camp](http://www.developintelligence.com/catalog/web-development-training/angularjs/angularjs-boot-camp) to get your team up to speed.


