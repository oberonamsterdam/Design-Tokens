import { defineStyleConfig } from "@chakra-ui/react";

import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

const title = defineStyleConfig({
    baseStyle: ({ theme: { tokens } }) =>
        compositionTokenToStyles(tokens.ComponentTitleBaseStyle),
    sizes: {
        xs: ({ theme: { tokens } }) =>
            compositionTokenToStyles(tokens.ComponentTitleSizesXs),
        sm: ({ theme: { tokens } }) =>
            compositionTokenToStyles(tokens.ComponentTitleSizesSm),
        md: ({ theme: { tokens } }) =>
            compositionTokenToStyles(tokens.ComponentTitleSizesMd),
        lg: ({ theme: { tokens } }) =>
            compositionTokenToStyles(tokens.ComponentTitleSizesLg),
        xl: ({ theme: { tokens } }) =>
            compositionTokenToStyles(tokens.ComponentTitleSizesXl),
    },
});

export default title;
