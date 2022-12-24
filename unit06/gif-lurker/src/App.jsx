import { useState } from "react";

export const GifApp = ()=> {

    const [cats,setCats]=useState(["anime", "scifi"])
   
    const addRow=()=>{
        console.log("adding");
        let newCat="fantasy";
        setCats([...cats,newCat])
    }

    return ( 
        <>
            <h1>GifLurker</h1>

            <button onClick={addRow}>Add</button>
            <ol>
                {cats.map( (c,index)=>
                    (
                        <li key={index}>{c}</li>
                    )
                )}
        </ol>
        </>
    );
}

