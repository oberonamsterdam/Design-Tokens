import { SystemStyleObject } from "@chakra-ui/react";

const compositionTokenToStyles = (
    compositionToken: CompositionToken
): SystemStyleObject =>
    Object.values(compositionToken).reduce<SystemStyleObject>(
        (styles, [key, value]) => {
            switch (key) {
                case "sizing":
                case "dimension":
                    return {
                        ...styles,
                        width: value,
                        height: value,
                    };
                case "spacing":
                case "itemSpacing":
                case "paragraphSpacing":
                    return {
                        ...styles,
                        gap: value,
                    };
                case "verticalPadding":
                    return {
                        ...styles,
                        paddingTop: value,
                        paddingBottom: value,
                    };
                case "horizontalPadding":
                    return {
                        ...styles,
                        paddingLeft: value,
                        paddingRight: value,
                    };
                case "fill":
                    return {
                        ...styles,
                        background: value,
                    };
                case "backgroundBlur":
                    return {
                        ...styles,
                        backdropBlur: value,
                    };
                case "border":
                    return {
                        ...styles,
                        borderColor: value,
                    };
                case "borderTop":
                    return {
                        ...styles,
                        borderTopColor: value,
                    };
                case "borderRight":
                    return {
                        ...styles,
                        borderRightColor: value,
                    };
                case "borderBottom":
                    return {
                        ...styles,
                        borderBottomColor: value,
                    };
                case "borderLeft":
                    return {
                        ...styles,
                        borderLeftColor: value,
                    };
                case "borderRadiusTopLeft":
                    return {
                        ...styles,
                        borderTopLeftRadius: value,
                    };
                case "borderRadiusTopRight":
                    return {
                        ...styles,
                        borderTopRightRadius: value,
                    };
                case "borderRadiusBottomRight":
                    return {
                        ...styles,
                        borderBottomRightRadius: value,
                    };
                case "borderRadiusBottomLeft":
                    return {
                        ...styles,
                        borderBottomLeftRadius: value,
                    };
                case "borderWidthTop":
                    return {
                        ...styles,
                        borderTopWidth: value,
                    };
                case "borderWidthRight":
                    return {
                        ...styles,
                        borderRightWidth: value,
                    };
                case "borderWidthBottom":
                    return {
                        ...styles,
                        borderBottomWidth: value,
                    };
                case "borderWidthLeft":
                    return {
                        ...styles,
                        borderLeftWidth: value,
                    };
                case "boxShadow":
                    return {
                        ...styles,
                        boxShadow: [
                            value.type === "innerShadow" && "inset",
                            value.x,
                            value.y,
                            value.blur,
                            value.spread,
                            value.color,
                        ].join(" "),
                    };
                case "fontFamilies":
                    return {
                        ...styles,
                        fontFamily: value,
                    };
                case "paragraphIndent":
                    return {
                        ...styles,
                        textIndent: value,
                    };
                case "typography":
                    return {
                        ...styles,
                        ...compositionTokenToStyles(value),
                    };
                default:
                    return {
                        ...styles,
                        [key]: value,
                    };
            }
        },
        {}
    );

export default compositionTokenToStyles;
