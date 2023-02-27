module.exports = {
    source: ["example/**/*.json"],
    platforms: {
        js: {
            buildPath: "generated/",
            files: [
                {
                    destination: "tokens.ts",
                    format: "javascript/es6",
                    filter: (file) => !file.path.includes("brand"),
                },
            ],
            transforms: [
                "figma/web/flatten-properties",
                "attribute/cti",
                "name/cti/pascal",
                "color/hex",
                "remify",
            ],
        },
    },
};
