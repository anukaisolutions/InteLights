import React from 'react'

function Light(props) {
    return (
        <>
        <div style={{fontSize:'14px',backgroundColor:'red', width:'44px', marginBottom:'4px', padding:'5px', color: 'white'}}>{props.text}</div>
        <div className="light-container">
          <div className="lights-common" style={{ backgroundColor: props.lightColor === 'red' ? props.lightColor : '#c54832', opacity: props.lightColor === 'red' ? 1 : 0.2, boxShadow: props.lightColor === 'red' ? '0px 0px 20px 5px red' : ''}}></div>
          <div className="lights-common" style={{ backgroundColor: props.lightColor === 'yellow' ? props.lightColor : '#f9ef19', opacity: props.lightColor === 'yellow' ? 1 : 0.2, boxShadow: props.lightColor === 'yellow' ? '0px 0px 20px 5px yellow' : ''}}></div>
          <div className="lights-common" style={{ backgroundColor: '#02df02', opacity: props.lightColor === 'green' ? 1 : 0.2, boxShadow: props.lightColor === 'green' ? '0px 0px 20px 5px green' : ''}}></div>
        </div>
        </>
    )
}

export default Light
