import React from "react";

 
 function ReactSate(){
     const [isImportant,setIsImportant]=React.useState(true)
     
    function handleClick(){
        setIsImportant(prevvalue=>!prevvalue)
    }

    return(
        <div className="state">
        <h1 className="state--title">Do I feel like going out tonight</h1>
        <div className="state--value" onClick={handleClick}>
            <h1>{isImportant ? "Yes":"No"}</h1>
        </div>
    </div>
    );
}
export default ReactSate;