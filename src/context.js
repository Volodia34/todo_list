import {createContext, useState} from "react";

export const MyContext = createContext()

export const MyProvider = ({ children }) => {

    const [list, setList] = useState([{id: 0, taskName: 'Hello', description: 'text'}])
    const [listdata,setListData] = useState([])

    return (
        <MyContext.Provider value={[list,setList,listdata,setListData]}>
            {children}
        </MyContext.Provider>
    );
};