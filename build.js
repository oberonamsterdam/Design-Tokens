// build.js
const StyleDictionary = require("style-dictionary").extend("config.json");

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
