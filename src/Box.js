import React from "react";
import './Box.css'

//  ** Individual Box Component  **
const Box = ({ id, color, height, width, removeBox }) => {
    return (
        <div className="box">
            <div
                id={id}
                style={{
                    backgroundColor: color,
                    height: height,
                    width: width,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
            </div>
            <button onClick={() => removeBox(id)} className="del-button">x</button>
        </div>
    )
}

export default Box;