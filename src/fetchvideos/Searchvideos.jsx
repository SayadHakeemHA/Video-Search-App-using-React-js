import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Searchvideos(props) {
  let {txt,setTxt} = props
  return (
    <div>
            <InputGroup className="m-auto mb-2 w-75 mt-3">
        <InputGroup.Text id="basic-addon1">Search videos</InputGroup.Text>
        <Form.Control
          placeholder="Search something....."
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={txt}
          onChange={(e)=>setTxt(e.target.value)}
        />
      </InputGroup>
  
      
    </div>
  )
}

export default Searchvideos