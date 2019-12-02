# Strava SCION Workbench

A simple implementation of the SCION Workbench project that helps visualize Strava data.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Usage

In order to access your Strava profile data, there's a few prerequisites to check:
1. You have created an API Application on your Strava profile following [this guide](https://developers.strava.com/docs/getting-started/)
2. You have accessed your API Application data on [your API Application page](https://www.strava.com/settings/api) and can read the following:
  * `client_id`
  * `client_secret`
3. You have added that information to the `environment.ts` file.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
