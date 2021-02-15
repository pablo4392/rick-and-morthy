// import axios from 'axios'
import {useEffect, useState} from 'react'
import ResidentInfo from './ResidentInfo.js'

const ResidentContainer = () => {
    const[name, setName] = useState("");
    const[picture, setPicture] = useState("");
    const[status, setStatus] = useState("");
    const[origin, setOrigin] = useState("");
    const[episodes, setEpisodes] = useState("");

    useEffect(() => {
        
        setName()
        setPicture()
        setStatus()
        setOrigin()
        setEpisodes()
    })
    return(
        <ResidentInfo 
        picture={picture}
        name={name}
        status={status}
        origin={origin}
        episodes={episodes}
        />
    )
}

export default ResidentContainer