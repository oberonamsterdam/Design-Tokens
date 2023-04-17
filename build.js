// build.js
const StyleDictionary = require("style-dictionary").extend("config.js");

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
    transformer: (token) =>
        token.original.value && String(token.original.value).match(/[^,.\d]/)
            ? token.original.value
            : parseFloat(token.original.value) / 10 + "rem",
});

StyleDictionary.registerTransform({
    name: "composite",
    type: "value",
    matcher: ({ type }) => type === "composition",
    transformer: (token) => token.original.value,
});

StyleDictionary.buildAllPlatforms();
