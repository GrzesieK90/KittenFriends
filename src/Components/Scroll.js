import React from "react";

const Scroll = (props) => {
    return (
        <div className="inBg" style={{overflowY: 'scroll', border: '5px solid black', height:'78vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll