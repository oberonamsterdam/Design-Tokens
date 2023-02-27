// build.js
const StyleDictionary = require("style-dictionary").extend("config.js");

StyleDictionary.registerTransform({
    type: "value",
    transitive: true,
    name: "figma/web/flatten-properties",
    matcher: ({ type }) => {
        return ["typography", "composition"].includes(type);
    },
    transformer: ({ value, name, type }) => {
        if (!value) return;

        const entries = Object.entries(value);

        const flattendedValue = entries.reduce(
            (acc, [key, v], index) =>
                `${
                    acc ? `${acc}\n  ` : ""
                }--${name}-${StyleDictionary.transform[
                    "name/cti/kebab"
                ].transformer({ path: [key] }, { prefix: "" })}: ${v}${
                    index + 1 === entries.length ? "" : ";"
                }`,
            `${name.includes(type) ? "" : `${type}-`}${name}-group;`
        );

        return flattendedValue;
    },
});

StyleDictionary.registerTransform({
    name: "remify",
    type: "value",
    matcher: function (token) {
        switch (token.type) {
            case "size":
            case "sizing":
            case "spacing":
            case "lineHeight":
            case "fontSize":
            case "borderWidth":
            case "borderRadius":
            case "gap":
                return true;
            default:
                return false;
        }
    },
    transformer: function (token) {
        return token.original.value &&
            String(token.original.value).match(/[^,.\d]/)
            ? token.original.value
            : parseFloat(token.original.value) / 10 + "rem";
    },
});

StyleDictionary.buildAllPlatforms();
