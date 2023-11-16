import React, { useState } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";
import './BoxList.css'

const BoxList = () => {
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    //  **  Adds a new Box to the BoxList  **
    const addBox = (id, color, height, width) => {
        setBoxes(boxes => [...boxes, { id, color, height, width }]);
    };

    //  **  Removes a Box from the BoxList  **
    const removeBox = (id) => {
        setBoxes(boxes.filter(box => box.id !== id));
    };

    //  **  Returns a BoxList and the BoxForm  **
    return (
        <>
            <h1>Build a Box</h1>
            <BoxForm addBox={addBox} />
            <div className="box-list">
                {boxes.map(({ id, color, height, width }) =>
                    <Box
                        id={id}
                        key={id}
                        color={color}
                        height={height}
                        width={width}
                        removeBox={removeBox}
                    />
                )}
            </div>
        </>
    )
}

export default BoxList;