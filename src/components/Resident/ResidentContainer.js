import axios from 'axios'
import API from '../API.js'
import {useEffect, useState} from 'react'
import ResidentInfo from './ResidentInfo.js'

const ResidentContainer = () => {
    const[name, setName] = useState("");
    const[picture, setPicture] = useState("");
    const[status, setStatus] = useState("");
    const[origin, setOrigin] = useState("");
    const[episodes, setEpisodes] = useState("");

    useEffect(() => {
        API().then((res) => {
            const newUrl = res.data.results[10].residents[0]
            const response = axios(newUrl)
            response.then((secondRes) => {  
                setName(secondRes.name)
                setPicture(secondRes.image)
                setStatus(secondRes.status)
                setOrigin(secondRes.origin.name)
                setEpisodes(secondRes.episode.length)
            })
        })
    }, [])

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