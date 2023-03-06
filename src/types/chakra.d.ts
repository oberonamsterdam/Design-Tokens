import { StyleFunctionProps as S } from "@chakra-ui/react";
import theme from "../theme/theme";

declare module "@chakra-ui/styled-system" {
    export declare interface StyleFunctionProps extends Omit<S, "theme"> {
        theme: typeof theme;
    }
}
