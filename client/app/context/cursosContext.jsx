'use client'
const { createContext, useState } = require("react");


const CursoContext = createContext();

export const CursoProvider = ({ children }) => {

    const [cursos, setCursos] = useState([]);

    return <CursoContext.Provider value={{cursos, setCursos}}>
                {children}
            </CursoContext.Provider>
}

export default CursoContext;