import React, {useEffect, useState} from 'react'
import getGifs from '../../services/getGifs'
import Loading from '../../Loading'
import GifsList from "../../components/GifsList";

export default function SearchResult({params}){
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    const keyword = params.keyword

    useEffect(() => {
        setLoading(true)
        getGifs({keyword: keyword}).then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword])

    return(
        <div>
            {loading
                ? <Loading />
                : <GifsList gifs={gifs}/>
            }
        </div>
    )
}