import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const path = require('path');
export const config = {
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // of the configuration file being run.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    specs :  [
        'test/specs/iOS/ios-todo-list-item-app.spec.js'
    ],
    //
    // ============
    // Capabilities
    // ============

     capabilities : [{
    // capabilities for local Appium web tests on an iOS 
    'appium:platformName' : 'iOS', // or "Android"
    'appium:deviceName': 'Karan iPhone 14.5 OS', // or "iPhone Simulator"
    'appium:platformVersion': '14.5', // or "16.2" (for running iOS v16)
    'appium:automationName': 'XCUITest',
    'appium:app' : "",
    'appium:autoGrantPermissions': true
    }],

    services: ['browserStack'],
    waitforTimeout: 20000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}

    