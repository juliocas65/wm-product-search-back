var reporter = require('cucumber-html-reporter');
 
var options = {
    theme: 'bootstrap',
    jsonFile: './cucumber_report.json',
    output: './cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        "App Version":"1.0.0",
        "Test Environment": "DEV",
        "Platform": "Linux"
    }
};

reporter.generate(options);