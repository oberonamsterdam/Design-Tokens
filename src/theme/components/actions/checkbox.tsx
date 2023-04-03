import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const checkbox = defineMultiStyleConfig({
    variants: {
        solid: definePartsStyle(({ theme }) => ({
            control: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentCheckboxEnabledControl
                ),
            },
            icon: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentCheckboxEnabledIcon
                ),
            },
            container: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentCheckboxEnabledContainer
                ),
            },
            label: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentCheckboxEnabledLabel
                ),
            },
        })),
    },
});

export default checkbox;
