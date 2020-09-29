import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Header =()=>{
return(
    <>
        <div className="row ">
            <div className="col-12 first_row" style={{backgroundColor:"#ffc107",boxShadow: '-1px 1px 5px 0px rgba(0,0,0,0.75)'}}>
                <h2  style={{padding:'10px 20px',color:"white",fontWeight:"bold"}}>Google-Keep</h2>
            </div>
        </div>
    </>
)
};

export default Header