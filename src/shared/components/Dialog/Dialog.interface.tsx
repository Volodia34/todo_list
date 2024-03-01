import {ReactNode} from "react";

export interface DialogProps {
    open: boolean
    index: number | null
    close: () => void
    //children: ReactNode;
}