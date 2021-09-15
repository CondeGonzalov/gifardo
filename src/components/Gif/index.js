import { ImageListItemBar } from '@material-ui/core'
import './style.css'

export default function Gif({title, url}){
    return (
    //<ImageListItem className={imageList}>
        <>
            <img src={url} alt={title} />
            <ImageListItemBar title={title}/>
        </>
    //</ImageListItem >
    )
}