import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

const button = defineStyleConfig({
    variants: {
        solid: defineStyle(({ theme }) => ({
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSolidEnabledBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSolidEnabledLabel
            ),
        })),
    },
});

export default button;
