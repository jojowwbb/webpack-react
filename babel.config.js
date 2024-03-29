module.exports = function(api) {
    api.cache(true);
    const presets = [
        [
            "@babel/preset-env",
            {
                targets: {
                    chrome: 52,
                    browsers: ["last 2 versions", "safari 7"]
                },
                modules: false,
                useBuiltIns: "usage",
                debug: false,
                corejs: {
                    version: 3,
                    proposals: true 
                }
            }
        ],
        "@babel/preset-react"
    ];
    const plugins = [];

    return {
        presets,
        plugins
    };
};
