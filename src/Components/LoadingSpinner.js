import React from 'react'

export const LoadingSpinner = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", height:"500px"}}>
            <div style={{marginTop:"200px"}}>
                <div className="spinner-grow" style={{width:"3em", height:"3em", margin: "0 0.5em 0 0.5em"}} role="status">
                </div>
                <div className="spinner-grow" style={{width:"3em", height:"3em", margin: "0 0.5em 0 0.5em"}} role="status">
                </div>
                <div className="spinner-grow" style={{width:"3em", height:"3em", margin: "0 0.5em 0 0.5em"}} role="status">    
                </div>
            </div>
        </div>
    )
}
