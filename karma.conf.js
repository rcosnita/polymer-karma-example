module.exports = function(config) {
    config.set({
        browsers : ["Chrome", "Firefox", "OperaClassic"],

        frameworks: ["jasmine"],

        files: [{
                pattern: "lib/**",
                included: false,
                served: true,
                watched: true
            },
            "lib/webcomponentsjs/webcomponents.min.js",
            "src/*.html",
            "src/*.js",
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
    });
};