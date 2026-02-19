import React, { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Useprovider } from '../Providercontext';

function LoadData() {
    const { data, setData } = useContext(Useprovider)
    const [Country, setCountry] = useState("")
    const [Xyear, setXyear] = useState(0)
    const [Yyear, setYyear] = useState(2030)


    useEffect(() => {
        async function fetchData() {
            let result = await fetch("http://localhost:8000/lodeData");
            result = await result.json();
            setData(result.data);
            localStorage.setItem("data",JSON.stringify(result.data))
        }
        fetchData();
    }, [])
    useEffect(() => {
        setData(data.filter(item => ((Country == "" || (item.country_txt.includes(Country))) && (Xyear == null || Xyear >= Number(item.iyear)) && (Yyear == null || Yyear <= Number(item.iyear)))))
    }, [Country, Xyear, Yyear])
    return (
        <div>
            <input type="text" value={Country} placeholder='Country'
                onChange={(e) => {
                    setCountry(e.target.value)
                }}
            />
            <input type="number" value={Xyear} placeholder='<year' onChange={(e) => {
                setXyear(e.target.value)
            }} />
            <input type="number" value={Yyear} placeholder='>year' onChange={(e) => {
                setYyear(e.target.value)
            }} />
            <table>
                <tr>
                    <th>Event ID</th>
                    <th>Year</th>
                    <th>Country</th>
                    <th>Citi</th>
                    <th>Attack Type</th>
                    <th>Motive</th>
                    <th>rowe</th>
                </tr>
                {data && data.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.eventid}</td>
                            <td>{item.iyear}</td>
                            <td>{item.country_txt}</td>
                            <td>{item.city}</td>
                            <td>{item.attacktype1_txt}</td>
                            <td>{item.motive}</td>
                            <td>{i}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default LoadData