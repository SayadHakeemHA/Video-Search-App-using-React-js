import React, { useState } from 'react'
import Searchvideos from './Searchvideos'
import Videolist from './Videolist'
import Videodetail from './Videodetail'


function Main() {
let [txt,setTxt] = useState('')
let [debounce,setDebounce]= useState(txt)
let [videoData,setVideoData]= useState([])
let [videoId,setVideoId]=useState('')

  return (
    <div>
      <Searchvideos txt={txt} setTxt={setTxt}/>
<div className="row container m-auto">
{
  videoId &&   <div className="col-sm-8 col-12 ">
  <Videodetail videoId={videoId}/>
  </div>
}
{
  videoData &&    <div className="col-sm-4 col-12 m-auto">
  <Videolist txt={txt} 
    debounce={debounce} 
    setDebounce={setDebounce}
    setVideoData={setVideoData}
    videoData={videoData}
    setVideoId={setVideoId}
    />
  </div> 
}
</div>
    </div>
  )
}

export default Main