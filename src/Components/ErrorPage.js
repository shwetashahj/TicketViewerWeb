import React from 'react'

export const ErrorPage = ({ retryCallback }) => {
    return (
        <div className="container-fluid" style={{height:"100%"}}>
            <div style={{textAlign:"center", marginTop:"5em"}}>
                <div style={{fontSize: "2em", color:"gray"}}>Internal Server Error</div>
                <div style={{fontSize: "5em", color:"gray", fontWeight: "700"}}>500</div>
                <div style={{fontSize: "1.5em", color:"gray"}}>Sorry! We are experiencing an issue displaying this page.</div>
                <button className="btn btn-success fw-bold" style={{marginTop: "2em"}} onClick={() => retryCallback()}>Try Again</button>
            </div>
        </div>
    )
}
