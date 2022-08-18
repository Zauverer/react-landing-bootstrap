import React from "react"
import "./CardTitle.css"


function CardTitle() {
    return ( 
        <div className="card text-center test">
            
                <img src="http://placehold.co/500x325" className="card-img-top" alt=""></img>
      
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>

            </div>
            <div className="card-footer text-muted">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
 
    );
}


export default  CardTitle
