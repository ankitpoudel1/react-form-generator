import React from 'react'

export default function SelectInput(props) {

    let optionsArray = [];

    if (props.fieldObj.options){
         optionsArray = props.fieldObj.options.split(',');
    }
    return (
        <div className="mb-2">
            
            <label className="form-label text-muted"> {props.fieldObj.name} </label>

                <select className="form-control">
                  <option value=""></option>
                  {optionsArray.length>0 && optionsArray.map((option,index)=>
                    <option key={index} value={option}> {option} </option>
                  )}
                </select>   

        </div>
    )
}
