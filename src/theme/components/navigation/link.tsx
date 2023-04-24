import { defineStyleConfig } from "@chakra-ui/react";

import compositionTokenToStyles from "../../../utils/compositionTokenToStyles";

const link = defineStyleConfig({
    baseStyle: ({ theme: { tokens } }) => ({
        ...compositionTokenToStyles(tokens.ComponentLinkBaseStyleEnabled),
        _visited: compositionTokenToStyles(
            tokens.ComponentLinkBaseStyleVisited
        ),
        _hover: compositionTokenToStyles(tokens.ComponentLinkBaseStyleHover),
        _focus: compositionTokenToStyles(tokens.ComponentLinkBaseStyleFocus),
        _active: compositionTokenToStyles(tokens.ComponentLinkBaseStyleActive),
    }),
});

export default link;
