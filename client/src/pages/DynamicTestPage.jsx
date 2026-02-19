import React, { useContext, useState } from 'react'
import { Useprovider } from '../Providercontext'

function DynamicTestPage() {
    const data =JSON.parse( localStorage.getItem("data"))
    console.log(data);
    
    const [rand, setrand] = useState(Math.floor(Math.random() * (50 - 1 + 1)) + 1)
    return (
        <div>
            lkhggiug
            {data && data.map((item, i) => {
                console.log("ljhgygyg");
                console.log(i);
                console.log(rand);
                if (i == rand) {
                    console.log(item,"iuhoiuhoiug");
                    return (
                        <div key={i}>
                            {JSON.stringify( item)}
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default DynamicTestPage