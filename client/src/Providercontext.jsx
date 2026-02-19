import { useState } from 'react'
import { createContext } from 'react'

const Useprovider = createContext()
function Providercontext({ children }) {
    const [data, setData] = useState([])
    return (
        <Useprovider value={{ data, setData }}>
            {children}
        </Useprovider>
    )
}

export { Providercontext, Useprovider }