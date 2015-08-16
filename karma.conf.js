module.exports = function(config) {
    config.set({
        frameworks: ["jasmine"],

        files: [
            {
                pattern: 'lib/**',
                included: false,
                served: true,
                watched: true
            },
            "lib/webcomponentsjs/webcomponents.js",
            "src/*.html",
            "src/*.js",
            "tests/*.js"
        ]
    });
};