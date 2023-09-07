import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
const api_key = 'DEMO_KEY'
const url =`https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
 const [photos, setPhotos] = useState()
  useEffect(()=>{

    function planetary(){

      axios.get(url)
      .then(res =>{
        setPhotos(res.data)
      }).catch(err => console.error(err))
    }
   // planetary()
   setPhotos(
    {

        "copyright": "Serge Brunier, Jean-François Bax, David Vernet",
        "date": "2023-09-01",
        "explanation": "In 1716, English astronomer Edmond Halley noted, \"This is but a little Patch, but it shows itself to the naked Eye, when the Sky is serene and the Moon absent.\" Of course, M13 is now less modestly recognized as the Great Globular Cluster in Hercules, one of the brightest globular star clusters in the northern sky. Sharp telescopic views like this one reveal the spectacular cluster's hundreds of thousands of stars. At a distance of 25,000 light-years, the cluster stars crowd into a region 150 lig...",
        "hdurl": "https://apod.nasa.gov/apod/image/2309/M13-totale-en-cours-crop8.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "The Great Globular Cluster in Hercules",
        "url": "https://apod.nasa.gov/apod/image/2309/M13-totale-en-cours-crop8_1024.jpg"
      }
)
  },[])
  if(!photos) return 'I am working on this'
  return (
    <section>
      <Card imageURL={photos.url} title={photos.title} description={photos.explanation} date={photos.date} authors={photos.copyright}/>
    </section>
  )
}

export default App
