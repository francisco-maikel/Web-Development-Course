import { appTheme } from "../styles/appTheme";

type appTheme = typeof appTheme;

declare module "styled-components" {
    export interface DefaultTheme extends appTheme {}
}