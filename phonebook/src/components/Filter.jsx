import React from "react";

const Filter = (prop) => {
    return(
        <div>
            {prop.text}<input type="text" value={prop.newFilter} onChange={prop.filterHandler}/>
        </div>
    )
}

export default Filter;