import React from "react"
import "./Jumbo.css"

function Jumbo(){
    return (
        <div className="jumbotron"  style={{backgroundColor: 'GhostWhite'}}>
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
            <a className="btn btn-primary btn-lg text-light"  role="button">Call To Action!</a>
        </div>
    )
} 

export default Jumbo