import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    inputAnatomy.keys
);

const input = defineMultiStyleConfig({
    baseStyle: ({ theme: { tokens } }) => ({
        field: {
            ...compositionTokenToStyles(
                tokens.ComponentInputBaseStyleFieldEnabled
            ),
            _hover: compositionTokenToStyles(
                tokens.ComponentInputBaseStyleFieldHover
            ),
            _readOnly: compositionTokenToStyles(
                tokens.ComponentInputBaseStyleFieldReadOnly
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentInputBaseStyleFieldDisabled
            ),
            _invalid: compositionTokenToStyles(
                tokens.ComponentInputBaseStyleFieldInvalid
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentInputBaseStyleFieldFocus
            ),
        },
        element: compositionTokenToStyles(
            tokens.ComponentInputBaseStyleElement
        ),
        addon: compositionTokenToStyles(tokens.ComponentInputBaseStyleAddon),
    }),
    variants: {
        outline: ({ theme: { tokens } }) => ({
            field: {
                ...compositionTokenToStyles(
                    tokens.ComponentInputVariantsOutlineFieldEnabled
                ),
                _hover: compositionTokenToStyles(
                    tokens.ComponentInputVariantsOutlineFieldHover
                ),
                _readOnly: compositionTokenToStyles(
                    tokens.ComponentInputVariantsOutlineFieldReadOnly
                ),
                _disabled: compositionTokenToStyles(
                    tokens.ComponentInputVariantsOutlineFieldDisabled
                ),
                _invalid: compositionTokenToStyles(
                    tokens.ComponentInputVariantsOutlineFieldInvalid
                ),
                _focusVisible: compositionTokenToStyles(
                    tokens.ComponentInputVariantsOutlineFieldFocus
                ),
            },
            element: compositionTokenToStyles(
                tokens.ComponentInputVariantsOutlineElement
            ),
            addon: compositionTokenToStyles(
                tokens.ComponentInputVariantsOutlineAddon
            ),
        }),
        flushed: ({ theme: { tokens } }) => ({
            field: {
                ...compositionTokenToStyles(
                    tokens.ComponentInputVariantsFlushedFieldEnabled
                ),
                _hover: compositionTokenToStyles(
                    tokens.ComponentInputVariantsFlushedFieldHover
                ),
                _readOnly: compositionTokenToStyles(
                    tokens.ComponentInputVariantsFlushedFieldReadOnly
                ),
                _disabled: compositionTokenToStyles(
                    tokens.ComponentInputVariantsFlushedFieldDisabled
                ),
                _invalid: compositionTokenToStyles(
                    tokens.ComponentInputVariantsFlushedFieldInvalid
                ),
                _focusVisible: compositionTokenToStyles(
                    tokens.ComponentInputVariantsFlushedFieldFocus
                ),
            },
            element: compositionTokenToStyles(
                tokens.ComponentInputVariantsFlushedElement
            ),
            addon: compositionTokenToStyles(
                tokens.ComponentInputVariantsFlushedAddon
            ),
        }),
    },
});

export default input;
