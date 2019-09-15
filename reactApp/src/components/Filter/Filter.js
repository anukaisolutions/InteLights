import React from 'react'

function Filter(props) {
    return (
        <>
        {
        props.filter &&
        <div data-tooltip="FILTERS" style={{border:'3px solid black',width:'160px', height:'200px',borderRadius:'5px',backgroundColor: '#f7d3d4', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>{props.filter.map((item) => { 
            return <div style={{fontSize: '15px',fontWeight:'500',color:'black', margin:'10px'}}>{item.name} : {item.range}</div>
        })}</div>
        }
        </>
    )
}

export default Filter
