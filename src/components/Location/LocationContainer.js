import './Location.css'
import API from '../API.js'
import React, {useState, useEffect} from 'react'
import LocationInfo from './LocationInfo.js'

const LocationContainer = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [dimension, setDimension] = useState("")
    const [residents, setResidents] = useState("")

    useEffect(() => {        
        API().then((res) => {
            console.log(res.data)
            setName(res.data.results[10].name);
            setType(res.data.results[10].type);
            setDimension(res.data.results[10].dimension);
            setResidents(res.data.results[10].residents.length)
        })
    }, [])

    return(
        <LocationInfo 
        name={name}
        type={type}
        dimension={dimension}
        residents={residents}
        />
    )
}

export default LocationContainer