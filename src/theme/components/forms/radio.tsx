import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(radioAnatomy.keys);

const radio = defineMultiStyleConfig({
    baseStyle: ({ theme: { tokens } }) => ({
        control: {
            ...compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleControlEnabled
            ),
            _checked: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleControlChecked
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleControlDisabled
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleControlFocus
            ),
            _invalid: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleControlInvalid
            ),
        },
        icon: {
            ...compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleIconEnabled
            ),
            _checked: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleIconChecked
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleIconDisabled
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleIconFocus
            ),
            _invalid: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleIconInvalid
            ),
        },
        container: {
            ...compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleContainerEnabled
            ),
            _checked: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleContainerChecked
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleContainerDisabled
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleContainerFocus
            ),
            _invalid: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleContainerInvalid
            ),
        },
        label: {
            ...compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleLabelEnabled
            ),
            _checked: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleLabelChecked
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleLabelDisabled
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleLabelFocus
            ),
            _invalid: compositionTokenToStyles(
                tokens.ComponentRadioBaseStyleLabelInvalid
            ),
        },
    }),
});

export default radio;
