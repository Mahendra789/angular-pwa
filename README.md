# Build Progressive Web App (PWA) with Angular 12

# What is PWA?
A progressive web app offers the high level of user experience because it has the same features as native apps have. Nowadays, PWA has become the big deal, and more companies are switching towards the Progressive web applications (PWA).

PWA does not require to be deployed via app stores; instead, we take a slightly different approach and deploy it through the web servers through URLs. To make the same PWA as the native apps, we have to fulfil the following requirements.

## Adding PWA in Angular 12

Run `ng add @angular/pwa`.


## Configure Production Build with http-server

Run `sudo npm install -g http-server`.

Run `ng build prod` command to build the app for production environment.

Get inside the prod build folder `cd dist/angular-pwa`.

Run `http-server -o`

The above command will open the angular app on the following URL http://127.0.0.1:8080 and also give you the following URLs, you can check your app by entering one of the URL in the browser’s address bar.



## Audit PWA App with Lighthouse

Now, we will verify the PWA application using Lighthouse extension on the Google Chrome browser. Add the following URL on the browser’s address bar: http://127.0.0.1:8080

Install the lighthouse extension from chrome web store.

Next, open the browser console by using the Ctrl + Shift + I.

## Further help

To get details go check out the (https://www.positronx.io/build-progressive-web-app-pwa-with-angular/) page.
