module.exports = {
    source: ["tokens/**/*.json", "tokens/**/*.jsonc"],
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
                "composite",
                "attribute/cti",
                "name/cti/pascal",
                "color/hex",
                "remify",
            ],
        },
    },
};
