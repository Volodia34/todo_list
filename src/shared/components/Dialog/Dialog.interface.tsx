import {ReactNode} from "react";

export interface DialogProps {
    open: boolean
    close: () => void
    children: ReactNode;
}