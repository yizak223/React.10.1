import { useState } from "react";

function Names() {
    const [name, setName] = useState(
        [
            'yizak',
            'moshenko',
            'mos',
            'david'
        ]
        );
         const addNames = () => {
            // name.push('roni')
            // console.log(name);
            setName([...name, "another name"]);
         }
        
        return (
            <div>
                <button onClick={addNames}>sadvfsvf</button>
                {name.map((name,i)=>{
                    return (
                        <div key={i}>
                            <h1>{name}</h1>
                        </div>
                    )
                })}
            </div>
            )
}

export default Names