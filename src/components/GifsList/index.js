import { ImageList, ImageListItem } from '@material-ui/core'
//import { makeStyles } from '@material-ui/core/styles';
import Gif from '../Gif'
import './style.css'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     icon: {
//       color: 'rgba(255, 255, 255, 0.54)',
//     },
//   }));
//   className={classes.imageList}
//   const classes = useStyles();

    export default function GifsList ({gifs}){
    
    return <ImageList cols={3} >
        {
          gifs.map( gif => 
             <ImageListItem key={gif.id}>
                <Gif key={gif.id} {...gif}/>
               </ImageListItem>
          )
        }
    </ImageList>
}


 