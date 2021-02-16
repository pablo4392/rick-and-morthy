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
            const newUrl = res.data.results[0].residents[1]
            const response = axios(newUrl)
            response.then((newRes) => {  
                console.log(newRes)
                setName(newRes.data.name)
                setPicture(newRes.data.image)
                setStatus(newRes.data.status)
                setOrigin(newRes.data.origin.name)
                setEpisodes(newRes.data.episode.length)
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