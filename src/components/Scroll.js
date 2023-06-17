import React from 'react'

function Scroll(props) {
  return (
    <div style={{overflow: 'scroll', border:'2px solid black', height:'800px'}}>
    {props.children}
    </div>
  )
}

export default Scroll