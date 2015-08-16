module.exports = function(config) {
    var configuration = {
        browsers: ["Chrome",  "Firefox"/*, "OperaClassic"*/ ],

        customLaunchers: {
            Chrome_travis_ci: {
                base: "Chrome",
                flags: ["--no-sandbox"]
            }
        },

        frameworks: ["jasmine"],

        files: [
            "lib/webcomponentsjs/webcomponents-lite.min.js",
            {
                pattern: "lib/**",
                included: false,
                served: true,
                watched: true
            },
            "src/*.html",
            "src/*.js",
            {
                pattern: "tests/tests_helper.js",
                included: true
            },
            "tests/*.js"
        ],

        reporters: ["progress", "coverage"],

        preprocessors: {
            "src/**/*.js": ["coverage"]
        },

        coverageReporter: {
            type: "html",
            dir: "coverage/"
        }
    };

    if(process.env.TRAVIS){
        configuration.browsers = ["Chrome_travis_ci", "Firefox"];
    }

    config.set(configuration);    
};