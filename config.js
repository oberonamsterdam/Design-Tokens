module.exports = {
    source: ["tokens/**/*.json"],
    platforms: {
        js: {
            buildPath: "src/generated/",
            files: [
                {
                    destination: "tokens.ts",
                    format: "javascript/es6",
                    filter: (file) => !file.path.includes("brand"),
                },
            ],
            transforms: [
                "attribute/cti",
                "name/cti/pascal",
                "color/hex",
                "remify",
            ],
        },
    },
};
