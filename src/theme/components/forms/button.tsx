import { defineStyleConfig, defineStyle } from "@chakra-ui/react";
import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

const buttonTheme = defineStyleConfig({
    baseStyle: defineStyle(({ theme: { tokens } }) => ({
        ...compositionTokenToStyles(tokens.ComponentButtonBaseStyleBodyEnabled),
        ...compositionTokenToStyles(
            tokens.ComponentButtonBaseStyleLabelEnabled
        ),
        "& > svg": {
            ...compositionTokenToStyles(
                tokens.ComponentButtonBaseStyleIconEnabled
            ),
        },
        _hover: {
            ...compositionTokenToStyles(
                tokens.ComponentButtonBaseStyleBodyHover
            ),
            ...compositionTokenToStyles(
                tokens.ComponentButtonBaseStyleLabelHover
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonBaseStyleIconHover
                ),
            },
        },
        _focusVisible: {
            ...compositionTokenToStyles(
                tokens.ComponentButtonBaseStyleBodyFocus
            ),
            ...compositionTokenToStyles(
                tokens.ComponentButtonBaseStyleLabelFocus
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonBaseStyleIconFocus
                ),
            },
        },
        _active: {
            ...compositionTokenToStyles(
                tokens.ComponentButtonBaseStyleBodyActive
            ),
            ...compositionTokenToStyles(
                tokens.ComponentButtonBaseStyleLabelActive
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonBaseStyleIconActive
                ),
            },
        },
        _disabled: {
            ...compositionTokenToStyles(
                tokens.ComponentButtonBaseStyleBodyDisabled
            ),
            ...compositionTokenToStyles(
                tokens.ComponentButtonBaseStyleLabelDisabled
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonBaseStyleIconDisabled
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
        solid: defineStyle(({ theme: { tokens } }) => ({
            ...compositionTokenToStyles(
                tokens.ComponentButtonVariantsSolidBodyEnabled
            ),
            ...compositionTokenToStyles(
                tokens.ComponentButtonVariantsSolidLabelEnabled
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsSolidIconEnabled
                ),
            },
            _hover: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsSolidBodyHover
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsSolidLabelHover
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsSolidIconHover
                    ),
                },
            },
            _focusVisible: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsSolidBodyFocus
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsSolidLabelFocus
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsSolidIconFocus
                    ),
                },
            },
            _active: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsSolidBodyActive
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsSolidLabelActive
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsSolidIconActive
                    ),
                },
            },
            _disabled: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsSolidBodyDisabled
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsSolidLabelDisabled
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsSolidIconDisabled
                    ),
                },
            },
        })),
        outline: defineStyle(({ theme: { tokens } }) => ({
            ...compositionTokenToStyles(
                tokens.ComponentButtonVariantsOutlineBodyEnabled
            ),
            ...compositionTokenToStyles(
                tokens.ComponentButtonVariantsOutlineLabelEnabled
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsOutlineIconEnabled
                ),
            },
            _hover: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsOutlineBodyHover
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsOutlineLabelHover
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsOutlineIconHover
                    ),
                },
            },
            _focusVisible: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsOutlineBodyFocus
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsOutlineLabelFocus
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsOutlineIconFocus
                    ),
                },
            },
            _active: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsOutlineBodyActive
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsOutlineLabelActive
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsOutlineIconActive
                    ),
                },
            },
            _disabled: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsOutlineBodyDisabled
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsOutlineLabelDisabled
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsOutlineIconDisabled
                    ),
                },
            },
        })),
        ghost: defineStyle(({ theme: { tokens } }) => ({
            ...compositionTokenToStyles(
                tokens.ComponentButtonVariantsGhostBodyEnabled
            ),
            ...compositionTokenToStyles(
                tokens.ComponentButtonVariantsGhostLabelEnabled
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsGhostIconEnabled
                ),
            },
            _hover: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsGhostBodyHover
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsGhostLabelHover
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsGhostIconHover
                    ),
                },
            },
            _focusVisible: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsGhostBodyFocus
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsGhostLabelFocus
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsGhostIconFocus
                    ),
                },
            },
            _active: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsGhostBodyActive
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsGhostLabelActive
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsGhostIconActive
                    ),
                },
            },
            _disabled: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsGhostBodyDisabled
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsGhostLabelDisabled
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsGhostIconDisabled
                    ),
                },
            },
        })),
        link: defineStyle(({ theme: { tokens } }) => ({
            ...compositionTokenToStyles(
                tokens.ComponentButtonVariantsLinkBodyEnabled
            ),
            ...compositionTokenToStyles(
                tokens.ComponentButtonVariantsLinkLabelEnabled
            ),
            "& > svg": {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsLinkIconEnabled
                ),
            },
            _hover: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsLinkBodyHover
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsLinkLabelHover
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsLinkIconHover
                    ),
                },
            },
            _focusVisible: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsLinkBodyFocus
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsLinkLabelFocus
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsLinkIconFocus
                    ),
                },
            },
            _active: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsLinkBodyActive
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsLinkLabelActive
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsLinkIconActive
                    ),
                },
            },
            _disabled: {
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsLinkBodyDisabled
                ),
                ...compositionTokenToStyles(
                    tokens.ComponentButtonVariantsLinkLabelDisabled
                ),
                "& > svg": {
                    ...compositionTokenToStyles(
                        tokens.ComponentButtonVariantsLinkIconDisabled
                    ),
                },
            },
        })),
    },
});

export default buttonTheme;
