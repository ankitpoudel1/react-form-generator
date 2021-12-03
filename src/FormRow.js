import React from 'react'
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';

export default function FormRow(props) {
    return (
       <div>
     
        {(props.fieldObj.type=="text") && <TextInput fieldObj={props.fieldObj} />}

        {(props.fieldObj.type=="number") && <NumberInput fieldObj={props.fieldObj} />}

        
        {(props.fieldObj.type=="textarea") && <TextAreaInput fieldObj={props.fieldObj} /> }    
       
       
        {(props.fieldObj.type=="select") && <SelectInput fieldObj={props.fieldObj} /> }    

     
        </div>
    );
}
