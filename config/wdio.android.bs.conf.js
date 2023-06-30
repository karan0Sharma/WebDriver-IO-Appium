import 'dotenv/config';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const path = require('path');
export const config = {

    //BrowserStack credentials
    user : process.env.BROWSERSTACK_USER,
    key : process.env.BROWSERSTACK_KEY,

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
        'test/specs/android/deleteColorNote.spec.js'
    ],
    //
    // ============
    // Capabilities
    // ============

     capabilities : [{
    // capabilities for local Appium web tests on an iOS 
    'platformName' : 'Android', // or "iOS"
    'deviceName': 'Google Pixel 3', // or "iPhone Simulator"
    'platformVersion': '9.0', // or "16.2" (for running iOS v16)
    'automationName': 'UiAutomator2',
    'app' : "bs://46247fa5c7680a0535f57f7e7a44c08a3090bfed",
    'autoGrantPermissions': true
    }],

    services: ['browserstack'],
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

    