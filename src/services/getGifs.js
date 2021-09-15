const apiKey = 'sMc5qXKIxoMrr13uoNQ91GlkP0IRuCsM'

export default function getGifs({keyword = 'not found'} = {})  {
    const apiURL= `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=r&lang=en`

    return fetch(apiURL)
    .then(res => res.json())
    .then(res => {
      const {data = []} = res
      if(Array.isArray(data)){
        const gifs = data.map(image => {
            const {url} = image.images.downsized
            const {title, id} = image
            return { title, id, url }
        })
        return(gifs)
      }
    })
}
