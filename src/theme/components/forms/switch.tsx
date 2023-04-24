import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    switchAnatomy.keys
);

const switchTheme = defineMultiStyleConfig({
    baseStyle: ({ theme: { tokens } }) => ({
        container: {
            ...compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleContainerEnabled
            ),
            _hover: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleContainerHover
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleContainerFocus
            ),
            _active: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleContainerActive
            ),
            _checked: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleContainerChecked
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleContainerDisabled
            ),
        },
        track: {
            ...compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleTrackEnabled
            ),
            _hover: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleTrackHover
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleTrackFocus
            ),
            _active: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleTrackActive
            ),
            _checked: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleTrackChecked
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleTrackDisabled
            ),
        },
        thumb: {
            ...compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleThumbEnabled
            ),
            _hover: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleThumbHover
            ),
            _focusVisible: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleThumbFocus
            ),
            _active: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleThumbActive
            ),
            _checked: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleThumbChecked
            ),
            _disabled: compositionTokenToStyles(
                tokens.ComponentSwitchBaseStyleThumbDisabled
            ),
        },
    }),
});

export default switchTheme;
