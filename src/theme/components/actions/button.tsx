import { ComponentSingleStyleConfig } from "@chakra-ui/react";

import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

type ButtonTheme = ComponentSingleStyleConfig;

const button: ButtonTheme = {
    variants: {
        solid: ({ theme }) => ({
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSolidEnabledBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSolidEnabledLabel
            ),
        }),
    },
};

export default button;
