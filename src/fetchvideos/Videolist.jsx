import axios from 'axios'
import React, { useEffect } from 'react'
import Videoitem from './Videoitem'
import ListGroup from 'react-bootstrap/ListGroup';

function Videolist(props) {
let {txt,debounce,setDebounce,setVideoData,videoData,setVideoId} = props
let access_key='AIzaSyBqaEc2r-F_CGdJ1nv-1DlaSSY7iLQtESI'

useEffect(()=>{
let timerId=setTimeout(() => {
  setDebounce(txt)
}, 1000);

return ()=>{
  clearTimeout(timerId)
}

},[txt])

useEffect(()=>{
let getVideos = async()=>{
await axios
.get(`https://www.googleapis.com/youtube/v3/search`,{
  params:{
    part:'snippet',
    maxResults:10,
    q:debounce,
    key:access_key
  }
})
.then(response=>setVideoData(response?.data?.items))
.catch(err=>console.log(err))
}

if(debounce){
  getVideos()
}
},[debounce])

  return (
    <div>
      <ListGroup>
      {
videoData && videoData.map(video=>(
  <Videoitem 
  key={video?.id?.videoId} 
  video={video} 
  setVideoId={setVideoId}/>
))
      }
      </ListGroup>
   
    </div>
  )
}

export default Videolist