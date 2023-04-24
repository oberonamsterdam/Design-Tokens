import { defineStyleConfig } from "@chakra-ui/react";

import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

const text = defineStyleConfig({
    baseStyle: ({ theme: { tokens } }) =>
        compositionTokenToStyles(tokens.ComponentTextBaseStyle),
    sizes: {
        xs: ({ theme: { tokens } }) =>
            compositionTokenToStyles(tokens.ComponentTextSizesXs),
        sm: ({ theme: { tokens } }) =>
            compositionTokenToStyles(tokens.ComponentTextSizesSm),
        md: ({ theme: { tokens } }) =>
            compositionTokenToStyles(tokens.ComponentTextSizesMd),
        lg: ({ theme: { tokens } }) =>
            compositionTokenToStyles(tokens.ComponentTextSizesLg),
        xl: ({ theme: { tokens } }) =>
            compositionTokenToStyles(tokens.ComponentTextSizesXl),
    },
});

export default text;
