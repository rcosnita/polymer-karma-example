module.exports = function(config) {
    config.set({
        frameworks: ["jasmine"],

        files: [
            "src/*.js",
            "tests/*.js"
        ],

        reporters: ["coverage"],

        preprocessors: {
            "src/**/*.js": ["coverage"]
        },

        coverageReporter: {
            type: "cobertura",
            dir: "coverage/"
        }
    });
};