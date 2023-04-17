import { defineStyleConfig, defineStyle } from "@chakra-ui/react";
import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

const button = defineStyleConfig({
    baseStyle: defineStyle(({ theme }) => ({
        ...compositionTokenToStyles(
            theme.tokens.ComponentButtonBaseStyleEnabledBody
        ),
        ...compositionTokenToStyles(
            theme.tokens.ComponentButtonBaseStyleEnabledLabel
        ),
        "& > svg": {
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleEnabledIcon
            ),
        },
        _hover: {
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleHoverBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleHoverLabel
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleHoverIcon
                ),
            },
        },
        _active: {
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleActiveBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleActiveLabel
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleActiveIcon
                ),
            },
        },
        _disabled: {
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleDisabledBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleDisabledLabel
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleDisabledIcon
                ),
            },
        },
    })),
    sizes: {
        xs: defineStyle(({ theme }) => ({
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSizesXsBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSizesXsLabel
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonSizesXsIcon
                ),
            },
        })),
        sm: defineStyle(({ theme }) => ({
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSizesSmBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSizesSmLabel
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonSizesSmIcon
                ),
            },
        })),
        md: defineStyle(({ theme }) => ({
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSizesMdBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSizesMdLabel
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonSizesMdIcon
                ),
            },
        })),
        lg: defineStyle(({ theme }) => ({
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSizesLgBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonSizesLgLabel
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonSizesLgIcon
                ),
            },
        })),
    },
    variants: {
        solid: defineStyle(({ theme }) => ({
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleEnabledBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleEnabledLabel
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleEnabledIcon
                ),
            },
            _hover: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleHoverBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleHoverLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleHoverIcon
                    ),
                },
            },
            _active: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleActiveBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleActiveLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleActiveIcon
                    ),
                },
            },
            _disabled: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleDisabledBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleDisabledLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleDisabledIcon
                    ),
                },
            },
        })),
        outline: defineStyle(({ theme }) => ({
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleEnabledBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleEnabledLabel
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleEnabledIcon
                ),
            },
            _hover: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleHoverBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleHoverLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleHoverIcon
                    ),
                },
            },
            _active: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleActiveBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleActiveLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleActiveIcon
                    ),
                },
            },
            _disabled: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleDisabledBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleDisabledLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleDisabledIcon
                    ),
                },
            },
        })),
        ghost: defineStyle(({ theme }) => ({
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleEnabledBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleEnabledLabel
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleEnabledIcon
                ),
            },
            _hover: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleHoverBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleHoverLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleHoverIcon
                    ),
                },
            },
            _active: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleActiveBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleActiveLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleActiveIcon
                    ),
                },
            },
            _disabled: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleDisabledBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleDisabledLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleDisabledIcon
                    ),
                },
            },
        })),
        link: defineStyle(({ theme }) => ({
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleEnabledBody
            ),
            ...compositionTokenToStyles(
                theme.tokens.ComponentButtonBaseStyleEnabledLabel
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleEnabledIcon
                ),
            },
            _hover: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleHoverBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleHoverLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleHoverIcon
                    ),
                },
            },
            _active: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleActiveBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleActiveLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleActiveIcon
                    ),
                },
            },
            _disabled: {
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleDisabledBody
                ),
                ...compositionTokenToStyles(
                    theme.tokens.ComponentButtonBaseStyleDisabledLabel
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        theme.tokens.ComponentButtonBaseStyleDisabledIcon
                    ),
                },
            },
        })),
    },
});

export default button;
