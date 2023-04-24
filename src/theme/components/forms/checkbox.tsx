import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const checkbox = defineMultiStyleConfig({
    baseStyle: ({ theme: { tokens } }) => ({
        control: {
            ...compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleControlEnabled
            ),
            _checked: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleControlChecked
            ),
            _indeterminate: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleControlIndeterminate
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleControlDisabled
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleControlFocus
            ),
            _invalid: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleControlInvalid
            ),
        },
        icon: {
            ...compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleIconEnabled
            ),
            _checked: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleIconChecked
            ),
            _indeterminate: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleIconIndeterminate
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleIconDisabled
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleIconFocus
            ),
            _invalid: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleIconInvalid
            ),
        },
        container: {
            ...compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleContainerEnabled
            ),
            _checked: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleContainerChecked
            ),
            _indeterminate: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleContainerIndeterminate
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleContainerDisabled
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleContainerFocus
            ),
            _invalid: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleContainerInvalid
            ),
        },
        label: {
            ...compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleLabelEnabled
            ),
            _checked: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleLabelChecked
            ),
            _indeterminate: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleLabelIndeterminate
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleLabelDisabled
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleLabelFocus
            ),
            _invalid: compositionTokenToStyles(
                tokens.ComponentCheckboxBaseStyleLabelInvalid
            ),
        },
    }),
});

export default checkbox;
