import React from 'react'

function Area(props) {
    return (
        <>
        {
        props.region &&
        <div data-tooltip={'Value : '+props.region.value} style={{textTransform:'uppercase',width:'70px', height:'70px',borderRadius:'35px',boxShadow: `0px 0px 20px 10px ${props.region && props.region.color}`, backgroundColor: props.region && props.region.color, display:'flex', justifyContent:'center', alignItems:'center'}}>{props.region && props.region.name}</div>
        }
        </>
    )
}

export default Area
