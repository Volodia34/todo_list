import {createContext, useState} from "react";

export const MyContext = createContext()

export const MyProvider = ({ children }) => {

    const [list, setList] = useState([{id: 0, taskName: 'Hello', description: 'text'}])
    return (
        <MyContext.Provider value={[list,setList]}>
            {children}
        </MyContext.Provider>
    );
};