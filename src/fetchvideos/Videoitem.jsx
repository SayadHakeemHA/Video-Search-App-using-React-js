import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function Videoitem({video,setVideoId}) {
  return (
    <ListGroup.Item>
 <Card className='m-auto my-5' style={{ width: '18rem' }} 
 onClick={()=>setVideoId(video?.id?.videoId)}
 >
      <Card.Img variant="top" src={video?.snippet?.thumbnails?.medium?.url} />
      <Card.Body>
        <Card.Title>{video?.snippet?.title}</Card.Title>
      </Card.Body>
    </Card>
    </ListGroup.Item>
  )
}

export default Videoitem