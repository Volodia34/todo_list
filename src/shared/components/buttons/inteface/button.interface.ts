import {ReactNode} from "react";

export interface ButtonInterface {
    click: () => void ;
    size: "small" | "large" | "medium" | undefined
    variant: "text" | "outlined" | "contained" | undefined
    children: ReactNode;

}