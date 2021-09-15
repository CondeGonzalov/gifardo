import { Link, useLocation } from 'wouter'
import React, {useState} from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const POPULAR_LINKS = ['Rick','Morty','Homer','Bart']
export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [ , pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
        
    }

    return (
        <>
            <h1>Buscador de GIFs</h1>
            <form onSubmit={handleSubmit} color="primary" variant="">
                <TextField onChange={handleChange} type="text" value={keyword} />
                <Button type="submit">Buscar</Button>
            </form>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >Links Populares</Typography>
                </AccordionSummary>
                <AccordionDetails>
                        <Typography>
                            {POPULAR_LINKS.map((popGif) => (
                                <div key={popGif} style={{listStyleType: "none", textAlign:"left"}}>
                                        <Link to={`/search/${popGif}`}>Links de {popGif}</Link>
                                </div>
                            ))}
                        </Typography>
                </AccordionDetails>
            </Accordion>
            
            
        </>

    )
}