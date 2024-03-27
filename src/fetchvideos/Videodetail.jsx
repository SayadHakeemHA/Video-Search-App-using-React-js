import React from 'react'

function Videodetail({videoId}) {
  return (
    <div>
      <iframe 
      src={`https://www.youtube.com/embed/${videoId}`} frameborder="0"
      style={{width:'100%',height:'600px'}}
      ></iframe>
    </div>
  )
}

export default Videodetail