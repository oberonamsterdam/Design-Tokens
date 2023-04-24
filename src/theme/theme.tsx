import { theme as baseTheme } from "@chakra-ui/react";
import * as tokens from "../generated/tokens";
import * as components from "./components";

const theme = {
    sizes: {
        0: tokens.SizingScale0,
        1: tokens.SizingScale1,
        2: tokens.SizingScale2,
        3: tokens.SizingScale3,
        4: tokens.SizingScale4,
        5: tokens.SizingScale5,
        6: tokens.SizingScale6,
        7: tokens.SizingScale7,
        8: tokens.SizingScale8,
        9: tokens.SizingScale9,
        10: tokens.SizingScale10,
        11: tokens.SizingScale11,
        12: tokens.SizingScale12,
        13: tokens.SizingScale13,
        14: tokens.SizingScale14,
        15: tokens.SizingScale15,
        16: tokens.SizingScale16,
        17: tokens.SizingScale17,
        18: tokens.SizingScale18,
        19: tokens.SizingScale19,
        20: tokens.SizingScale20,
    },
    space: {
        0: tokens.SpacingScale0,
        1: tokens.SpacingScale1,
        2: tokens.SpacingScale2,
        3: tokens.SpacingScale3,
        4: tokens.SpacingScale4,
        5: tokens.SpacingScale5,
        6: tokens.SpacingScale6,
        7: tokens.SpacingScale7,
        8: tokens.SpacingScale8,
        9: tokens.SpacingScale9,
        10: tokens.SpacingScale10,
        11: tokens.SpacingScale11,
        12: tokens.SpacingScale12,
        13: tokens.SpacingScale13,
        14: tokens.SpacingScale14,
        15: tokens.SpacingScale15,
        16: tokens.SpacingScale16,
        17: tokens.SpacingScale17,
        18: tokens.SpacingScale18,
        19: tokens.SpacingScale19,
        20: tokens.SpacingScale20,
    },
    borderWidths: {
        m: tokens.BorderWidthM,
    },
    lineHeights: {
        m: tokens.LineHeightM,
        s: tokens.LineHeightS,
    },
    fontWeights: {
        m: tokens.FontWeightM,
        l: tokens.FontWeightL,
        xl: tokens.FontWeightXl,
    },
    fonts: {
        title: tokens.ComponentTitleBaseStyle.fontFamily,
        body: tokens.ComponentTextBaseStyle.fontFamily,
    },
    radius: {
        m: tokens.RadiusM,
        max: tokens.RadiusMax,
    },
    breakpoints: {
        xs: tokens.MediaQueryXs,
        s: tokens.MediaQueryS,
        m: tokens.MediaQueryM,
        l: tokens.MediaQueryL,
        xl: tokens.MediaQueryXl,
    },
    zIndices: baseTheme.zIndices,
    tokens,
    components,
};

export default theme;
