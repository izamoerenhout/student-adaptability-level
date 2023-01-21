import { useState } from "react";

function SelectOption({ title, options, update }) {
    
    return ( <div className="col-12 col-md-6"> 

        <div>{ title }</div> 

        { options.map(option => ( 
            <div key={option.value}>
                <input 
                    type="radio" 
                    value={option.value} 
                    onChange={() => update(option.value)} /> 
                
                <label>{option.label}</label> 
            </div>
        )) }

    </div> )
}

export default SelectOption;